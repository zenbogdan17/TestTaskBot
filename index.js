const TelegramApi = require('node-telegram-bot-api');
const path = require('path');

const {
  startedTest,
  speakerInformation,
  subscribeСlosedСhannel,
  textIntroductoryAudio,
  yesIWantSame,
  participantProfileSkip,
  thanksForAnswer,
  infoFromRecording12_00,
} = require('./constants/text');
const {
  startOptions,
  claimBonus,
  aboutСlosedСhannelOptions,
  subscribeСlosedСhannelOptions,
  introductoryAudioOptions,
  participantProfileOptions,
  thanksForAnswerOptions,
} = require('./options/options');
const {
  scheduleMessagesForFirstDay,
  scheduleMessagesForSecondDay,
  offerAndTransferForSale,
} = require('./ScheduledMessage');

const token = '6952128082:AAHw4KG4cVU_4spq4sEYzUtI3YjlKDnDRwQ';

const bot = new TelegramApi(token, { polling: true });

const start = () => {
  bot.on('message', async (msg) => {
    try {
      const text = msg.text;
      const chatId = msg.chat.id;

      if (text === '/start') {
        const videoPath = path.join(__dirname, 'constants', 'video', '1.mp4');

        await bot.sendVideo(chatId, videoPath);
        await bot.sendMessage(chatId, startedTest, startOptions);

        scheduleMessagesForFirstDay(bot, chatId);
        // scheduleMessagesForSecondDay(bot, chatId);

        setTimeout(async () => {
          const photoPath = path.join(
            __dirname,
            'constants',
            'photo',
            'accessToPrivateChannel.png'
          );
          await bot.sendPhoto(chatId, photoPath, aboutСlosedСhannelOptions);
        }, 2 * 60 * 1000);

        setTimeout(async () => {
          const audioPath = path.join(
            __dirname,
            'constants',
            'audio',
            'аудио_1.ogg'
          );
          await bot.sendAudio(chatId, audioPath);

          const photos = [
            path.join(__dirname, 'constants', 'photo', 'Group1.png'),
            path.join(__dirname, 'constants', 'photo', 'Group2.png'),
            path.join(__dirname, 'constants', 'photo', 'Group3.png'),
            path.join(__dirname, 'constants', 'photo', 'Group4.png'),
            path.join(__dirname, 'constants', 'photo', 'Group5.png'),
          ];
          const media = photos.map((photoPath) => ({
            type: 'photo',
            media: photoPath,
          }));

          await bot.sendMediaGroup(chatId, media);

          return bot.sendMessage(
            chatId,
            textIntroductoryAudio,
            introductoryAudioOptions
          );
        }, 4 * 60 * 1000);

        setTimeout(async () => {
          const photoPath = path.join(
            __dirname,
            'constants',
            'photo',
            'participantProfile.png'
          );
          await bot.sendPhoto(chatId, photoPath, participantProfileOptions);
        }, 6 * 60 * 1000);

        return;
      }

      if (text) {
        await bot.sendMessage(chatId, thanksForAnswer, thanksForAnswerOptions);
      }
    } catch (error) {
      console.error('Error processing message:', error);
    }
  });

  bot.on('callback_query', async (msg) => {
    const data = msg.data;
    const chatId = msg.message.chat.id;

    if (data === 'speaker_information') {
      return bot.sendMessage(chatId, speakerInformation, claimBonus);
    }

    if (data === 'claim_bonus') {
      const filePath = path.join(
        __dirname,
        path.join('constants', 'file'),
        'bonus.pdf'
      );

      return bot.sendDocument(chatId, filePath);
    }

    if (data === 'open_access') {
      return bot.sendMessage(
        chatId,
        subscribeСlosedСhannel,
        subscribeСlosedСhannelOptions
      );
    }

    if (data === 'yes_i_want_same') {
      return bot.sendMessage(chatId, yesIWantSame);
    }

    if (data === 'participant_profile_ok') {
      await bot.sendMessage(chatId, 'Что тебе еще интересно узнать про нфт?');
      return bot.sendMessage(chatId, 'Напиши👇');
    }
    if (data === 'participant_profile_skip') {
      return bot.sendMessage(chatId, participantProfileSkip);
    }

    if (data === 'wedinar_day_12:00_yes') {
      return bot.sendMessage(
        chatId,
        'Круто, что у меня такая осознанная аудитория! Обещаю, вечер будет продуктивный 😉'
      );
    }
    if (data === 'wedinar_day_12:00_recording') {
      return bot.sendMessage(chatId, infoFromRecording12_00);
    }

    if (data === 'join_webinar') {
      offerAndTransferForSale(bot, chatId);
    }
  });
};

start();
