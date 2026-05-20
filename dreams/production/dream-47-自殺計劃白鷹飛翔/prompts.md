<!-- 2026-05-16 | Strategy pivoted to 9:16 production; Panel 1 ready; 1:1 deferred to integration -->

# ⭐ 三 Anchor 系統（2026-05-16 最終定案）

## SOP 鐵則
> **「選 anchor 不是選最美的圖，是選能服務最多場景的圖。」**

## 為什麼需要三個錨點

**血的教訓：** 
- v3-v6 用單一強主體圖（白鷹）當 sref → 內容滲漏 + 色調強拉亮
- 第一次 Style Anchor（廢牆紋理）→ 美學家族錯了，太工業/廢墟，不是繪本

**最終結構：** 風格、亮系風格、內容三層分離。

| Anchor 類型 | URL | 用途 |
|-----------|------|------|
| **Primary Style Anchor**（雲層 Pic 4，多色階） | `https://cdn.midjourney.com/9cb73c88-6bdd-45ad-9c22-f46c32bcb1e0/0_3.png` | **默認** sref，服務 15+ 個夢（暗、中、暖都能） |
| **Bright Style Anchor**（雲層 Pic 1，純希望） | `https://cdn.midjourney.com/9cb73c88-6bdd-45ad-9c22-f46c32bcb1e0/0_0.png` | 少數純希望 panel 才用（飛行高潮、暖光浮起、被偏愛） |
| **Content Anchor**（原白鷹圖） | `https://cdn.midjourney.com/46b2f4d3-7f55-4842-af8a-de2b631bd94c/0_2_128_N.webp` | 白鷹 panel 的 sref + oref；其他夢含主角的 panel 的 oref |

## 使用規則

| Panel 類型 | sref | oref |
|----------|------|------|
| 風景 / 物件（無人）panels | Style Anchor | 不用 |
| 含主角 panels（非白鷹） | Style Anchor | Content Anchor |
| 白鷹 panel（Panel 7） | Content Anchor | Content Anchor |

---

## Style Anchor 生成 Prompt（待 Eve 執行）

```
An abstract painterly oil painting on aged fresco wall surface. No figures, no animals, no specific scene, no recognizable objects — purely abstract texture and atmosphere. Subtle vertical streaks running down the canvas like aged paint slowly dripping over decades. Faint scattered circular marks across the canvas, like sacred geometry dots embedded in the weathered surface. Parchment-like grain throughout. Soft painterly brushwork visible up close.

The color palette gradients across the canvas — some areas pale ivory and soft silver, other areas deeper slate grey and midnight blue, with hints of warm umber in the lower regions. Ambient luminescence held within the surface itself, no clear light source, no hard shadows.

The painting feels like an ancient mural that has weathered centuries — meditative, devotional, painterly, holding many possible moods within one surface.

--ar 1:1 --v 7 --style raw --stylize 400 --chaos 5 --no figures, people, animals, birds, eagle, woman, person, recognizable subject, specific scene
```

### 驗收
- 沒有任何可辨識的形體（人、鳥、物）
- 油畫風化壁畫質地清楚
- 顏色有亮有暗的漸層（不被單一色調主導）
- 圓形標記和 vertical streaks 可見

# 🎯 重大策略轉向（2026-05-16）

**所有 panels 改用 9:16 生產，1:1 / 4:5 留到最後 outpaint。**

理由：
- 錨點圖是 9:16，sref 生產 9:16 質感最穩
- 直接生 1:1 構圖壓不住（v3-v6 證明）
- 9:16 = YouTube Shorts + IG Stories
- 整合期一次性 outpaint 所有 152 panels 成 1:1 + 4:5

# Dream #47 Prompts — 白鷹飛翔

**全部 1:1 比例。Panel 7 v5：使用原 9:16 圖作為 sref + oref，1:1 重新框。**

---

## ⚠️ Midjourney v7 重要協定（適用全 19 夢）

