<!-- 2026-05-17 | Visual style guide for Dream Picture Book project — Eve's established aesthetic -->

# Dream Picture Book — Style Guide

## 北極星
> 讓任何時間、任何地方，正在經歷迷茫和混亂的人，知道有一個人和他們一樣，而那個人沒有放棄。

**長期願景：** 像宮崎駿般偉大、充滿愛、勇敢（Brave）。

---

## 1. Style DNA — 不可違反的視覺血統

### 屬於的家族（YES）
- **Studio Ghibli** 背景畫（《天空之城》《魔法公主》《幽靈公主》那種大幅水彩+油畫風景）
- **Brad Kunkle** 的金箔女子與鳥系列（柔筆觸、空靈、靈性）
- **古典油畫繪本插畫**（Rebecca Dautremer、Lisbeth Zwerger、Yoann Lossel）
- **Vermeer**（親密室內光、靜物）
- **Caravaggio chiaroscuro**（黑暗中的微光）
- **Hammershøi**（靜謐室內、克制情緒）
- **Caspar David Friedrich Rückenfigur**（背影望景的孤獨）

### 不屬於的家族（NO — 絕不出現）
- ❌ Anselm Kiefer（過於工業、廢墟）
- ❌ Gothic / 哥德教堂 / 中世紀城堡
- ❌ Video game graphics / 3D rendering / Harry Potter
- ❌ Photorealism / 照片寫實
- ❌ Modern / Sterile / 醫院感
- ❌ Vivid neon / 霓虹 / 鮮豔飽和色
- ❌ Horror movie aesthetic（恐怖片美學）
- ❌ Dramatic theatrical lighting / Harsh shadows
- ❌ Magical glow effects / 發光特效

### 必加的質地關鍵字
```
painterly oil on subtly aged surface, soft brushwork, gentle painterly weathering,
page from an old fairytale book, vintage storybook quality
```

---

## 2. 三個 Anchors

| 用途 | URL |
|------|------|
| **Primary Style**（默認用，多色階）| `https://cdn.midjourney.com/9cb73c88-6bdd-45ad-9c22-f46c32bcb1e0/0_3.png` |
| **Bright Style**（純希望時刻用）| `https://cdn.midjourney.com/9cb73c88-6bdd-45ad-9c22-f46c32bcb1e0/0_0.png` |
| **Eagle / Character**（鷹相關 + 主角面孔錨）| `https://cdn.midjourney.com/46b2f4d3-7f55-4842-af8a-de2b631bd94c/0_2_128_N.webp` |

---

## 3. 色階時間軸（依夢的階段）

| 階段 | 月份 | 主色 | `--sw` 建議 |
|------|------|------|-----|
| 出發 | 2025/4-5 | 暖灰、淺木色 | 100 |
| 失去 | 2025/6-8 | 灰藍、冷白 | 80-100 |
| 暴力與覺察 | 2025/8-9 | 鐵鏽紅、暗綠 | 80-100 |
| **心死** | 2025/10 | **純黑灰，無彩色** | **40-60** |
| 重建 | 2025/11-12 | 乾燥植物色、磚紅 | 80-100 |
| 行動的呼喚 | 2026/1-2 | 不安的螢光、夜藍 | 60-80 |
| **飛起** | 2026/3 | 白光、彩虹、冷銀 | 100（用 Bright 或 Eagle anchor）|
| 浮起 | 2026/4-5 | 泥土色、暖琥珀 | 100 |

**特例：** Dream #02 雖屬「出發」階段，但夢本身是全灰無色 → 用 `--sw 40-50` 強制壓色。

---

## 4. 母題（出現在夢裏才畫）

- **貓** — 黑長毛、黃綠琥珀眼。只在夢真的有貓時出現。
- **樓梯** — 扁平梯級、灰、HK 後樓梯感。出現時必須明確方向（往下 vs 往上）。
- **寶藏** — 容器 + 從縫隙漏出的光。在被遺棄的東西裏。
- **水** — 1清水 / 2雨 / 3海 / 4洪水 / 5泥漿。
- **網格籠** — 黑色金屬細網、懸浮虛空、要爬入。

---

## 4.6 內容鐵則（2026-05-19 加入）

**所有畫面：永遠沒有任何文字、字母、招牌、標籤、書寫文字（任何語言）。**
即使 prompt 沒提到，預設必加 `--no text, letters, words, writing, signs, labels, captions, typography, characters on walls, written language, Chinese characters visible, English text`

## 4.7 設定鐵則（2026-05-19 加入）

**每個夢是獨立的。** 設定只能跟著該夢本身的內容。
- ❌ 不假設 HK（除非夢明示）
- ❌ 不從其他夢借設定
- ❌ 不從上一個夢延續地點
- ✅ 只描述該夢明確提到的東西
- ✅ 沒提到的留白，讓 sref 決定

## 4.5 角色外貌規則（2026-05-19 訂正）

**沒有全域髮色規則。** 只在原夢明確描述時，才在 prompt 寫髮色。
- Dream #7 流浪漢 → WHITE HAIR（原夢未明示，但 Eve 確認）
- Dream #15 中學朋友 → dark hair（Eve 確認）
- 其他夢 → 不指定髮色，讓 sref 決定

---

## 5. 文字（散文）守則

- 第一人稱「我」
- 短句、留白
- 不出現大字眼：自由、希望、勇氣、療癒
- 不命令讀者：你需要 / 你應該
- 具體細節（時間、物件、聲音、溫度）
- 用動作和場景帶情緒，不用情緒詞
- 結尾不收緊，讓讀者自己接住
- 每夢 ~100-120 字
