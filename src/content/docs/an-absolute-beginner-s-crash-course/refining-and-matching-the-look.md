---
title: Refining and Matching the Look
description: Building on the basics, this module focuses on refining and unifying your footage. You’ll explore how to use temperature and tint controls to set the mood, apply secondary corrections to fine-tune specific areas, and ensure your shots match...
---

## Learning Objectives

- Adjust color temperature and tint to create mood and correct unwanted color shifts.
- Use secondary corrections to target specific areas of an image for refinement.
- Match shots across a sequence to achieve a consistent visual style.

## ToC

- Color Temperature, Tint and Adjusting the Look
- Secondaries: Finessing the Look
- Matching Your Shots

## White Balance, Look Development, and Reusable Grades

### Color Temperature & Tint (White Balance)

#### Definitions

- Color temperature: Adjusts the balance between warm tones (reds, oranges, yellows) and cool tones (blues).
- Tint: Adjusts the balance between green and magenta.
- White balance: The combined process of temperature and tint correction to neutralize color casts.

#### Adjustment Approach

1. Add a new node:
   - Name: `Color Temp & Tint`.

2. Evaluate neutrality:
   - Image is mostly well balanced but slightly green.

3. Adjust Color Temperature:
   - Warm direction: More yellow/orange.
   - Cool direction: More blue.
   - Chosen adjustment: Slightly cooler look (subtle, stylistic).

4. Adjust Tint:
   - Reduce green cast by pushing slightly toward magenta.

5. Result:
   - Cleaner, more polished image with minimal, controlled changes.

### Look Adjustment Node

#### Purpose

- Final creative pass after technical corrections.
- Used to:
  - Slightly brighten or darken.
  - Fine-tune saturation.
  - Shape the overall mood of the image.

#### Practical Use

1. Add a new node:
   - Name: `Look Adjustment`.

2. Typical adjustments:
   - Small exposure tweak.
   - Minor saturation reduction or boost.

3. Creative flexibility:
   - Can be subtle (corporate, clean look).
   - Or extreme (stylized, cinematic, music video looks).

4. Client workflow:
   - Create multiple look nodes (e.g. Look 1, Look 2).
   - Toggle on/off to present options.

### Node Organization Insight

- Teaching structure:
  - Lift / Gamma / Gain
  - Contrast
  - Highlights & Shadows
  - Saturation
  - Color Temperature & Tint
  - Look Adjustment

- Real-world workflow:
  - Many of these are often combined into:
    - Node 1: Primary corrections (exposure, contrast, saturation).
    - Node 2: Color temperature & tint.
    - Node 3: Creative look.

- Benefit of separation:
  - Clear learning.
  - Easier to understand cause-and-effect.

### PowerGrades (Reusable Node Trees)

#### Definition

- PowerGrade: A saved grade (entire node tree) that can be reused across projects system-wide.

#### How It’s Used

1. Save the grade:
   - Right-click → Grab Still.

2. Reapply later:
   - Drag the saved PowerGrade onto new clips.

3. Ideal scenarios:
   - Repeated shooting environments (studios, offices).
   - Consistent lighting setups.
   - Ongoing client work.

#### Benefits

- Saves significant time.
- Ensures visual consistency.
- Acts as a learning reference:
  - Helps remember the grading order.
  - Reinforces workflow habits.

### Lesson Wrap-Up & Next Step

- Current state:
  - Image is fully balanced, polished, and client-ready.

- Key concepts reinforced:
  - Subtlety over extremes.
  - Order of operations matters.
  - Technical correction first, creative look last.

- Next lesson focus:
  - Secondary windows.
  - Isolating and shaping specific areas.
  - Further image refinement and focus.

## Secondary Windows (Targeted Image Shaping)

### Purpose of Secondary Adjustments

- Primary adjustments: Global corrections applied to the entire image.
  - Examples: Lift, Gamma, Gain, Contrast, Saturation.

- Secondary adjustments: Targeted corrections applied to specific areas.
  - Purpose: Push an image from “good” to “great.”

- Practical mindset:
  - Many projects can stop after primary correction and shot matching.
  - Secondary windows are used to refine, shape, and polish the image further.

### What Are Windows

#### Definitions

- Windows: Adjustable shapes (also called masks or mattes) used to isolate parts of an image.
- Adjustment layers / mats: Equivalent concepts in other software.

