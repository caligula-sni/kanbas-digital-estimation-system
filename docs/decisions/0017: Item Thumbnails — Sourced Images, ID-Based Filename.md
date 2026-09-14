# ADR 0017: Item Thumbnails — Sourced Images, ID-Based Filenames

## Status
Accepted — supersedes the sketch-icon plan discussed earlier (never implemented)

## Context
Considered sketch-style SVG icons (bucketed by item type, not per-SKU) to avoid
copyright issues with real product photos. Decided against it: the user will
source real photos themselves, which sidesteps the copyright concern directly
and gives a more polished catalog than sketches would.

## Decision
Thumbnails are plain image files in `app/images/items/`, named by item ID
(`87.jpg`, `112.jpg`, etc.) — no per-item code changes needed to add a photo.
`renderItemThumb()` in `items-data.js` builds the `<img>` tag; a broken/missing
image automatically falls back to a dashed "+ Photo" placeholder via `onerror`.

Photos are sourced and added by the user, at their own pace, item by item —
not a blocking requirement for the catalog to function.

## Consequences
- Adding a photo later requires zero code changes — just drop the file in
- Items without a photo yet show a placeholder, not a broken image icon
- ~225 images requested on page load for items with no photo yet will 404 in
  the browser console until photos are added — expected, harmless, just noisy
- User is responsible for image rights/sourcing — since these are real photos
  (not AI-generated or scraped), standard care applies: use images you have
  rights to use (own photos, licensed stock, or manufacturer press images
  where permitted)