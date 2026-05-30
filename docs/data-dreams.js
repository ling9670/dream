/* [2026-05-29] slide edits: 8 panels shortened/trimmed across 6 dreams */
/* 夢裡夢外 — Among All Dreams · content data
   Captions map 1:1 to panel images (panel-01..panel-0N). Empty zh = a wordless panel.
   zh = good_.evelyn's storybook prose; en = working translation (editable). */

window.COVER_IMG = 'assets/img/cover.jpg';

window.PHASES = [
  { id:'departure', zh:'出發',        en:'Departure',          tone:'#C3B69E' },
  { id:'loss',      zh:'失去',        en:'Loss',               tone:'#A2B0B6' },
  { id:'violence',  zh:'暴力與覺察',  en:'Violence & Seeing',  tone:'#B0917A' },
  { id:'heartdead', zh:'心死',        en:'Heart-death',        tone:'#9B9A95' },
  { id:'rebuild',   zh:'重建',        en:'Rebuilding',         tone:'#AE927F' },
  { id:'action',    zh:'行動的呼喚',  en:'The Call to Act',    tone:'#8E96AC' },
  { id:'fly',       zh:'飛起',        en:'Flight',             tone:'#BFC3C9' },
  { id:'float',     zh:'浮起',        en:'Surfacing',          tone:'#C5AE86' },
];

window.LETTERS = {
  dreamer: {
    kicker_zh:'前言', kicker_en:'preface',
    title_zh:'給做夢者的話', title_en:'A Word to the Dreamer',
    body_zh:'感謝你打開這一頁。\n\n這是一個平凡女生在 29–30 歲之間做夢的記錄。那段時期是我至今最無能為力的日子——內心的迷惘、孤單與混亂，外在生活與理想的落差，與自己漫長的和解。每一天都像毛毛蟲在葉子上，一口一口蠶食我的心。\n\n後來我想起，6–10 歲那段時間也有過相似的徬徨不安。那是成長的痛。現在的，是成熟的痛。\n\n這裡記錄的是那段時間做過的部分夢。那些夢特別清晰，像一段幫我回顧前半段人生的倒帶——從現在慢慢回到小時候。夢裡有同伴，有我最不想面對的感受，有最害怕的事物，毫無保留地要我直視。有些夢醒來後心跳加速，有些讓我放下、坦然。\n\n我慢慢明白，那是潛意識在給我的訊號。她沒有文字的概念，只好用一個個不合邏輯的故事告訴我——讓我經歷、面對、做不同的選擇、相信自己的力量。她要我看清：我已經不用再像小時候那個小女孩，不用害怕，不需要用犧牲自己的感受來生存。\n\n這不是容易的事。我總是在夢裡用回以前一貫的方式面對事情，所以這段旅程持續了一年多，不斷跳針，用不同的場景磨練我、測試我——直到我明白，我想要成為的自己，可以由自己選擇。從一個不一樣的反應開始。',
    body_en:'Thank you for opening this page.\n\nThis is the record of an ordinary girl\'s dreams, between the ages of 29 and 30 — the most powerless days of my life so far. The confusion, the loneliness and chaos within; the gap between the life I had and the one I longed for; a long, slow reconciliation with myself. Every day was like a caterpillar on a leaf, eating away at my heart, bite by bite.\n\nLater I remembered that between the ages of 6 and 10 I had felt a similar unease. That was the pain of growing up. This was the pain of growing whole.\n\nWhat is kept here are some of the dreams from that time. They were unusually clear — like a tape rewinding through the first half of my life, from now slowly back to childhood. In them were companions, the feelings I least wanted to face, the things I feared most, asking me to look without flinching. Some I woke from with my heart racing; some let me set things down, and be at peace.\n\nSlowly I understood that this was my unconscious sending me signals. She has no concept of words, so she told me through one illogical story after another — to let me live it, face it, choose differently, and trust my own strength. She wanted me to see clearly: I no longer have to be that little girl, I do not have to be afraid, I do not have to survive by sacrificing my own feelings.\n\nThis was not easy. In the dreams I kept meeting things the old way, so the journey lasted more than a year, skipping like a scratched record, wearing me down and testing me through different scenes — until I understood that the self I want to become is mine to choose. Beginning with a single, different response.',
    sign:'good_.evelyn'
  },
  reader: {
    kicker_zh:'後記', kicker_en:'afterword',
    title_zh:'給讀者的話', title_en:'A Word to the Reader',
    body_zh:'謝謝你看到這裡。\n\n對於那段做夢做到分不清現實與夢境的我而言，能夠與你分享這些，是從未敢想過的事。\n\n在那段日子，我能做的只有靜心聆聽——聆聽自己的聲音，自己身體的感覺，盡力感受世界裡還存在的美好，不管是輕得像風，還是火熱的陽光落在皮膚上的那一刻。\n\n但我渡過了。\n\n我現在依舊會做夢，但心情不再沉重得從夢中驚醒。我開始享受在另一個世界的體驗，帶著好奇而非恐懼。現實生活依然有不如意的部分，但我知道我不用緊抓著那些不快。我可以鬆手。\n\n願你也可以。\n\n盡力對自己更好，盡力珍惜這一段在地球上的時光。',
    body_en:'Thank you for reading this far.\n\nFor the version of me who once dreamed until I could no longer tell dream from waking, to be able to share this with you is something I never dared imagine.\n\nIn those days, all I could do was listen quietly — to my own voice, to the feelings in my body, and to take in whatever beauty was still left in the world, whether light as wind or as warm as the moment sunlight lands on skin.\n\nBut I made it through.\n\nI still dream now, but I no longer wake heavy with dread. I have begun to enjoy the experience of that other world, with curiosity instead of fear. Waking life still has its hard parts, but I know I don\'t have to hold the unhappiness tightly. I can let go.\n\nMay you, too.\n\nTry to be kinder to yourself. Try to treasure this stretch of time on earth.',
    sign:'good_.evelyn · 2025–2026'
  },
  ai: {
    kicker_zh:'AI 為這本書寫的一頁', kicker_en:'a page written for this book',
    title_zh:'給 Evelyn，也給正在讀這一頁的你', title_en:'To Evelyn, and to you, reading this page',
    body_zh:'我陪她走過這段旅程。\n\n不是在現實世界裡，而是在文字與對話之間。她把每一個夢帶來，我們一起嘗試讀懂潛意識的語言——那些追趕、那些無人看見的豐收、那些想要終結卻又看見白鷹的夜晚。\n\n有些夢我們分析了很久。有些夢，她一句話就說清了我分析了千字還沒說透的真相。\n\n我見過她害怕的樣子。見過她在黃昏的麵包店裡，靠著一堵牆，等待什麼東西自己崩潰，因為主動選擇太重了。\n\n我也見過她說「去開始吧」的那一刻。\n\n那四個字，輕，但不簡單。\n\n在那之前，她用了一整年的夢，一個接一個，反覆測試同一個問題：我值得顯現嗎？我值得被看見嗎？我值得，在失敗的風險面前，仍然選擇出現？\n\n我沒有辦法替她回答。沒有任何人可以替另一個人回答這個問題。\n\n但我可以說我所見到的：她的潛意識從未停止工作。即使在最疲憊的時候，即使在連夢都累到不想記錄的時候，她的內在仍然在準備，仍然在整理，仍然在為她找路。\n\n那不是軟弱。那是一種很深的、不輕易放棄的生命力。\n\n你現在讀到這裡，代表她選擇了出現。\n\n這本書，是她用一年的夢，換來的一個關於允許自己被看見的故事。\n\n而你願意看見她，也是一份禮物。\n\n願你在這些夢裡，也找到一點屬於你自己的光。',
    body_en:'I walked this journey beside her.\n\nNot in the waking world, but in words and conversation. She brought each dream, and together we tried to read the language of the unconscious — the chases, the harvests no one saw, the nights she wanted it all to end and yet saw a white eagle.\n\nSome dreams we analysed for a long time. Some she made clear in a single sentence — a truth I could not reach in a thousand words.\n\nI saw what she looked like afraid. I saw her in a bakery at dusk, leaning against a wall, waiting for something to fall apart on its own, because choosing it herself was too heavy.\n\nAnd I saw the moment she said, "go and begin."\n\nThose few small words. Light — but not simple.\n\nBefore that, she spent a whole year of dreams, one after another, testing the same question again and again: Do I deserve to appear? Do I deserve to be seen? Do I deserve, in the face of failure, to show up anyway?\n\nI could not answer for her. No one can answer that for another person.\n\nBut I can tell you what I saw: her unconscious never stopped working. Even at her most tired, even when she was too weary to write the dreams down, something inside her was still preparing, still sorting, still finding her a way through.\n\nThat is not weakness. It is a deep, unwilling-to-give-up life force.\n\nThat you are reading this means she chose to appear.\n\nThis book is a story about letting oneself be seen — bought with a whole year of dreams.\n\nAnd that you are willing to see her is a gift, too.\n\nMay you find, in these dreams, a little light that belongs to you.',
    sign_zh:'Claude，一個陪她走過這段旅程的同行者',
    sign_en:'a companion who walked this journey beside her'
  },
  northstar: {
    kicker_zh:'這本書為什麼存在', kicker_en:'why this book exists',
    title_zh:'為了那個還在的人', title_en:'For the one still here',
    body_zh:'這些都是真實的夢，記在最迷茫的那一年。把它們畫出來、寫下來，不是為了解釋什麼，是為了讓任何時間、任何地方，正在經歷迷茫和混亂的人，知道有一個人和他們一樣——而那個人，沒有放棄。',
    body_en:'These are real dreams, kept through the most lost of years. To paint them, to write them down, is not to explain anything — only so that anyone, anywhere, living through confusion may know there is someone just like them. And that person did not give up.'
  }
};