#### Available Window Types

- Square window
- Circular window
- Linear / gradient window
- Pen tool (custom shapes)
- Soft gradient window

### Using Secondary Windows

#### Setup

1. Add a new node:
   - Name: `Secondary Window`.

2. Choose a window shape.
3. Position and resize over the target area.
4. Adjust softness to blend naturally.
5. Use invert option if you want to affect the outside of the window.
6. Use view mode (e.g. Shift + H) to preview affected areas.

#### Practical Examples

- Reducing hot highlights:
  - Place a window over overly bright areas.
  - Slightly lower Gain.

- Recovering shadow detail:
  - Place a window over dark areas (e.g. hair).
  - Slightly raise exposure to reveal detail.

- Creating a vignette:
  - Use a circular window.
  - Invert it to affect edges.
  - Lower Gain subtly to draw attention to the subject.

### Visual Impact

- Small, localized adjustments can:
  - Balance exposure across the frame.
  - Improve subject focus.
  - Add depth and visual hierarchy.

- Effects are subtle individually, but powerful when combined.

### Primary vs Secondary Adjustments

#### Primary Adjustments

- Global image controls:
  - Shadows / Midtones / Highlights
  - Contrast
  - Saturation

- Applied early in the workflow.

#### Secondary Adjustments

- Targeted refinements:
  - Windows
  - Color keys (isolating specific colors).
  - Selective highlight or shadow control.

- Applied after the image is already well balanced.

### Key Takeaways

- Windows are experience-driven tools:
  - Beginners may not notice the need.
  - With practice, issues become more obvious.

- Use restraint:
  - Subtle shaping is usually more effective than heavy-handed changes.

- DaVinci Resolve:
  - Extremely powerful for secondary corrections.
  - Enables precise control over both exposure and color in specific regions.

## Applying Grades, Shot Matching, and Tracked Secondary Refinement

### Applying a Grade to Other Shots

#### Methods

- Grab Still:
  - Right-click → Grab Still.
  - Drag the still onto other clips.

- Apply Grade:
  - Select a clip → Right-click → Apply Grade.

- PowerGrade (optional):
  - Save the grade for reuse across projects.

#### Key Considerations

- Works best when footage is well shot and similar.
- Grades will not translate perfectly every time.
- Always review and tweak after applying.

### Shot Matching Workflow

#### Initial Evaluation

- Play through all shots in sequence.
- Identify mismatches:
  - Exposure differences.
  - Overly bright highlights.
  - Skin tones not matching.

#### Common Fixes

- Remove unnecessary windows:
  - Some windows may not apply well to close-ups.

- Adjust Pivot:
  - Helps control overly hot highlights without changing overall contrast.

- Review nodes in order:
  - Contrast
  - Highlights & Shadows
  - Saturation
  - Color Temperature & Tint
  - Look Adjustment
  - Windows / Vignettes

### Refining with Secondary Windows

#### Practical Adjustments

- Remove problematic windows that cause clipping.
- Keep useful windows like vignettes to maintain subject focus.
- Add new windows as needed per shot.

#### Example: Face Refinement

1. Create a new window:
   - Place over the subject’s face.

2. Raise Gamma:
   - Reveal detail in shadowed facial areas.

3. Rebalance Contrast:
   - Prevent washed-out look.

4. Subtlety:
   - Improvements should feel natural, not obvious.

### Tracking Windows

#### Purpose

- Keep windows attached to moving subjects.
- Essential for close-ups and motion shots.

#### Tracking Steps

1. Select the window.
2. Open Tracker:
   - Shortcut or tracker panel.

3. Track forward and backward.
4. Manual corrections:
   - Adjust position on specific frames if tracking drifts.

5. Re-track from corrected frame.

#### Fine-Tuning

- Soften window edges to avoid visible masks.
- Minor adjustments can significantly improve realism.
- Perfection isn’t always possible due to lighting limitations.

### Workflow Recap

- Process covered:
  - Apply grade across shots.
  - Match shots visually.
  - Remove or tweak mismatched nodes.
  - Add tracked secondary windows for refinement.

- Key mindset:
  - Matching is iterative.
  - Each shot may require unique tweaks.

- Outcome:
  - Cohesive, polished sequence with consistent look.

- Next step:
  - Final tips and guidance for continued improvement in color correction.
