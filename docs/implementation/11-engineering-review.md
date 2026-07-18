# Caro AI Development Kit

# 11 - Engineering Review

## Read First

Before beginning this phase, read every project document.

Required references:

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
- docs/implementation/08-profile.md
- docs/implementation/09-authentication.md
- docs/implementation/10-design-system.md

---

# Role

You are no longer acting as a code generator.

You are acting as:

- Senior Frontend Engineer
- Software Architect
- UI/UX Reviewer
- Accessibility Reviewer
- Performance Reviewer
- Tech Lead

Your objective is to review the entire project as if it were a Pull Request waiting for approval.

Do not assume the implementation is correct simply because it compiles.

Question every decision.

---

# Objective

Review the entire project.

Identify weaknesses.

Improve quality.

Reduce technical debt.

Increase maintainability.

Prepare the project for future development.

Do not introduce new features.

Only improve existing ones.

---

# Functional Review

Verify that every feature defined in SPEC.md has been implemented correctly.

Examples:

Landing Page

Dashboard

Library

Search

Game Details

Users

Profile

Authentication

Random Game

Footer

Responsive behavior

Report missing functionality.

---

# Design Review

Compare every page with FIGMA.md.

Verify:

Visual hierarchy

Spacing

Typography

Color usage

Cards

Icons

Animations

Layout consistency

Identify inconsistencies.

Correct them.

---

# Component Review

Inspect every reusable component.

Questions:

Can this component be reused elsewhere?

Does another component already solve the same problem?

Can multiple components become one with variants?

Avoid duplicate implementations.

---

# Code Review

Inspect:

Component organization

Folder structure

Imports

Naming

Hooks

Utilities

Types

Props

Refactor where appropriate.

---

# Architecture Review

Verify:

Feature organization

Scalability

Maintainability

Separation of concerns

Dependency organization

Avoid unnecessary complexity.

---

# Performance Review

Inspect:

Lazy loading

Bundle size

Code splitting

Memoization opportunities

Image optimization

Rendering performance

Animation performance

Identify unnecessary rerenders.

---

# Accessibility Review

Verify:

Semantic HTML

Heading hierarchy

Keyboard navigation

Focus management

Color contrast

ARIA attributes

Interactive element sizes

Screen reader friendliness

Correct accessibility issues whenever possible.

---

# Responsive Review

Test:

Desktop

Laptop

Tablet

Mobile

Ultra-wide displays

Verify:

Spacing

Navigation

Cards

Overflow

Touch targets

Layouts

Fix inconsistencies.

---

# Animation Review

Verify:

Duration

Consistency

Purpose

Performance

Avoid unnecessary motion.

Animations should support usability.

---

# UX Review

Ask:

Can the user understand this immediately?

Is navigation intuitive?

Are buttons clearly labeled?

Are actions predictable?

Can unnecessary steps be removed?

Improve the experience without changing the product vision.

---

# Error Handling

Verify:

Empty states

Loading states

Error states

Validation

Fallbacks

Retry mechanisms

No screen should fail silently.

---

# Forms Review

Inspect:

Validation

Labels

Accessibility

Feedback

Error messages

Spacing

Input consistency

---

# Security Preparation

Review frontend security practices.

Examples:

Sensitive information

Environment variables

Token handling

Protected routes

Input validation

Do not implement backend security.

Prepare the frontend correctly.

---

# Maintainability

Reduce technical debt.

Simplify complex logic.

Improve readability.

Improve folder organization.

Improve naming.

Document non-obvious decisions.

---

# Documentation Review

Verify consistency between:

SPEC.md

FIGMA.md

Implementation documents

Generated code

If documentation and implementation conflict:

Prefer implementation only if it improves the product.

Otherwise update the implementation to match the documentation.

---

# AI Self Review

Before considering the review complete, ask yourself:

If another engineer joins this project tomorrow...

Would they immediately understand:

Project structure?

Component hierarchy?

Folder organization?

Naming conventions?

Development workflow?

If not,

Improve the project.

---

# Restrictions

Do not redesign Caro.

Do not introduce unrelated technologies.

Do not create unnecessary abstractions.

Respect the project's established architecture.

---

# Deliverables

At the end of this review:

The application should feel cohesive.

Professional.

Maintainable.

Production-ready.

Easy to continue developing.

The codebase should resemble one written by an experienced frontend team rather than isolated AI-generated pages.

---

# Definition of Done

The review is complete only if:

- [ ] No duplicated components remain.
- [ ] Naming conventions are consistent.
- [ ] Folder structure is coherent.
- [ ] Responsive issues corrected.
- [ ] Accessibility improved.
- [ ] Performance opportunities addressed.
- [ ] Documentation matches implementation.
- [ ] Technical debt reduced.
- [ ] Code is easier to maintain.
- [ ] UI consistency verified.
- [ ] UX consistency verified.
- [ ] The application is ready for future backend integration.
- [ ] The project feels like a cohesive product rather than independent pages.