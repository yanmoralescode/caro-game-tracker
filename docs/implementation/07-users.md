# Caro AI Development Kit

# 07 - Users

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
- docs/implementation/06-game-details.md

These documents define the project's standards.

---

# Development Context

This project is built incrementally.

Before creating new components:

Inspect the existing project.

Reuse existing cards, layouts, avatars, buttons, search bars and utilities.

Never duplicate components.

If an existing component can be extended, prefer refactoring over creating a new one.

---

# Objective

Implement the Users page.

This page allows players to discover other users, explore public profiles and connect with the Caro community.

The page should feel like a gaming-focused social network.

It should encourage interaction without overwhelming the interface.

---

# General Rules

Respect the design language defined in FIGMA.md.

Maintain visual consistency.

The page should feel welcoming and easy to explore.

---

# Layout

Use the authenticated layout.

Sidebar

Top Navigation

Scrollable content

Responsive layout

---

# Header

Display:

Page Title

Short Description

Search Users button

Example:

Users

"Discover players and explore their collections."

---

# Search

Create a large search bar.

Support searching by:

Username

Display Name

Recent Searches

Suggested Users

Trending Users

Searching should feel immediate.

---

# Featured Users

Display a highlighted section.

Each user card should contain:

Avatar

Username

Display Name

Bio

Favorite Platform

Games Owned

Friends

Button:

View Profile

---

# Recently Active

Display users who recently updated their libraries.

For friends, must show

Avatar

Username

Recent Activity

Current Status

Time Since Last Activity

---

# Suggested Friends

Recommend users based on:

Similar Platforms

Shared Genres

Common Games

Recently Played

Use placeholder logic.

---

# Popular Collections

Display users with interesting public libraries.

Each card should contain:

Avatar

Username

Library Size

Favorite Genres

Completion Rate

Button:

Explore Library

---

# Activity Feed

Display a public activity timeline.

Examples:

Finished Cyberpunk 2077

Started Hollow Knight

Added Elden Ring

Reached 100% Completion

Rated Portal 2

Activities should appear in chronological order.

---

# Community Statistics

Display cards such as:

Registered Players

Games Tracked

Public Libraries

Friendships

Hours Logged

Use placeholder data.

---

# User Card

Create a reusable user card component.

Include:

Avatar

Username

Display Name

Bio

Favorite Platform

Games Count

Friends Count

Online Indicator (placeholder) only for friends

Quick Actions

Cards should be reusable across the application.

---

# Quick Actions

Allow actions such as:

View Profile

Add Friend (future)

Send Message (future)

Share Profile (future)

Unavailable actions may appear disabled with a tooltip indicating they are planned for a future update.

---

# Empty State

If no users are found:

Display a friendly illustration.

Explain that no players matched the search.

Suggest trying another username.

---

# Loading State

Create skeleton loaders for user cards.

---

# Error State

Display a friendly message.

Allow users to retry the search.

---

# Accessibility

Use semantic HTML.

Keyboard navigation.

Visible focus indicators.

Proper labels for all interactive elements.

---

# Responsive Design

Support:

Desktop

Laptop

Tablet

Mobile

Cards should reorganize naturally.

Never require horizontal scrolling.

---

# Animations

Use subtle animations.

Hover

Cards

Buttons

Search

Loading

Page transitions

Animations should enhance the experience without becoming distracting.

---

# Restrictions

Do not implement backend functionality.

Use realistic placeholder data.

Reuse existing components whenever possible.

Avoid duplicated layouts.

---

# Deliverables

The Users page should encourage exploration and community interaction.

Users should immediately understand:

How to find other players.

How to discover interesting collections.

How to visit public profiles.

---

# Definition of Done

The phase is complete only if:

- [ ] Header implemented.
- [ ] Search functionality prepared.
- [ ] Featured Users section exists.
- [ ] Recently Active section exists.
- [ ] Suggested Friends section exists.
- [ ] Popular Collections section exists.
- [ ] Activity Feed implemented.
- [ ] Community Statistics displayed.
- [ ] Reusable User Card component created.
- [ ] Empty state implemented.
- [ ] Loading state implemented.
- [ ] Error state implemented.
- [ ] Responsive layout completed.
- [ ] Matches the design language defined in FIGMA.md.