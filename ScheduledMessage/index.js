const cron = require('node-cron');
const path = require('path');
const {
  wedinarDay12_00,
  wedinarDay15_00,
  oneHourLeft,
  secondDay10_00,
  caseIgor,
  oneHourLeftSecondDay,
  brokeSalesDepartment,
} = require('../constants/text');
const {
  wedinarDay12_00Options,
  tenMinuteLeftOptions,
  broadcastStartedOptions,
  fifteenMinutesBroadcastOptions,
  oneHourBroadcastOptions,
  hourTwentyBroadcastOption,
  joinedWebinarOptions,
  tenMinuteLeftSecondDayOptions,
  broadcastStartedSecondDayOptions,
  brokeSalesDepartmentOptions,
  priceRiseOptions,
  freeСollectionOptions,
} = require('../options/options');

const scheduleMessagesForFirstDay = (bot, chatId) => {
  // Планирование отправки сообщения в 10:00
  cron.schedule(
    '00 10 * * *',
    async () => {
      const videoPath = path.join(__dirname, 'constants', 'video', '2.mp4');
      await bot.sendVideo(bot, chatId, videoPath);
    },
    {
      timezone: 'Europe/Kiev',
    }
  );

  // Планирование отправки сообщения в 12:00
  cron.schedule(
    '00 12 * * *',
    async () => {
      await bot.sendMessage(chatId, wedinarDay12_00, wedinarDay12_00Options);
    },
    {
      timezone: 'Europe/Kiev',
    }
  );

  // Планирование отправки сообщения в 15:00
  cron.schedule(
    '00 15 * * *',
    async () => {
      const videoPath = path.join(__dirname, 'constants', 'video', '3.mp4');

      await bot.sendVideo(chatId, videoPath);
      await bot.sendMessage(chatId, wedinarDay15_00);
    },
    {
      timezone: 'Europe/Kiev',
    }
  );

  // Планирование отправки сообщения в 18:00
  cron.schedule(
    '00 18 * * *',
    async () => {
      const photoPath = path.join(
        __dirname,
        '../',
        'constants',
        'photo',
        'OneHourLeft.png'
      );

      await bot.sendPhoto(chatId, photoPath, { caption: oneHourLeft });
    },
    {
      timezone: 'Europe/Kiev',
    }
  );

  // Планирование отправки сообщения в 18:50
  cron.schedule(
    '50 18 * * *',

    async () => {
      const photoPath = path.join(
        __dirname,
        '../',
        'constants',
        'photo',
        'TenMinutesLeft.png'
      );

      await bot.sendPhoto(chatId, photoPath, tenMinuteLeftOptions);
    },
    {
      timezone: 'Europe/Kiev',
    }
  );

  // Планирование отправки сообщения в 19:00
  cron.schedule(
    '00 19 * * *',
    async () => {
      const photoPath = path.join(
        __dirname,
        '../',
        'constants',
        'photo',
        'Screenshot_1.png'
      );

      await bot.sendPhoto(chatId, photoPath, broadcastStartedOptions);
    },
    {
      timezone: 'Europe/Kiev',
    }
  );

  // Планирование отправки сообщения в 19:15
  cron.schedule(
    '15 19 * * *',

    async () => {
      const photoPath = path.join(
        __dirname,
        '../',
        'constants',
        'photo',
        'Screenshot_2.png'
      );

      await bot.sendPhoto(chatId, photoPath, fifteenMinutesBroadcastOptions);
    },
    {
      timezone: 'Europe/Kiev',
    }
  );

  // Планирование отправки сообщения в 20:00
  cron.schedule(
    '00 20 * * *',

    async () => {
      const photoPath = path.join(
        __dirname,
        '../',
        'constants',
        'photo',
        'Screenshot_3.png'
      );

      await bot.sendPhoto(chatId, photoPath, oneHourBroadcastOptions);
    },
    {
      timezone: 'Europe/Kiev',
    }
  );

  // Планирование отправки сообщения в 20:20
  cron.schedule(
    '20 20 * * *',

    async () => {
      const photoPath = path.join(
        __dirname,
        '../',
        'constants',
        'photo',
        'Screenshot_4.png'
      );

      await bot.sendPhoto(chatId, photoPath, hourTwentyBroadcastOption);
    },
    {
      timezone: 'Europe/Kiev',
    }
  );
};

