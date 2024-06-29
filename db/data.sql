INSERT INTO user (fName, lName, email, username, password)
VALUES (
    "Jason",
    "Liu",
    "jasonliu@mscodingacademies.org",
    "JasonLiu",
    "testing1234"
);

INSERT INTO author (author)
VALUES 
("Gege Akutami"),
("Tatsuya Endo"),
("Chu-Gong"),
("Tatsuki Fujimoto"),
("Takahiro"),
("Kaiu Shirai"),
("Kentaro Miura"),
("Homura Kawamoto"),
("Muneyuki Kaneshiro"),
("Hajime Yisayama"),
("Tite Kubo"),
("Ken Wakui"),
("Sui Ishida"),
("Yoshihiro Togashi"),
("Aneko Yusagi, Aiya Kyu"),
("ONE");

INSERT INTO genre (genre) 
VALUES 
("Action"), 
("Adult"),
("Adventure"),
("Comedy"),
("Cooking"),
("Dark Fantasy"),
("Doujinshi"),
("Drama"),
("Fantasy"),
("Fiction"),
("Gekiga"),
("Graphic Novels"),
("Harem"),
("Historical"),
("Horror"),
("Isekai"),
("Josei"),
("Kodomo"),
("Manga"),
("Manhua"),
("Manhwa"),
("Martial arts"),
("Mature"),
("Mecha"),
("Mystery"),
("One shot"),
("Paranormal"),
("Psychological"),
("Romance"),
("Sci fi"),
("Shonen"),
("Shoujo"),
("Sports"),
("Supernatural"),
("Webtoons"),
( "Yaoi"),
("Young Adult"),
("Yuri");

//dystopia comics

INSERT INTO publisher (publisher)
VALUES
("VIZ MEIDA"),
("D&C Media"),
("Square Enix"),
("Hakusensha"),
("Kodansha"),
("Media Factory"),
("Shueisha");

