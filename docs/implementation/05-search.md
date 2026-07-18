# Caro AI Development Kit

# 05 - Search

## Read First

Before starting this phase, read:

- docs/SPEC.md
- docs/FIGMA.md
- docs/implementation/00-master-prompt.md
- docs/implementation/01-project-setup.md
- docs/implementation/02-landing-page.md
- docs/implementation/03-dashboard.md
- docs/implementation/04-library.md

These documents define the project's standards.

---

# Objective

Implement the Search page.

The Search page is the gateway to discovering games.

It should feel fast, modern and enjoyable.

Searching should become one of the strongest experiences of Caro.

The interface should encourage users to explore new games.

---

# General Rules

Respect the visual language described in FIGMA.md.

Do not redesign the interface.

Improve usability while maintaining consistency.

Whenever reusable UI or logic is identified, extract it into reusable components.

---

# Layout

Use the authenticated layout.

Sidebar.

Top Navigation.

Scrollable content.

Responsive layout.

---

# Header

Display:

Page Title

Short Description

Example:

Search

"Discover your next adventure."

---

# Search Bar

The search bar should be the visual focus.

Include:

Large input

Search icon

Clear button

Loading state

Placeholder example:

"Search for any game..."

Searching should feel immediate.

---

# Search Filters

Create a collapsible filter panel.

Suggested filters:

Platform

Genre

Release Year

Developer

Publisher

Multiplayer

Singleplayer

Metacritic Score

Rating

Sort By

Filters should support combinations.

---

# Search Results

Results should be displayed using responsive cards.

Each card should display:

Game Cover

Title

Release Year

Genres

Platforms

Short Description

External Rating

Action Button

---

# Result Actions

Each result should provide:

View Details

Add to Library

Favorite

Share (future)

Buttons should be visually consistent.

---

# Trending Section

When there is no search query, display:

Trending Games

Recently Released

Popular Games

Upcoming Releases

Highly Rated

These sections encourage exploration.

---

# Recent Searches

Display recent search history.

Allow users to:

Repeat search

Remove item

Clear history

---

# Search Suggestions

Prepare support for autocomplete.

Suggestions may include:

Games

Developers

Publishers

Franchises

Genres

Mock data is acceptable.

---

# Search States

Implement clear UI for:

Idle

Searching

Results Found

No Results

Error (placeholder)

Loading

Every state should have a polished interface.

---

# Empty Results

If nothing is found:

Display an illustration or placeholder.

Provide suggestions.

Offer the Random Game feature.

Encourage broader searches.

---

# Random Game

Include a prominent Random Game button.

Purpose:

Suggest one random game from the external database.

Display:

Cover

Title

Genres

Platforms

Release Year

Button:

Try Another

---

# Performance

Prepare for very large result sets.

Support pagination or infinite scrolling.

Optimize rendering.

---

# Accessibility

Semantic HTML.

Keyboard navigation.

Visible focus.

Accessible buttons.

Good color contrast.

---

# Responsive Design

Desktop

Laptop

Tablet

Mobile

Search should remain comfortable on every device.

Cards should reorganize naturally.

---

# Animations

Use smooth animations for:

Search results

Loading

Hover

Filters

Cards

Buttons

Transitions should feel premium.

---

# Restrictions

Do not implement backend integration.

Use realistic mock data.

Do not hardcode repeated UI.

Extract reusable components.

---

# Deliverables

The Search page should encourage exploration.

Users should quickly understand:

How to search.

How to filter.

How to discover games.

How to add games to their library.

---

# Definition of Done

The phase is complete only if:

- [ ] Header implemented.
- [ ] Search bar created.
- [ ] Filters implemented.
- [ ] Responsive search results.
- [ ] Trending section exists.
- [ ] Recent searches implemented.
- [ ] Search suggestions prepared.
- [ ] Search states implemented.
- [ ] Empty results state created.
- [ ] Random Game feature available.
- [ ] Responsive layout completed.
- [ ] Reusable components extracted.
- [ ] Matches the design language defined in FIGMA.md.