---
title: "Understand & Control: Image Analysis + Tools"
description: Build your technical eye and toolkit. First, learn to “read” an image—what’s bright, what’s clipped, where color shifts live—then put Resolve’s core controls to work. You’ll move from diagnosis (scopes and visual cues) to precise, confident adjustments.
---

## Learning Objectives

- Deconstruct an image into contrast, highlights, shadows, and color components.
- Select appropriate DaVinci Resolve tools (primaries, curves, scopes) for specific corrections.
- Apply targeted adjustments to control luminance and color with intention.

## ToC

- Breaking Down the Image
- Using the Right Tools

## Analyzing and Breaking Down Shots for Effective Matching

### Shot Comparison and Initial Assessment

- Shot characteristics:

  - Shot 1:

    - Shot in log.
    - Wide-angle lens.
    - Relatively balanced white balance.

  - Shot 2:

    - Tighter lens.
    - Not shot in log.
    - Severely incorrect white balance (very blue, likely ~3200K).
    - Standard camera profile.

  - Shot 3:

    - Different angle.
    - Not shot in log.
    - Slightly underexposed compared to others.

- Core challenge:

  - Matching shots with radically different profiles, lenses, exposure levels, and white balance.

### Technical Constraints of the Footage

- Camera limitations:

  - Digital SLR shooting H.264 codec.
  - Compressed format results in reduced dynamic range.

- Impact:

  - Less flexibility compared to RAW or ProRes.
  - Errors baked into the image are harder to correct.

### First Step: Rough Normalization Pass

Purpose: Make shots comparable before detailed correction.

1. Take log footage out of log:

   - Apply a quick, rough grade.
   - Bring shots into a similar visual space.

2. Match luminance using scopes:

   - Use waveform to align shadows and highlights.
   - Adjust gain to reduce clipping and balance exposure.

3. Correct major color imbalances:

   - Warm overly blue shots using temperature.
   - Adjust tint to counter green shifts.

4. Apply minimal saturation adjustments:

   - Especially for log footage to reveal true color information.

### Identifying the Problem Clip

- Easiest to work with:

  - Log shot with higher dynamic range.
  - Non-log shot that was at least properly white balanced.

- Primary problem clip:

  - Non-log.
  - Incorrect white balance.
  - Limited dynamic range.
  - Multiple compounded issues.

### Professional Shot Breakdown Method

- Avoid global adjustments:

  - Do not treat the image as a single color palette.
  - Global warming, cooling, or contrast changes often create new problems.

- Use granular analysis:

  - Highlights:

    - Example: Yellow-tinted sky.

  - Shadows:

    - Watch for color shifts (e.g., blue shadows).

  - Midtones:

    - Vegetation and foliage color accuracy.

  - Specific objects:

    - Trees, pedestal, and other elements may require separate adjustments.

### Focused Adjustment Strategy

- Identify and list problems per shot:

  - Sky color.
  - Greens in foliage.
  - Individual objects with mismatched color.

- Adjust elements independently rather than globally.
- Benefits:

  - Faster matching workflow.
  - More precise corrections.
  - More accurate and professional results.

### Next Lesson Preview

- Overview of DaVinci Resolve tools that make focused, shot-by-shot matching easier and more efficient.

## DaVinci Resolve Tools for Precise Shot Matching

### Visual Comparison Tools

- Split Screen:

  - Compare two or more clips side by side.
  - Makes differences in sky, foliage, and luminance easier to identify.
  - More effective than toggling between clips.

- Full-screen viewing:

  - Essential for accurate comparison.
  - Strongly benefits from using an external monitor.
  - Allows clearer evaluation of color and luminance differences.

### Still Frames and Image Wipes

- Stills:

  - Grab stills from reference shots for comparison.

- Image wipe modes:

  - Vertical wipe: Useful for comparing objects like trees or pedestals.
  - Horizontal wipe: Effective for skies and horizon lines.
  - Dissolve mode: Less precise, but can help sense overall differences.

- Shortcuts:

  - Toggle wipe on/off.
  - Switch between wipe modes for targeted comparison.

### Secondary Corrections (Focused Adjustments)

- Key principle:

  - Use granular, focused adjustments instead of global corrections.

- HSL Qualifier:

  - Isolate specific colors (e.g., sky, trees, foliage).

- Windows:

  - Limit adjustments to specific regions of the frame.
  - Combine with qualifiers to avoid affecting unwanted areas.

- Use cases:

  - Adjust sky brightness and color independently.
  - Match specific trees or foliage tones.
  - Fine-tune individual objects within the scene.

### Curves for Color Matching

- Hue vs Hue:

  - Shift one hue to better match another shot.
  - Useful when different camera profiles render colors differently.

- Common application:

  - Correct mismatched greens or blues caused by different camera profiles.

### Workflow Integration

- Iterative process:

  - Compare shots using split screen or wipes.
  - Apply secondary corrections.
  - Re-check and refine using visual comparison tools.

- Scopes:

  - Use waveform to match shadows and highlights.
  - Normalize luminance before fine color matching.

### Key Takeaway

- Combining split screen, wipes, secondaries, windows, curves, and scopes enables:

  - Faster shot matching.
  - More accurate, professional results.
  - Creation of a cohesive scene that appears shot at the same time with the same camera and settings.