INSERT INTO manga (title, author_id, volume, mangaDesc, releasedDate, publisher_id, price, imgUrl)
VALUES(
    "Jujutsu Kaisen",
    1,
    1,
    "Yuji Itadori is high schooler who spends his days visiting his bedridden grandfather. Although he looks like your average teenager, his immense physical strength is something to behold! Every sports club wants him to join, but Itadori would rather hang out with the school outcasts in the Occult Club. One day, the club manages to get their hands on a sealed cursed object, but little do they know the terror they’ll unleash when they break the seal…",
    "December 3, 2019",
    1,
    11.99,
    "jjkIMG_1.jpg"
),
(
    "Spy x Family",
    2,
    1,
    "Master spy Twilight is the best at what he does when it comes to going undercover on dangerous missions in the name of a better world. But when he receives the ultimate impossible assignment—get married and have a kid—he may finally be in over his head!
    Not one to depend on others, Twilight has his work cut out for him procuring both a wife and a child for his mission to infiltrate an elite private school. What he doesn’t know is that the wife he’s chosen is an assassin and the child he’s adopted is a telepath!",
    "March 25, 2019",
    1,
    11.99,
    "spy_1.jpg"
),
(
    "Solo Leveling",
    3,
    1,
    "The story centers around a boy by the name of Jinwoo Sung. He is known throughout the land as The Weakest Hunter on Earth. Even E-Rank dungeons, which are the lowest difficulty, prove to be a problem for him. He always comes out of these dungeons with injuries… some of them life-threatening. If it weren’t for a healer in his party, he would have died many times by now.",
    "July 25, 2016",
    2,
    20.00,
    "solo_1.jpg"
),
(
    "Chainsaw Man",
    4,
    1,
    "Denji’s a poor young man who’ll do anything for money, even hunting down devils with his pet devil Pochita. He’s a simple man with simple dreams, drowning under a mountain of debt. But his sad life gets turned upside down one day when he’s betrayed by someone he trusts. Now with the power of a devil inside him, Denji’s become a whole new man—Chainsaw Man!",
    "October 6, 2020",
    1,
    11.99,
    "chain_1.jpg"
),
(
    "Akame ga Kill!",
    5,
    1,
    "Teenage country bumpkin Tatsumi dreams of earning enough money for his impoverished village by working in the Capital-- but his short-lived plans go awry when he's robbed by a buxom beauty upon arrival! Penniless, Tatsumi is taken in by the lovely Lady Aria, but just when his Capital dreams seem in reach yet again, Lady Aria's mansion is besieged by Night Raid--a team of ruthless assassins who targets high-ranking members of the upper class! As Tatsumi is quick to learn, appearances can be deceiving in the Capital, and this team of assassins just might be...the good guys?!",
    "August 21, 2010",
    3,
    13.00,
    "akame_1.jpg"
),
(
    "The Promised Neverland",
    6,
    1,
    "Life at Grace Field House has been good for Emma and her fellow orphans. While the daily studying and exams they have to take are tough, their loving caretaker provides them with delicious foods and plenty of playtime. But perhaps not everything is as it seems…",
    "August 1, 2016",
    1,
    9.99,
    "never_1.jpg"
),
(
    "Berserk",
    7,
    1,
    "His name is Guts, the Black Swordsman, a feared warrior spoken of only in whispers. Bearer of a gigantic sword, an iron hand, and the scars of countless battles and tortures, his flesh is also indelibly marked with The Brand, an unholy symbol that draws the forces of darkness to him and dooms him as their sacrifice. But Guts won't take his fate lying down; he'll cut a crimson swath of carnage through the ranks of the damned—and anyone else foolish enough to oppose him! Accompanied by Puck the Elf, more an annoyance than a companion, Guts relentlessly follows a dark, bloodstained path that leads only to death...or vengeance.",
    "August 25, 1989",
    4,
    14.99,
    "berserk_1.jpg"
),
(
    "Kakegurui",
    8,
    1,
    "Hyakkaou Private Academy. An institution for the privileged with a very peculiar curriculum. You see, when you're the sons and daughters of the wealthiest of the wealthy, it's not athletic prowess or book smarts that keep you ahead. It's reading your opponent-the art of the deal. What better way to hone those skills than with a rigorous curriculum of gambling?",
    "March 22, 2014",
    3,
    15.00,
    "kakegurui_1.jpg"
),
(
    "Blue Lock",
    9,
    1,
    "2018年、W杯。日本代表は無残に散った。今大会もベスト16止まり…。アジアでは強豪? 組織力は世界レベル? そんなことは、もう聞き飽きた! 課題は、絶対的な「エースストライカー」の不在。悲願“W杯優勝”のために、ゴールに飢え、勝利に渇き、試合を一変させる革新的な“1人”を作るべく、日本フットボール連合は300人のユース年代の選手達を招集する。まだ無名の高校2年生・潔世一は、己のエゴを以って299人を蹴落とし、最強のエースストライカーの道を駆け上れるか!? 登場人物、全員“俺様”! 史上最もイカれたエゴイストFWサッカー漫画、ここに開幕!!",
    "November 16, 2018",
    5,
    12.99,
    "blue_1.jpg"
),
(
    "Attack on Titan",
    10,
    1,
    "For the past century, what's left of mankind has hidden in a giant, three-walled city, trapped in fear of the bizarre, giant humanoids known as the Titans. Little is known about where they came from or why they are bent on consuming humankind, but the sudden appearance of an enormous Titan is about to change everything...",
    "April 7, 2013",
    5,
    10.99,
    "attack_1.jpg"
),
(
    "Bleach",
    11,
    1,
    "Part-time student, full-time Soul Reaper, Ichigo is one of the chosen few guardians of the afterlife.Ichigo Kurosaki never asked for the ability to see ghosts—he was born with the gift. When his family is attacked by a Hollow—a malevolent lost soul—Ichigo becomes a Soul Reaper, dedicating his life to protecting the innocent and helping the tortured spirits themselves find peace. Find out why Tite Kubo’s Bleach has become an international manga smash-hit!Ichigo Kurosaki has always been able to see ghosts, but this ability doesn't change his life nearly as much as his close encounter with Rukia Kuchiki, a Soul Reaper and member of the mysterious Soul Society. While fighting a Hollow, an evil spirit that preys on humans who display psychic energy, Rukia attempts to lend Ichigo some of her powers so that he can save his family; but much to her surprise, Ichigo absorbs every last drop of her energy. Now a full-fledged Soul Reaper himself, Ichigo quickly learns that the world he inhabits is one full of dangerous spirits and, along with Rukia--who is slowly regaining her powers--it's Ichigo's job to protect the innocent from Hollows and help the spirits themselves find peace.",
    "August 7, 2001",
    1,
    11.99,
    "bleach_1.jpg"
),
(
    "Tokyo Revengers",
    12,
    1,
    "Watching the news, Takemichi Hanagaki learns that his girlfriend from way back in middle school, Hinata Tachibana, has died. The only girlfriend he ever had was just killed by a villainous group known as the Tokyo Manji Gang. He lives in a crappy apartment with thin walls, and his six-years-younger boss treats him like an idiot. Plus, he’s a complete and total virgin… At the height of his rock-bottom life, he suddenly time-leaps 12 years back to his middle school days!! To save Hinata, and change the life he spent running away, hopeless part-timer Takemichi must aim for the top of Kanto’s most sinister delinquent gang!!",
    "May 17 2017",
    5,
    22.99,
    "revengers_1.jpg"
),
(
    "Tokyo Ghoul",
    13,
    1,
    "À Tokyo, sévissent des goules, monstres cannibales se dissimulant parmi les humains pour mieux s’en nourrir. Étudiant timide, Ken Kaneki est plus intéressé par la jolie fille qui partage ses goûts pour la lecture que par ces affaires sordides, jusqu’au jour où il se fait attaquer par l’une de ces fameuses créatures. Mortellement blessé, il survit grâce à la greffe des organes de son agresseur… Remis de son opération, il réalise peu à peu qu’il est devenu incapable de se nourrir comme avant et commence à ressentir un appétit suspect envers ses congénères. C’est le début d’une descente aux enfers pour Kaneki, devenu malgré lui un hybride mi-humain, mi-goule.",
    "September 8, 2011",
    1,
    12.99,
    "ghoul_1.jpg"
),
(
    "Hunter x Hunter",
    14,
    1,
    "Hunters are a special breed, dedicated to tracking down treasures, magical beasts, and even other people. But such pursuits require a license, and less than one in a hundred thousand can pass the grueling qualification exam. Those who do pass gain access to restricted areas, amazing stores of information, and the right to call themselves Hunters.",
    "March 3, 1998",
    1,
    11.99,
    "hunt_1.jpg"
),
(
    "The Rising of the Shield Hero",
    15,
    1,
    "Naofumi Iwatani, an uncharismatic Otaku who spends his days on games and manga, suddenly finds himself summoned to a parallel universe! He discovers he is one of four heroes equipped with legendary weapons and tasked with saving the world from its prophesied destruction. As the Shield Hero, the weakest of the heroes, all is not as it seems. Naofumi is soon alone, penniless, and betrayed. With no one to turn to, and nowhere to run, he is left with only his shield. Now, Naofumi must rise to become the legendary Shield Hero and save the world!",
    "February 5, 2014",
    6,
    13.95,
    "hero_1.jpg"
),
(
    "One Punch Man",
    16,
    1,
    "一撃必殺！　強くなりすぎて、どんな凶悪な怪人もワンパンチで倒してしまうヒーロー“サイタマ”。平熱系最強ヒーローの伝説開幕！！",
    "June 14, 2012",
    7,
    11.99,
    "punch_1.jpg"
);