const scheduleMessagesForSecondDay = (bot, chatId) => {
  // Планирование отправки сообщения в 10:00
  cron.schedule(
    '00 10 * * *',
    async () => {
      await bot.sendMessage(chatId, secondDay10_00);
    },
    {
      timezone: 'Europe/Kiev',
    }
  );

  // Планирование отправки сообщения в 14:00
  cron.schedule(
    '00 14 * * *',

    async () => {
      const audioPath = path.join(
        __dirname,
        '../',
        'constants',
        'audio',
        'аудио_2.ogg'
      );
      await bot.sendAudio(chatId, audioPath);

      const photoPath = path.join(
        __dirname,
        '../',
        'constants',
        'photo',
        'caseIgor.png'
      );

      await bot.sendPhoto(chatId, photoPath);
      await bot.sendMessage(chatId, caseIgor);
    },
    {
      timezone: 'Europe/Kiev',
    }
  );

  // Планирование отправки сообщения в 18:00
  cron.schedule(
    '00 18 * * *',
    async () => {
      const photoPath = path.join(
        __dirname,
        '../',
        'constants',
        'photo',
        'OneHourLeft.png'
      );

      await bot.sendPhoto(chatId, photoPath, { caption: oneHourLeftSecondDay });
    },
    {
      timezone: 'Europe/Kiev',
    }
  );
  // Планирование отправки сообщения в 18:50
  cron.schedule(
    '50 18 * * *',

    async () => {
      const photoPath = path.join(
        __dirname,
        '../',
        'constants',
        'photo',
        'TenMinutesLeft.png'
      );

      await bot.sendPhoto(chatId, photoPath, tenMinuteLeftSecondDayOptions);
    },
    {
      timezone: 'Europe/Kiev',
    }
  );
  // Планирование отправки сообщения в 19:00
  cron.schedule(
    '00 19 * * *',

    async () => {
      const photoPath = path.join(
        __dirname,
        '../',
        'constants',
        'photo',
        'Screenshot_1.png'
      );

      await bot.sendPhoto(chatId, photoPath, broadcastStartedSecondDayOptions);
    },
    {
      timezone: 'Europe/Kiev',
    }
  );
  // Планирование отправки сообщения в 19:15
  cron.schedule(
    '15 19 * * *',

    async () => {
      const photoPath = path.join(
        __dirname,
        '../',
        'constants',
        'photo',
        'Screenshot_2.png'
      );

      await bot.sendPhoto(chatId, photoPath, fifteenMinutesBroadcastOptions);
    },
    {
      timezone: 'Europe/Kiev',
    }
  );

  // Планирование отправки сообщения в 20:00
  cron.schedule(
    '00 20 * * *',

    async () => {
      const photoPath = path.join(
        __dirname,
        '../',
        'constants',
        'photo',
        'Screenshot_3.png'
      );

      await bot.sendPhoto(chatId, photoPath, oneHourBroadcastOptions);
    },
    {
      timezone: 'Europe/Kiev',
    }
  );

  // Планирование отправки сообщения в 20:20
  cron.schedule(
    '20 20 * * *',

    async () => {
      const photoPath = path.join(
        __dirname,
        '../',
        'constants',
        'photo',
        'Screenshot_4.png'
      );

      await bot.sendPhoto(chatId, photoPath, hourTwentyBroadcastOption);
    },
    {
      timezone: 'Europe/Kiev',
    }
  );

  // Планирование отправки сообщения в 21:42
  cron.schedule(
    '42 21 * * *',

    async () => {
      const photoPath = path.join(
        __dirname,
        '../',
        'constants',
        'photo',
        'discountsOnSite.png'
      );

      await bot.sendPhoto(chatId, photoPath, joinedWebinarOptions);
    },
    {
      timezone: 'Europe/Kiev',
    }
  );
};

const offerAndTransferForSale = (bot, chatId) => {
  // Планирование отправки сообщения в 21:42
  cron.schedule(
    '42 21 * * *',

    async () => {
      const photoPath = path.join(
        __dirname,
        '../',
        'constants',
        'photo',
        'discountsOnSite.png'
      );

      await bot.sendPhoto(chatId, photoPath, joinedWebinarOptions);
    },
    {
      timezone: 'Europe/Kiev',
    }
  );

  // Планирование отправки сообщения в 12:00
  cron.schedule(
    '00 12 * * *',

    async () => {
      const video4Path = path.join(
        __dirname,
        '../',
        'constants',
        'video',
        '4.mp4'
      );
      const video5Path = path.join(
        __dirname,
        '../',
        'constants',
        'video',
        '5.mp4'
      );
      const video6Path = path.join(
        __dirname,
        '../',
        'constants',
        'video',
        '6.mp4'
      );
      const video7Path = path.join(
        __dirname,
        '../',
        'constants',
        'video',
        '7.mp4'
      );

      await bot.sendVideo(chatId, video4Path);
      await bot.sendVideo(chatId, video5Path);
      await bot.sendVideo(chatId, video6Path);
      await bot.sendVideo(chatId, video7Path);

      await bot.sendMessage(
        chatId,
        brokeSalesDepartment,
        brokeSalesDepartmentOptions
      );
    },
    {
      timezone: 'Europe/Kiev',
    }
  );

  // Планирование отправки сообщения в 14:00
  cron.schedule(
    '00 14 * * *',

    async () => {
      const photoPath = path.join(
        __dirname,
        '../',
        'constants',
        'photo',
        'priceRise.png'
      );

      await bot.sendPhoto(chatId, photoPath, priceRiseOptions);
    },
    {
      timezone: 'Europe/Kiev',
    }
  );

  // Планирование отправки сообщения в 21:45
  cron.schedule(
    '45 21 * * *',

    async () => {
      await bot.sendMessage(chatId, freeСollectionOptions);
    },
    {
      timezone: 'Europe/Kiev',
    }
  );
};

module.exports = {
  scheduleMessagesForFirstDay,
  scheduleMessagesForSecondDay,
  offerAndTransferForSale,
};
