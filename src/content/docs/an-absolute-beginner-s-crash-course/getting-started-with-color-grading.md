---
title: Getting Started with Color Grading
description: This module introduces the fundamentals of color grading. You’ll learn how to control the essential building blocks of an image using lift, gamma, and gain, as well as refine details like highlights, shadows, and saturation. By the end, you’ll be able to recognize and apply basic corrections that bring balance and clarity to your footage.
---

## Learning Objectives

- Identify the basic controls that shape the foundation of an image (lift, gamma, gain, and contrast).
- Differentiate between global image adjustments and detailed tonal adjustments (highlights, shadows, and saturation).
- Apply core corrections to balance the overall look of a shot.

## ToC

- Intro
- Lift, Gamma, Gain, Contrast: The Foundation of an Image
- Highlights, Shadows, Saturation: Getting More Detailed

## Color Grading Fundamentals

### Course Purpose & Audience

- Color grading: A core skill for achieving a professional, high-end visual look.
- Target learners:
  - Beginners who have never graded their own videos.
  - Creators who have tried color grading but lack a structured workflow.

- Goal: Build a foundational system that can be reused across projects.

### Instructor Background

- Fred Trevino: Owner and operator of Beambox Studio.
- Experience:
  - Graded 50+ feature films.
  - Worked on hundreds of short-form projects.
  - Clients include Prada, Versace, HBO, and Under Armour.

### Course Scope & Approach

- Software-agnostic: Concepts apply to any image or video editing program, not just DaVinci Resolve.
- Learning method:
  1. Start with poor-quality footage.
  2. Perform color correction.
  3. Apply grading steps in a clear, repeatable order.

- Includes downloadable media for hands-on practice.

### Core Concepts Covered

#### Color Correction & Grading Basics

- Color correction: Fixing technical issues to achieve a neutral, balanced image.
- Color grading: Stylizing the image to create a specific look or mood.
- Clip matching: Ensuring visual consistency across multiple shots.

#### Order of Operations

- Structured workflow: A defined sequence of adjustments to avoid confusion and inconsistency.
- Repeatable system: Same steps applied to all projects for efficiency.

#### Primary Controls & Adjustments

- Lift: Controls shadows and dark tones.
- Gamma: Adjusts midtones.
- Gain: Affects highlights.
- Contrast: Increases or decreases tonal separation.
- Pivot: Shifts the midpoint of contrast.
- Saturation: Controls color intensity.
- Color temperature: Adjusts warm vs. cool balance.
- Tint: Shifts color balance between green and magenta.
- Highlights: Fine control over bright areas.
- Shadows: Fine control over dark areas.

### Learning Outcome

- Develop a trained eye for image quality.
- Understand images in a more analytical, professional way.
- Quickly start grading footage with confidence using a clear system.

## Initial Color Correction Workflow

### Lesson Structure & Approach

- Step-by-step breakdown: Each lesson covers a small, focused adjustment.
- Short lessons: Designed to keep momentum and clarity.
- End goal: Build a simple, reusable node tree for future projects.
- Footage setup: Uses a very basic sequence with three shots to focus purely on fundamentals.
- Software-agnostic: Concepts apply across Resolve, Premiere, Lightroom, and other image-editing tools.

### Terminology Basics

- Lift: Shadows (darkest parts of the image).
- Gamma: Midtones.
- Gain: Highlights (brightest parts of the image).
- Nodes:
  - Nodes: Individual steps in the grading process.
  - Serial nodes: Used here as a linear, step-by-step workflow.
  - Equivalent concepts:
    - Photoshop: Layers.
    - Premiere: Adjustment layers.

### Waveform Overview

- Waveform scope: Primary scope used in this course.
- Interpretation:
  - Bottom (0): Shadows / true blacks.
  - Top: Highlights / bright areas.
  - Middle: Midtones.

- Purpose:
  - Visually confirm exposure and contrast.
  - Identify washed-out blacks or overly bright highlights.

- Practical reading:
  - If dark areas sit above the zero line, blacks are not rich enough.
  - Bright streaks in the waveform correspond to bright objects in the image.

