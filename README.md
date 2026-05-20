# Among All Dreams

A picture book project based on 53 dream records (2025-2026).

## 北極星

> 讓任何時間、任何地方，正在經歷迷茫和混亂的人，知道有一個人和他們一樣，而那個人沒有放棄。

長期願景：像宮崎駿般偉大、充滿愛、勇敢。

## Structure

```
.
├── style.md                    # Visual style guide & rules
├── skill.md                    # Midjourney v7 technical reference
├── _master-tracking.md         # Production progress tracker
├── dreams/
│   ├── source/                 # 53 original dream records + analyses
│   └── production/             # Production folders per dream
│       ├── dream-XX-title/
│       │   ├── status.md       # Panel-level status
│       │   ├── prompts.md      # Midjourney prompts
│       │   └── text-final.md   # Prose text per panel
```

## Selected Dreams

19 dreams selected for the book (timeline order):
`#1, 2, 7, ~~14~~ (skipped), 15, 17, 26, 28, 32, 34, 35, 36, 39b, 40, 42, 47, 48, 52, 53`

## Workflow

1. AIE writes 8 prompts per dream
2. Eve runs in Midjourney, picks best variant
3. Saves to `panels/` (excluded from this repo — kept locally)
4. Status & tracking files updated

## Key Rules (詳見 style.md + skill.md)

- Painterly oil + Studio Ghibli + Brad Kunkle aesthetic
- 9:16 aspect ratio
- No text/letters in any image
- Each dream is independent (no setting carry-over)
- Hair color only when dream specifies

## Production Status

See `_master-tracking.md` for current progress.
