# Caro AI Development Kit

## 01 - Project Setup

Read and follow:

- docs/implementation/00-master-prompt.md
- docs/SPEC.md
- docs/FIGMA.md

These documents define every permanent project rule.

Do not ignore them.

---

# Objective

Initialize the Caro project using modern frontend architecture.

This phase is ONLY responsible for project setup.

Do NOT implement pages.

Do NOT create application logic.

Do NOT recreate the Figma yet.

The goal is to prepare a clean, scalable foundation for future implementation.

---

# Tasks

Create the project.

Install every dependency required by the project.

Configure the development environment.

Organize folders.

Create the global theme.

Prepare routing.

Prepare reusable layouts.

Create placeholder pages only.

---

# Folder Structure

Organize the project using feature-based architecture.

Example:

src/

    assets/

        images/

        icons/

        fonts/

        logo.png

    components/

        layout/

        ui/

        navigation/

        cards/

        forms/

        profile/

        library/

        dashboard/

        search/

        shared/

    pages/

        Landing/

        Dashboard/

        Library/

        Search/

        Users/

        Profile/

        GameDetails/

        AddGame/

        Login/

        Register/

        NotFound/

    hooks/

    services/

    context/

    lib/

    types/

    styles/

    utils/

    routes/

---

# Routing

Configure routing for:

/

Dashboard

Library

Search

Users

Profile

Game Details

Add Game

Login

Register

404

Only placeholder pages are required.

---

# Global Theme

Configure:

Typography

Colors

Spacing

Border Radius

Shadows

Animations

Breakpoints

Container widths

Do not hardcode values repeatedly.

Centralize everything.

---

# Fonts

Use a modern and highly readable font.

Configure it globally.

---

# Icons

Use a consistent icon library.

Avoid mixing multiple icon packs.

---

# Layout

Create reusable layouts.

Public Layout

Authenticated Layout

These layouts will be reused by every page.

---

# Navigation

Create reusable components.

Navbar

Sidebar

Footer

Top Navigation

They may contain placeholder content for now.

---

# Theme

Create reusable constants for:

Primary Color

Secondary Color

Background

Surface

Borders

Text

Muted Text

Success

Warning

Danger

---

# Responsive Design

Configure responsive breakpoints.

Desktop

Laptop

Tablet

Mobile

Large Screens

---

# Accessibility

Prepare the project for accessibility.

Semantic HTML

Keyboard Navigation

Visible Focus

ARIA support where appropriate.

---

# Performance

Configure the project following good performance practices.

Organized imports.

Optimized assets.

Scalable structure.

---

# Code Quality

Use clean architecture.

Avoid duplicated code.

Create reusable utilities whenever possible.

Comment only where necessary.

Keep files organized.

---

# Deliverables

At the end of this phase the project should contain:

✔ Folder structure

✔ Installed dependencies

✔ Routing

✔ Theme

✔ Layouts

✔ Navigation

✔ Footer

✔ Placeholder pages

✔ Global styles

No actual application pages should be implemented yet.

The project should now be ready to begin implementing the Landing Page.