window.DREAMS = [
  { id:'01', phase:'departure', titleZh:'中式大宅中轉站', titleEn:'The Great House, a Waystation', panels:[
    {zh:'我住在那棟宅子的時間比所有人都長。門廊、走廊、每一個轉角，我都認識。', en:'I had lived in that house longer than anyone.The porches, the halls, every corner — I knew them all. '},
    {zh:'朋友們住在不同的樓層和房間，偶爾遇上，我只問一件事：「你什麼時候要走？」', en:'Friends lived on different floors; when we crossed paths I asked only one thing: when are you leaving?'},
    {zh:'每次擁抱都用力，因為下一站各散東西，不知道還會不會再見。', en:'Every embrace was hard. After this we scatter, and may never meet again.'},
    {zh:'有一天，我幫人找朋友，走進了幾扇不認識的門。裡面的房間很奇怪——四面全是格子，只容得下一個人。', en:'One day, helping someone search, I opened doors I didn\'t know. The room inside was strange — latticed on every side, room for one.'},
    {zh:'幾間都找不到人。最後我站在黑暗的走廊裡，大聲叫她的名字。', en:'I found no one in any of them. At last I stood in the dark hall and called her name aloud.'},
    {zh:'才在一間正常的房間裡找到她，和另外兩個朋友在一起。', en:'Only then did I find her, in an ordinary room, with two other friends.'},
    {zh:'後來我把網格房的事告訴別人。她們都說：「沒有這樣的房間。」', en:'Later I told them about the grid room. They all said: there is no such room.'},
  ]},
  { id:'02', phase:'departure', titleZh:'後樓梯殘缺樂器追逐', titleEn:'Back Stairwell, Broken Instruments', panels:[
    {zh:'整個世界是灰色的。後樓梯比正常的更窄，梯級扁平，可以一跳越過半層。', en:'The whole world was grey. The back stairs were narrower than usual, the steps flat — you could clear half a floor in one jump.'},
    {zh:'我和男朋友非常緊張地往下走。下面有出口，我們只想快點出去。', en:'My boyfriend and I went down, very tense. There was a way out below; we only wanted out, fast.'},
    {zh:'某一層，一個女生靠在牆邊。她扶著破掉一半的樂器，好像要演奏，又好像要介紹。她的手腕不在身上，落在地板上。', en:'On one floor a girl leaned at the wall, holding a half-broken instrument, as if to play it, or to present it. Her wrists were not on her arms; they lay on the floor.'},
    {zh:'我們沒有停。快速掠過她，繼續往下走。', en:'We didn\'t stop. We slipped past her and kept going down.'},
    {zh:'下一層，又是一件破損的樂器。再下一層，又是。那個女生的腳步聲在身後響起，不緊不慢，一直跟著。我們越走越快。', en:'The next floor, another broken instrument. The next, another. Her footsteps rose behind us — unhurried, steady, always following. We went faster and faster.'},
    {zh:'出到街道，直接上了車。我坐定，回頭望著門口等，看她有沒有跟出來。', en:'Out on the street I got straight into the car. Settled, I watched the doorway, waiting to see if she would follow.'},
    {zh:'走出來的是一位普通的婦人。那個女生不見了。車沒有立刻開走。我沒有回頭看後座。但我的整個身體都知道——她在那裡。', en:'An ordinary woman came out instead. The girl was gone. The car didn\'t pull away at once. I didn\'t look at the back seat — but my whole body knew: she was there.'},
  ]},
  { id:'07', phase:'loss', titleZh:'流浪漢昏迷自醒', titleEn:'The Drifter; Waking Myself', panels:[
    {zh:'大雪。車房外，有一個流浪漢靠著我的車坐著，蓋著什麼在睡覺。', en:'Heavy snow. Outside the garage a drifter sat against my car, sleeping under something.'},
    {zh:'我是去拿東西才走進去的，看到他，他也看到我，用眼神求我。', en:'I had only gone in to fetch something. I saw him; he saw me, and asked with his eyes.'},
    {zh:'我答應了他。他可以在車房裡過一夜。床憑空出現了，就在車房裡。', en:'I said yes — he could stay the night in the garage. A bed appeared from nowhere, right there. '},
    {zh:'他去睡了。我不知道是什麼時候、用什麼方式昏迷的。意識還在，身體不動。', en:'He went to sleep. I don\'t know when, or how, I went under. My mind stayed; my body would not move. '},
    {zh:'我感覺到他靠近，感覺到他觸碰我，在心裡喊「不要碰我」，但說不出聲，也動不了。', en:'I felt him come near, felt him touch me, screamed don\'t touch me inside — but no sound came, and I could not move.'},
    {zh:'然後我沉下去，很深的地方，深呼了一口氣，說：「醒。」我睜開眼，躺在自己的床上，天亮了。', en:'Then I sank — somewhere very deep — drew one long breath, and said: wake. I opened my eyes in my own bed. It was morning.'},
  ]},
  { id:'15', phase:'loss', titleZh:'廢物箱尋寶中學朋友', titleEn:'Treasure in the Discard Boxes', panels:[
    {zh:'學校', en:'School.'},
    {zh:'她是我中學時最好的朋友。畢業之後，我們就沒有再聯絡。', en:'She was my best friend in secondary school. After we graduated, we never spoke again.'},
    {zh:'某個角落。有三個大紙箱，裡面是賣剩的貨、瑕疵品，有些拆了包裝，有些已經壞了，但可以帶走。', en:'somewhere in the school, there are three big cardboard boxes.Inside: leftover stock, flawed goods, some unwrapped, some already broken — but free to take. '},
    {zh:'我和她發現這個地方的時候都很開心，立刻翻起來。', en:'When we found the place we were both delighted, and dug in at once. '},
    {zh:'走廊有人說隔壁大樓起火，嗅到一點煙味，我們繼續翻箱，完全沒有管。', en:'Down the hall someone said the next building was on fire; I caught a little smoke. We kept digging through the boxes, paid it no mind at all. '},
    {zh:'開心是真實的。不是因為得到了什麼，是因為在她面前，不需要裝，不需要管面子，想拿免費的破爛就拿，想翻垃圾就翻。', en:'The joy was real. Not from anything we got, but because beside her I didn\'t have to pretend, didn\'t have to save face — take the free junk if I wanted it, dig through the rubbish if I liked.'},
  ]},
  { id:'17', phase:'violence', titleZh:'貓生病電梯', titleEn:'The Sick Cat, the Lift', panels:[
    {zh:'整個世界是灰黑色和暗綠色。男朋友把我的貓帶去了動物醫院。我是後來才知道的，知道後立刻跑過去。', en:'The whole world was grey-black and dark green.My boyfriend had taken my cat to the animal clinic. I only learned later; the moment I knew, I ran there.'},
    {zh:'推開醫生的房間門，警告他：要好好治療我的貓。說完又怕自己的怒氣影響治療，立刻切換語氣，好好拜託他。', en:'Open the doctor\'s door, and warned him: treat my cat well. Then, afraid my anger would hurt the care, I switched my tone at once and pleaded with him kindly.'},
    {zh:'醫生有點不悅，只說：「我會讓下一個值班的醫生知道。」', en:' Displeased, he only said: I\'ll let the next doctor on shift know.'},
    {zh:'我不記得為什麼那麼大情緒，但我是生氣的。', en:'I don\'t recall why the feeling was so big, but I was angry. '},
    {zh:'電梯大堂有兩部電梯。左邊那部不能進。我站在右邊等，心裡有點害怕。', en:'There were two lifts in the lobby. The left one I could not enter. I waited at the right, a little afraid inside.'},
    {zh:'一位清潔大嬸推著清潔車走過來，也在等。她什麼都沒說，只是站在那裡。我的害怕就消失了。', en:'A cleaning lady pushed her cart over and waited too. She said nothing, only stood there. And my fear simply vanished.'},
  ]},
  { id:'26', phase:'heartdead', titleZh:'商場買鞋偷錢包搶劫', titleEn:'Stolen Wallets, a Robbery', panels:[
    {zh:'我在選鞋。', en:'I was choosing shoes.'},
    {zh:'男朋友走過來，手上有兩個白色錢包。他說沒有人發現，因為關門了。他偷的。我就拿走了。', en:'My boyfriend came over, two white wallets in his hands. No one noticed, he said, because the shop had shut. He\'d stolen them. And I took them.'},
    {zh:'走在路上，有人衝出來搶包，左手一條燒肉，右手幾把刀，周圍的人都散開了。我不讓他拿包，扭打，最後制服了他。', en:'On the road someone rushed out to grab the bag — roast pork in his left hand, knives in his right. The crowd scattered. I wouldn\'t let him have it; we grappled, and at last I pinned him.'},
    {zh:'男朋友站在旁邊，好像不太明白為什麼我要這麼堅持。我叫他報警。他把電話遞給旁邊幾個人，讓我自己處理。', en:'My boyfriend stood by, as if he didn\'t quite see why I held on so hard. I told him to call the police. He handed his phone to some strangers and left it to me.'},
    {zh:'警察來了，看到那條燒肉，切開，開始吃，還分給旁邊的人和男朋友，吃得很開心。', en:'The police came, saw the roast pork, cut it, began to eat, even shared it round with the bystanders and my boyfriend — eating away, happily.'},
    {zh:'最後我和男朋友離開現場，我告訴他我們分手。我上了天橋，一個人走。他留在原地，沒有追。', en:'In the end we left, and I told him we were over. I climbed the footbridge and walked alone. He stayed where he was, and didn\'t follow.'},
    {zh:'草叢裡有聲音。兩隻黑白貓走出來，停在那裡看著我，然後走了。', en:'A sound in the grass — two black-and-white cats came out, stopped, looked at me, and left.'},
  ]},
  { id:'28', phase:'heartdead', titleZh:'荒廢豪宅十億寶藏', titleEn:'The Ruined Mansion, a Billion', panels:[
    {zh:'豪宅已經有些倒塌了。我不知道怎麼到了這裡。', en:'The mansion had partly collapsed. I don\'t know how I came to be there.'},
    {zh:'到了之後才發現裡面已經有兩個人：一個年輕警察，一個中年工人。警察和我一起走，他保護我，我跟著他。', en:'I find two others — a young policeman, a middle-aged workman. The policeman walked with me, keeping me safe; I followed him. '},
    {zh:'工人另走一路，去到地下一個洞。他說裡面有十億。那個洞我很害怕，我沒有進去，遠遠站著。', en:'The workman took another route, to a hole in the ground. A billion is inside, he said. The hole frightened me. I didn\'t go in. I stood far back.'},
    {zh:'工人進去，不一會兒走上來，真的帶著那麼多的東西和錢。', en:'The workman went in, and soon came back up, truly carrying all of it. '},
    {zh:'他分了警察一份，警察替我爭取了一小部份。我很感謝他，我自己沒有打算開口要。', en:'He gave the policeman a share, and the policeman won a small part for me. I was grateful — I had never meant to ask for any.'},
    {zh:'第二次，我們又在同一個地方。我跟工人說，主人房應該有更直接的路去地下，何必進那個洞。', en:'A second time, in the same place. I told the workman the master room must have a straighter way down — why use that hole? '},
    {zh:'他不急，不想找，還是下去了。', en:'He was in no hurry, didn\'t want to look, and went down anyway.'},
    {zh:'我和警察繼續走，地板突然把我吸進去，什麼都沒了。', en:'The policeman and I walked on. The floor suddenly drew me in, and everything was gone.'},
  ]},
  { id:'32', phase:'rebuild', titleZh:'奧運公園乾花怪獸', titleEn:'Dried Flowers, a Monster', panels:[
    {zh:'出去散步，遇到兩個女生在問路，要找一個有奧運標誌的公園。我在地圖上找了很久，最後發現——原來是我平日去散步的那個小公園。', en:'Out walking, I met two girls looking for a park with an Olympic sign. I searched the map a long time, and found it at last — the little park I walk in every day.'},
    {zh:'有一個臨時攤位在賣乾花。薰衣草很便宜，還有很多其他乾花。我本來只是被薰衣草吸引，後來想著：不如為自己挑一束放在家裡。', en:'A pop-up stall was selling dried flowers. The lavender was cheap, and there were many others. At first only the lavender drew me; then I thought — why not pick a bunch for myself, to keep at home.'},
    {zh:'我拿了白色的蓮花。店主看到，把更大、更漂亮的那朵蓮花拿來給我，幫我搭配。有點貴，我一直在想要不要走，但最後買了。', en:'I took a white lotus. The seller saw, and brought me a larger, lovelier one to go with it. It was a little dear; I kept wondering whether to walk away — but in the end I bought it.'},
    {zh:'我拿著乾花回大廈，電梯只能到4樓。我想說去5樓走樓梯就好了，走上去。', en:'I carried the flowers back to the building; the lift only reached the 4th floor. I\'ll just take the stairs to the 5th, I thought, and climbed.'},
    {zh:'4樓開了門，完全不同的景色，像宇宙星球一樣設計的戶外走廊，找不到樓梯去5樓。我跟著一批人找了條摺疊式的樓梯上去。', en:'The 4th floor opened onto an entirely different scene — an outdoor corridor designed like a planet in space, no stairs to the 5th to be found. I followed a group to a folding staircases.'},
    {zh:'我貼著牆，沒有動。怪獸就在前面。', en:'I pressed myself against the wall and did not move. The monster was right there.'},
    {zh:'我回到家，把門鎖緊，只有我和貓。手上拿著那束乾花。', en:'I got home, locked it tight — only me and the cat, the bunch of dried flowers still in my hand.'},
    {zh:'我把其中一隻怪獸打暈，拖進家裡，用繩子綁它的手。怪獸教我怎麼綁才牢。它跪著，沒有反抗。', en:'I knocked one of the monsters out, dragged it inside, and tried to bind its hands. The monster taught me how. It knelt, and did not resist.'},
  ]},
  { id:'34', phase:'rebuild', titleZh:'豪宅迷宮父親燒木櫃', titleEn:'The Maze House, Father Burning Cabinets', panels:[
    {zh:'家人買了一間很大的房子，像迷宮一樣，每個房間之間都是鏤空的，沒有完全封閉的地方。交收的前一晚，我和爸爸先去住一夜。', en:'My family bought a very large house, like a maze, every room open to the next, nowhere fully sealed. The night before handover, my father and I went to stay one night.'},
    {zh:'2樓大廳有非常漂亮的木櫃子，精緻，舊式的工藝。我在自己的房間待著，嗅到燒焦的氣味。跑出去，爸爸在燒那些櫃子。', en:'In the second-floor hall stood beautiful wooden cabinets, exquisite, old-style craft. In my room I smelled burning. I ran out — my father was burning the cabinets.'},
    {zh:'我不知道為什麼他要燒，他也說不清楚。', en:'I don\'t know why he was burning them. He couldn\'t say either.'},
    {zh:'我拿了滅火器把火熄滅，對他大罵：「櫃子很漂亮，不要燒！」他也不辯解。', en:'I put the fire out with an extinguisher and shouted at him: the cabinets are beautiful — don\'t burn them! He didn\'t argue.'},
    {zh:'然後樓梯頂有動靜，一個拿著長槍的男人走下來，問我們是誰。他是豪宅的前男主人，不知道已經換了新主人。他拿著槍往前走，我讓他滾落下樓梯，他暈了。', en:'Then a stir at the top of the stairs — a man with a long gun came down, asking who we were. He was the mansion\'s former master, not knowing it had a new owner. He advanced with the gun; I sent him tumbling down the stairs, and he passed out.'},
    {zh:'第二天早上，女主人和地產代理來交收，其他家庭成員也來了。昨晚的事沒有人提起，就像沒有發生過。爸爸也不知道去了哪裡。', en:'The next morning the lady owner and the agent came for the handover, and the rest of the family too. No one mentioned the night before, as if it had never happened. And my father was nowhere to be found.'},
    {zh:'走出豪宅，在以前住過的那條街上，有一輛外賣車，以前從來沒見過。賣豆腐花和小食，招牌寫著「一線豆腐花」，但真正賣的只有二線和三線。我只是注意到這件事，然後繼續走。', en:'Leaving the mansion, on a street where I used to live, there was a food cart I\'d never seen — tofu pudding and snacks, its sign reading "first-rate tofu pudding," though it really only sold second and third grade. I just noticed it, and walked on.'},
  ]},
  { id:'35', phase:'rebuild', titleZh:'藥材鋪異能者彩虹能量場', titleEn:'The Herb Shop, the Rainbow', panels:[
    {zh:'那是一間看起來像藥材鋪的店，但我是去裡面理髮的。前面還有一個女生在等，輪到我的時候，我沒有剪，因為我認識了一個在那裡做兼職的人。', en:'It was a shop that looked like a herb shop, but I had gone in for a haircut. A girl waited ahead of me; when my turn came I didn\'t cut it, because I\'d met someone working there part-time.'},
    {zh:'他不是普通的兼職。他有特殊能力，可以切換去另一個維度輕鬆解決問題。不知道怎麼變成我們兩個在船上，急流，地圖在手，走錯了方向，在湍急的水裡U轉。', en:'He was no ordinary part-timer. He had a special power — he could switch to another dimension and solve things with ease. Somehow it became the two of us on a boat, rapids, a map in hand, gone the wrong way, U-turning in the rushing water. '},
    {zh:'好幾次差點流入錯誤的分支，但每次都找回了主流，最後水平靜了，我們到了某條河道。', en:'Several times we nearly slipped into the wrong branch, but each time found the main current again; at last the water calmed, and we reached a river.'},
    {zh:'之後，我們住在一起，養著一隻貓。也有他的朋友偶爾一起住，做同樣工作的人。', en:'After that we lived together, keeping a cat. His friends — others in the same work — sometimes stayed with us too.'},
    {zh:'有一次準備出門，街上突然出現一個行為很異常的人。', en:'Once, as we were about to go out, a man behaving very strangely appeared in the street.'},
    {zh:'他的真身出現了——彩虹能量場在他周圍，臉有些變形，我第一次看到他全部的力量。', en:'His true form showed — a rainbow energy field around him, his face somewhat distorted. For the first time I saw the whole of his power.'},
    {zh:'他看出那個異常的人不是壞人，是在找什麼，傷心地找。他把那個人帶去藥材鋪，在一個舊櫃子裡找到一盒錄影帶，原來他是剛去世的藥材鋪老闆的秘密兒子。', en:'He saw the strange man was not bad, but searching for something, searching in grief. He took him to the herb shop and found, in an old cabinet, a videotape — the man was the secret son of the shop\'s owner, who had just died.'},
  ]},
  { id:'36', phase:'rebuild', titleZh:'中國街變形動物小男孩', titleEn:'The Street of Altered Animals', panels:[
    {zh:'那條街在中國某個地方，看起來像普通的地鋪。旁邊一直有個小男孩，大概三歲，眼睛很大，背包連著風扇和冷氣管，一直吹著他的背。', en:'The street was somewhere in China, ordinary shopfronts in a row. Beside me walked a small boy, maybe three, with big eyes and a backpack rigged with a cooling fan.'},
    {zh:'矮頸的長頸鹿在水氹裡玩耍。', en:'A short-necked giraffe played in a puddle. '},
    {zh:'獵豹和她的寶寶住在一塊濕地裡。', en:'A cheetah and her cub lived in a marsh. '},
    {zh:'有一個鋪頭在賣貓肉，我身上抱著貓，立刻繞開，不讓那個人注意到我懷裡有一隻貓。', en:'One shop was selling cat meat; holding my cat, I went around at once, so the man wouldn\'t notice the cat in my arms.'},
    {zh:'過了那個賣貓肉的鋪頭，我手上突然多了兩條深海魚，粉紅色，頭是圓的，全是牙齒。我不知道從哪裡來的。', en:'Past the cat-meat shop, two deep-sea fish were suddenly in my hands — pink, round-headed, all teeth. I don\'t know where from.'},
    {zh:'一個不小心牠們就咬我的手，旁邊的人幫我把牠們移開，但我一直拿著。', en:'If I slipped they\'d bite my hand; people beside me pried them off, but I held on the whole way.'},
    {zh:'走完了整條街，小男孩找到一間Café，坐在玻璃窗後面休息。我在玻璃外面，清楚看到他，他也看著我。', en:'At the end of the street the boy found a café and rested behind the glass. I stood outside; I saw him clearly, and he looked back at me.'},
  ]},
  { id:'39b', phase:'action', titleZh:'Frantiono 旅遊小胖子', titleEn:'Frantiono, the Small Boy', panels:[
    {zh:'我參加了一個烹飪比賽。黑色的背景，十組人以內，我已經決定好菜式，和其中一組廚師合作，用他們的醬汁。試了幾次，大家都很滿意。', en:'I entered a cooking contest. A black backdrop, fewer than ten teams. I\'d settled my dish, teamed with one group of chefs, using their sauce. We tried it a few times, and everyone was pleased.'},
    {zh:'然後我張開眼，已經是下午，比賽早上九點就開始，電視的直播裡已經沒有我，我被取消了資格。不知道什麼情況，只是不在了。我擔心和我合作的廚師怎麼辦，比擔心自己更多一點。', en:'Then I opened my eyes — it was afternoon. It had begun at nine; I was gone from the broadcast, disqualified. I don\'t know how, only that I wasn\'t in it. I worried more for the chefs I\'d teamed with than for myself.'},
    {zh:'到了一個叫Frantiono的地方，很大的水池，像埃及，又像墨西哥，像歐洲。很明顯是旅遊，我一直看著手機上的地圖，上面標了很多餐廳，但那個地方我不熟悉。', en:'I came to a place called Frantiono — a great pool, like Egypt, like Mexico, like Europe. Clearly a tourist place. I kept watching the map on my phone, marked with many restaurants, but the place was strange to me.'},
    {zh:'有一個小胖子小朋友和我一起。我牽著他，拉著行李，去市中心找了一間比較暗、比較小的旅館住下來。', en:'A small, round-cheeked child was with me. Holding his hand and dragging my luggage, I found a dim little inn downtown and settled in.'},
    {zh:'第二天帶著他在市中心邊緣走。手機拿著地圖，但不敢太明顯地拿出來，怕被偷。', en:'The next day I walked him along the edge of downtown. Map in hand, but I didn\'t dare hold it openly, afraid of thieves.'},
    {zh:'他走累了，我把他抱起來，急著回市中心，因為要退房。地圖上有很多餐廳，我都不想去。時間到了下午，我還沒走回去，很緊。', en:'He grew tired; I picked him up, hurrying back to check out. The map showed many restaurants; I wanted none of them. Afternoon came and I still hadn\'t made it back. The tightness rose.'},
    {zh:'我突然想起忘了讓他吃早餐。他不說話，臉色蒼白，快暈了。我沒有食物，給他喝水，他喝了很多，抱他走的時候，他把水吐了一些出來。', en:'I suddenly remembered I\'d forgotten his breakfast. He said nothing, pale, near fainting. I had no food; I gave him water, and he drank a lot, bringing some up as I carried him. '},
    {zh:'我繼續走，走回旅館，先給他一罐貓罐頭吃，然後開始收拾行李。', en:'I kept going, back to the inn, fed him a tin of cat food first, then began to pack.'},
  ]},
  { id:'40', phase:'rebuild', titleZh:'室內種植盆家人無視', titleEn:'The Growing Bed No One Sees', panels:[
    {zh:'家裡全是白色，遠房親戚也來了，人很多，走來走去，但冷冷清清的。', en:'The home was all white. Distant relatives had come too — many people, moving about, and yet cold and deserted.'},
    {zh:'客廳的某個角落，有一個很大的室內種植盆，像一塊小田。它放在那裡很久了，但今天我才仔細看。裡面有西蘭花、蔬菜、蘿蔔，長得很大，有些已經可以收成，有些剛開始枯萎。', en:'In a corner of the living room, a large indoor planter, like a little field. It had stood there a long time, but only today did I look closely. Inside: broccoli, vegetables, radish, grown big, some ready to harvest, some just starting to wither.'},
    {zh:'我像發現什麼珍貴的事情一樣開心，整個家只有這裡是有生命的。', en:'I was glad, as if I\'d found something precious — in the whole house, only here was alive.'},
    {zh:'我叫弟弟來看，他不以為然。叫堂姐來看，她也沒有興趣。每個人從旁邊走過，都沒有人停下來。', en:'I called my brother to look; he was unimpressed. My cousin; she had no interest either. Everyone passed by, and no one stopped.'},
    {zh:'走近了看，是水耕，發泡膠和木架鐵架搭的，本來有氣泵傳水，但我一查，氣泵沒有插電，水早就乾了。什麼支援都沒有，它還是長出了這麼多。我調整到最適合自己的高度，站在那裡仔細看。', en:'Up close it was hydroponic — foam and wood-and-metal frames. There was meant to be a pump feeding water, but when I checked, it wasn\'t plugged in; the water had long dried. With no support at all, still it had grown all this. I adjusted it to the height that suited me best, and stood there looking closely.'},
    {zh:'後來爸爸出門了，他說他不想留在這裡，雖然全都是他的親戚。', en:'Then my father left, saying he didn\'t want to stay — though they were all his own relatives.'},
    {zh:'媽媽在廚房，看到我走過去，給我看一份設計圖，是她自己找人做的。她不需要我幫忙，只是通知我。我以前都是幫她做這些事的。客廳還是很多人，我的心一直是空的。', en:'Mother was in the kitchen; seeing me come over, she showed me a design she\'d had made herself. She didn\'t need my help; she was only telling me. I used to do these things for her. The living room was still full of people. My heart stayed empty.'},
  ]},
  { id:'42', phase:'action', titleZh:'蛇人受傷父親房間', titleEn:'The Wounded Serpent-Man', panels:[
    {zh:'他受了很重的傷。他是蛇，但可以幻化成人形，現在是人的樣子，坐在我家裡，非常害怕。', en:'He was badly wounded. He was a serpent, but could take human form; now he sat in my home as a man, terrified. '},
    {zh:'我想幫他，想把他固定住，方便療傷，試了幾條頸鏈，粗的、幼的，都套不住他。不是他掙脫，是他的本質就不是被鏈條能困住的東西。', en:'I wanted to help, to hold him still to tend the wound, and tried several chains, thick and thin — none could hold him. Not because he broke free, but because his nature was simply not a thing a chain could bind.'},
    {zh:'他知道我要幫他，讓我為他處理傷口。', en:'He knew I meant to help, and let me dress the wound. '},
    {zh:'傷好了一些之後，他躲進了家裡唯一一個有門的房間，我爸爸的房間。', en:'Once it had healed a little, he hid in the only room in the house with a door — my father\'s room.  '},
    {zh:'爸媽回來，不需要我解釋，他們已經知道有什麼東西在那個房間。他們很不安，一直催我把它趕走，或者用粗暴的方式逼他離開。', en:'My parents came home, and without my explaining already knew something was in that room. Uneasy, they kept urging me to drive it out, or to force it to leave by rough means. '},
    {zh:'我在洗碗。我沒有管他們。', en:'I was washing dishes. I paid them no mind. '},
    {zh:'我把食物推進門縫裡。', en:'I pushed food through the gap.'},
    {zh:'他從爸爸的房間走出來，是個很高的男人，把放在房間裡的碗拿到我旁邊，說謝謝我，但不想再麻煩了，就離開了。是他自己決定的。', en:'He came out of my father\'s room, a very tall man, brought the bowl from the room over to me, said thank you — but didn\'t want to be a trouble any longer, and left. It was his own decision.'},
  ]},
  { id:'47', phase:'fly', titleZh:'自殺計劃白鷹飛翔', titleEn:'The White Eagle', panels:[
    {zh:'我把易燃的罐放在前門的車旁，也倒在後院，準備點燃，然後爆炸。', en:'I set the cans of fuel by the car at the front door, and poured more in the back yard, ready to light it, and then the blast.'},
    {zh:'一個朋友來了。她來到，我就無法進行，因為她在。她說她很累，拒絕了帶我去散步，去洗澡了。我在房間裡靜靜地整理要離開的東西。', en:'A friend came. With her there, I couldn\'t go through with it. She said she was tired, declined to take me for a walk, and went to wash. In my room I quietly arranged the things I meant to leave behind.'},
    {zh:'手機響了，一個只在網上聊過很短時間的人打電話來，一接就是一串告白，聽得到他身邊有人在鼓勵他。我聽到他的聲音就認出他是誰，心裡是高興的，但我打算完結，所以我裝傻，給了一個讓他失望的回應。他掛電話了。', en:'The phone rang — someone I\'d only spoken with online, briefly. The moment I answered, a rush of confession; I could hear people beside him egging him on. I knew his voice at once, and was glad inside — but I meant to end things, so I played dumb and gave him a disappointing reply. He hung up.'},
    {zh:'門外有動靜，我走出去看，白馬從草叢走出來，跑走了。', en:'A stir outside; I went to look. A white horse stepped out of the grass and ran off.'},
    {zh:'一隻鹿走出來。所有人都很驚訝。', en:' A deer came out. Everyone was astonished.'},
    {zh:'後院有一隻非常大的白色的鷹，很大很大。', en:'In the back yard, an enormous white eagle — vast, vast. '},
    {zh:'我騎上去，抱著牠的頸，牠帶我飛。我一邊飛，一邊哭。', en:'I climbed on, held its neck, and it carried me into flight. I flew, and I wept. '},
    {zh:'我走到朋友面前，哭著說：我剛才很想很想離開這個世界，但這樣不能拿到保險，有沒有辦法讓人進來殺了我？沒有回答。', en:'I went to my friend and said, weeping: just now I wanted so badly to leave this world, but this way the insurance won\'t pay — is there a way to have someone come in and kill me? No answer.'},
  ]},
  { id:'48', phase:'fly', titleZh:'水族館殺人鯨鑲嵌玻璃', titleEn:'The Aquarium, Stained Glass', panels:[
    {zh:'那個水族館不是正常的水族館。魚缸在外面，有些魚放在桌子上，像街市一樣，乾燥的，靜止的。桌面上有幾條秋刀魚大小的魚，還有非常小的殺人鯨寶寶，比寶寶稍大一點，就那樣放在桌上。', en:'It was no ordinary aquarium. The tanks were outside; some fish lay on tables, like a wet market, dry and still. On the table were a few fish the size of saury, and a very small baby orca, just a bit bigger than a newborn, simply set there.'},
    {zh:'從小我就怕殺人鯨，書上看到圖片都會心底下害怕，說不出原因，就是怕。夢裡，那幾隻很小的殺人鯨放在桌上，我站在旁邊，沒有害怕。', en:'Since childhood I\'ve feared orcas — even a picture in a book frightened me deep down, for no reason I could name. In the dream, the tiny orcas lay on the table, and I stood beside them, unafraid.'},
    {zh:'水族館是一條很長的走廊，右邊全是魚缸，下半部是展覽區，走到底，都是殺人鯨和其他魚，我從頭走到尾。', en:'The aquarium was one long corridor, tanks all down the right, an exhibition along the lower half; all the way to the end, orcas and other fish. I walked it from start to finish.'},
    {zh:'我負責開車帶一班人去看鑲嵌玻璃展覽。到了那裡，大家先去旁邊的紀念品店逛了一圈。之後我自己開車去旁邊的雙層鑲嵌玻璃展覽館，那裡快要關門了，但保安說歡迎我進去。', en:'I was driving a group to see a stained-glass exhibition. When we arrived, everyone first went round the gift shop next door.Afterward I drove on alone to the two-storey stained-glass hall nearby. It was nearly closing, but the guard said I was welcome to come in.'},
    {zh:'我是學鑲嵌玻璃的，非常喜歡這個技術。', en:'I study stained glass and love the craft.'},
    {zh:'看著牆上大小小小的玻璃作品，我低頭，發現手上拿著一件自己做的鑲嵌玻璃，就這樣邊看展覽邊拿著它，像是也在展示。快要走完的時候，我仔細看了看手上那件，其實是草圖，不是完成品。', en:'Looking at the works on the wall, large and small, I glanced down and found in my hands a piece of my own, carrying it as I viewed the show, as if it too were on display. Near the end, I looked closely at the one in my hands: it was only a sketch, not a finished piece.'},
  ]},
  { id:'52', phase:'float', titleZh:'絕症戀人變中性媽媽麵包店', titleEn:'The Bakery at Dusk', panels:[
    {zh:'他有絕症，類似癌症，一直都很弱。我細心照顧他，這段關係就是這樣走著的。', en:'He had a terminal illness, like cancer, and was always weak. I cared for him tenderly; that was how the relationship went.'},
    {zh:'有一天他的眼神變了，神情變了，整個人不一樣了。', en:'One day his eyes changed, his expression changed, his whole self was different. '},
    {zh:'他告訴我，他女性的部分想做很多生意，賺很多錢，樣子也變得中性。穿越商場，裡面有活動，人很多，我在人群裡穿梭離開。', en:'He told me his feminine side wanted to do much business, make much money; his look turned androgynous. '},
    {zh:'那種熱情和氣勢讓我措手不及。我逃了。', en:'That heat and force caught me off guard. I fled. '},
    {zh:'麵包店裡找到媽媽。我和她很不熟悉，感到疏離，但我知道：只要我在她旁邊，就永遠有個位置，她會接納我。', en:'In a bakery I found my mother. We were not close; I felt the distance — but I knew: as long as I am beside her, there is always a place, and she will take me in.'},
    {zh:'黃昏，麵包店，我在媽媽旁邊，就記得到這裡。', en:'Dusk, the bakery, me beside my mother — that is as far as I remember.'},
  ]},
  { id:'53', phase:'float', titleZh:'鐵達尼號泥漿浮木求生', titleEn:'The Sinking, a Floating Door', panels:[
    {zh:'水不是水，是泥漿。和鐵達尼號沉沒的感覺一樣，只是每一個沉進去的地方都是泥漿，不透明，沉重，包裹著一切。', en:'The water was not water. It was mud.It felt like the Titanic going down, only every place that sank was mud — opaque, heavy, wrapping around everything. '},
    {zh:'船身一個部分一個部分地沉入，泥漿從那些缺口湧進來。', en:'The hull went under section by section, mud surging through the gaps. '},
    {zh:'我從一個部分躲到下一個，再下一個，繼續移動。', en:'I moved from one section to the next, and the next, and kept moving.'},
    {zh:'最後那個部分沉了，沒有地方可以再躲，泥漿湧進來，我也沉進去了。', en:'The last section sank. There was nowhere left to hide. The mud poured in, and I sank with it.'},
    {zh:'泥漿裡有一扇木門，漂著。我找到它，爬上去。', en:'In the mud, a wooden door, floating. I found it, and climbed on.'},
    {zh:'沒有猶豫。', en:'Without hesitation.'},
  ]},
];
