let listaCompletaDeDatos = [
    { "id": 0, "word": "你有几辆车？", "pinyin": "Nǐ yǒu jǐ liàng chē?", "meaning": "how many cars do you have?" },
    { "id": 1, "word": "我有一辆车", "pinyin": "Wǒ yǒuyī liàng chē", "meaning": "I have one car." },
    { "id": 2, "word": "我没有车。", "pinyin": "wǒ méiyǒu chē.", "meaning": "I don't have a car." },
    { "id": 3, "word": "你家有几台冰箱？", "pinyin": "Nǐ jiā yǒu jǐ tái bīngxiāng?", "meaning": "How many fridges does your house have?" },
    { "id": 4, "word": "你有几支笔？", "pinyin": "Nǐ yǒu jǐ zhī bǐ?", "meaning": "How many pens do you have?" },
    { "id": 5, "word": "我没有孩子，但是我的姐姐有两个孩子。", "pinyin": "Wǒ méiyǒu háizi, dànshì wǒ de jiějiě yǒu liǎng gè háizi.", "meaning": "I don't have any children, but my older sister has 2." },
    { "id": 6, "word": "你有几本词典？", "pinyin": "Nǐ yǒu jǐ běn cídiǎn?", "meaning": "How many dictionaries do you have?" },
    { "id": 7, "word": "我没有词典，但是我的手机里有三个词典。", "pinyin": "Wǒ méiyǒu cídiǎn, dànshì wǒ de shǒujī li yǒusān gè cídiǎn.", "meaning": "I don't have a dictionary, but my phone has 3." },
    { "id": 8, "word": "你的家有几个厕所？", "pinyin": "Nǐ de jiā yǒu jǐ gè cèsuǒ?", "meaning": "How many bathrooms does your house have?" },
    { "id": 9, "word": "我的家有一个厕所。", "pinyin": "Wǒ de jiā yǒu yīgè cèsuǒ.", "meaning": "My house has one bathroom." },
    { "id": 10, "word": "哪个人是中国人？", "pinyin": "Nǎge rén shì zhōngguó rén?", "meaning": "Which person is chinese?" },
    { "id": 11, "word": "这个人是中国人。", "pinyin": "Zhège rén shì zhōngguó rén.", "meaning": "This person is chinese." },
    { "id": 12, "word": "这辆小车是我的，那辆大车是我爸爸的。", "pinyin": "Zhè liàng xiǎochē shì wǒ de, nà liàng dà chē shì wǒ bàba de.", "meaning": "This small car is mine, that big car is my dad's." },
    { "id": 13, "word": "请喝咖啡。", "pinyin": "Qǐng hē kāfēi.", "meaning": "Please drink coffee." },
    { "id": 14, "word": "请来公司。", "pinyin": "Qǐng lái gōngsī.", "meaning": "Please come to the office." },
    { "id": 15, "word": "请上车。", "pinyin": "Qǐng shàng chē.", "meaning": "Please get in the car." },
    { "id": 16, "word": "谢谢。", "pinyin": "Xièxiè.", "meaning": "Thankyou" },
    { "id": 17, "word": "你一共有几个手机？", "pinyin": "Nǐ yīgòng yǒu jǐ gè shǒujī?", "meaning": "How many cell phones do you have?" },
    { "id": 18, "word": "我有一个手机", "pinyin": "Wǒ yǒu yīgè shǒujī", "meaning": "I have one cell phone." },
    { "id": 19, "word": "我一共有五个手机", "pinyin": "wǒ yīgòng yǒu wǔ gè shǒujī", "meaning": "I have 5 cell phones." },
    { "id": 20, "word": "你一共吃了几个鸡蛋？", "pinyin": "nǐ yīgòng chīle jǐ gè jīdàn?", "meaning": "How many eggs did you eat?" },
    { "id": 21, "word": "你一共买了几支笔？", "pinyin": "Nǐ yīgòng mǎile jǐ zhī bǐ?", "meaning": "How many pens did you buy?" },
    { "id": 22, "word": "我一共去了十个国家。", "pinyin": "Wǒ yīgòng qùle shí gè guójiā.", "meaning": "I've been to 10 countries." },
    { "id": 23, "word": "桌子上一共有三个苹果。", "pinyin": "Zhuōzi shàng yīgòng yǒu sān gè píngguǒ.", "meaning": "There are 3 apples on the table / desk." },
    { "id": 24, "word": "我一共要买三个东西。", "pinyin": "Wǒ yīgòng yāomǎi sān gè dōngxī.", "meaning": "I'm going to buy 3 things in total." },
    { "id": 25, "word": "我们都是中国人。", "pinyin": "Wǒmen dōu shì zhōngguó rén.", "meaning": "We're all chinese." },
    { "id": 26, "word": "我们都喜欢吃苹果。", "pinyin": "Wǒmen dōu xǐhuān chī píngguǒ.", "meaning": "We all like eating apples." },
    { "id": 27, "word": "今天我们都不工作。", "pinyin": "Jīntiān wǒmen dōu bù gōngzuò.", "meaning": "We all don't have to work today." },
    { "id": 28, "word": "我们不都是中国人。", "pinyin": "Wǒmen bù dōu shì zhōngguó rén. ", "meaning": "Not all of us are chinese." },
    { "id": 29, "word": "他们都在工作。", "pinyin": "Tāmen dōu zài gōngzuò.", "meaning": "They are all working." },
    { "id": 30, "word": "猫在桌子上。", "pinyin": "Māo zài zhuōzi shàng. ", "meaning": "The cat is on the table." },
    { "id": 31, "word": "孩子在下桌子。", "pinyin": "Háizi zàixià zhuōzi. ", "meaning": "The kid is getting off the table." },
    { "id": 32, "word": "那张小床是我的。", "pinyin": "Nà zhāng xiǎo chuáng shì wǒ de. ", "meaning": "That small bed is mine." },
    { "id": 33, "word": "现在我在椅子上。", "pinyin": "Xiànzài wǒ zài yǐzi shàng. ", "meaning": "Right now I'm on the chair." },
    { "id": 34, "word": "你的爸爸在这个房间里吗？", "pinyin": "Nǐ de bàba zài zhège fángjiān lǐ ma? ", "meaning": "Is your dad in the room with you?" },
    { "id": 35, "word": "我的爸爸不在这个房间里。", "pinyin": "Wǒ de bàba bùzài zhège fángjiān lǐ. ", "meaning": "My dad is not in this room right now." },
    { "id": 36, "word": "我在中国一共认识了八个朋友。", "pinyin": "Wǒ zài zhōngguó yīgòng rènshíle bā gè péngyǒu.", "meaning": "I have made eight friends in China." },
];