INSERT INTO manga_to_genre (manga_id, genre_id)
VALUES 
(1, 1), (1, 9), (1, 10), (1, 12), (1, 15), (1, 19), (1, 27), (1, 31), (1, 34), (1, 37),
(2, 1), (2, 4), (2, 10), (2, 12), (2, 19), (2, 29), (2, 37),
(3, 1), (3, 3), (3, 9), (3, 10), (3, 12), (3, 19), (3, 21), (3, 37),
(4, 1), (4, 9), (4, 10), (4, 12), (4, 15), (4, 19), (4, 27), (4, 31),
(5, 1), (5, 3), (5, 9), (5, 10), (5, 12), (5, 19), (5, 37),
(6, 9), (6, 10), (6, 12), (6, 15), (6, 19), (6, 25), (6, 30), (6, 37), 
(7, 1), (7, 6), (7, 9), (7, 10), (7, 12), (7, 15), (7, 19),
(8, 8), (8, 10), (8, 12), (8, 19), (8, 25), (8, 31), (8, 37),
(9, 1), (9, 10), (9, 12), (9, 19), (9, 31), (9, 33), (9, 37),
(10, 1), (10, 9), (10, 10), (10, 12), (10, 15), (10, 19), (10, 30), (10, 37),
(11, 1), (11, 9), (11, 10), (11, 12), (11, 19), (11, 27), (11, 31), (11, 34), (11, 37),
(12, 1), (12, 9), (12, 10), (12, 12), (12, 19), (12, 30), (12, 31),
(13, 1), (13, 9), (13, 10), (13, 12), (13, 15), (13, 19), (13, 27), (13, 34), (13, 37),
(14, 1), (14, 3), (14, 9), (14, 10), (14, 12), (14, 19), (14, 31),
(15, 1), (15, 3), (15, 9), (15, 10), (15, 13), (15, 16), (15, 19), (15, 37),
(16, 1), (16, 4), (16, 9), (16, 10), (16, 12), (16, 19), (16, 30), (16, 37);


