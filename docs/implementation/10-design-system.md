# Caro AI Development Kit

# 10 - Design System

## Read First

Before starting this phase, read:

- docs/SPEC.md
- docs/FIGMA.md
- docs/implementation/00-master-prompt.md

Read every implementation document before making changes.

This phase should improve the entire project without changing its intended behavior.

---

# Development Context

The application is now feature complete.

This phase focuses on consistency.

The objective is to transform individual pages into one cohesive product.

Do not redesign the application.

Refine it.

---

# Objective

Review every implemented page.

Identify inconsistencies.

Create a unified design system.

Every screen should feel like it belongs to the same application.

---

# Design Principles

Prioritize:

Consistency

Readability

Accessibility

Reusability

Scalability

Maintainability

Avoid unnecessary visual complexity.

---

# Component Review

Inspect every reusable component.

Examples:

Buttons

Cards

Game Cards

User Cards

Statistics Cards

Badges

Inputs

Dropdowns

Forms

Dialogs

Modals

Sidebar

Navbar

Footer

Profile Header

Search Bar

Loading Components

Empty States

Error States

If duplicate components exist:

Merge them.

Create variants instead of duplicates.

---

# Typography

Review typography across the application.

Ensure consistent:

Font Family

Font Size

Font Weight

Line Height

Heading Hierarchy

Paragraph Spacing

Text Colors

Avoid inconsistent text styles.

---

# Color System

Review every color used.

Create semantic color tokens.

Examples:

Primary

Secondary

Background

Surface

Surface Hover

Border

Muted

Success

Warning

Danger

Information

Focus

Hover

Avoid hardcoded colors.

---

# Spacing System

Standardize spacing.

Examples:

4px

8px

12px

16px

24px

32px

48px

64px

Use a consistent spacing scale.

---

# Border Radius

Standardize every radius.

Small

Medium

Large

Extra Large

Avoid arbitrary values.

---

# Shadows

Review shadows.

Cards

Dialogs

Dropdowns

Navigation

Hover States

Keep elevation consistent.

---

# Icons

Review icon usage.

Ensure:

Consistent size

Consistent stroke width

Consistent spacing

Do not mix icon libraries.

---

# Buttons

Review every button.

Standardize:

Primary

Secondary

Ghost

Outline

Danger

Loading

Disabled

Hover

Focus

Pressed

---

# Forms

Review every form.

Ensure consistency across:

Inputs

Labels

Validation

Error Messages

Helper Text

Spacing

Focus States

---

# Cards

Standardize:

Game Cards

Statistics Cards

User Cards

Recommendation Cards

Information Cards

Create variants when appropriate.

---

# Navigation

Review:

Sidebar

Top Navigation

Footer

Breadcrumbs (Future)

Active States

Hover States

Spacing

Icons

---

# Animations

Review every animation.

Standardize:

Duration

Easing

Hover

Transitions

Loading

Page Transitions

Cards

Buttons

Keep animations subtle.

---

# Responsive Design

Review every page.

Desktop

Laptop

Tablet

Mobile

Large Displays

Fix layout inconsistencies.

Avoid horizontal scrolling.

---

# Accessibility

Verify:

Contrast

Heading hierarchy

Semantic HTML

Keyboard navigation

ARIA labels

Focus visibility

Interactive element size

---

# Empty States

Every empty state should include:

Illustration or visual placeholder

Helpful message

Action Button

Never leave blank areas.

---

# Loading States

Review every loading state.

Prefer skeleton components.

Avoid layout shift.

---

# Error States

Review every error state.

Provide:

Friendly explanation

Retry button

Navigation option

---

# Performance

Review:

Images

Icons

Animations

Rendering

Component structure

Reduce unnecessary complexity.

---

# Naming Conventions

Review:

Component names

Folder names

File names

Props

Hooks

Utilities

Types

Keep naming consistent.

---

# Deliverables

At the end of this phase:

Every page should feel like it belongs to the same application.

No duplicated components should remain.

Visual consistency should be significantly improved.

---

# Definition of Done

The phase is complete only if:

- [ ] Typography standardized.
- [ ] Color system unified.
- [ ] Spacing standardized.
- [ ] Border radius standardized.
- [ ] Shadows standardized.
- [ ] Icons reviewed.
- [ ] Buttons standardized.
- [ ] Forms standardized.
- [ ] Cards standardized.
- [ ] Navigation reviewed.
- [ ] Animations standardized.
- [ ] Responsive issues corrected.
- [ ] Accessibility improved.
- [ ] Empty states reviewed.
- [ ] Loading states reviewed.
- [ ] Error states reviewed.
- [ ] Duplicate components removed.
- [ ] Entire application follows one cohesive design language.