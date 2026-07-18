# Caro AI Development Kit

# 04 - Library

## Read First

Before starting this phase, read:

- docs/SPEC.md
- docs/FIGMA.md
- docs/implementation/00-master-prompt.md
- docs/implementation/01-project-setup.md
- docs/implementation/02-landing-page.md
- docs/implementation/03-dashboard.md

These documents define the project standards.

---

# Objective

Implement the Library page.

The Library is the heart of Caro.

This page should become the user's personal gaming collection.

Users should feel that every game they own has its own place.

The interface must encourage organization while remaining clean and enjoyable to browse.

---

# General Rules

Respect the visual language defined in FIGMA.md.

Do not redesign the interface.

Improve usability while maintaining consistency.

Whenever reusable components are identified, extract them instead of duplicating code.

---

# Layout

Maintain the authenticated layout.

Sidebar on the left.

Top navigation.

Scrollable content.

Responsive layout.

---

# Header

Create a header containing:

Page Title

Short Description

Library Statistics

Quick Actions

Example:

"My Library"

"Organize every game you've ever played."

---

# Statistics

Display summary cards.

Suggested statistics:

Games Owned

Playing

Completed

Backlog

Wishlist

Favorite Games

Hours Played

Completion Rate

The cards should be visually attractive and easy to scan.

---

# Search

The Library must contain a prominent search bar.

Searching should feel immediate.

Include placeholder text such as:

"Search your library..."

---

# Filters

Create an expandable filter panel.

Suggested filters:

Status

Platform

Genre

Release Year

Personal Rating

Favorite

Completed

Multiplayer

Singleplayer

Hide Finished Games

Filters should be combinable.

---

# Sorting

Allow sorting by:

Recently Added

Recently Played

Alphabetical

Rating

Hours Played

Release Date

Completion

Favorite

Ascending and descending order should be supported where applicable.

---

# Display Modes

Support multiple viewing modes.

Grid View

Compact Grid

List View

Remember the user's selected view.

---

# Game Cards

Every game card should display:

Game Cover

Title

Platform

Status

Personal Rating

Hours Played

Completion Percentage

Favorite Indicator

Hover Actions

Cards should remain compact while displaying useful information.

---

# Hover Actions

When hovering over a game:

Quick Edit

Open Details

Favorite

Remove from Library

Hover animations should be subtle.

---

# Empty State

If the library is empty:

Display an illustration or visual placeholder.

Explain what the Library is.

Provide clear actions:

Search Games

Discover Games

Random Game

Avoid empty blank pages.

---

# Bulk Actions

Prepare support for future bulk operations.

Examples:

Delete Multiple

Update Status

Move to Wishlist

Export

The UI may exist even if functionality is implemented later.

---

# Pagination

If many games exist:

Support pagination or infinite scrolling.

The implementation may use placeholder data.

---

# Quick Edit

Allow editing common fields directly from the Library.

Examples:

Status

Rating

Favorite

Hours Played

This should minimize navigation.

---

# Library Sections

Optionally create grouped sections such as:

Currently Playing

Continue Playing

Recently Added

Favorites

Completed

Wishlist

Backlog

These sections should make the Library easier to navigate.

---

# Performance

Optimize rendering.

Avoid unnecessary rerenders.

Prepare the page for very large libraries.

---

# Accessibility

Semantic HTML

Keyboard navigation

Visible focus states

Accessible buttons

Good color contrast

---

# Responsive Design

Desktop

Laptop

Tablet

Mobile

Cards should reorganize naturally.

Never introduce horizontal scrolling.

---

# Animations

Use smooth animations for:

Cards

Hover

Filters

Sorting

View switching

Loading

Keep animations lightweight.

---

# Restrictions

Do not implement backend.

Use mock data where necessary.

Do not hardcode repeated values.

Extract reusable components.

---

# Deliverables

The Library should feel like a premium game launcher.

Users should immediately understand:

How many games they own.

What they are currently playing.

How to organize their collection.

How to quickly find any game.

---

# Definition of Done

The phase is complete only if:

- [ ] Header implemented.
- [ ] Statistics cards exist.
- [ ] Search bar exists.
- [ ] Filter panel implemented.
- [ ] Sorting implemented.
- [ ] Multiple view modes exist.
- [ ] Game cards created.
- [ ] Hover actions implemented.
- [ ] Empty state created.
- [ ] Quick edit available.
- [ ] Responsive layout completed.
- [ ] Reusable components extracted.
- [ ] Matches the design language defined in FIGMA.md.