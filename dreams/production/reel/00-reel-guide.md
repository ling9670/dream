# Among All Dreams — Reel Production Guide

**Project:** 夢裡夢外 (Among All Dreams)  
**Format:** 18 short reels, one per dream, Instagram/YouTube Shorts  
**Duration per reel:** 45–75 seconds  
**Last updated:** 2026-05-26

---

## ElevenLabs Settings

### Recommended Voice Profile
- **Language:** Traditional Chinese (zh-TW)
- **Voice style:** Conversational, calm, slightly hushed — like someone recounting a dream at dawn
- **Stability:** 0.65–0.72 (moderate; allows natural breath variation without over-emoting)
- **Similarity Boost:** 0.80–0.85 (keep voice consistent across all 18 reels)
- **Style:** 0.10–0.15 (minimal stylisation — this VO should feel like a quiet interior monologue, not performance)
- **Speaker Boost:** ON (sharpens clarity for short clips)

### Punctuation conventions for this project
- `——` (em-dash): brief mid-sentence breath, visual pause without full stop
- `……` (ellipsis): hesitation, trailing off, something unsaid
- `。` (ideographic full stop): standard sentence end, natural pause
- `<break time="0.5s"/>` : use in ElevenLabs for moments where silence carries emotional weight (used sparingly — max 2 per reel)
- `<break time="1.0s"/>` : full hold, black frame transition or held image — use only once per reel if at all

### Pacing calibration
Before recording all 18 reels, record Dream #01 Panel 1 as a test. Target: approximately 5–6 seconds of audio for those two sentences. Adjust Stability up if the pace is too fast; down if it sounds over-deliberate.

### File export
- Format: MP3 (for CapCut import)
- Sample rate: 44.1 kHz
- Export one file per panel (not one per reel) — easier to retime in CapCut

---

## CapCut General Workflow

### Import order
1. Import all storybook panel images (JPEGs, 9:16) for the target dream
2. Arrange panels in order on the timeline
3. Import VO audio files (one MP3 per panel)
4. Align each VO clip to its image panel
5. Trim/extend panel duration to match VO + hold time
6. Add text overlays
7. Add music (ambient layer, volume ~20–30% under VO)
8. Apply transitions between panels
9. Export: 1080×1920, H.264, 30fps

### Timeline structure per reel
```
[Opening card: Dream # + title — 2s fade in / 1s hold]
[Panel 1 → Panel N: image + VO + music]
[Closing hold: final image lingers 1.5–2s after VO ends]
[Optional fade to black: 0.5s]
```

### Text overlay style
- **Opening card:** Dream number top-left (small, grey), Title centred (white, larger)
- **Phase name:** Fades in bottom-left at Panel 1, disappears by Panel 2
- **Font:** Clean sans-serif or light brush script — no decorative fonts that fight the artwork
- **Colour:** White with soft drop shadow, or off-white (#F5F0E8) to harmonise with the painted palette
- **Duration:** 1.5–2s fade in, 2–3s hold, 0.5s fade out

### Music notes (general)
- Mood: ambient, atmospheric, no percussion in the first half
- Dynamic: starts very soft, may build slightly at the emotional peak, recedes at the end
- Volume: VO is always foreground — music sits 15–25% of VO level
- No track with lyrics
- Suggested moods are flagged per-reel in the Music note column of each storyboard

---

## File Naming Convention

### Video source files (panel images)
```
dream-[XX]-p[N].jpg
```
Examples: `dream-01-p1.jpg`, `dream-32-p8.jpg`

### VO audio files (per panel)
```
dream-[XX]-p[N]-vo.mp3
```
Examples: `dream-01-p1-vo.mp3`, `dream-47-p7-vo.mp3`

### VO audio files (assembled per reel, optional)
```
dream-[XX]-vo-full.mp3
```

### Exported reel videos
```
dream-[XX]-reel-v[version].mp4
```
Examples: `dream-01-reel-v1.mp4`, `dream-01-reel-v2.mp4`

### Dream ID reference
| ID | Title |
|----|-------|
| 01 | 中式大宅中轉站 |
| 02 | 後樓梯殘缺樂器追逐 |
| 07 | 流浪漢昏迷自醒 |
| 15 | 廢物箱尋寶中學朋友 |
| 17 | 貓生病電梯 |
| 26 | 商場買鞋偷錢包搶劫 |
| 28 | 荒廢豪宅十億寶藏 |
| 32 | 奧運公園乾花怪獸 |
| 34 | 豪宅迷宮父親燒木櫃 |
| 35 | 藥材鋪異能者彩虹能量場 |
| 36 | 中國街變形動物小男孩 |
| 39b | Frantiono 抱小胖子旅遊 |
| 40 | 室內種植盆家人無視 |
| 42 | 蛇人受傷父親房間 |
| 47 | 自殺計劃白鷹飛翔 |
| 48 | 水族館殺人鯨鑲嵌玻璃 |
| 52 | 絕症戀人變中性媽媽麵包店 |
| 53 | 鐵達尼號泥漿浮木求生 |

---

## Phase Reference
| Phase | Dreams |
|-------|--------|
| 出發 | #01, #02 |
| 失去 | #07, #15, #17 |
| 心死 | #26, #28 |
| 重建 | #32, #34, #35, #36, #39b, #40, #42 |
| 飛起 | #47, #48 |
| 浮起 | #52, #53 |
