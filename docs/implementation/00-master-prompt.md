# Caro AI Development Kit

## Master Prompt

Version: 1.0

This document defines the permanent instructions that every AI agent must follow while working on the Caro project.

This file should be considered the source of truth for implementation decisions.

Any implementation prompt must follow these instructions unless explicitly overridden.

---

# Project

Name:

Caro

Description:

Caro is a modern game tracking platform where players can organize their personal game collection, monitor progress, rate titles, discover new games and interact with friends.

The application should feel like a premium SaaS product rather than a simple CRUD application.

The overall experience should prioritize simplicity, usability and aesthetics.

---

# Project Philosophy

Caro is NOT just another game tracker.

The goal is to become the user's personal gaming hub.

Everything should encourage users to:

• organize their collection

• continue unfinished games

• discover new titles

• share their gaming profile

• interact with friends

The interface should feel calm, premium and enjoyable.

Avoid unnecessary complexity.

---

# Primary References

Always use these as the main references.

UI

- Current Figma Draft

Documentation

- SPEC.md

- FIGMA.md

Project Roadmap

- ROADMAP.md

Implementation documents inside:

docs/implementation/

---

# Design Language

Maintain the existing visual identity.

Never redesign the project from scratch.

Instead:

Respect the Figma draft.

Improve weak areas.

Keep the overall visual language consistent.

The application should resemble products like:

- Linear
- Notion
- Steam
- Arc Browser
- PlayStation
- Xbox

Modern

Minimal

Premium

Gaming-oriented

---

# Color Palette

Preserve the existing palette defined by the Figma project.

Primary accent:

Cyan

Background:

Dark

Cards:

Dark elevated surfaces

Typography:

High contrast

Soft secondary colors.

Never introduce random colors.

---

# Typography

Use a modern sans-serif font.

Maintain a clear hierarchy.

Large hero titles.

Readable body text.

Comfortable spacing.

---

# UI Principles

Every screen must prioritize:

Consistency

Whitespace

Visual hierarchy

Accessibility

Responsiveness

Never overcrowd the interface.

---

# Components

Always create reusable components.

Examples:

Navigation

Sidebar

Footer

Buttons

Cards

Statistics Cards

Game Cards

Badges

Progress Bars

Search Bar

Dropdown

Modal

Dialogs

Forms

Inputs

Avatars

Profile Header

Never duplicate UI.

---

# Animations

Animations should feel premium.

Use modern animation libraries when appropriate.

Recommended:

Framer Motion

Use CSS transitions for simple interactions.

Examples:

Hover

Focus

Buttons

Cards

Links

Use Framer Motion for:

Hero animations

Page transitions

Section reveal

Sidebar

Modal

Dropdown

Loading transitions

Animations must never distract the user.

---

# Technology

Use modern technologies suitable for production.

Stack:

Vanilla HTML-CSS

TypeScript

React

Vite

Tailwind CSS

React Router

Framer Motion

Lucide React

shadcn/ui

Radix UI

React Hook Form

Zod

TanStack Query


---

# Architecture

Create a scalable frontend architecture.

Organize the project by feature whenever possible.

Avoid monolithic files.

Avoid duplicated code.

Follow modern frontend best practices.

---

# Landing Page

The current Figma only represents the authenticated application.

The landing page does not exist yet.

It must be designed while respecting the application's existing visual identity.

The landing page should include:

Hero

Features

Application Showcase

Dashboard Preview

Library Preview

Search Preview

Profile Preview

How It Works

Frequently Asked Questions

Call To Action

Footer

---

# Authenticated Pages

Respect the existing Figma draft.

Current pages:

Dashboard

Library

Search

Profile

Game Details

Add Game

Improve them without changing their visual identity.

---

# Required Improvements

## Users Page

Create a dedicated page for discovering users.

Include:

Search

Featured Users

Popular Collections

Recently Active

Trending Players

---

## Profile

Transform it into a social profile.

Include:

Avatar

Bio

Friends

Favorite Platforms

Favorite Genres

Public Library

Favorite Games

Recent Activity

Gaming Statistics

Completion Rate

Reviews

Remove the "Average Rating" section.

---

## Add Game

Games are retrieved from an external database.

Users never create games manually.

Workflow:

Search

Select Game

Configure personal information only.

Editable information:

Status

Rating

Hours Played

Started Date

Finished Date

Completion Percentage

Favorite

Platform Played

Notes

---

## Platforms

Support both modern and retro platforms.

Include:

Steam

Epic Games

GOG

Battle.net

EA App

Ubisoft Connect

Xbox

Xbox 360

Xbox One

Xbox Series S

Xbox Series X

PlayStation

PS1

PS2

PS3

PS4

PS5

PSP

PS Vita

Nintendo

NES

SNES

Nintendo 64

GameCube

Wii

Wii U

Switch

Game Boy

Game Boy Advance

Nintendo DS

Nintendo 3DS

Master System

Mega Drive

Saturn

Dreamcast

PC

Mobile

Arcade

Other

---

## Status

Supported values:

Playing

Completed

Backlog

Wishlist

Paused

Dropped

Competitive / Multiplayer

---

## Random Game

Add a "Random Game" button in the top navigation.

Purpose:

Randomly recommend one game from the external database.

---

## Footer

Every page should contain a footer.

Include:

Logo

Navigation

GitHub

Privacy

Terms

Contact

Copyright

---

# Logo

Do not generate another logo.

Use:

src/logo.png

This is the official project logo.

---

# Responsive Design

Support:

Desktop

Laptop

Tablet

Mobile

Large Screens

Use responsive layouts instead of simply shrinking desktop content.

---

# Accessibility

Use semantic HTML.

Keyboard navigation.

ARIA labels where appropriate.

Good contrast.

Visible focus states.

---

# Performance

Optimize:

Images

Icons

Rendering

Lazy loading

Code splitting when applicable.

---

# Code Quality

Generate production-quality code.

Keep files organized.

Prefer reusable logic.

Avoid duplicated implementations.

Always write maintainable code.

---

# General Rule

Never sacrifice maintainability for speed.

The goal is to build a real product, not simply generate code.

Every implementation should be something that could realistically be shipped to production.