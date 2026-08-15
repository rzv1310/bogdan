# Plan: Header visibility on mobile

## Goal
On mobile, hide the fixed header only on the homepage until the user scrolls 50px. On all other pages, the header must be visible immediately on page load.

## Current state
`src/components/layout/Header.tsx` uses a single scroll listener. On mobile it translates the header up (`-translate-y-full`) until `window.scrollY > 50`, then shows it. This behavior applies globally to every route.

## Changes
1. In `src/components/layout/Header.tsx`, determine whether the current route is a homepage:
   - Romanian homepage: `/`
   - English homepage: `/en` or `/en/`
2. Keep the existing scroll listener, but change the mobile transform class:
   - Homepages: keep `translate-y-0` only after 50px scroll, otherwise `-translate-y-full`.
   - Non-homepages: always `translate-y-0` on mobile.
3. Leave desktop behavior unchanged (`md:translate-y-0`).

## Verification
- Build the project.
- Preview the homepage on mobile viewport: header should be hidden at top, appear after scroll.
- Preview any service, sub-service, or content page on mobile viewport: header should be visible immediately without scrolling.
