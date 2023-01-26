let listaCompletaDeDatos = [
    { "id": 1, "word": "零｜〇", "pinyin": "líng ｜ líng", "meaning": "zero" },
    { "id": 2, "word": "一", "pinyin": "yī", "meaning": "one" },
    { "id": 3, "word": "二", "pinyin": "èr", "meaning": "two" },
    { "id": 4, "word": "三", "pinyin": "sān", "meaning": "three" },
    { "id": 5, "word": "四", "pinyin": "sì", "meaning": "four" },
    { "id": 6, "word": "五", "pinyin": "wǔ", "meaning": "five" },
    { "id": 7, "word": "六", "pinyin": "liù", "meaning": "six" },
    { "id": 8, "word": "七", "pinyin": "qī", "meaning": "seven" },
    { "id": 9, "word": "八", "pinyin": "bā", "meaning": "eight" },
    { "id": 10, "word": "九", "pinyin": "jiǔ", "meaning": "nine" },
    { "id": 11, "word": "十", "pinyin": "shí", "meaning": "ten" },
    { "id": 12, "word": "一百", "pinyin": "bǎi", "meaning": "one hundred" },
    { "id": 13, "word": "高兴", "pinyin": "gāoxìng", "meaning": "happy" },
    { "id": 14, "word": "国", "pinyin": "guó", "meaning": "country; state; nation" },
    { "id": 15, "word": "很", "pinyin": "hěn", "meaning": "very" },
    { "id": 16, "word": "叫", "pinyin": "jiào", "meaning": "call; be called" },
    { "id": 17, "word": "名字", "pinyin": "míngzi", "meaning": "Name" },
    { "id": 18, "word": "哪", "pinyin": "nǎ", "meaning": "which" },
    { "id": 19, "word": "哪里", "pinyin": "nǎ lǐ", "meaning": "where" },
    { "id": 20, "word": "你", "pinyin": "nǐ", "meaning": "you" },
    { "id": 21, "word": "人", "pinyin": "rén", "meaning": "people" },
    { "id": 22, "word": "认识", "pinyin": "rènshi", "meaning": "know" },
    { "id": 23, "word": "什么", "pinyin": "shénme", "meaning": "What" },
    { "id": 24, "word": "岁", "pinyin": "suì", "meaning": "year, age" },
    { "id": 25, "word": "他", "pinyin": "tā", "meaning": "he" },
    { "id": 26, "word": "她", "pinyin": "tā", "meaning": "she" },
    { "id": 27, "word": "晚上", "pinyin": "wǎnshang", "meaning": "Night" },
    { "id": 28, "word": "我", "pinyin": "wǒ", "meaning": "I" },
    { "id": 29, "word": "也", "pinyin": "yě", "meaning": "also" },
    { "id": 30, "word": "好", "pinyin": "hǎo", "meaning": "good" },
    { "id": 31, "word": "再见", "pinyin": "zàijiàn", "meaning": "Bye" },
    { "id": 32, "word": "多", "pinyin": "duō", "meaning": "many; much; more" },
    { "id": 33, "word": "大", "pinyin": "dà", "meaning": "large, big" },
    { "id": 34, "word": "了", "pinyin": "le", "meaning": "past tense marker" },
    { "id": 35, "word": "是", "pinyin": "shì", "meaning": "yes" },
    { "id": 36, "word": "喜欢", "pinyin": "xǐhuan", "meaning": "like" },
    { "id": 37, "word": "不", "pinyin": "bù", "meaning": "No" },
    { "id": 38, "word": "早上", "pinyin": "zǎoshang", "meaning": "Morning" },
    { "id": 39, "word": "美国", "pinyin": "měi guó", "meaning": "USA" },
    { "id": 40, "word": "英国", "pinyin": "yīng guó", "meaning": "the UK" },
    { "id": 41, "word": "法国", "pinyin": "fǎ guó", "meaning": "France" },
    { "id": 42, "word": "德国", "pinyin": "dé guó", "meaning": "Germany" },
    { "id": 43, "word": "西班牙", "pinyin": "xī bān yá", "meaning": "Spain" },
    { "id": 44, "word": "日本", "pinyin": "rì běn", "meaning": "Japan" },
    { "id": 45, "word": "泰国", "pinyin": "tài guó", "meaning": "Thailand" },
    { "id": 46, "word": "危地马拉", "pinyin": "wēi dì mǎ lā", "meaning": "Guatemala" },
    { "id": 47, "word": "这", "pinyin": "zhè", "meaning": "this" },
    { "id": 48, "word": "那", "pinyin": "nà", "meaning": "that" },
    { "id": 49, "word": "书", "pinyin": "shū", "meaning": "book" },
    { "id": 50, "word": "笔", "pinyin": "bǐ", "meaning": "pen" },
    { "id": 51, "word": "本子", "pinyin": "běnzi", "meaning": "notebook" },
    { "id": 52, "word": "杯子", "pinyin": "bēizi", "meaning": "cup/glass" },
    { "id": 53, "word": "手机", "pinyin": "shǒujī", "meaning": "cellphone" },
    { "id": 54, "word": "飞机", "pinyin": "fēijī", "meaning": "airplane" },
    { "id": 55, "word": "电脑", "pinyin": "diànnǎo", "meaning": "computer" },
    { "id": 56, "word": "苹果", "pinyin": "píngguǒ", "meaning": "apple" },
    { "id": 57, "word": "苹果手机", "pinyin": "píngguǒ shǒujī", "meaning": "iPhone (apple phone)" },
    { "id": 58, "word": "苹果电脑", "pinyin": "píngguǒ diànnǎo", "meaning": "macbook (apple computer)" },
    { "id": 59, "word": "鸡蛋", "pinyin": "jīdàn", "meaning": "egg (chicken egg)" },
    { "id": 60, "word": "中文", "pinyin": "zhōngwén", "meaning": "chinese language" },
    { "id": 61, "word": "汉语", "pinyin": "hànyǔ", "meaning": "chinese language" },
    { "id": 62, "word": "英文", "pinyin": "yīngwén", "meaning": "english language" },
    { "id": 63, "word": "英语", "pinyin": "yīngyǔ", "meaning": "english language" },
    { "id": 64, "word": "日文", "pinyin": "rìwén", "meaning": "japanese language" },
    { "id": 65, "word": "日语", "pinyin": "rìyǔ", "meaning": "japanese languaje" },
    { "id": 66, "word": "法文", "pinyin": "fāwén", "meaning": "french language" },
    { "id": 67, "word": "法语", "pinyin": "fāyù", "meaning": "french language" },
    { "id": 68, "word": "西班牙文", "pinyin": "xībānyáwén", "meaning": "spanish language" },
    { "id": 69, "word": "西班牙语", "pinyin": "xībānyáyǔ", "meaning": "spanish language" },
    { "id": 70, "word": "泰文", "pinyin": "tàiwén", "meaning": "thai language" },
    { "id": 71, "word": "泰语", "pinyin": "tàiyǔ", "meaning": "thai language" },
    { "id": 72, "word": "德文", "pinyin": "déwén", "meaning": "german language" },
    { "id": 73, "word": "德语", "pinyin": "déyǔ", "meaning": "german language" },
    { "id": 74, "word": "老师", "pinyin": "lǎoshī", "meaning": "teacher" },
    { "id": 75, "word": "家", "pinyin": "jiā", "meaning": "home, house" },
    { "id": 76, "word": "学校", "pinyin": "xuéxiào", "meaning": "school" },
    { "id": 77, "word": "公司", "pinyin": "gōngsī", "meaning": "company, office" },
    { "id": 78, "word": "厕所", "pinyin": "cèsuǒ", "meaning": "toilet, bathroom" },
    { "id": 79, "word": "商店", "pinyin": "shāngdiàn", "meaning": "shop" },
    { "id": 80, "word": "商场", "pinyin": "shāngchǎng", "meaning": "shopping mall, department store" },
    { "id": 81, "word": "飞机场", "pinyin": "fēijī chǎng", "meaning": "airport" },
    { "id": 82, "word": "饭店", "pinyin": "fàndiàn", "meaning": "restaurant" },
    { "id": 83, "word": "咖啡店", "pinyin": "kāfēi diàn", "meaning": "coffee shop" },
    { "id": 84, "word": "昨天", "pinyin": "zuótiān", "meaning": "yesterday" },
    { "id": 85, "word": "现在", "pinyin": "xiànzài", "meaning": "right now" },
    { "id": 86, "word": "今天", "pinyin": "jīntiān", "meaning": "today" },
    { "id": 87, "word": "明天", "pinyin": "míngtiān", "meaning": "tomorrow" },
    { "id": 88, "word": "去", "pinyin": "qù", "meaning": "to go somewhere" },
    { "id": 89, "word": "这里", "pinyin": "zhèlǐ", "meaning": "this place" },
    { "id": 90, "word": "那里", "pinyin": "nàlǐ", "meaning": "there" },
    { "id": 91, "word": "吃", "pinyin": "chī", "meaning": "eat" },
    { "id": 92, "word": "饭", "pinyin": "fàn", "meaning": "food or rice" },
    { "id": 93, "word": "吃饭", "pinyin": "chīfàn", "meaning": "to eat" },
    { "id": 94, "word": "吃苹果", "pinyin": "chī píngguǒ", "meaning": "eat apples" },
    { "id": 95, "word": "睡觉", "pinyin": "shuìjiào", "meaning": "to sleep" },
    { "id": 96, "word": "学习", "pinyin": "xuéxí", "meaning": "to study" },
    { "id": 97, "word": "工作", "pinyin": "gōngzuò", "meaning": "to work" },
    { "id": 98, "word": "上厕所", "pinyin": "shàng cèsuǒ", "meaning": "to use the bathroom" },
    { "id": 99, "word": "买东西", "pinyin": "mǎi dōngxī", "meaning": "to buy things  go shopping" },
    { "id": 100, "word": "买书", "pinyin": "mǎishū", "meaning": "to buy books" },
    { "id": 101, "word": "买", "pinyin": "mǎi", "meaning": "to buy" },
    { "id": 102, "word": "东西", "pinyin": "dōngxī", "meaning": "things" },
    { "id": 103, "word": "看书", "pinyin": "kànshū", "meaning": "read books" },
    { "id": 104, "word": "看", "pinyin": "kàn", "meaning": "to look, to see, to watch... actions with eyes" },
    { "id": 105, "word": "早饭", "pinyin": "zǎofàn", "meaning": "breakfast" },
    { "id": 106, "word": "晚饭", "pinyin": "wǎnfàn", "meaning": "dinner" },
    { "id": 107, "word": "喝咖啡", "pinyin": "hē kāfēi", "meaning": "to drink coffee." },
    { "id": 108, "word": "水", "pinyin": "shuǐ", "meaning": "water" },
    { "id": 109, "word": "喝水", "pinyin": "hē shuǐ", "meaning": "to drink water" },
    { "id": 110, "word": "觉", "pinyin": "jué", "meaning": "sleep (noun)" },
    { "id": 111, "word": "回", "pinyin": "huí", "meaning": "to go back" },
    { "id": 112, "word": "来", "pinyin": "lái", "meaning": "to come to" },
    { "id": 113, "word": "的", "pinyin": "de", "meaning": "before a noun, shows the possesive relationship." },
    { "id": 114, "word": "我的", "pinyin": "wǒ de", "meaning": "my" },
    { "id": 115, "word": "你的", "pinyin": "nǐ de", "meaning": "your" },
    { "id": 116, "word": "他的", "pinyin": "tā de", "meaning": "his" },
    { "id": 117, "word": "她的", "pinyin": "tā de", "meaning": "her" },
    { "id": 118, "word": "我们的", "pinyin": "wǒmen de", "meaning": "our" },
    { "id": 119, "word": "你们的", "pinyin": "nǐmen de", "meaning": "your (plural)" },
    { "id": 120, "word": "老师的", "pinyin": "lǎoshī de", "meaning": "teacher's" },
    { "id": 121, "word": "学校的", "pinyin": "xuéxiào de", "meaning": "school's" },
    { "id": 122, "word": "他们的", "pinyin": "tāmen de", "meaning": "their" },
    { "id": 123, "word": "咖啡店的", "pinyin": "kāfēi diàn de", "meaning": "the coffee shop's" },
    { "id": 124, "word": "妈妈", "pinyin": "māmā", "meaning": "mom" },
    { "id": 125, "word": "爸爸", "pinyin": "bàba", "meaning": "dad" },
    { "id": 126, "word": "哥哥", "pinyin": "gēgē", "meaning": "older brother" },
    { "id": 127, "word": "姐姐", "pinyin": "jiějiě", "meaning": "older sister" },
    { "id": 128, "word": "弟弟", "pinyin": "dìdì", "meaning": "younger brother" },
    { "id": 129, "word": "妹妹", "pinyin": "mèimei", "meaning": "younger sister" },
    { "id": 130, "word": "朋友", "pinyin": "péngyǒu", "meaning": "friend" },
    { "id": 131, "word": "男朋友", "pinyin": "nán péngyǒu", "meaning": "boyfriend" },
    { "id": 132, "word": "女朋友", "pinyin": "nǚ péngyǒu", "meaning": "girlfriend" },
    { "id": 133, "word": "男", "pinyin": "nán", "meaning": "man" },
    { "id": 134, "word": "女", "pinyin": "nǚ", "meaning": "woman" },
    { "id": 135, "word": "有", "pinyin": "yǒu", "meaning": "to have" },
    { "id": 136, "word": "手表", "pinyin": "shǒubiǎo", "meaning": "wrist watch" },
    { "id": 137, "word": "孩子", "pinyin": "háizi", "meaning": "child, children" },
    { "id": 138, "word": "男孩子", "pinyin": "nánháizi", "meaning": "boys" },
    { "id": 139, "word": "女孩子", "pinyin": "nǚ hái zi", "meaning": "girls" },
    { "id": 140, "word": "狗", "pinyin": "gǒu", "meaning": "dog" },
    { "id": 141, "word": "猫", "pinyin": "māo", "meaning": "cat" },
    { "id": 142, "word": "车", "pinyin": "chē", "meaning": "car" },
    { "id": 143, "word": "钱", "pinyin": "qián", "meaning": "money" },
    { "id": 144, "word": "谁", "pinyin": "shéi", "meaning": "who" },
    { "id": 145, "word": "没有人", "pinyin": "méiyǒu rén", "meaning": "nobody" },
    { "id": 146, "word": "做饭", "pinyin": "zuò fàn", "meaning": "to cook" },
    { "id": 147, "word": "知道", "pinyin": "zhīdào", "meaning": "to know" }
];