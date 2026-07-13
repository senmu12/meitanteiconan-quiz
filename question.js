// =========================
// 名探偵コナンクイズ 問題集
// =========================

const quizData = [

{
    question: "三つ子",
    choices: [
        "富沢達二",
        "旗本祥二",
        "武田龍二",
        "諏訪雄二"
    ],
    answer: 0
},

{
    question: "元刑事",
    choices: [
        "鮫崎島治",
        "亀田照吉",
        "海老名稔",
        "蟹江是久"
    ],
    answer: 0
},

{
    question: "証券会社勤務",
    choices: [
        "田中知史",
        "鈴木史郎",
        "笹井宣一",
        "北浦京吾"
    ],
    answer: 0
},

{
    question: "クレー射撃",
    choices: [
        "織田國友",
        "片品陸人",
        "松井秀豪",
        "枡山憲三"
    ],
    answer: 0
},

{
    question: "社長",
    choices: [
        "三船拓也",
        "旗本武",
        "藤波純生",
        "戸叶研人"
    ],
    answer: 0
},



{
    question: "小説家",
    choices: [
        "富沢太一",
        "磯上海蔵",
        "下条登",
        "大上祝善"
    ],
    answer: 0
},

{
    question: "美容師",
    choices: [
        "葉坂皆代",
        "星野輝美",
        "新名香保里",
        "土屋益子"
    ],
    answer: 0
},

{
    question: "大学生",
    choices: [
        "辻栄尊作",
        "今竹智",
        "戸田マリア",
        "田端菊代"
    ],
    answer: 0
},

{
    question: "隠して急いで省略",
    choices: [
        "国吉文太",
        "吉良蓮絵",
        "天堂晴華",
        "諏訪道彦"
    ],
    answer: 0
},

{
    question: "ラグビー部コーチ",
    choices: [
        "殿山十三",
        "隅井豪",
        "三上大輔",
        "花岡兼人"
    ],
    answer: 0
},

{
    question: "小五郎はBARにいる",
    choices: [
        "初村健策",
        "佐竹好実",
        "犬伏知晃",
        "八坂清"
    ],
    answer: 0
},

{
    question: "弁護士",
    choices: [
        "碓氷律子",
        "江守敏嗣",
        "根来友也",
        "柴田恭子"
    ],
    answer: 0
},

{
    question: "愛犬アーサー",
    choices: [
        "加納照也",
        "町田安彦",
        "エドワード・クロウ",
        "石原亜紀"
    ],
    answer: 0
},

{
    question: "意味深なオルゴール",
    choices: [
        "裕木春菜",
        "島袋君恵",
        "鴻上舞衣",
        "神鳥蝶子"
    ],
    answer: 0
},

{
    question: "料理人",
    choices: [
        "旗本祥二",
        "三谷陽太",
        "辻村貴善",
        "大鷹和洋"
    ],
    answer: 0
},

{
    question: "カメラマン",
    choices: [
        "ロバート･テイラー",
        "エドワード・クロウ",
        "トビー・ケインズ",
        "ランディ･ホーク"
    ],
    answer: 0
},

{
    question: "モデル",
    choices: [
        "トビー・ケインズ",
        "ロバート･テイラー",
        "エドワード・クロウ",
        "ランディ･ホーク"
    ],
    answer: 0
},

{
    question: "CV:石田彰",
    choices: [
        "旗本一郎",
        "大葉悦敏",
        "伊藤基弘",
        "池間伸朗"
    ],
    answer: 0
},

{
    question: "CV:大塚芳忠",
    choices: [
        "番町菊次",
        "竹富雅雄",
        "仲町通也",
        "小暮紋平"
    ],
    answer: 0
},

{
    question: "模型店勤務",
    choices: [
        "番町菊次",
        "竹富雅雄",
        "仲町通也",
        "江守敏嗣"
    ],
    answer: 0
},

{
    question: "模型店経営",
    choices: [
        "大村淳",
        "高杉俊彦",
        "田中和由",
        "清水正人"
    ],
    answer: 0
},

{
    question: "ピアニスト",
    choices: [
        "麻生圭二",
        "福浦千造",
        "福地直和",
        "辻谷健仁"
    ],
    answer: 0
},

{
    question: "漁師",
    choices: [
        "井田巌",
        "二川肇",
        "津曲紅生",
        "猫田栄信"
    ],
    answer: 0
},

{
    question: "２３歳",
    choices: [
        "設楽蓮希",
        "設楽絢音",
        "設楽調一郎",
        "設楽弦三郎"
    ],
    answer: 0
},

{
    question: "１８歳",
    choices: [
        "秀念",
        "寛念",
        "木念",
        "屯念"
    ],
    answer: 0
},

{
    question: "CV：岩井由希子",
    choices: [
        "岩井仁美",
        "上条秀子",
        "中村実里",
        "加那美咲"
    ],
    answer: 0
},

{
    question: "絶対音感",
    choices: [
        "羽賀響輔",
        "雨宮祥子",
        "工藤伸壱",
        "三角篤"
    ],
    answer: 0
},

{
    question: "CV:石田彰",
    choices: [
        "綿引勝史",
        "赤塚賢造",
        "関口俊道",
        "国友淳大"
    ],
    answer: 0
},

{
    question: "双子",
    choices: [
        "綿引勝史",
        "水上二朗",
        "富沢太一",
        "天土隆司"
    ],
    answer: 0
},

{
    question: "建築家",
    choices: [
        "森谷帝二",
        "風戸恭介",
        "沢木公平",
        "浦志青蘭"
    ],
    answer: 0
},

{
    question: "杯戸のルータス",
    choices: [
        "志水高保",
        "重松明夫",
        "寒川竜",
        "出島均"
    ],
    answer: 0
},

{
    question: "CV:大塚芳忠",
    choices: [
        "寒川竜",
        "志水高保",
        "重松明夫",
        "出島均"
    ],
    answer: 0
},

{
    question: "車椅子",
    choices: [
        "船本達仁",
        "長部満",
        "雑賀又三郎",
        "旗本豪蔵"
    ],
    answer: 0
},

{
    question: "鳥取県",
    choices: [
        "武田智恵",
        "加悦利則",
        "鷺沼昇",
        "上村直樹"
    ],
    answer: 0
},

{
    question: "プロレスラー",
    choices: [
        "佐熊浩之",
        "牛込嗣夫",
        "虎田義郎",
        "龍尾為史"
    ],
    answer: 0
},

{
    question: "警察官",
    choices: [
        "寺林省三",
        "奥平角蔵",
        "諸口益貴",
        "緒方志郎"
    ],
    answer: 0
},

{
    question: "警察官",
    choices: [
        "水戸光一",
        "桜庭裕一",
        "乾将一",
        "青野木亮一"
    ],
    answer: 0
},

{
    question: "ファッションデザイナー",
    choices: [
        "山吹紹二",
        "蝶野いずみ",
        "秋山信介",
        "土屋晶次"
    ],
    answer: 0
},

{
    question: "映画館",
    choices: [
        "古橋稔",
        "三瀬隆",
        "益戸麗",
        "長部満"
    ],
    answer: 0
},

{
    question: "雪ダルマ",
    choices: [
        "板橋一八",
        "真田一三",
        "殿山十三",
        "目暮十三"
    ],
    answer: 0
},

{
    question: "タイミングマン",
    choices: [
        "根上慶彦",
        "井出敏行",
        "今井徹夫",
        "狩谷大策"
    ],
    answer: 0
},

{
    question: "魚が消える一角岩",
    choices: [
        "青里周平",
        "金澤智康",
        "百地裕士",
        "薮内義親"
    ],
    answer: 0
},

{
    question: "マジシャン",
    choices: [
        "九十九七恵",
        "千頭順司",
        "百瀬卓人",
        "萬田年久"
    ],
    answer: 0
},

{
    question: "宝くじ",
    choices: [
        "六田卓児",
        "八島光枝",
        "二瓶純夏",
        "五条修"
    ],
    answer: 0
},

{
    question: "死ぬほど美味いラーメン",
    choices: [
        "大橋彩代",
        "青梅岳道",
        "唯見安菜",
        "伴場頼太"
    ],
    answer: 0
},

{
    question: "探偵",
    choices: [
        "春岡参治",
        "名和武郎",
        "稲垣大将",
        "桐谷貴江"
    ],
    answer: 0
},

{
    question: "１ミリも許さない",
    choices: [
        "紺野宅司",
        "庄野賢也",
        "加門初音",
        "重井徳子"
    ],
    answer: 0
},

{
    question: "漫画家",
    choices: [
        "井筒尚子",
        "原本高平",
        "石栗三郎",
        "能登泰策"
    ],
    answer: 0
},

{
    question: "剣道",
    choices: [
        "柴田四郎",
        "緒方志郎",
        "川端四郎",
        "今野史郎"
    ],
    answer: 0
},

{
    question: "万年筆",
    choices: [
        "日向幸",
        "犬伏幸姫",
        "桂木幸子",
        "浜田幸二"
    ],
    answer: 0
},


{
    question: "２枚目俳優",
    choices: [
        "那智真吾",
        "江本将史",
        "白倉陽",
        "志賀俊成"
    ],
    answer: 0
},

{
    question: "マッチ棒パズル",
    choices: [
        "那智真吾",
        "江本将史",
        "白倉陽",
        "志賀俊成"
    ],
    answer: 0
},

{
    question: "小学生",
    choices: [
        "九十九文乃",
        "戸田マリア",
        "山村ミサエ",
        "舎川睦美"
    ],
    answer: 0
},

{
    question: "モデル",
    choices: [
        "白倉陽",
        "江本将史",
        "那智真吾",
        "志賀俊成"
    ],
    answer: 0
},

{
    question: "５月５日生まれ",
    choices: [
        "浦志青蘭",
        "風戸京介",
        "工藤新一",
        "森達雄"
    ],
    answer: 0
},

{
    question: "５月４日生まれ",
    choices: [
        "工藤新一",
        "服部平次",
        "毛利蘭",
        "遠山和葉"
    ],
    answer: 0
},

{
    question: "瞳の中の暗殺者",
    choices: [
        "友成真",
        "西野真人",
        "西条大河",
        "袴田正通"
    ],
    answer: 0
},

{
    question: "彫刻家",
    choices: [
        "阿久津誠",
        "武田勇三",
        "明石周作",
        "如月峰水"
    ],
    answer: 0
},

{
    question: "剣道",
    choices: [
        "面谷峰男",
        "馬山峰人",
        "藤峰有希子",
        "赤峰光里"
    ],
    answer: 0
},

{
    question: "サッカー",
    choices: [
        "上村直樹",
        "並木段児",
        "本山正治",
        "国分建彦"
    ],
    answer: 0
},

{
    question: "疑惑のイニシャルＫ",
    choices: [
        "目暮十三",
        "横溝参悟",
        "大和勘助",
        "鈴木史郎"
    ],
    answer: 0
},

{
    question: "プロレスマニア",
    choices: [
        "高木渉",
        "白鳥任三郎",
        "目暮十三",
        "松本清長"
    ],
    answer: 0
},

{
    question: "CV:塩沢兼人",
    choices: [
        "白鳥任三郎",
        "高木渉",
        "松本清長",
        "目暮十三"
    ],
    answer: 0
},

{
    question: "湯煙密室のシナリオ",
    choices: [
        "横溝重悟",
        "諸伏高明",
        "大和勘助",
        "綾小路文麿"
    ],
    answer: 0
},

{
    question: "医者",
    choices: [
        "新出義輝",
        "富沢哲治",
        "本間恭太",
        "旗本北郎"
    ],
    answer: 0
},

{
    question: "１０月１０日生まれ",
    choices: [
        "妃英理",
        "佐藤美和子",
        "池波静華",
        "工藤有希子"
    ],
    answer: 0
},

{
    question: "衆議院選立候補者",
    choices: [
        "土門康輝",
        "日原滝徳",
        "倍賞周平",
        "大鷹和洋"
    ],
    answer: 0
},

{
    question: "小説家",
    choices: [
        "藤枝繁",
        "狩谷嗣貴",
        "瀬戸隆一",
        "下田千加"
    ],
    answer: 0
},

{
    question: "山泥寺",
    choices: [
        "天永",
        "竜円",
        "釈蓮",
        "傳久"
    ],
    answer: 0
},

{
    question: "魔法使いの弟子",
    choices: [
        "鈴木園子",
        "榎本梓",
        "塚本数美",
        "佐藤美和子"
    ],
    answer: 0
},

{
    question: "食品会社勤務",
    choices: [
        "高橋良一",
        "甲谷廉三",
        "大山守三",
        "保本ひかる"
    ],
    answer: 0
},

{
    question: "スタントマン",
    choices: [
        "三俣耕介",
        "下田耕平",
        "宮部耕太",
        "蒲田耕平"
    ],
    answer: 0
},

{
    question: "大学教授",
    choices: [
        "広田正巳",
        "竹下裕信",
        "山路萩江",
        "福地明歳"
    ],
    answer: 0
},

{
    question: "ＣＶ：一条みゆ希",
    choices: [
        "岡野十和子",
        "広田登志子",
        "頓田温子",
        "蜷川彩子"
    ],
    answer: 0
},

{
    question: "呪いの仮面は冷たく笑う",
    choices: [
        "藍川冬矢",
        "藤井孝子",
        "武蔵之助",
        "牡丹露彦"
    ],
    answer: 0
},

{
    question: "自首したお笑い芸人",
    choices: [
        "ドドンパ六助",
        "にっこりピース",
        "ストロベリーズ",
        "サタン鬼塚"
    ],
    answer: 0
},

{
    question: "無口な腹話術師",
    choices: [
        "荒義則",
        "天堂享",
        "森敦史",
        "範田力"
    ],
    answer: 0
},

{
    question: "時計仕掛けの摩天楼",
    choices: [
        "二丁拳銃",
        "海原やすよ・ともこ",
        "アメリカザリガニ",
        "ますだおかだ"
    ],
    answer: 0
},

{
    question: "１４番目の標的",
    choices: [
        "海原やすよ・ともこ",
        "アメリカザリガニ",
        "ますだおかだ",
        "二丁拳銃"
    ],
    answer: 0
},

{
    question: "「血まみれの女神（ブラッディビーナス）」",
    choices: [
        "木村達也",
        "板垣ロク",
        "座間弘",
        "小暮留海"
    ],
    answer: 0
},

{
    question: "女優",
    choices: [
        "名取深汐",
        "白藤泰美",
        "相田素花",
        "北尾敬子"
    ],
    answer: 0
},

{
    question: "世紀末の魔術師",
    choices: [
        "乾将一",
        "茂庭辰巳",
        "辰巳桜子",
        "猿川久巳"
    ],
    answer: 0
},

{
    question: "酒巻昭監督を偲ぶ会",
    choices: [
        "南条実果",
        "北森靖絵",
        "西郡宗兵",
        "東条参平"
    ],
    answer: 0
},

{
    question: "シャーロキアン",
    choices: [
        "川津郁夫",
        "川島英夫",
        "川上昇",
        "川口聡"
    ],
    answer: 0
},

{
    question: "日売テレビ",
    choices: [
        "麦倉直道",
        "関口俊道",
        "楠田陸道",
        "青梅岳道"
    ],
    answer: 0
},

{
    question: "美術部",
    choices: [
        "物部雅生",
        "江尻太志",
        "本山正治",
        "中紙功男"
    ],
    answer: 0
}

];
