// let lesson3_sentences_indiceMax = 42;
let lesson3_sentences_listaCompletaDeDatos = '[' +
    '{"id":1,"word":"你在哪里？","pinyin":"nǐ zài nǎlǐ","meaning":"where are you?"},' +
    '{"id":2,"word":"我在美国。","pinyin":"wǒ zài měiguó","meaning":"I\'m in the USA."},' +
    '{"id":3,"word":"现在你在哪里？","pinyin":"xiànzài nǐ zài nǎlǐ?","meaning":"Where are you now?"},' +
    '{"id":4,"word":"现在我在家。","pinyin":"xiànzài wǒ zàijiā.","meaning":"I am at home now"},' +
    '{"id":5,"word":"你去哪里？","pinyin":"nǐ qù nǎlǐ","meaning":"Where are you going now?"},' +
    '{"id":6,"word":"昨天你去了哪里？","pinyin":"Zuótiān nǐ qùle nǎlǐ","meaning":"Where did you go yesterday?"},' +
    '{"id":7,"word":"昨天我去了咖啡店。","pinyin":"zuótiān wǒ qùle kāfēi diàn","meaning":"Yesterday, I went to the coffee shop."},' +
    '{"id":8,"word":"明天你要去哪里？","pinyin":"míngtiān nǐ yào qù nǎlǐ","meaning":"Where are you going to go tomorrow?"},' +
    '{"id":9,"word":"明天我要去饭店。","pinyin":"míngtiān wǒ yào qù fàndiàn","meaning":"I\'m going to the restaurant tomorrow."},' +
    '{"id":10,"word":"昨天你在哪里？","pinyin":"zuótiān nǐ zài nǎlǐ","meaning":"Where were you yesterday?"},' +
    '{"id":11,"word":"明天晚上你在哪里？","pinyin":"míngtiān wǎnshàng nǐ zài nǎlǐ","meaning":"Where will you be tomorrow evening?"},' +
    '{"id":12,"word":"你家在哪里？","pinyin":"nǐ jiā zài nǎlǐ","meaning":"Where is your house?"},' +
    '{"id":13,"word":"今天晚上你要去哪里？","pinyin":"jīntiān wǎnshàng nǐ yào qù nǎlǐ","meaning":"Where are you going tonight?"},' +
    '{"id":14,"word":"明天你要去公司吗？","pinyin":"míngtiān nǐ yào qù gōngsī ma","meaning":"Are you going to the office tomorrow?"},' +
    '{"id":15,"word":"昨天你去了哪里？","pinyin":"zuótiān nǐ qùle nǎlǐ","meaning":"Where did you go yesterday?"},' +
    '{"id":16,"word":"昨天你去了商场吗？","pinyin":"zuótiān nǐ qùle shāngchǎng ma","meaning":"Did you go to the mall yesterday?"},' +
    '{"id":17,"word":"现在你高兴吗？","pinyin":"xiànzài nǐ gāoxìng ma","meaning":"Are you happy right now?"},' +
    '{"id":18,"word":"去公司你高兴吗？","pinyin":"qù gōngsīnǐ gāoxìng ma","meaning":"Are you happy when you go to the office?"},' +
    '{"id":19,"word":"你公司叫什么名字？","pinyin":"nǐ gōngsī jiào shénme míngzì","meaning":"What is your company called?"},' +
    '{"id":20,"word":"那是什么公司？","pinyin":"nà shì shénme gōngsī","meaning":"What company is that?"},' +
    '{"id":21,"word":"这里是学校吗？","pinyin":"zhèlǐ shì xuéxiào ma","meaning":"Is this a school? (here)"},' +
    '{"id":22,"word":"现在这里是早上吗？那里呢？","pinyin":"xiànzài zhèlǐ shì zǎoshang ma nàlǐ ne","meaning":"It\'s morning here right now, right? What about that place (your place)?"},' +
    '{"id":23,"word":"现在我在家。","pinyin":"xiànzài wǒ zàijiā","meaning":"I\'m at home right now."},' +
    '{"id":24,"word":"现在我在公司。","pinyin":"xiànzài wǒ zài gōngsī","meaning":"I\'m at the office right now."},' +
    '{"id":25,"word":"我家在美国。","pinyin":"wǒjiā zài měiguó","meaning":"My house is in the USA."},' +
    '{"id":26,"word":"今天晚上我要去饭店。","pinyin":"jīntiān wǎnshàng wǒ yào qù fàndiàn","meaning":"I\'m going to go to a restaurant tonight."},' +
    '{"id":27,"word":"今天晚上我在家。","pinyin":"jīntiān wǎnshàng wǒ zàijiā","meaning":"I\'m staying home tonight."},' +
    '{"id":28,"word":"明天我要去公司。","pinyin":"míngtiān wǒ yào qù gōngsī","meaning":"I\'m going to the office tomorrow."},' +
    '{"id":29,"word":"明天我不要去公司。","pinyin":"míngtiān wǒ bùyào qù gōngsī","meaning":"I\'m not going to the office tomorrow."},' +
    '{"id":30,"word":"昨天我去了学校。","pinyin":"zuótiān wǒ qùle xuéxiào","meaning":"Yesterday I went to school."},' +
    '{"id":31,"word":"昨天我去了商场。","pinyin":"zuótiān wǒ qùle shāngchǎng","meaning":"Yesterday I went to the mall."},' +
    '{"id":32,"word":"昨天我没有去商场。","pinyin":"zuótiān wǒ méiyǒu qù shāngchǎng","meaning":"Yesterday I didn\'t go to the mall."},' +
    '{"id":33,"word":"现在我很高兴。","pinyin":"xiànzài wǒ hěn gāoxìng","meaning":"Right now, I\'m happy."},' +
    '{"id":34,"word":"现在我不高兴。","pinyin":"xiànzài wǒ bù gāoxìng","meaning":"Right now, I\'m not happy."},' +
    '{"id":35,"word":"去公司，我很高兴。","pinyin":"qù gōngsī, wǒ hěn gāoxìng","meaning":"I\'m happy going to the office."},' +
    '{"id":36,"word":"去公司，我不高兴。","pinyin":"qù gōngsī, wǒ bù gāoxìng","meaning":"I\'m not happy going to the office."},' +
    '{"id":37,"word":"我公司叫苹果公司。","pinyin":"wǒ gōngsī jiào píngguǒ gōngsī","meaning":"My company is called Apple Company."},' +
    '{"id":38,"word":"那是手机公司。","pinyin":"nà shì shǒujī gōngsī nàlǐ","meaning":"That is a cellphone company."},' +
    '{"id":39,"word":"那里不是学校，那里是你家。","pinyin":"bùshì xuéxiào, nàlǐ shì nǐ jiā","meaning":"That is not a school, that is your house."},' +
    '{"id":40,"word":"现在那里不是早上。","pinyin":"xiànzài nàlǐ bùshì zǎoshang","meaning":"Right now, it\'s not morning at your place."},' +
    '{"id":41,"word":"现在这里是早上。","pinyin":"xiànzài zhèlǐ shì zǎoshang","meaning":"Right now, it\'s morning here."},' +
    '{"id":42,"word":"现在这里是晚上。","pinyin":"xiànzài zhèlǐ shì wǎnshàng","meaning":"Right now, it\'s the evening here."}' +
    ']';