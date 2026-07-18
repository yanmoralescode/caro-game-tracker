# Caro AI Development Kit

# 03 - Dashboard

## Read First

Before starting this phase, read:

- docs/implementation/00-master-prompt.md
- docs/implementation/01-project-setup.md
- docs/implementation/02-landing-page.md
- docs/SPEC.md
- docs/FIGMA.md

These documents define the project's standards.

---

# Objective

Implement the authenticated Dashboard page.

The Dashboard is the first screen users see after logging in.

It should immediately provide useful information instead of simply displaying statistics.

The Dashboard should feel alive, personalized and modern.

It must become the user's gaming home.

---

# General Rules

Respect the Figma draft.

Improve the experience without changing the visual identity.

Do not redesign the page.

Improve it.

---

# Dashboard Layout

Maintain the existing sidebar layout.

The page should contain multiple information sections organized using cards.

Prioritize visual hierarchy.

---

# Welcome Section

Create a personalized welcome section.

Display:

Greeting

Username

Current date

Motivational sentence related to gaming.

Example:

"Ready to continue your adventure?"

---

# Continue Playing

This should be one of the first sections.

Display games currently marked as:

Playing

Paused

Competitive / Multiplayer

Each card should contain:

Cover

Title

Platform

Progress

Hours Played

Quick Continue button

---

# Random Game

Display the Random Game feature prominently.

Purpose:

Suggest one random title from the external game database.

Include:

Cover

Title

Genres

Platforms

Release Year

Button:

"Show Another"

---

# Statistics

Improve the statistics cards.

Suggested cards:

Games Owned

Completed

Backlog

Playing

Wishlist

Hours Played

Completion Rate

Favorite Platform

Avoid information that provides little value.

---

# Recently Added

Display the most recently added games.

Each card should contain:

Cover

Title

Platform

Added Date

Status

---

# Recently Played

Display recently updated games.

Include:

Cover

Hours

Status

Last Updated

---

# Activity Timeline

Create a small activity feed.

Examples:

Started Elden Ring

Finished Celeste

Added Hollow Knight

Updated Rating

Completed Resident Evil 4

Newest activity first.

---

# Quick Actions

Create shortcut buttons.

Examples:

Add Game

Search Games

Open Library

View Profile

Random Game

---

# Friends Preview

Display a small friends widget.

Include:

Avatar

Username

Current Status

Current Playing

Online indicator (placeholder)

Button:

View All Friends

---

# Recommendations

Create a recommendation section.

Suggestions come from the external database.

Display:

Cover

Title

Genres

Platform

Small description

Button:

View Game

---

# Dashboard Cards

Cards should have:

Rounded corners

Soft shadow

Hover animation

Consistent spacing

Premium appearance

---

# Sidebar

Keep the sidebar from the Figma.

Improve only if necessary.

Maintain visual consistency.

---

# Top Navigation

Display:

Search Bar

Notifications

Random Game Button

Profile Avatar

---

# Empty States

If no games exist:

Display an attractive empty state.

Encourage users to:

Search games

Build their collection

Avoid blank screens.

---

# Responsive Design

Desktop

Laptop

Tablet

Mobile

Cards should reorganize naturally.

Never allow horizontal scrolling.

---

# Animations

Use subtle animations.

Cards

Buttons

Statistics

Loading

Hover

Page transitions

Avoid excessive effects.

---

# Accessibility

Semantic HTML

Keyboard navigation

Visible focus

Accessible buttons

Good contrast

---

# Restrictions

Do not implement backend.

Use mock data where necessary.

Keep code organized.

Avoid duplicated components.

---

# Deliverables

The Dashboard should immediately communicate:

"This is MY gaming space."

It should be useful, informative and visually attractive.

---

# Definition of Done

The phase is complete only if:

- [ ] Sidebar implemented.
- [ ] Welcome section created.
- [ ] Continue Playing section exists.
- [ ] Random Game widget exists.
- [ ] Statistics cards implemented.
- [ ] Recently Added section exists.
- [ ] Recently Played section exists.
- [ ] Activity Timeline exists.
- [ ] Quick Actions created.
- [ ] Friends Preview exists.
- [ ] Recommendations section exists.
- [ ] Responsive layout completed.
- [ ] Matches the Figma visual identity.