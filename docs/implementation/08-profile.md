# Caro AI Development Kit

# 08 - Profile

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
- docs/implementation/07-users.md

These documents define the project's standards.

---

# Development Context

This project is built incrementally.

Before creating new components:

Inspect the existing project.

Reuse cards, statistics, avatars, buttons, badges and layouts whenever possible.

Avoid duplicated code.

If an existing component can be extended, prefer refactoring over creating a new one.

---

# Objective

Implement the Profile page.

The Profile should represent the player's gaming identity.

It should not feel like a settings page.

Instead, it should feel like a social profile that users enjoy visiting and sharing.

The Profile should encourage exploration of the user's library and gaming history.

---

# General Rules

Respect the visual language defined in FIGMA.md.

Maintain consistency with every authenticated page.

Avoid unnecessary visual clutter.

Create a premium social experience.

---

# Layout

Use the authenticated layout.

Sidebar

Top Navigation

Scrollable content

Responsive layout

---

# Profile Header

Create a large profile header.

Display:

Banner Image

Avatar

Username

Display Name

Bio

Join Date

Country (Optional)

Favorite Platform

Favorite Genre

Profile Visibility

Edit Profile button (Owner only)

The banner should become part of the user's identity.

---

# Quick Statistics

Display attractive statistics.

Cards:

Games Owned

Games Completed

Backlog

Wishlist

Hours Played

Completion Rate

Friends

Reviews

Achievements (Future)

Avoid meaningless statistics.

---

# Currently Playing

Highlight games currently being played.

Each card should display:

Cover

Title

Platform

Hours Played

Completion

Quick View

---

# Favorite Games

Create a featured section.

Display:

Top Favorite Games

Beautiful game covers

Large cards

Quick access to Game Details

This section should feel personal.

---

# Public Library Preview

Display a preview of the user's library.

Include:

Recently Added

Recently Played

Recently Completed

Favorite Games

Button:

View Full Library

---

# Recent Activity

Display the user's activity timeline.

Examples:

Started Elden Ring

Completed Hollow Knight

Added Celeste

Updated Rating

Marked Game as Favorite

Activities should appear chronologically.

---

# Friends

Create a Friends section.

Display:

Avatar

Username

Current Status

Current Game (Placeholder)

Button:

View Profile

Button:

View All Friends

This section should encourage social interaction.

---

# Favorite Platforms

Display platform badges.

Examples:

Steam

PlayStation

Xbox

Nintendo

PC

Retro Platforms

Badges should be visually attractive.

---

# Favorite Genres

Display genre badges.

Examples:

RPG

Action

Adventure

Racing

Horror

Simulation

Puzzle

Strategy

Platformer

Fighting

Badges should be reusable.

---

# Reviews Preview

Prepare a section for future reviews.

Display placeholder review cards.

Include:

Game

Score

Short Review

Publication Date

Button:

View All Reviews

---

# Collections

Display user-created collections.

Examples:

Completed in 2026

Retro Games

Horror Games

Best RPGs

Hidden Gems

This feature may initially use placeholder data.

---

# Empty States

If sections contain no data:

Display a friendly placeholder.

Explain the purpose of the section.

Avoid empty containers.

---

# Loading State

Use skeleton components.

Maintain visual consistency.

---

# Error State

Display friendly messages.

Allow retry when appropriate.

---

# Accessibility

Use semantic HTML.

Keyboard navigation.

Visible focus states.

Accessible buttons and links.

Proper heading hierarchy.

---

# Responsive Design

Support:

Desktop

Laptop

Tablet

Mobile

Sections should reorganize naturally.

Avoid horizontal scrolling.

---

# Animations

Use subtle animations.

Banner reveal

Cards

Buttons

Badges

Statistics

Activity Feed

Hover effects

Animations should reinforce quality without becoming distracting.

---

# Restrictions

Do not implement backend functionality.

Use realistic placeholder data.

Reuse components whenever possible.

Avoid duplicated layouts.

---

# Deliverables

The Profile page should communicate personality.

Visitors should quickly understand:

Who this player is.

What they enjoy playing.

How active they are.

How to explore their library.

The page should feel modern, social and worth sharing.

---

# Definition of Done

The phase is complete only if:

- [ ] Profile header implemented.
- [ ] Statistics cards created.
- [ ] Currently Playing section exists.
- [ ] Favorite Games section implemented.
- [ ] Public Library preview created.
- [ ] Recent Activity implemented.
- [ ] Friends section created.
- [ ] Favorite Platforms displayed.
- [ ] Favorite Genres displayed.
- [ ] Reviews preview prepared.
- [ ] Collections section exists.
- [ ] Empty states implemented.
- [ ] Loading state implemented.
- [ ] Error state implemented.
- [ ] Responsive layout completed.
- [ ] Matches the design language defined in FIGMA.md.