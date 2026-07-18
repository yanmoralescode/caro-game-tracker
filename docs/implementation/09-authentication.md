# Caro AI Development Kit

# 09 - Authentication

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
- docs/implementation/08-profile.md

These documents define the project's standards.

---

# Development Context

Authentication is the user's first interaction with Caro after deciding to create an account.

It should feel trustworthy, fast and modern.

The authentication experience should match the visual quality of the rest of the application.

Reuse existing layouts, buttons, forms and components whenever possible.

Avoid duplicated code.

---

# Objective

Implement the complete authentication flow.

Authentication is more than Login and Register.

Design the entire authentication experience.

The interface should be simple, premium and welcoming.

---

# Pages

Implement:

- Login
- Register
- Forgot Password
- Reset Password
- Email Verification (UI ready)
- Verify Email Success
- Session Expired
- 404 Authentication Error (optional)

---

# Authentication Layout

Create a dedicated public layout.

The layout should be different from the authenticated application.

Include:

Logo

Branding

Large illustration or application preview

Authentication form

Footer

Responsive layout

---

# Login

Include:

Email

Password

Remember Me

Forgot Password

Login Button

Register Link

Continue as Guest (optional)

Social Login placeholders

Google

Steam

Discord

GitHub

Social authentication may remain disabled with a "Coming Soon" badge.

---

# Register

Include:

Username

Display Name

Email

Password

Confirm Password

Accept Terms

Create Account

Login Link

---

# Forgot Password

Allow users to request a password reset.

Fields:

Email

Send Reset Link

Back to Login

---

# Reset Password

Fields:

New Password

Confirm Password

Save Password

---

# Email Verification

Prepare the interface.

Display:

Verification Sent

Check your inbox

Resend Email

Continue Later

Backend implementation is not required.

---

# Session Expired

Create a dedicated screen.

Explain:

The user's session has expired.

Allow:

Return to Login

---

# Protected Routes

Prepare the project architecture for protected routes.

Public Pages

Landing

Login

Register

Forgot Password

Private Pages

Dashboard

Library

Search

Users

Profile

Game Details

Future Settings

Mock authentication is acceptable.

---

# Form Validation

Validate:

Required fields

Email format

Password length

Password confirmation

Friendly validation messages

Do not use browser default validation.

---

# Password Rules

Minimum length

Uppercase

Lowercase

Number

Special character

Display requirements clearly.

---

# Feedback

Provide visual feedback for:

Loading

Success

Error

Validation

Buttons should clearly indicate current state.

---

# Accessibility

Semantic HTML

Keyboard navigation

Visible focus

Proper labels

ARIA where appropriate

---

# Responsive Design

Support:

Desktop

Laptop

Tablet

Mobile

Authentication should remain comfortable on every device.

---

# Animations

Use subtle animations.

Page transitions

Form appearance

Validation feedback

Buttons

Avoid distracting effects.

---

# Restrictions

Do not implement a backend.

Use realistic mock authentication.

Prepare the architecture for future API integration.

---

# Deliverables

Users should immediately trust the authentication experience.

The interface should feel clean, secure and professional.

The project should be ready for future backend integration.

---

# Definition of Done

The phase is complete only if:

- [ ] Login page created.
- [ ] Register page created.
- [ ] Forgot Password page created.
- [ ] Reset Password page created.
- [ ] Email Verification UI prepared.
- [ ] Session Expired page created.
- [ ] Protected route architecture prepared.
- [ ] Validation implemented.
- [ ] Feedback states implemented.
- [ ] Responsive layout completed.
- [ ] Matches the design language defined in FIGMA.md.