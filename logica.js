let text = '[' +
    '{"id":1,"word":"爱","pinyin":"ài","meaning":"love"},' +
    '{"id":2,"word":"爱好","pinyin":"ài hào","meaning":"hobby"},' +
    '{"id":3,"word":"八","pinyin":"bā","meaning":"eight"},' +
    '{"id":4,"word":"爸爸｜爸","pinyin":"bàba ｜ bà","meaning":"dad"},' +
    '{"id":5,"word":"吧","pinyin":"ba","meaning":"(interjection particle)"},' +
    '{"id":6,"word":"白（形）","pinyin":"bái","meaning":"white"},' +
    '{"id":7,"word":"白天","pinyin":"bái tiān","meaning":"day"},' +
    '{"id":8,"word":"百","pinyin":"bǎi","meaning":"hundred"},' +
    '{"id":9,"word":"班","pinyin":"bān","meaning":"class"},' +
    '{"id":10,"word":"半","pinyin":"bàn","meaning":"half"},' +
    '{"id":11,"word":"半年","pinyin":"bàn nián","meaning":"half a year"},' +
    '{"id":12,"word":"半天","pinyin":"bàn tiān","meaning":"half day"},' +
    '{"id":13,"word":"帮","pinyin":"bāng","meaning":"help"},' +
    '{"id":14,"word":"帮忙","pinyin":"bāng máng","meaning":"help"},' +
    '{"id":15,"word":"包","pinyin":"bāo","meaning":"package"},' +
    '{"id":16,"word":"包子","pinyin":"bāo zi","meaning":"bun"},' +
    '{"id":17,"word":"杯","pinyin":"bēi","meaning":"cup"},' +
    '{"id":18,"word":"杯子","pinyin":"bēi zi","meaning":"cup"},' +
    '{"id":19,"word":"北","pinyin":"běi","meaning":"north"},' +
    '{"id":20,"word":"北边","pinyin":"běi biān","meaning":"North side"},' +
    '{"id":21,"word":"北京","pinyin":"běi jīng","meaning":"Beijing"},' +
    '{"id":22,"word":"本（量）","pinyin":"běn","meaning":"(measure word for books or volumes)"},' +
    '{"id":23,"word":"本子","pinyin":"běn zi","meaning":"book"},' +
    '{"id":24,"word":"比","pinyin":"bǐ","meaning":"particle used for comparison"},' +
    '{"id":25,"word":"别（副）","pinyin":"bié","meaning":"Don’t"},' +
    '{"id":26,"word":"别的","pinyin":"bié de","meaning":"other"},' +
    '{"id":27,"word":"别人","pinyin":"bié·rén","meaning":"other people"},' +
    '{"id":28,"word":"病","pinyin":"bìng","meaning":"disease"},' +
    '{"id":29,"word":"病人","pinyin":"bìng rén","meaning":"patient"},' +
    '{"id":30,"word":"不大","pinyin":"bú dà","meaning":"not big"},' +
    '{"id":31,"word":"不对","pinyin":"bú duì","meaning":"wrong"},' +
    '{"id":32,"word":"不客气","pinyin":"bú kè qì","meaning":"You’re welcome"},' +
    '{"id":33,"word":"不用","pinyin":"bú yòng","meaning":"No need to"},' +
    '{"id":34,"word":"不","pinyin":"bù","meaning":"No"},' +
    '{"id":35,"word":"菜","pinyin":"cài","meaning":"dish"},' +
    '{"id":36,"word":"茶","pinyin":"chá","meaning":"tea"},' +
    '{"id":37,"word":"差","pinyin":"chà","meaning":"differ from; bad; short of"},' +
    '{"id":38,"word":"常","pinyin":"cháng","meaning":"often"},' +
    '{"id":39,"word":"常常","pinyin":"cháng cháng","meaning":"often"},' +
    '{"id":40,"word":"唱","pinyin":"chàng","meaning":"sing"},' +
    '{"id":41,"word":"唱歌","pinyin":"chàng gē","meaning":"sing"},' +
    '{"id":42,"word":"车","pinyin":"chē","meaning":"car"},' +
    '{"id":43,"word":"车票","pinyin":"chē piào","meaning":"ticket"},' +
    '{"id":44,"word":"车上","pinyin":"chē shàng","meaning":"in the car"},' +
    '{"id":45,"word":"车站","pinyin":"chē zhàn","meaning":"station"},' +
    '{"id":46,"word":"吃","pinyin":"chī","meaning":"eat"},' +
    '{"id":47,"word":"吃饭","pinyin":"chī fàn","meaning":"have meal"},' +
    '{"id":48,"word":"出","pinyin":"chū","meaning":"out"},' +
    '{"id":49,"word":"出来","pinyin":"chū lái","meaning":"come"},' +
    '{"id":50,"word":"出去","pinyin":"chū qù","meaning":"go out"},' +
    '{"id":51,"word":"穿","pinyin":"chuān","meaning":"wear"},' +
    '{"id":52,"word":"床","pinyin":"chuáng","meaning":"bed"},' +
    '{"id":53,"word":"次（量）","pinyin":"cì","meaning":"(measure word for times, frequency)"},' +
    '{"id":54,"word":"从","pinyin":"cóng","meaning":"from"},' +
    '{"id":55,"word":"错","pinyin":"cuò","meaning":"wrong"},' +
    '{"id":56,"word":"打（动）","pinyin":"dǎ","meaning":"hit, take"},' +
    '{"id":57,"word":"打车","pinyin":"dǎ chē","meaning":"take a taxi"},' +
    '{"id":58,"word":"打电话","pinyin":"dǎ diàn huà","meaning":"make a phonecall"},' +
    '{"id":59,"word":"打开","pinyin":"dǎ kāi","meaning":"turn on"},' +
    '{"id":60,"word":"打球","pinyin":"dǎ qiú","meaning":"play ball"},' +
    '{"id":61,"word":"大","pinyin":"dà","meaning":"large, big"},' +
    '{"id":62,"word":"大学","pinyin":"dà xué","meaning":"university"},' +
    '{"id":63,"word":"大学生","pinyin":"dà xué shēng","meaning":"university student"},' +
    '{"id":64,"word":"到","pinyin":"dào","meaning":"reach"},' +
    '{"id":65,"word":"得到","pinyin":"dé dào","meaning":"get"},' +
    '{"id":66,"word":"地","pinyin":"de","meaning":"auxiliary word"},' +
    '{"id":67,"word":"的","pinyin":"de","meaning":"(aux.)"},' +
    '{"id":68,"word":"等（动）","pinyin":"děng","meaning":"wait"},' +
    '{"id":69,"word":"地","pinyin":"dì","meaning":"ground"},' +
    '{"id":70,"word":"地点","pinyin":"dìdiǎn","meaning":"location"},' +
    '{"id":71,"word":"地方","pinyin":"dìfang","meaning":"local"},' +
    '{"id":72,"word":"地上","pinyin":"dì shàng","meaning":"on the ground"},' +
    '{"id":73,"word":"地图","pinyin":"dìtú","meaning":"Map"},' +
    '{"id":74,"word":"弟弟｜弟","pinyin":"dì di ｜ dì","meaning":"younger brother"},' +
    '{"id":75,"word":"第（第二）","pinyin":"dì （ dì èr ）","meaning":"auxiliary word for ordinal numbers (second )"},' +
    '{"id":76,"word":"点","pinyin":"diǎn","meaning":"spot"},' +
    '{"id":77,"word":"电","pinyin":"diàn","meaning":"electricity"},' +
    '{"id":78,"word":"电话","pinyin":"diàn huà","meaning":"phone"},' +
    '{"id":79,"word":"电脑","pinyin":"diànnǎo","meaning":"Computer"},' +
    '{"id":80,"word":"电视","pinyin":"diànshì","meaning":"television"},' +
    '{"id":81,"word":"电视机","pinyin":"diàn shì jī","meaning":"television"},' +
    '{"id":82,"word":"电影","pinyin":"diànyǐng","meaning":"Film"},' +
    '{"id":83,"word":"电影院","pinyin":"diàn yǐng yuàn","meaning":"cinema; movie theater"},' +
    '{"id":84,"word":"东","pinyin":"dōng","meaning":"east"},' +
    '{"id":85,"word":"东边","pinyin":"dōng biān","meaning":"east side"},' +
    '{"id":86,"word":"东西","pinyin":"dōngxi","meaning":"thing"},' +
    '{"id":87,"word":"动","pinyin":"dòng","meaning":"move"},' +
    '{"id":88,"word":"动作","pinyin":"dòngzuò","meaning":"action"},' +
    '{"id":89,"word":"都","pinyin":"dōu","meaning":"all"},' +
    '{"id":90,"word":"读","pinyin":"dú","meaning":"read"},' +
    '{"id":91,"word":"读书","pinyin":"dú shū","meaning":"reading; study"},' +
    '{"id":92,"word":"对（形）","pinyin":"duì","meaning":"right"},' +
    '{"id":93,"word":"对不起","pinyin":"duìbuqǐ","meaning":"I’m sorry."},' +
    '{"id":94,"word":"多（形、代）","pinyin":"duō","meaning":"many; much; more"},' +
    '{"id":95,"word":"多少","pinyin":"duōshao","meaning":"how much"},' +
    '{"id":96,"word":"饿","pinyin":"è","meaning":"hungry"},' +
    '{"id":97,"word":"儿子","pinyin":"érzi","meaning":"Son"},' +
    '{"id":98,"word":"二","pinyin":"èr","meaning":"Two"},' +
    '{"id":99,"word":"饭","pinyin":"fàn","meaning":"rice; meal"},' +
    '{"id":100,"word":"饭店","pinyin":"fàndiàn","meaning":"restaurant"},' +
    '{"id":101,"word":"房间","pinyin":"fángjiān","meaning":"Room"},' +
    '{"id":102,"word":"房子","pinyin":"fáng zi","meaning":"house; building"},' +
    '{"id":103,"word":"放","pinyin":"fàng","meaning":"discharge"},' +
    '{"id":104,"word":"放假","pinyin":"fàng jià","meaning":"holiday; have a holiday"},' +
    '{"id":105,"word":"放学","pinyin":"fàng xué","meaning":"off school"},' +
    '{"id":106,"word":"飞","pinyin":"fēi","meaning":"fly"},' +
    '{"id":107,"word":"飞机","pinyin":"fēijī","meaning":"aircraft"},' +
    '{"id":108,"word":"非常","pinyin":"fēicháng","meaning":"very"},' +
    '{"id":109,"word":"分（名、量）","pinyin":"fēn","meaning":"minute; point; part; (measure word)"},' +
    '{"id":110,"word":"风","pinyin":"fēng","meaning":"wind"},' +
    '{"id":111,"word":"干","pinyin":"gān","meaning":"dry"},' +
    '{"id":112,"word":"干净","pinyin":"gānjìng","meaning":"clean"},' +
    '{"id":113,"word":"干","pinyin":"gàn","meaning":"do"},' +
    '{"id":114,"word":"干什么","pinyin":"gàn shén me","meaning":"What to do"},' +
    '{"id":115,"word":"高","pinyin":"gāo","meaning":"high"},' +
    '{"id":116,"word":"高兴","pinyin":"gāoxìng","meaning":"happy"},' +
    '{"id":117,"word":"告诉","pinyin":"gàosu","meaning":"tell"},' +
    '{"id":118,"word":"哥哥｜哥","pinyin":"gē ge ｜ gē","meaning":"elder brother"},' +
    '{"id":119,"word":"歌","pinyin":"gē","meaning":"song"},' +
    '{"id":120,"word":"个","pinyin":"gè","meaning":"individual"},' +
    '{"id":121,"word":"给","pinyin":"gěi","meaning":"give"},' +
    '{"id":122,"word":"跟","pinyin":"gēn","meaning":"with"},' +
    '{"id":123,"word":"工人","pinyin":"gōngrén","meaning":"Worker"},' +
    '{"id":124,"word":"工作","pinyin":"gōngzuò","meaning":"work"},' +
    '{"id":125,"word":"关（动）","pinyin":"guān","meaning":"shut; close; turn off"},' +
    '{"id":126,"word":"关上","pinyin":"guān shàng","meaning":"close;shut to; turn off"},' +
    '{"id":127,"word":"贵","pinyin":"guì","meaning":"noble"},' +
    '{"id":128,"word":"国","pinyin":"guó","meaning":"country; state; nation"},' +
    '{"id":129,"word":"国家","pinyin":"guójiā","meaning":"Country"},' +
    '{"id":130,"word":"国外","pinyin":"guó wài","meaning":"foreign; oversea; abroad"},' +
    '{"id":131,"word":"过","pinyin":"guò","meaning":"pass"},' +
    '{"id":132,"word":"还","pinyin":"hái","meaning":"also; still; yet"},' +
    '{"id":133,"word":"还是","pinyin":"háishi","meaning":"still"},' +
    '{"id":134,"word":"还有","pinyin":"hái yǒu","meaning":"also; in addition; besides"},' +
    '{"id":135,"word":"孩子","pinyin":"háizi","meaning":"Children"},' +
    '{"id":136,"word":"汉语","pinyin":"hànyǔ","meaning":"Chinese"},' +
    '{"id":137,"word":"汉字","pinyin":"hàn zì","meaning":"Chinese character"},' +
    '{"id":138,"word":"好（形）","pinyin":"hǎo","meaning":"good"},' +
    '{"id":139,"word":"好吃","pinyin":"hǎochī","meaning":"Yummy"},' +
    '{"id":140,"word":"好看","pinyin":"hǎo kàn","meaning":"good looking"},' +
    '{"id":141,"word":"好听","pinyin":"hǎo tīng","meaning":"pleasant to hear"},' +
    '{"id":142,"word":"好玩儿","pinyin":"hǎo wánr","meaning":"fun; interesting"},' +
    '{"id":143,"word":"号","pinyin":"hào","meaning":"Number/date"},' +
    '{"id":144,"word":"喝","pinyin":"hē","meaning":"drink"},' +
    '{"id":145,"word":"和","pinyin":"hé","meaning":"and"},' +
    '{"id":146,"word":"很","pinyin":"hěn","meaning":"very"},' +
    '{"id":147,"word":"后","pinyin":"hòu","meaning":"back; behind; after; later"},' +
    '{"id":148,"word":"后边","pinyin":"hòu biān","meaning":"behind; back"},' +
    '{"id":149,"word":"后天","pinyin":"hòu tiān","meaning":"day after tomorrow"},' +
    '{"id":150,"word":"花（名）","pinyin":"huā","meaning":"flower"},' +
    '{"id":151,"word":"话","pinyin":"huà","meaning":"word; words"},' +
    '{"id":152,"word":"坏","pinyin":"huài","meaning":"bad"},' +
    '{"id":153,"word":"还","pinyin":"huán","meaning":"return; pay back"},' +
    '{"id":154,"word":"回（动）","pinyin":"huí","meaning":"go back; return"},' +
    '{"id":155,"word":"回答","pinyin":"huídá","meaning":"Answer"},' +
    '{"id":156,"word":"回到","pinyin":"huí dào","meaning":"back to"},' +
    '{"id":157,"word":"回家","pinyin":"huí jiā","meaning":"go home; return home"},' +
    '{"id":158,"word":"回来","pinyin":"huí lái","meaning":"come back; return"},' +
    '{"id":159,"word":"回去","pinyin":"huí qù","meaning":"go back"},' +
    '{"id":160,"word":"会（动）","pinyin":"huì","meaning":"can; be able to"},' +
    '{"id":161,"word":"火车","pinyin":"huǒ chē","meaning":"train"},' +
    '{"id":162,"word":"机场","pinyin":"jīchǎng","meaning":"Airport"},' +
    '{"id":163,"word":"机票","pinyin":"jī piào","meaning":"air ticket"},' +
    '{"id":164,"word":"鸡蛋","pinyin":"jīdàn","meaning":"Egg"},' +
    '{"id":165,"word":"几","pinyin":"jǐ","meaning":"several"},' +
    '{"id":166,"word":"记","pinyin":"jì","meaning":"remember"},' +
    '{"id":167,"word":"记得","pinyin":"jìdé","meaning":"remember"},' +
    '{"id":168,"word":"记住","pinyin":"jì zhù","meaning":"remember; keep in mind"},' +
    '{"id":169,"word":"家","pinyin":"jiā","meaning":"home"},' +
    '{"id":170,"word":"家里","pinyin":"jiā lǐ","meaning":"In the home"},' +
    '{"id":171,"word":"家人","pinyin":"jiā rén","meaning":"family"},' +
    '{"id":172,"word":"间","pinyin":"jiān","meaning":"between; measure word for rooms"},' +
    '{"id":173,"word":"见","pinyin":"jiàn","meaning":"see; meet"},' +
    '{"id":174,"word":"见面","pinyin":"jiànmiàn","meaning":"meet"},' +
    '{"id":175,"word":"教","pinyin":"jiāo","meaning":"teach"},' +
    '{"id":176,"word":"叫（动）","pinyin":"jiào","meaning":"call; be called"},' +
    '{"id":177,"word":"教学楼","pinyin":"jiào xué lóu","meaning":"teaching building"},' +
    '{"id":178,"word":"姐姐｜姐","pinyin":"jiě jie ｜ jiě","meaning":"elder sister"},' +
    '{"id":179,"word":"介绍","pinyin":"jièshào","meaning":"introduce"},' +
    '{"id":180,"word":"今年","pinyin":"jīn nián","meaning":"this year"},' +
    '{"id":181,"word":"今天","pinyin":"jīntiān","meaning":"Today"},' +
    '{"id":182,"word":"进","pinyin":"jìn","meaning":"enter"},' +
    '{"id":183,"word":"进来","pinyin":"jìn lái","meaning":"come in"},' +
    '{"id":184,"word":"进去","pinyin":"jìn qù","meaning":"go in"},' +
    '{"id":185,"word":"九","pinyin":"jiǔ","meaning":"Nine"},' +
    '{"id":186,"word":"就","pinyin":"jiù","meaning":"as soon as; right away; then"},' +
    '{"id":187,"word":"觉得","pinyin":"juéde","meaning":"Think"},' +
    '{"id":188,"word":"开","pinyin":"kāi","meaning":"open"},' +
    '{"id":189,"word":"开车","pinyin":"kāi chē","meaning":"drive; drive a car"},' +
    '{"id":190,"word":"开会","pinyin":"kāi huì","meaning":"have a meeting"},' +
    '{"id":191,"word":"开玩笑","pinyin":"kāiwánxiào","meaning":"Make fun of"},' +
    '{"id":192,"word":"看","pinyin":"kàn","meaning":"see"},' +
    '{"id":193,"word":"看病","pinyin":"kàn bìng","meaning":"see a doctor"},' +
    '{"id":194,"word":"看到","pinyin":"kàn dào","meaning":"see"},' +
    '{"id":195,"word":"看见","pinyin":"kànjiàn","meaning":"seeing"},' +
    '{"id":196,"word":"考","pinyin":"kǎo","meaning":"test; examine"},' +
    '{"id":197,"word":"考试","pinyin":"kǎoshì","meaning":"Examination"},' +
    '{"id":198,"word":"渴","pinyin":"kě","meaning":"thirsty"},' +
    '{"id":199,"word":"课","pinyin":"kè","meaning":"course"},' +
    '{"id":200,"word":"课本","pinyin":"kè běn","meaning":"textbook"},' +
    '{"id":201,"word":"课文","pinyin":"kè wén","meaning":"text"},' +
    '{"id":202,"word":"口","pinyin":"kǒu","meaning":"mouth"},' +
    '{"id":203,"word":"块","pinyin":"kuài","meaning":"block"},' +
    '{"id":204,"word":"快","pinyin":"kuài","meaning":"fast"},' +
    '{"id":205,"word":"来","pinyin":"lái","meaning":"come"},' +
    '{"id":206,"word":"来到","pinyin":"lái dào","meaning":"come; arrive"},' +
    '{"id":207,"word":"老（形）","pinyin":"lǎo","meaning":"old; aged"},' +
    '{"id":208,"word":"老人","pinyin":"lǎo rén","meaning":"old people; the aged"},' +
    '{"id":209,"word":"老师","pinyin":"lǎoshī","meaning":"Teacher"},' +
    '{"id":210,"word":"了","pinyin":"le","meaning":"past tense marker"},' +
    '{"id":211,"word":"累","pinyin":"lèi","meaning":"tired"},' +
    '{"id":212,"word":"冷","pinyin":"lěng","meaning":"cold"},' +
    '{"id":213,"word":"里","pinyin":"lǐ","meaning":"in"},' +
    '{"id":214,"word":"里边","pinyin":"lǐ biān","meaning":"inside"},' +
    '{"id":215,"word":"两（数）","pinyin":"liǎng","meaning":"two"},' +
    '{"id":216,"word":"零｜〇","pinyin":"líng ｜ líng","meaning":"zero"},' +
    '{"id":217,"word":"六","pinyin":"liù","meaning":"Six"},' +
    '{"id":218,"word":"楼","pinyin":"lóu","meaning":"floor"},' +
    '{"id":219,"word":"楼上","pinyin":"lóu shàng","meaning":"upstairs"},' +
    '{"id":220,"word":"楼下","pinyin":"lóu xià","meaning":"downstairs"},' +
    '{"id":221,"word":"路","pinyin":"lù","meaning":"road"},' +
    '{"id":222,"word":"路口","pinyin":"lù kǒu","meaning":"intersection; crossing"},' +
    '{"id":223,"word":"路上","pinyin":"lù shàng","meaning":"on the road"},' +
    '{"id":224,"word":"妈妈｜妈","pinyin":"mā ma ｜ mā","meaning":"mom; mother"},' +
    '{"id":225,"word":"马路","pinyin":"mǎ lù","meaning":"road; street"},' +
    '{"id":226,"word":"马上","pinyin":"mǎshàng","meaning":"Right off"},' +
    '{"id":227,"word":"吗","pinyin":"ma","meaning":"auxiliary word"},' +
    '{"id":228,"word":"买","pinyin":"mǎi","meaning":"buy"},' +
    '{"id":229,"word":"慢","pinyin":"màn","meaning":"slow"},' +
    '{"id":230,"word":"忙","pinyin":"máng","meaning":"busy"},' +
    '{"id":231,"word":"毛（量）","pinyin":"máo","meaning":"a fractional unit of money in China (measure word)"},' +
    '{"id":232,"word":"没","pinyin":"méi","meaning":"no"},' +
    '{"id":233,"word":"没关系","pinyin":"méiguānxi","meaning":"No problem"},' +
    '{"id":234,"word":"没什么","pinyin":"méi shén me","meaning":"It’s nothing"},' +
    '{"id":235,"word":"没事儿","pinyin":"méi shìr","meaning":"It’s okay"},' +
    '{"id":236,"word":"没有","pinyin":"méi yǒu","meaning":"have not; no"},' +
    '{"id":237,"word":"妹妹｜妹","pinyin":"mèi mei ｜ mèi","meaning":"younger sister"},' +
    '{"id":238,"word":"门","pinyin":"mén","meaning":"door"},' +
    '{"id":239,"word":"门口","pinyin":"mén kǒu","meaning":"doorway"},' +
    '{"id":240,"word":"门票","pinyin":"mén piào","meaning":"tickets"},' +
    '{"id":241,"word":"们（朋友们）","pinyin":"men （ péng yǒu men ）","meaning":"plural marker for pronouns and a few animate nouns (friends)"},' +
    '{"id":242,"word":"米饭","pinyin":"mǐfàn","meaning":"Steamed Rice"},' +
    '{"id":243,"word":"面包","pinyin":"miànbāo","meaning":"Bread"},' +
    '{"id":244,"word":"面条儿","pinyin":"miàn tiáor","meaning":"noodles"},' +
    '{"id":245,"word":"名字","pinyin":"míngzi","meaning":"Name"},' +
    '{"id":246,"word":"明白","pinyin":"míngbai","meaning":"clear"},' +
    '{"id":247,"word":"明年","pinyin":"míng nián","meaning":"next year"},' +
    '{"id":248,"word":"明天","pinyin":"míngtiān","meaning":"Tomorrow"},' +
    '{"id":249,"word":"拿","pinyin":"ná","meaning":"take"},' +
    '{"id":250,"word":"哪","pinyin":"nǎ","meaning":"which"},' +
    '{"id":251,"word":"哪里","pinyin":"nǎ lǐ","meaning":"where"},' +
    '{"id":252,"word":"哪儿","pinyin":"nǎr","meaning":"where"},' +
    '{"id":253,"word":"哪些","pinyin":"nǎ xiē","meaning":"which"},' +
    '{"id":254,"word":"那（代）","pinyin":"nà","meaning":"that"},' +
    '{"id":255,"word":"那边","pinyin":"nà biān","meaning":"there"},' +
    '{"id":256,"word":"那里","pinyin":"nà lǐ","meaning":"there"},' +
    '{"id":257,"word":"那儿","pinyin":"nàr","meaning":"there"},' +
    '{"id":258,"word":"那些","pinyin":"nà xiē","meaning":"those"},' +
    '{"id":259,"word":"奶","pinyin":"nǎi","meaning":"milk"},' +
    '{"id":260,"word":"奶奶","pinyin":"nǎinai","meaning":"grandma"},' +
    '{"id":261,"word":"男","pinyin":"nán","meaning":"Man"},' +
    '{"id":262,"word":"男孩儿","pinyin":"nán háir","meaning":"boy"},' +
    '{"id":263,"word":"男朋友","pinyin":"nán péng yǒu","meaning":"boyfriend"},' +
    '{"id":264,"word":"男人","pinyin":"nán ren","meaning":"man"},' +
    '{"id":265,"word":"男生","pinyin":"nán shēng","meaning":"boy"},' +
    '{"id":266,"word":"南","pinyin":"nán","meaning":"south"},' +
    '{"id":267,"word":"南边","pinyin":"nán biān","meaning":"south; south side"},' +
    '{"id":268,"word":"难","pinyin":"nán","meaning":"hard, difficult"},' +
    '{"id":269,"word":"呢","pinyin":"ne","meaning":"auxiliary word"},' +
    '{"id":270,"word":"能","pinyin":"néng","meaning":"can"},' +
    '{"id":271,"word":"你","pinyin":"nǐ","meaning":"you"},' +
    '{"id":272,"word":"你们","pinyin":"nǐ men","meaning":"you"},' +
    '{"id":273,"word":"年","pinyin":"nián","meaning":"year"},' +
    '{"id":274,"word":"您","pinyin":"nín","meaning":"you"},' +
    '{"id":275,"word":"牛奶","pinyin":"niúnǎi","meaning":"milk"},' +
    '{"id":276,"word":"女","pinyin":"nǚ","meaning":"woman"},' +
    '{"id":277,"word":"女儿","pinyin":"nǚ’ér","meaning":"daughter"},' +
    '{"id":278,"word":"女孩儿","pinyin":"nǚ háir","meaning":"girl"},' +
    '{"id":279,"word":"女朋友","pinyin":"nǚ péng yǒu","meaning":"girlfriend"},' +
    '{"id":280,"word":"女人","pinyin":"nǚ ren","meaning":"woman"},' +
    '{"id":281,"word":"女生","pinyin":"nǚ shēng","meaning":"girl"},' +
    '{"id":282,"word":"旁边","pinyin":"pángbiān","meaning":"Side"},' +
    '{"id":283,"word":"跑","pinyin":"pǎo","meaning":"run"},' +
    '{"id":284,"word":"朋友","pinyin":"péngyou","meaning":"Friend"},' +
    '{"id":285,"word":"票","pinyin":"piào","meaning":"ticket"},' +
    '{"id":286,"word":"七","pinyin":"qī","meaning":"Seven"},' +
    '{"id":287,"word":"起","pinyin":"qǐ","meaning":"get up; start; rise"},' +
    '{"id":288,"word":"起床","pinyin":"qǐchuáng","meaning":"Get up"},' +
    '{"id":289,"word":"起来","pinyin":"qǐlái","meaning":"get up"},' +
    '{"id":290,"word":"汽车","pinyin":"qì chē","meaning":"car"},' +
    '{"id":291,"word":"前","pinyin":"qián","meaning":"front"},' +
    '{"id":292,"word":"前边","pinyin":"qián biān","meaning":"in front"},' +
    '{"id":293,"word":"前天","pinyin":"qián tiān","meaning":"the day before yesterday"},' +
    '{"id":294,"word":"钱","pinyin":"qián","meaning":"money"},' +
    '{"id":295,"word":"钱包","pinyin":"qián bāo","meaning":"wallet"},' +
    '{"id":296,"word":"请","pinyin":"qǐng","meaning":"please"},' +
    '{"id":297,"word":"请假","pinyin":"qǐngjià","meaning":"ask for leave"},' +
    '{"id":298,"word":"请进","pinyin":"qǐng jìn","meaning":"please come in"},' +
    '{"id":299,"word":"请问","pinyin":"qǐng wèn","meaning":"excuse me"},' +
    '{"id":300,"word":"请坐","pinyin":"qǐng zuò","meaning":"please have a seat"},' +
    '{"id":301,"word":"球","pinyin":"qiú","meaning":"ball"},' +
    '{"id":302,"word":"去","pinyin":"qù","meaning":"go"},' +
    '{"id":303,"word":"去年","pinyin":"qùnián","meaning":"Last year"},' +
    '{"id":304,"word":"热","pinyin":"rè","meaning":"heat"},' +
    '{"id":305,"word":"人","pinyin":"rén","meaning":"people"},' +
    '{"id":306,"word":"认识","pinyin":"rènshi","meaning":"know"},' +
    '{"id":307,"word":"认真","pinyin":"rènzhēn","meaning":"earnest"},' +
    '{"id":308,"word":"日","pinyin":"rì","meaning":"date"},' +
    '{"id":309,"word":"日期","pinyin":"rìqī","meaning":"Date"},' +
    '{"id":310,"word":"肉","pinyin":"ròu","meaning":"meat"},' +
    '{"id":311,"word":"三","pinyin":"sān","meaning":"Three"},' +
    '{"id":312,"word":"山","pinyin":"shān","meaning":"mountain"},' +
    '{"id":313,"word":"商场","pinyin":"shāng chǎng","meaning":"mall; shopping mall"},' +
    '{"id":314,"word":"商店","pinyin":"shāngdiàn","meaning":"Shop"},' +
    '{"id":315,"word":"上","pinyin":"shàng","meaning":"upper"},' +
    '{"id":316,"word":"上班","pinyin":"shàngbān","meaning":"go to work"},' +
    '{"id":317,"word":"上边","pinyin":"shàng biān","meaning":"above; on"},' +
    '{"id":318,"word":"上车","pinyin":"shàng chē","meaning":"get on"},' +
    '{"id":319,"word":"上次","pinyin":"shàng cì","meaning":"last time"},' +
    '{"id":320,"word":"上课","pinyin":"shàng kè","meaning":"attend class; have a class"},' +
    '{"id":321,"word":"上网","pinyin":"shàngwǎng","meaning":"Surf the Internet"},' +
    '{"id":322,"word":"上午","pinyin":"shàngwǔ","meaning":"morning"},' +
    '{"id":323,"word":"上学","pinyin":"shàng xué","meaning":"go to school"},' +
    '{"id":324,"word":"少","pinyin":"shǎo","meaning":"less"},' +
    '{"id":325,"word":"谁","pinyin":"shéi","meaning":"who"},' +
    '{"id":326,"word":"身上","pinyin":"shēn shàng","meaning":"body; on one’s body"},' +
    '{"id":327,"word":"身体","pinyin":"shēntǐ","meaning":"body"},' +
    '{"id":328,"word":"什么","pinyin":"shénme","meaning":"What"},' +
    '{"id":329,"word":"生病","pinyin":"shēngbìng","meaning":"Fall ill"},' +
    '{"id":330,"word":"生气","pinyin":"shēngqì","meaning":"get angry"},' +
    '{"id":331,"word":"生日","pinyin":"shēngrì","meaning":"Birthday"},' +
    '{"id":332,"word":"十","pinyin":"shí","meaning":"Ten"},' +
    '{"id":333,"word":"时候","pinyin":"shíhou","meaning":"time"},' +
    '{"id":334,"word":"时间","pinyin":"shíjiān","meaning":"time"},' +
    '{"id":335,"word":"事","pinyin":"shì","meaning":"thing"},' +
    '{"id":336,"word":"试","pinyin":"shì","meaning":"try"},' +
    '{"id":337,"word":"是","pinyin":"shì","meaning":"yes"},' +
    '{"id":338,"word":"是不是","pinyin":"shì bú shì","meaning":"isn’t it?"},' +
    '{"id":339,"word":"手","pinyin":"shǒu","meaning":"hand"},' +
    '{"id":340,"word":"手机","pinyin":"shǒujī","meaning":"Mobile phone"},' +
    '{"id":341,"word":"书","pinyin":"shū","meaning":"book"},' +
    '{"id":342,"word":"书包","pinyin":"shū bāo","meaning":"school bag"},' +
    '{"id":343,"word":"书店","pinyin":"shū diàn","meaning":"bookstore"},' +
    '{"id":344,"word":"树","pinyin":"shù","meaning":"tree"},' +
    '{"id":345,"word":"水","pinyin":"shuǐ","meaning":"water"},' +
    '{"id":346,"word":"水果","pinyin":"shuǐguǒ","meaning":"Fruits"},' +
    '{"id":347,"word":"睡","pinyin":"shuì","meaning":"sleep"},' +
    '{"id":348,"word":"睡觉","pinyin":"shuìjiào","meaning":"sleep"},' +
    '{"id":349,"word":"说","pinyin":"shuō","meaning":"speak"},' +
    '{"id":350,"word":"说话","pinyin":"shuōhuà","meaning":"talk"},' +
    '{"id":351,"word":"四","pinyin":"sì","meaning":"Four"},' +
    '{"id":352,"word":"送","pinyin":"sòng","meaning":"give"},' +
    '{"id":353,"word":"岁","pinyin":"suì","meaning":"year, age"},' +
    '{"id":354,"word":"他","pinyin":"tā","meaning":"he"},' +
    '{"id":355,"word":"他们","pinyin":"tā men","meaning":"they"},' +
    '{"id":356,"word":"她","pinyin":"tā","meaning":"she"},' +
    '{"id":357,"word":"她们","pinyin":"tā men","meaning":"they"},' +
    '{"id":358,"word":"太","pinyin":"tài","meaning":"too"},' +
    '{"id":359,"word":"天","pinyin":"tiān","meaning":"day"},' +
    '{"id":360,"word":"天气","pinyin":"tiānqì","meaning":"weather"},' +
    '{"id":361,"word":"听","pinyin":"tīng","meaning":"hear"},' +
    '{"id":362,"word":"听到","pinyin":"tīng dào","meaning":"hear"},' +
    '{"id":363,"word":"听见","pinyin":"tīng jiàn","meaning":"hear"},' +
    '{"id":364,"word":"听写","pinyin":"tīng xiě","meaning":"dictation; dictate"},' +
    '{"id":365,"word":"同学","pinyin":"tóngxué","meaning":"Classmate"},' +
    '{"id":366,"word":"图书馆","pinyin":"túshūguǎn","meaning":"Library"},' +
    '{"id":367,"word":"外","pinyin":"wài","meaning":"abroad, outside"},' +
    '{"id":368,"word":"外边","pinyin":"wài biān","meaning":"outside"},' +
    '{"id":369,"word":"外国","pinyin":"wài guó","meaning":"foreign country"},' +
    '{"id":370,"word":"外语","pinyin":"wài yǔ","meaning":"foreign language"},' +
    '{"id":371,"word":"玩儿","pinyin":"wánr","meaning":"play"},' +
    '{"id":372,"word":"晚","pinyin":"wǎn","meaning":"late"},' +
    '{"id":373,"word":"晚饭","pinyin":"wǎn fàn","meaning":"dinner"},' +
    '{"id":374,"word":"晚上","pinyin":"wǎnshang","meaning":"Night"},' +
    '{"id":375,"word":"网上","pinyin":"wǎng shàng","meaning":"online"},' +
    '{"id":376,"word":"网友","pinyin":"wǎng yǒu","meaning":"net friend"},' +
    '{"id":377,"word":"忘","pinyin":"wàng","meaning":"forget"},' +
    '{"id":378,"word":"忘记","pinyin":"wàngjì","meaning":"forget"},' +
    '{"id":379,"word":"问","pinyin":"wèn","meaning":"ask"},' +
    '{"id":380,"word":"我","pinyin":"wǒ","meaning":"I"},' +
    '{"id":381,"word":"我们","pinyin":"wǒmen","meaning":"We"},' +
    '{"id":382,"word":"五","pinyin":"wǔ","meaning":"Five"},' +
    '{"id":383,"word":"午饭","pinyin":"wǔ fàn","meaning":"lunch"},' +
    '{"id":384,"word":"西","pinyin":"xī","meaning":"west"},' +
    '{"id":385,"word":"西边","pinyin":"xī biān","meaning":"west; west side"},' +
    '{"id":386,"word":"洗","pinyin":"xǐ","meaning":"wash"},' +
    '{"id":387,"word":"洗手间","pinyin":"xǐshǒujiān","meaning":"Restroom"},' +
    '{"id":388,"word":"喜欢","pinyin":"xǐhuan","meaning":"like"},' +
    '{"id":389,"word":"下（名、动）","pinyin":"xià","meaning":"below; under; next; go down; get off"},' +
    '{"id":390,"word":"下班","pinyin":"xià bān","meaning":"get off work"},' +
    '{"id":391,"word":"下边","pinyin":"xià biān","meaning":"below; under"},' +
    '{"id":392,"word":"下车","pinyin":"xià chē","meaning":"get off"},' +
    '{"id":393,"word":"下次","pinyin":"xià cì","meaning":"next time"},' +
    '{"id":394,"word":"下课","pinyin":"xià kè","meaning":"finish class"},' +
    '{"id":395,"word":"下午","pinyin":"xiàwǔ","meaning":"Afternoon"},' +
    '{"id":396,"word":"下雨","pinyin":"xiàyǔ","meaning":"rain"},' +
    '{"id":397,"word":"先","pinyin":"xiān","meaning":"before"},' +
    '{"id":398,"word":"先生","pinyin":"xiānsheng","meaning":"Sir"},' +
    '{"id":399,"word":"现在","pinyin":"xiànzài","meaning":"Now"},' +
    '{"id":400,"word":"想","pinyin":"xiǎng","meaning":"think"},' +
    '{"id":401,"word":"小","pinyin":"xiǎo","meaning":"Small"},' +
    '{"id":402,"word":"小孩儿","pinyin":"xiǎo háir","meaning":"child; kid"},' +
    '{"id":403,"word":"小姐","pinyin":"xiǎojiě","meaning":"Miss"},' +
    '{"id":404,"word":"小朋友","pinyin":"xiǎo péng yǒu","meaning":"child; kid"},' +
    '{"id":405,"word":"小时","pinyin":"xiǎoshí","meaning":"hour"},' +
    '{"id":406,"word":"小学","pinyin":"xiǎo xué","meaning":"primary school; elementary schoo"},' +
    '{"id":407,"word":"小学生","pinyin":"xiǎo xué shēng","meaning":"elementary school student"},' +
    '{"id":408,"word":"笑","pinyin":"xiào","meaning":"laugh"},' +
    '{"id":409,"word":"写","pinyin":"xiě","meaning":"write"},' +
    '{"id":410,"word":"谢谢","pinyin":"xièxie","meaning":"Thank you"},' +
    '{"id":411,"word":"新","pinyin":"xīn","meaning":"new"},' +
    '{"id":412,"word":"新年","pinyin":"xīn nián","meaning":"New Year"},' +
    '{"id":413,"word":"星期","pinyin":"xīngqī","meaning":"week"},' +
    '{"id":414,"word":"星期日","pinyin":"xīng qī rì","meaning":"Sunday"},' +
    '{"id":415,"word":"星期天","pinyin":"xīng qī tiān","meaning":"Sunday"},' +
    '{"id":416,"word":"行","pinyin":"xíng","meaning":"That’s ok"},' +
    '{"id":417,"word":"休息","pinyin":"xiūxi","meaning":"Rest"},' +
    '{"id":418,"word":"学","pinyin":"xué","meaning":"learn; study"},' +
    '{"id":419,"word":"学生","pinyin":"xuésheng","meaning":"Student"},' +
    '{"id":420,"word":"学习","pinyin":"xuéxí","meaning":"Study"},' +
    '{"id":421,"word":"学校","pinyin":"xuéxiào","meaning":"School"},' +
    '{"id":422,"word":"学院","pinyin":"xué yuàn","meaning":"college; academy"},' +
    '{"id":423,"word":"要（动）","pinyin":"yào","meaning":"want"},' +
    '{"id":424,"word":"爷爷","pinyin":"yéye","meaning":"grandpa"},' +
    '{"id":425,"word":"也","pinyin":"yě","meaning":"also"},' +
    '{"id":426,"word":"页","pinyin":"yè","meaning":"page"},' +
    '{"id":427,"word":"一","pinyin":"yī","meaning":"One"},' +
    '{"id":428,"word":"衣服","pinyin":"yīfu","meaning":"clothes"},' +
    '{"id":429,"word":"医生","pinyin":"yīshēng","meaning":"Doctor"},' +
    '{"id":430,"word":"医院","pinyin":"yīyuàn","meaning":"Hospital"},' +
    '{"id":431,"word":"一半","pinyin":"yí bàn","meaning":"half"},' +
    '{"id":432,"word":"一会儿","pinyin":"yíhuìr","meaning":"A little while"},' +
    '{"id":433,"word":"一块儿","pinyin":"yí kuàir","meaning":"together"},' +
    '{"id":434,"word":"一下儿","pinyin":"yí xiàr","meaning":"a little bit"},' +
    '{"id":435,"word":"一样","pinyin":"yíyàng","meaning":"equally"},' +
    '{"id":436,"word":"一边","pinyin":"yìbiān","meaning":"One side"},' +
    '{"id":437,"word":"一点儿","pinyin":"yīdiǎnr","meaning":"a little bit"},' +
    '{"id":438,"word":"一起","pinyin":"yìqǐ","meaning":"together"},' +
    '{"id":439,"word":"一些","pinyin":"yì xiē","meaning":"some"},' +
    '{"id":440,"word":"用","pinyin":"yòng","meaning":"use"},' +
    '{"id":441,"word":"有","pinyin":"yǒu","meaning":"have"},' +
    '{"id":442,"word":"有的","pinyin":"yǒu de","meaning":"some"},' +
    '{"id":443,"word":"有名","pinyin":"yǒumíng","meaning":"Famous"},' +
    '{"id":444,"word":"有时候｜有时","pinyin":"yǒu shí hòu ｜ yǒu shí","meaning":"sometimes"},' +
    '{"id":445,"word":"有（一）些","pinyin":"yǒu （ yì ） xiē","meaning":"some"},' +
    '{"id":446,"word":"有用","pinyin":"yǒu yòng","meaning":"useful"},' +
    '{"id":447,"word":"右","pinyin":"yòu","meaning":"right"},' +
    '{"id":448,"word":"右边","pinyin":"yòubian","meaning":"Right"},' +
    '{"id":449,"word":"雨","pinyin":"yǔ","meaning":"rain"},' +
    '{"id":450,"word":"元","pinyin":"yuán","meaning":"element; Yuan"},' +
    '{"id":451,"word":"远","pinyin":"yuǎn","meaning":"far"},' +
    '{"id":452,"word":"月","pinyin":"yuè","meaning":"month"},' +
    '{"id":453,"word":"再","pinyin":"zài","meaning":"again"},' +
    '{"id":454,"word":"再见","pinyin":"zàijiàn","meaning":"Bye"},' +
    '{"id":455,"word":"在","pinyin":"zài","meaning":"stay; in process of"},' +
    '{"id":456,"word":"在家","pinyin":"zài jiā","meaning":"at home"},' +
    '{"id":457,"word":"早","pinyin":"zǎo","meaning":"early"},' +
    '{"id":458,"word":"早饭","pinyin":"zǎo fàn","meaning":"breakfast"},' +
    '{"id":459,"word":"早上","pinyin":"zǎoshang","meaning":"Morning"},' +
    '{"id":460,"word":"怎么","pinyin":"zěnme","meaning":"How"},' +
    '{"id":461,"word":"站（名）","pinyin":"zhàn","meaning":"station"},' +
    '{"id":462,"word":"找","pinyin":"zhǎo","meaning":"look for"},' +
    '{"id":463,"word":"找到","pinyin":"zhǎo dào","meaning":"find"},' +
    '{"id":464,"word":"这","pinyin":"zhè","meaning":"Here (here)"},' +
    '{"id":465,"word":"这边","pinyin":"zhè biān","meaning":"here"},' +
    '{"id":466,"word":"这里","pinyin":"zhè lǐ","meaning":"here"},' +
    '{"id":467,"word":"这儿","pinyin":"zhèr","meaning":"here"},' +
    '{"id":468,"word":"这些","pinyin":"zhè xiē","meaning":"these"},' +
    '{"id":469,"word":"着","pinyin":"zhe","meaning":"in process of"},' +
    '{"id":470,"word":"真","pinyin":"zhēn","meaning":"really"},' +
    '{"id":471,"word":"真的","pinyin":"zhēn de","meaning":"really"},' +
    '{"id":472,"word":"正（副）","pinyin":"zhèng","meaning":"just; exactly"},' +
    '{"id":473,"word":"正在","pinyin":"zhèngzài","meaning":"in process of"},' +
    '{"id":474,"word":"知道","pinyin":"zhīdào","meaning":"know"},' +
    '{"id":475,"word":"知识","pinyin":"zhīshi","meaning":"knowledge"},' +
    '{"id":476,"word":"中","pinyin":"zhōng","meaning":"middle; in"},' +
    '{"id":477,"word":"中国","pinyin":"zhōngguó","meaning":"China"},' +
    '{"id":478,"word":"中间","pinyin":"zhōngjiān","meaning":"Middle"},' +
    '{"id":479,"word":"中文","pinyin":"zhōngwén","meaning":"Chinese"},' +
    '{"id":480,"word":"中午","pinyin":"zhōngwǔ","meaning":"Noon"},' +
    '{"id":481,"word":"中学","pinyin":"zhōng xué","meaning":"middle school"},' +
    '{"id":482,"word":"中学生","pinyin":"zhōng xué shēng","meaning":"middle School student"},' +
    '{"id":483,"word":"重","pinyin":"zhòng","meaning":"heavy"},' +
    '{"id":484,"word":"重要","pinyin":"zhòngyào","meaning":"important"},' +
    '{"id":485,"word":"住","pinyin":"zhù","meaning":"live"},' +
    '{"id":486,"word":"准备","pinyin":"zhǔnbèi","meaning":"Get ready"},' +
    '{"id":487,"word":"桌子","pinyin":"zhuōzi","meaning":"Table"},' +
    '{"id":488,"word":"字","pinyin":"zì","meaning":"word, character"},' +
    '{"id":489,"word":"子（桌子）","pinyin":"zi （ zhuō zi ）","meaning":"noun suffix (table)"},' +
    '{"id":490,"word":"走","pinyin":"zǒu","meaning":"go, walk"},' +
    '{"id":491,"word":"走路","pinyin":"zǒu lù","meaning":"walk"},' +
    '{"id":492,"word":"最","pinyin":"zuì","meaning":"most"},' +
    '{"id":493,"word":"最好","pinyin":"zuìhǎo","meaning":"Best"},' +
    '{"id":494,"word":"最后","pinyin":"zuìhòu","meaning":"Last"},' +
    '{"id":495,"word":"昨天","pinyin":"zuótiān","meaning":"Yesterday"},' +
    '{"id":496,"word":"左","pinyin":"zuǒ","meaning":"left"},' +
    '{"id":497,"word":"左边","pinyin":"zuǒbian","meaning":"left"},' +
    '{"id":498,"word":"坐","pinyin":"zuò","meaning":"sit"},' +
    '{"id":499,"word":"坐下","pinyin":"zuò xià","meaning":"sit down"},' +
    '{"id":500,"word":"做","pinyin":"zuò","meaning":"do"}]';

