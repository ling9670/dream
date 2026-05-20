#!/bin/bash
# sync.sh — Sync dream production files from iCloud Obsidian vault to this git repo
# Usage: ./sync.sh "Dream #XX completed" (commit message optional)

set -e

SRC="/Users/ee/Library/Mobile Documents/iCloud~md~obsidian/Documents/3rd Eve Brain/*Good_Evelyn/Dream"
DST="/Users/ee/dream"
MSG="${1:-Sync dream files $(date +%Y-%m-%d)}"

echo "🔄 Syncing from iCloud Obsidian → /Users/ee/dream/..."

# Sync source dream analyses (53 files)
rsync -av --delete --exclude='Production/' --include='*.md' --exclude='*' \
  "$SRC/" "$DST/dreams/source/" 2>&1 | tail -3

# Sync production folders (md files only, exclude panels/)
for folder in "$SRC/Production"/dream-*; do
  [ -d "$folder" ] || continue
  name=$(basename "$folder")
  mkdir -p "$DST/dreams/production/$name"
  # Copy md files only, panels/ excluded
  find "$folder" -maxdepth 1 -name "*.md" -exec cp {} "$DST/dreams/production/$name/" \;
done

# Remove empty production dirs (dreams without prompts yet)
find "$DST/dreams/production" -type d -empty -delete

# Sync top-level production files
cp "$SRC/Production/_master-tracking.md" "$DST/" 2>/dev/null || true
cp "$SRC/Production/style.md" "$DST/" 2>/dev/null || true
cp "$SRC/Production/skill.md" "$DST/" 2>/dev/null || true

# Git commit + push
cd "$DST"
git add -A
if git diff --staged --quiet; then
  echo "✓ No changes to commit"
else
  git commit -m "$MSG

🤖 Auto-sync from iCloud Obsidian vault"
  git push
  echo "✓ Synced and pushed: $MSG"
fi
