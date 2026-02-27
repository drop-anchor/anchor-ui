# Anchor UI Overview

## Mission
`anchor-ui` is the web surface for Anchor. It hosts the public product site and provides the authenticated browser-to-extension bridge for account connection.

## Core Responsibilities
- Serve marketing/product pages (`/`) and static public metadata.
- Run Clerk sign-in experience (`/sign-in`).
- Handle extension account-connect entrypoint (`/extension/connect`).
- Request one-time auth code from `anchor-api` and redirect to callback page.
- Return user to extension flow through `/extension/callback`.

## Key Runtime Flows
1. Extension opens `/extension/connect?state=...&device_id=...`.
2. If user is not authenticated, UI redirects to Clerk sign-in with safe redirect URL.
3. After auth, UI requests auth code from `anchor-api` (`POST /auth/code`).
4. UI redirects to `/extension/callback?code=...&state=...`.
5. Extension callback listener consumes code/state and completes token exchange with `anchor-api`.

## Project Structure
- `src/app/`: App Router pages and route handlers.
- `src/app/(extension)/extension/`: extension connect + callback flow.
- `src/app/(auth)/sign-in/`: Clerk sign-in route.
- `src/app/(app)/`: placeholder authenticated app/settings surfaces.
- `src/components/sections/`: landing-page sections.
- `src/server/service/`: server helpers (`Redirecter` URL sanitization).

## External Dependencies and Contracts
- `anchor-api`:
  - Calls `POST /auth/code` (base URL from `ANCHOR_API_BASE_URL`).
- Clerk:
  - Uses Clerk session/auth to identify signed-in users.
- Extension:
  - Receives and interprets `code` + `state` query params from callback route.

## Boundaries
- Does not issue Anchor access/refresh tokens directly.
- Does not own chat, analytics ingestion, or rate limiting.
- Mostly a bridge + web presentation layer; backend business logic remains in `anchor-api`.