const obj = JSON.parse(text);

let indiceActual = 1;
let indiceMax = 500;
let indiceMin = 1;

let caracteres = document.getElementById("caracteres");
let definicion = document.getElementById("definicion");
let pinyin = document.getElementById("pinyin");
let botonNoSe = document.getElementById("boton_no-se");
let botonChequear = document.getElementById("boton_chequear");
let inputUsuario = document.getElementById("inputUsuario");

function cargarTarjetaActual() {
    caracteres.innerHTML = "<p>" + obj[indiceActual]["word"] + "</p>";
}

function mostrarRespuesta() {
    pinyin.innerHTML = "<p>" + obj[indiceActual]["pinyin"] + "</p>";
    definicion.innerHTML = "<p>" + obj[indiceActual]["meaning"] + "</p>";
}

function proximaTarjeta() {
    if (indiceActual < indiceMax) {
        indiceActual += 1;
    } else {
        indiceActual = 1;
    }
}

function borrar() {
    caracteres.innerHTML = "<p></p>";
    pinyin.innerHTML = "<p></p>";
    definicion.innerHTML = "<p></p>";
    inputUsuario.value = "";
}

function noSe() {
    mostrarRespuesta();
}

function chequear() {
    respuestaUsuario = inputUsuario.value;
    respuestaCorrecta = obj[indiceActual]["word"];
    if (respuestaCorrecta.includes("｜")) {
        respuestaCorrecta = respuestaCorrecta.split("｜");
    }

    if (respuestaCorrecta.includes("（")){
        respuestaCorrecta = respuestaCorrecta.split("（")[0];
    }
    
    if (respuestaCorrecta.includes(respuestaUsuario) && respuestaUsuario != "") {
        //correcto - bien, pasamos a la próxima
        console.log("correcto");
        proximaTarjeta();
        borrar();
        cargarTarjetaActual();
    } else {
        //incorrecto - mal, muestro respuesta
        console.log("incorrecto");
        mostrarRespuesta();
    }
}


cargarTarjetaActual();

//para los botones
function verTecla(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        botonChequear.click();
    }
    //falta alguna key para "no sé"
}