| 項目 | 規則 |
|------|------|
| Character ref | `--oref [URL]`（v7 取代 cref） |
| Character weight | `--ow 300-500` |
| Style ref | `--sref [URL]` |
| Style weight | `--sw 100-200` |
| Stylize | `--stylize 250-400` 適合油畫 |
| Chaos | `--chaos 10-20` |
| Style raw | `--style raw` |
| Negative | `--no [元素]` |
| Oref 限制 | 不可用 Fast Mode，2x GPU 成本 |

---

## Panel 7 — 改用 Outpainting 策略（2026-05-16 大轉向）

**v3-v6 全部失敗的根本原因：** 用 prompt 從零重新生成，永遠不會跟原圖一模一樣。

**Eve 真正的需求：** 原圖（9:16）所有物件大小、位置、比例**完全不變**，只是把畫布**擴展為 1:1**。

**正確方法：Outpainting / 延伸畫布** — 不是生成新圖，是在原圖左右各加約 400px 的空白空氣。

---

### 執行方法 — Outpainting

**首選 — Midjourney Editor：**
1. 在 MJ 網頁找原 9:16 白鷹圖
2. Editor → Custom Zoom 或 Pan
3. 比例改 1:1
4. Prompt 框：
```
continue the pale luminous ivory and silver sky, aged fresco surface with subtle vertical streaks, faint scattered circular sacred marks, parchment grain, painterly soft brushwork, sourceless ambient light, no shadows, breathing emptiness
```
5. 出圖 → 選兩側最自然的

**備案 — Photopea（免費）：**
1. photopea.com → 開原圖
2. Image → Canvas Size 改成 1:1（中央錨點）
3. AI Generative Fill 框選空白區
4. 同上 prompt

**最高品質 — Adobe Firefly：**
- Generative Expand 拖到 1:1

---

### 驗收標準
1. **中央不變** — 鷹、女主、草地、雲、現有質地完全等同原圖
2. **兩側自然** — 新延伸的左右空白和原圖質地融合（vertical streaks 接得上）
3. **比例正確** — 1080×1080 或 1820×1820，標準 1:1
4. **整體留白增加** — 因為兩側多了空間，整體呼吸感提升

### 成功後
這張新 1:1 圖成為**永久 Style + Character 錨點**。
但**所有後續 panel 也建議在 9:16 生成 → outpainting 到 1:1**，比直接生成 1:1 穩定。

### 成功後的後續流程
1. 上傳成功的 v5 1:1 Panel 7 到 MJ → 取新 URL（這成為**永久錨點**）
2. Panel 1-6, 8 全部使用新 URL：
   - 風景 / 物件 panels：`--sref [新URL] --sw 100`
   - 含主角 panels：`--sref [新URL] --sw 100 --oref [新URL] --ow 400`

### Oref 成本管理
- 19 夢 × 8 panels = 152 panels
- 含主角 panels：~80 張 × 2x GPU = 160 GPU units
- 風景 / 物件 panels：~72 張 × 1x = 72 units
- 總 ~232 units → Standard 月度 15hr Fast 仍綽綽有餘

---

## 歷史版本記錄

- v1（2026-05-15）：依賴原 9:16 sref，文字過長，使用過期 `--cref`
- v2A/B/C（2026-05-16）：三個 sref-based 替代版（仍用過期 cref 語法）
- v3（2026-05-16）：完全從零無 sref，鷹當主角，臉太小
- v4（2026-05-16）：過度修正去 EXTREME CLOSE-UP（暫時方向錯誤）
- v5（2026-05-16）：回到使用原 9:16 為 sref + oref，質地對了但鷹太貼地、留白不夠
- **v6（2026-05-16）：加 COMPOSITION RULES 段落，明確要求鷹在上 1/3、草地細線、50%+ 留白 ← 當前版本**

---

---

## Panel 1：後院的計劃 v3（9:16，無主角，深夜，新 sref）

**v2 失敗教訓：** 用白鷹圖當 sref，鷹和女主從原圖滲漏進來，色調被拉亮
**v3 修正：** 改用 Pic 4 雲層當 sref（多色階，無強主體），強 `--no clouds, sky scene` 防止天空滲漏

