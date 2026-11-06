# SCPL Agent Portal (Next.js)

Responsive login page and dashboard for the SCPL स्वेच्छा केंद्र agent portal. Built with the Next.js App Router and plain CSS, with no UI library.

## Run it

```bash
npm install
npm run dev
```

Open http://localhost:3000 and sign in with the demo login:

- Username: `agent`
- Password: `agent123`

## Where to change things

| What | File |
| --- | --- |
| Your real logo | Put it in `/public`, then set `LOGO_SRC` in `components/Logo.jsx` |
| Services shown on the dashboard, their tabs and hints | `lib/services.js` |
| Left menu items | `lib/nav.js` |
| Wallet and IRCTC balances, agent name | `app/dashboard/page.jsx` and `components/DashboardShell.jsx` |
| Colours, spacing, breakpoints | `app/globals.css` (variables at the top) |
| Icons | `lib/icons.js` |
| Login check | `app/api/login/route.js` |
| Route protection | `middleware.js` |

Each service card has a `href`. Set it to the real page when you build it, for example `/dashboard/recharge`.

## Responsive behaviour

- Above 960px the login is two columns and the dashboard has a fixed left menu.
- At 960px and below the login stacks with the form first, and the left menu becomes a slide-in drawer opened from the hamburger button in the top bar.
- At 560px and below the service cards go to two columns and the top bar compacts.

## Before going live

The login is a demo: the credentials are hardcoded and the cookie holds a fixed value. Replace `app/api/login/route.js` with a call to your real agent-login API, issue a signed session token (Auth.js or a JWT), and verify that token in `middleware.js` instead of only checking that the cookie exists. The balances and agent name in the dashboard are placeholders to replace with your own data.
