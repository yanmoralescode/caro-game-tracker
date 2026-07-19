# Caro - Project Specification

> Version: 0.1
> Status: Draft
> Author: Yan Morales
> Last Updated: 16/07/2026

---

# 1. Project Overview

## 1.1 Purpose

Caro is a web application that allows users to organize, track, and manage their personal game collection.

---

## 1.2 Goals

- Track owned games
- Manage backlog
- Monitor progress
- Search for games
- Build a clean and modern experience

---

## 1.3 Target Audience

- Casual gamers
- Completionists
- Steam users
- Console players
- People with large backlogs

---

# 2. Scope

## Included

- User authentication
- Personal library
- Search games
- Game details
- Track play status
- Friends
- Multiplayer
- Chat
- Recommendations

---

# 3. Functional Requirements

## Authentication

- Register
- Login
- Logout

---

## Library

- Add game
- Edit game
- Remove game
- Filter
- Sort
- Search

---

## Search

- Search by title
- View results
- Open game page

---

## Game Details

- Cover
- Description
- Genres
- Platforms
- Status
- Personal rating
- Notes
- Hours played

---

## User Profile

- Username
- Name
- Avatar
- Bio
- Statistics
- Games (If a Public Profile)
- Friends

---

# 4. Non-Functional Requirements

- Responsive
- Fast loading
- Mobile friendly
- Accessible
- Clean UI
- Secure authentication

---

# 5. User Stories

As a user,
I want to add a game
so I can keep track of it.

---

As a user,
I want to search my library
so I can quickly find a game.

---

As a user,
I want to update my progress
so I can edit the game status to me

---

As a user,
I want to add multiplayer games
So I have an intire multiplayer section in my personal library

---

As a user,
I want to show the application to my friends and share my collection with them
So I can add anyone as a friend through the username.

# 6. Data Model

## Game

- id
- title
- cover
- platform
- genre
- status
- rating
- hoursPlayed
- startDate
- finishDate
- notes

---

## User

- id
- username
- email
- password
- avatar

---

# 7. Pages

## Home

Purpose

Sections

Features

---

## Library

Purpose

Sections

Features

---

## Search

Purpose

Sections

Features

---

## Game Details

Purpose

Sections

Features

---

## Profile

Purpose

Sections

Features

---

# 8. Navigation Flow

Home

↓

Search

↓

Game Details

↓

Add to Library

↓

Library

↓

Edit Game

---

# 9. UI Components

- Navbar
- Footer
- Hero
- Game Card
- Search Bar
- Filter Panel
- Modal
- Buttons
- Forms

# 10. Folder Structure

frontend/

backend/

database/

docs/

assets/

---

# 11. Technology Stack

Frontend

Backend

Database

Version Control

Deployment

---

# 12. API

Future endpoints.

GET /games

POST /games

PUT /games/{id}

DELETE /games/{id}

GET /search

---

# 13. Database Schema

Future ER Diagram.

---

# 14. Roadmap

## Phase 1

Planning

Documentation

Figma

---

## Phase 2

Frontend

Responsive Layout

Components

---

## Phase 3

CRUD

Local Storage

---

## Phase 4

Backend

REST API

Authentication

Database

---

## Phase 5

Deployment

Optimization

Testing

---

# 15. Future Features

Achievements

Wishlist

Reviews

Friends

Collections

Import Steam Library

RAWG API

Statistics Dashboard

---

# 16. Risks

Things that may become difficult.

Examples:

Authentication

API Rate Limits

Database Design

Deployment

---

# 17. References

Useful links

Design inspiration

Documentation

API references
