const {
  aboutСlosedСhannel,
  participantProfile,
  tenMinuteLeft,
  broadcastStartedText,
  fifteenMinutesBroadcastText,
  oneHourBroadcastText,
  hourTwentyBroadcastText,
  joinedWebinarText,
  tenMinuteLeftSecondDay,
  broadcastStartedSecondDayText,
  priceRiseText,
  freeСollectionText,
} = require('../constants/text');

const startOptions = {
  reply_markup: JSON.stringify({
    inline_keyboard: [
      [{ text: 'Узнать о спикере', callback_data: 'speaker_information' }],
      [{ text: 'Забрать бонус', callback_data: 'claim_bonus' }],
    ],
  }),
};

const claimBonus = {
  reply_markup: JSON.stringify({
    inline_keyboard: [
      [{ text: 'Забрать бонус', callback_data: 'claim_bonus' }],
    ],
  }),
};

const aboutСlosedСhannelOptions = {
  caption: aboutСlosedСhannel,
  reply_markup: JSON.stringify({
    inline_keyboard: [
      [{ text: 'Открыть доступ 🔐', callback_data: 'open_access' }],
    ],
  }),
};

const subscribeСlosedСhannelOptions = {
  reply_markup: JSON.stringify({
    inline_keyboard: [
      [
        {
          text: 'Подписаться',
          url: 'https://t.me/+FbJp0w3_dHMwYzQy',
        },
      ],
    ],
  }),
};

const introductoryAudioOptions = {
  reply_markup: JSON.stringify({
    inline_keyboard: [
      [{ text: 'Да, хочу так же', callback_data: 'yes_i_want_same' }],
    ],
  }),
};

const participantProfileOptions = {
  caption: participantProfile,
  reply_markup: JSON.stringify({
    inline_keyboard: [
      [{ text: 'Давай', callback_data: 'participant_profile_ok' }],
      [{ text: 'Пропустить', callback_data: 'participant_profile_skip' }],
    ],
  }),
};

const thanksForAnswerOptions = {
  caption: participantProfile,
  reply_markup: JSON.stringify({
    inline_keyboard: [
      [
        {
          text: 'Открыть бонус',
          url: 'https://www.youtube.com/watch?v=wiDy6uPqcvw&ab_channel=%D0%92%D0%BB%D0%B0%D0%B4%D0%AF%D1%81%D1%8C%D0%BA%D0%BENFT%7CCrypto%7CDigital',
        },
      ],
    ],
  }),
};

const wedinarDay12_00Options = {
  caption: participantProfile,
  reply_markup: JSON.stringify({
    inline_keyboard: [
      [{ text: 'Дааааа', callback_data: 'wedinar_day_12:00_yes' }],
      [{ text: 'Будет запись?', callback_data: 'wedinar_day_12:00_recording' }],
    ],
  }),
};

const tenMinuteLeftOptions = {
  caption: tenMinuteLeft,
  reply_markup: JSON.stringify({
    inline_keyboard: [
      [{ text: 'Подключиться', callback_data: 'join_webinar' }],
    ],
  }),
};

const broadcastStartedOptions = {
  caption: broadcastStartedText,
  reply_markup: JSON.stringify({
    inline_keyboard: [
      [{ text: 'Подключиться', callback_data: 'join_webinar' }],
    ],
  }),
};

const fifteenMinutesBroadcastOptions = {
  caption: fifteenMinutesBroadcastText,
  reply_markup: JSON.stringify({
    inline_keyboard: [
      [{ text: 'Подключиться', callback_data: 'join_webinar' }],
    ],
  }),
};

const oneHourBroadcastOptions = {
  caption: oneHourBroadcastText,
  reply_markup: JSON.stringify({
    inline_keyboard: [
      [{ text: 'Подключиться', callback_data: 'join_webinar' }],
    ],
  }),
};

const hourTwentyBroadcastOption = {
  caption: hourTwentyBroadcastText,
  reply_markup: JSON.stringify({
    inline_keyboard: [
      [{ text: 'Подключиться', callback_data: 'join_webinar' }],
    ],
  }),
};

const joinedWebinarOptions = {
  caption: joinedWebinarText,
  reply_markup: JSON.stringify({
    inline_keyboard: [
      [{ text: 'ЗАБРОНИРОВАТЬ МЕСТО', callback_data: 'book_your_place' }],
      [{ text: 'Подключиться', callback_data: 'write_manager' }],
    ],
  }),
};

const tenMinuteLeftSecondDayOptions = {
  caption: tenMinuteLeftSecondDay,
  reply_markup: JSON.stringify({
    inline_keyboard: [
      [{ text: 'Подключиться', callback_data: 'join_webinar' }],
    ],
  }),
};

const broadcastStartedSecondDayOptions = {
  caption: broadcastStartedSecondDayText,
  reply_markup: JSON.stringify({
    inline_keyboard: [
      [{ text: 'Подключиться', callback_data: 'join_webinar' }],
    ],
  }),
};

const brokeSalesDepartmentOptions = {
  reply_markup: JSON.stringify({
    inline_keyboard: [
      [{ text: 'Задать вопрос', callback_data: '' }],
      [{ text: 'Забрать место на курсе', callback_data: '' }],
    ],
  }),
};

const priceRiseOptions = {
  caption: priceRiseText,
  reply_markup: JSON.stringify({
    inline_keyboard: [
      [{ text: 'ЗАБРОНИРОВАТЬ МЕСТО', callback_data: '' }],
      [{ text: 'НАПИСАТЬ МЕНЕДЖЕРУ', callback_data: '' }],
    ],
  }),
};

const freeСollectionOptions = {
  caption: freeСollectionText,
  reply_markup: JSON.stringify({
    inline_keyboard: [
      [{ text: 'ЗАБРОНИРОВАТЬ МЕСТО', callback_data: '' }],
      [{ text: 'НАПИСАТЬ МЕНЕДЖЕРУ', callback_data: '' }],
    ],
  }),
};

module.exports = {
  startOptions,
  claimBonus,
  aboutСlosedСhannelOptions,
  subscribeСlosedСhannelOptions,
  introductoryAudioOptions,
  participantProfileOptions,
  thanksForAnswerOptions,
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
};