```
A quiet suburban backyard at deep night, view from ground level. The entire scene is dark and cold: deep midnight blue and dark slate grey wash over everything, with faint cold luminescence in the air — ambient sourceless light, no moon, no stars, no hard shadows. Pale dry winter grass darkened by night, with several glistening wet patches in the grass where flammable fuel has been recently poured — the grass soaked and shining faintly in the cold dim light.

Several red plastic gasoline jerry cans and metal fuel containers placed prominently in the grass and against a modest suburban back door, some upright, some tipped over and emptied. The cans catch the faint cold light, drawing the eye as the central focus of the painting — clearly recognizable as fuel containers, dangerous objects in this quiet domestic scene.

The back door is closed, dark wood, slightly ajar, with the faintest pale glow leaking from inside. Beyond, the silhouette of a simple suburban home barely visible in the darkness. No human figure, no movement, no animals, no birds — only the cans, the wet grass, the closed door, and the cold night air.

The mood: helpless, hopeless, despairing — the quiet stillness of someone who has already decided. A scene of preparation for something unspeakable.

Painterly oil on subtly aged surface, soft brushwork, gentle painterly weathering quality (not a wall — the painting itself feels like a page from a vintage storybook). Studio Ghibli's quiet night scenes meeting classical oil painting traditions. Sacred, painterly, melancholic, weighted with sorrow.

--ar 9:16 --v 7 --style raw --stylize 350 --chaos 10 --sref https://cdn.midjourney.com/9cb73c88-6bdd-45ad-9c22-f46c32bcb1e0/0_3.png --sw 100 --no clouds, sky scene, daylight, dawn, sunrise, bright sun, human figure, person, people, animals, birds, eagle, white feathers, rural cottage, country shack, milk cans, barrels, gritty texture, rust, weathered wall, industrial, concrete, peeling paint, harsh edges, photorealism
```

### 驗收四關鍵字
1. **深夜** — 整體真的是深夜藍灰，不是早晨
2. **罐子顯眼** — 紅色塑膠汽油罐清楚可見，是視覺焦點
3. **絕望** — 草地濕、罐子歪倒、「已經決定了」的死寂氣質
4. **沒滲漏** — 沒有雲、沒有鷹、沒有人

---

## Panel 1 歷史
- v1：用白鷹 sref，出來像鄉村小屋 + 奶罐 + 早晨光
- v2：仍用白鷹 sref + 強night 描述，鷹和女主還是跑出來
- **v3：改用 Pic 4 雲層 sref，移除鷹滲漏風險 ✅ 成立**

## Panel 1 新規則（從 v3 學到）
> **「易燃罐附近不要有任何火源（燈、燭、火）」** — 物理矛盾破壞畫面。
> 之後所有含汽油罐的 prompt 自動加 `--no lantern near cans, lamp near gasoline, flame near fuel`

---

## Panel 2：朋友到了（9:16，無主角面孔，深夜室內 doorway）

**情境：** 同一個深夜，門響了，朋友站在門口疲倦地站著。
**情緒任務：** 「一個她不知道自己阻止了什麼的到來」。
**對比：** 室內暖琥珀光（生）vs 後院冷黑（死）

```
A modest suburban entryway at deep night, view from inside the home looking outward toward an open back door. In the doorway stands the silhouette of a young woman who has just arrived — standing tired, head slightly bowed, dark long hair loose around her shoulders, one hand resting on the doorframe, her whole body weighted with fatigue. Only her dark silhouette is visible against the cold dim night outside — no facial features, no expression, just her shape.

The interior of the home glows faintly with warm soft amber light — gentle pools of orange-yellow warmth surrounding her silhouette at the threshold. Beyond the open door: the cold dark backyard, with faint glimpses of red fuel cans far in the distance, dim and receding into the night.

The center of the painting is the threshold itself — warm life entering at the door, cold preparation waiting in the yard beyond. She does not yet know what she has interrupted.

The mood: a small, tired, ordinary arrival that holds enormous unseen weight. Quiet, gentle, devotional, hushed.

Painterly oil on subtly aged surface, soft brushwork, gentle painterly weathering (the painting feels like a page from a vintage storybook). Studio Ghibli's quiet domestic moments meeting classical oil painting traditions. Sacred, gentle, devotional, hushed.

--ar 9:16 --v 7 --style raw --stylize 350 --chaos 10 --sref https://cdn.midjourney.com/9cb73c88-6bdd-45ad-9c22-f46c32bcb1e0/0_3.png --sw 100 --no clouds, sky scene, daylight, dawn, sunrise, bright sun, eagle, bird, white feathers, animals, facial features, face visible, full body, sharp details, photorealism, gritty texture, rust spots, weathered wall, industrial, lantern near cans, lamp near gasoline, flame near fuel
```