### Primary Correction Steps

#### Step 1: Lift, Gamma, Gain

1. Adjust Lift:
   - Lower shadows until they approach (or lightly touch) the zero line.
   - Watch both the waveform and the image simultaneously.
   - Goal: Establish solid, rich blacks.

2. Name the node:
   - Example: `Lift Gamma Gain`.

#### Step 2: Contrast & Pivot

1. Add a new serial node:
   - Purpose: Separate contrast adjustments from exposure.

2. Increase Contrast:
   - Adds depth and visual “pop.”
   - Use restraint; small changes go a long way.

3. Adjust Pivot:
   - Fine-tunes how contrast is distributed.
   - Less aggressive than contrast itself.
   - Used for subtle balancing rather than dramatic changes.

### Iterative Adjustment Mindset

- Color correction is non-linear:
  - Adjusting one control affects others.
  - Expect to move back and forth between nodes.

- Refinement process:
  1. Revisit Lift Gamma Gain.
  2. Slightly raise Gain to brighten highlights without clipping.
  3. Raise Gamma to lift midtones and reveal detail.
  4. Re-adjust Contrast and Pivot for balance.

- Subjectivity:
  - No fixed numeric values.
  - Decisions depend on footage, intent, and desired look.

### Workflow Recap

- Core steps covered in this lesson:
  - Lift Gamma Gain
  - Contrast
  - Pivot

- Practice guidance:
  - Apply the same steps to provided or personal footage.
  - Focus on clean exposure and balanced contrast.

- Next lesson:
  - Highlights
  - Shadows
  - Saturation

## Fine-Tuning Highlights, Shadows, and Saturation

### Refinement Mindset

- Progressive grading: As more nodes are added, adjustments become subtler and more precise.
- Colorist’s eye: Attention shifts from obvious problems to small details that collectively create a polished, professional image.
- Workflow continuity:
  - Lift Gamma Gain
  - Contrast & Pivot
  - Highlights & Shadows
  - Saturation & Color Boost

### Highlights & Shadows Adjustment

#### Definitions

- Highlights: The brightest bright areas only (e.g. whiteboard, paper, laptop reflections).
- Shadows: The darkest dark areas only (e.g. hair, dark clothing).
- Alternative terms (in other software):
  - Highlights → Whites
  - Shadows → Blacks

#### Practical Use

1. Adjust Highlights:
   - Slightly lower overly hot or blown-out bright areas.
   - Goal: Achieve a more natural, organic look.

2. Adjust Shadows:
   - Slightly raise darkest areas to recover detail.
   - Avoid overly gritty or crushed blacks unless stylistically intended.

#### Footage Limitations Context

- Source characteristics:
  - H.264 codec (highly compressed).
  - Not shot in log (uses baked-in camera profile).

- Implications:
  - Easier to lose highlight and shadow detail.
  - Less flexibility compared to RAW or log footage.

- Learning intent:
  - Practice working with imperfect, limited footage.
  - Understand how far compressed files can be pushed.

### Saturation & Color Boost

#### Order of Operations Insight

- Contrast before saturation:
  - Increasing contrast naturally increases perceived color vibrancy.
  - Saturation is delayed to avoid overdoing color early.

#### Controls Explained

- Saturation:
  - Uniformly increases color intensity across the entire image.

- Color Boost:
  - “Smart saturation.”
  - Primarily enhances color in darker, less saturated areas.
  - Often more subtle and skin-tone friendly.

#### Adjustment Steps

1. Add a new node for saturation.
2. Slightly increase Saturation:
   - Small changes go a long way.

3. Slightly increase Color Boost:
   - Enhances depth and skin tones without oversaturating highlights.

### Workflow Progress Recap

- Adjustments completed so far:
  - Lift Gamma Gain
  - Contrast & Pivot
  - Highlights & Shadows
  - Saturation & Color Boost

- Result:
  - Image evolves from flat and bland to balanced and visually engaging.

- Next lesson focus:
  - White balance
  - Color temperature
  - Tint
  - Overall look refinement
