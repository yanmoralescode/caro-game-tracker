# Caro UI Reference

Version: 0.1

This document describes the current Figma draft of Caro.

It is the visual reference for the project and should always be used together with SPEC.md.

Whenever an implementation prompt references the Figma design, it refers to the specifications contained in this document.

The purpose of this document is not to describe functionality, but to define the visual structure, layout, user experience and design language of the application.

---

# General Design Philosophy

Caro is a premium game tracking platform.

The interface should feel modern, clean and elegant while maintaining a strong gaming identity.

The design should prioritize readability, organization and consistency.

The interface should never feel overloaded.

Every screen should immediately communicate its purpose.

---

# Visual Style

Theme

Dark

Accent Color

Cyan

Cards

Rounded corners

Soft shadows

Elevated surfaces

Typography

Modern sans-serif

High contrast

Comfortable spacing

Animations

Smooth

Subtle

Premium

---

# Design References

The overall visual experience should resemble products such as:

Linear

Steam

Arc Browser

Notion

Discord

PlayStation

Xbox

The goal is not to copy these products, but to achieve the same level of polish and consistency.

---

# Navigation

The application is divided into two experiences.

Public

Landing Page

Authenticated

Dashboard

Library

Search

Users

Profile

Game Details

Add Game

Future pages

Settings

Friends

Notifications

---

# Sidebar

Authenticated pages use a persistent sidebar.

The sidebar should remain consistent across the application.

Contents

Dashboard

Library

Search

Users

Profile

Random Game

Settings (future)

Logout

The sidebar should use icons together with labels.

The active page should always be visually highlighted.

---

# Top Navigation

Authenticated pages should contain a top navigation bar.

Suggested elements

Search

Notifications

Random Game button

Profile avatar

Quick access actions

The navigation should remain lightweight.

---

# Landing Page

The landing page does not exist in the current Figma.

It must be created while preserving the design language established by the authenticated interface.

Required sections

Hero

Features

Application Preview

How It Works

FAQ

Call To Action

Footer

The landing page should immediately explain what Caro is.

---

# Dashboard

Purpose

Provide an overview of the user's gaming activity.

Visual hierarchy

Welcome section

Continue Playing

Statistics

Recently Added

Recently Played

Recommendations

Friends Preview

Quick Actions

Activity Timeline

Random Game

The dashboard should feel alive and personalized.

---

# Library

Purpose

Display the user's complete game collection.

Layout

Grid of game cards.

Include

Search

Filters

Sorting

Status filters

Platform filters

Genre filters

Responsive grid

Each game card should display

Cover

Title

Platform

Status

Personal Rating

Progress

Hover actions

The Library is one of the most important pages in Caro.

---

# Search

Purpose

Allow users to discover games from the external database.

Layout

Large search bar

Trending games

Recently released

Popular titles

Search results

Each result should contain

Cover

Title

Platforms

Genres

Release year

Rating

Quick View

Add to Library

Search should feel fast and enjoyable.

---

# Users

Purpose

Allow users to discover other players.

Include

Search

Featured Users

Recently Active

Popular Collections

Suggested Friends

Each user card should display

Avatar

Username

Bio

Favorite Platform

Games Owned

Friends

Public Library button

The page should encourage community interaction.

---

# Profile

Purpose

Represent the user's gaming identity.

The profile should resemble a social media profile rather than a settings page.

Include

Banner

Avatar

Username

Bio

Friends

Favorite Platforms

Favorite Genres

Favorite Games

Public Library

Recent Activity

Gaming Statistics

Completion Rate

Current Playing

Recently Completed

Recent Reviews

Remove

Average Rating

The profile should encourage exploration.

---

# Game Details

Purpose

Display detailed information about a game.

Include

Large Cover

Description

Genres

Platforms

Developer

Publisher

Release Date

Screenshots

Videos (future)

Reviews (future)

User Actions

Add to Library

Favorite

Rate

Open Official Website

The page should feel cinematic.

---

# Add Game

Games are never manually created.

Users search for an existing game.

Workflow

Search

Select

Configure personal information

Editable fields

Status

Platform Played

Rating

Hours Played

Completion Percentage

Started Date

Finished Date

Favorite

Notes

The page should remain simple.

---

# Status Options

Supported values

Playing

Completed

Backlog

Wishlist

Paused

Dropped

Competitive / Multiplayer

Each status should have a consistent visual indicator.

---

# Random Game

A Random Game button should be available globally.

Purpose

Recommend one random game from the external database.

It should encourage discovery.

---

# Footer

Every page should include a footer.

Contents

Logo

Navigation

GitHub

Privacy

Terms

Contact

Copyright

The footer should remain minimal.

---

# Responsiveness

The application must support

Desktop

Laptop

Tablet

Mobile

Large displays

Layouts should adapt naturally.

Avoid horizontal scrolling.

---

# Design Principles

Consistency over creativity.

Clarity over decoration.

Reusable components.

Minimal visual noise.

Strong visual hierarchy.

Comfortable spacing.

Readable typography.

Premium interactions.

The interface should feel polished enough to resemble a commercial SaaS product.

---

# Notes

The current Figma draft represents approximately 90% of the authenticated experience.

The following improvements are intentionally planned during implementation:

• Creation of the Landing Page.
• Creation of the Users page.
• Profile redesign with stronger social features.
• Footer implementation.
• Random Game feature.
• Expanded platform support.
• Improved Add Game flow.
• Mobile optimization.
• Reuse of the official logo located at src/logo.png.

Any implementation should preserve the original design language while applying these improvements.