### 驗收
1. **門檻** — 構圖中央是門口，分隔內外
2. **疲倦剪影** — 朋友是疲憊剪影，看不到臉
3. **冷暖對比** — 室內暖琥珀 vs 室外冷夜

**v1 失敗教訓：** 設定錯成早晨，色調太柔，罐子像奶罐不像汽油罐，氛圍像鄉村小屋不像郊區後院。
**v2 修正：** 回到原夢 — 深夜、絕望、汽油已倒在草地上、易燃罐顯眼。

**重讀原夢：** 「我打算自殺，我把很多易燃的罐放在前門的車旁，倒在後院，我在準備點燃然後會爆炸」— 朋友還沒到，她獨自一人，已經把汽油倒了。

**情境：** 深夜，獨自一人，已準備就緒。
**情緒任務：** 無助、失望、絕望。「已經決定了」的死寂。
**主色：** 午夜藍 + 深灰 + 冰冷微光（在飛起階段之前的最暗時刻）

```
A quiet suburban backyard at deep night, view from low ground level. The entire scene is dark and cold: deep midnight blue and dark slate grey wash over everything, with faint cold luminescence in the air — ambient sourceless light, no moon, no stars, no hard shadows. Pale dry winter grass darkened by night, with several glistening wet patches where flammable fuel has been poured — the grass soaked.

Several red plastic gasoline jerry cans and metal fuel containers placed prominently in the grass and against a modest suburban back door, some upright, some tipped over and emptied. The cans catch the faint cold light, drawing the eye as the central focus of the painting — clearly recognizable as fuel containers, dangerous objects in this quiet domestic scene.

The back door is closed, dark wood, slightly ajar, with the faintest pale glow from inside. Beyond, the silhouette of a simple suburban home. No human figure, no movement, no animals — only the objects, the wet grass, the closed door, and the cold night air.

The mood: helpless, hopeless, despairing — the quiet stillness of someone who has already decided. A scene of preparation for something unspeakable.

Oil painting on aged fresco surface, subtle vertical streaks like aged paint dripping over decades, faint scattered circular marks across the canvas like sacred geometry dots, parchment grain, painterly soft brushwork. Sacred, painterly, melancholic, weighted with sorrow.

--ar 9:16 --v 7 --style raw --stylize 350 --chaos 10 --sref https://cdn.midjourney.com/46b2f4d3-7f55-4842-af8a-de2b631bd94c/0_2_128_N.webp --sw 60 --no human figure, person, people, animals, rural cottage, country shack, dawn light, sunrise, warm sunny light, fire, flames, explosion, daylight, bright sky, milk cans, barrels
```

### 驗收三關鍵字
1. **深夜** — 整個畫面是深夜藍灰，不是早晨
2. **罐子顯眼** — 紅色塑膠汽油罐 / 金屬油罐清楚可見，是視覺焦點
3. **絕望** — 草地濕、罐子歪倒、「已經決定了」的死寂氣質

### v1 → v2 改動
- 時間：dawn → **deep night**
- 色調：米白淡藍 → **午夜藍深灰**
- 罐子類型：plain metal → **red plastic jerry cans + metal fuel containers**
- 罐子權重：被動 → **central focus, drawing the eye**
- 草地狀態：dry → **wet, soaked patches**
- 情緒：too gentle → **helpless, hopeless, someone who has already decided**
- `--sw`：100 → **60**（避免白鷹明亮 sref 把這張變早晨）
- `--no`：加 dawn light, sunrise, rural cottage, milk cans, barrels
