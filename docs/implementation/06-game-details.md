# Caro AI Development Kit

# 06 - Game Details

## Read First

Before starting this phase, read:

- docs/SPEC.md
- docs/FIGMA.md
- docs/implementation/00-master-prompt.md
- docs/implementation/01-project-setup.md
- docs/implementation/02-landing-page.md
- docs/implementation/03-dashboard.md
- docs/implementation/04-library.md
- docs/implementation/05-search.md

These documents define the project's standards.

---

# Development Context

This project is being built incrementally.

Before creating new components, inspect the existing project.

Reuse existing components whenever possible.

Avoid duplicated UI.

If an existing component can be extended instead of recreated, always choose that approach.

---

# Objective

Implement the Game Details page.

This page should present complete information about a game while encouraging users to add it to their library.

The page should feel premium, immersive and informative.

It should resemble the experience of viewing a game on Steam, PlayStation Store or IGDB.

---

# General Rules

Respect the design language defined in FIGMA.md.

Do not redesign the application.

Maintain visual consistency.

Use reusable components.

---

# Layout

Use the authenticated layout.

Sidebar.

Top Navigation.

Scrollable content.

Responsive layout.

---

# Hero Section

Create a large hero section.

Display:

Game Cover

Background Banner

Game Title

Release Year

Developer

Publisher

Genres

Platforms

External Rating

The hero should immediately identify the game.

---

# Primary Actions

Create prominent action buttons.

Include:

Add to Library

Favorite

Share (future)

Official Website

Trailer (future)

Wishlist

Buttons should remain visible.

---

# Game Information

Display detailed information.

Include:

Description

Developer

Publisher

Release Date

Genres

Platforms

Game Modes

Caro's User Rating

Supported Languages (optional)

Website

---

# Screenshots

Create a gallery section.

Display multiple screenshots.

Support:

Grid

Lightbox (future)

Lazy Loading

---

# Videos

Prepare a trailer section.

Mock data is acceptable.

If no trailer exists, hide the section.

---

# Community Information

Display:

Average Community Rating

Number of Players Tracking

Reviews (future)

Popularity

Trending Rank

Use placeholder data.

---

# User Information

If the game already exists in the user's library, display:

Current Status

Personal Rating

Hours Played

Completion Percentage

Started Date

Finished Date

Favorite

Notes

Button:

Edit Entry

Otherwise display:

Add to Library

---

# Similar Games

Recommend similar games.

Display:

Cover

Title

Genres

Platforms

External Rating

Button:

View Details

---

# Metadata

Display technical information.

Examples:

Release Date

Engine (optional)

Franchise

Series

Developer

Publisher

Genres

Themes

Perspective

Game Modes

Platforms

---

# Navigation

Provide an easy way to return to:

Search

Library

Previous Page

---

# Loading State

Create a polished loading interface.

Skeleton components are preferred.

---

# Error State

Create an error state.

Example:

Game not found.

Return to Search.

---

# Empty State

If information is unavailable, hide unnecessary sections instead of displaying empty cards.

---

# Accessibility

Semantic HTML.

Keyboard navigation.

Accessible buttons.

Visible focus states.

Proper heading hierarchy.

---

# Responsive Design

Desktop

Laptop

Tablet

Mobile

Images should resize naturally.

Avoid horizontal scrolling.

---

# Animations

Use subtle animations.

Hero

Gallery

Buttons

Cards

Section reveals

Hover

Avoid excessive motion.

---

# Restrictions

Do not implement backend.

Use realistic placeholder data.

Reuse existing components.

Avoid duplicated layouts.

---

# Deliverables

The Game Details page should make users want to add the game to their library.

Information should be easy to scan.

The page should feel immersive without becoming visually overwhelming.

---

## Library Management

If the game is not in the user's library:

Display:

- Add to Library

Opening the button should display a modal.

The modal contains:

Status

Platform

Rating

Hours

Favorite

Notes

Started Date

Finished Date

Completion %

Save

Cancel

---

If the game already exists:

Replace the button with:

Edit Library Entry

Open the same modal.

Populate every field automatically.

Allow editing.

Never create duplicate entries.

---

# Definition of Done

The phase is complete only if:

- [ ] Hero section implemented.
- [ ] Primary actions created.
- [ ] Game information displayed.
- [ ] Screenshot gallery exists.
- [ ] Trailer section prepared.
- [ ] Community information created.
- [ ] User information section implemented.
- [ ] Similar Games section exists.
- [ ] Metadata displayed.
- [ ] Loading state created.
- [ ] Error state created.
- [ ] Responsive layout completed.
- [ ] Reusable components extracted.
- [ ] Matches the design language defined in FIGMA.md.