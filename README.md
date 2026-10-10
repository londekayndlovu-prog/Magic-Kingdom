# Master Kingdom: Retro Learning Adventure (ages 2-9)

Plain HTML/CSS/JavaScript, no build step, no backend. Pixel art is drawn in code.

## Files
- `index.html` page shell; `css/style.css`; `js/game.js` (all game logic, one file)
- `sw.js` service worker (offline); `offline.html` fallback; `manifest.webmanifest`; `icons/`
- `assets/fonts/` optional pixel font (see below)
- `PRIVACY.md` draft privacy policy; `package.json`, `capacitor.config.json`, `scripts/build-www.js` for Android

## Run locally
`python3 -m http.server 8080` then open http://localhost:8080 (service workers need http/https, not file://).

## Deploy to GitHub Pages
1. Create a repository, copy these files to its root, commit and push to `main`.
2. Settings > Pages > Deploy from a branch > `main` / `(root)`.
3. Open `https://<user>.github.io/<repo>/`. All paths are relative, so the sub-folder URL works.

## Offline
First visit online, then it works with no connection. In Chrome DevTools > Application > Service Workers, tick Offline and reload to check.
To ship an update, change `VERSION` in `sw.js`; the old copy is replaced the next time the game is closed and reopened.

## Pixel font (optional)
The game uses "Press Start 2P" (SIL Open Font License). It is NOT bundled yet. Download it from Google Fonts and save as `assets/fonts/PressStart2P-Regular.ttf`. Without it the game falls back to a monospace font.

## Android (Capacitor)
1. Install Node and Android Studio. In this folder: `npm install`
2. Set a real `appId` in `capacitor.config.json` (for example `com.yourname.masterkingdom`).
3. `npm run build:web` then `npx cap add android` then `npx cap sync android` then `npx cap open android`
4. In Android Studio set icon, version, signing key; build an Android App Bundle (.aab).
5. After any game change: `npm run build:web && npx cap sync android`.
Google Play needs: a Play developer account, privacy policy URL, Data safety form, Target audience set to include children (Families policy), and testing on real phones and tablets.

## Not finished before publishing
- Jigsaw, hidden-object and interactive story-choice puzzles are not built.
- Music is synthesised loops; narration uses device voices (quality varies). Recorded audio can replace them.
- Robe/hat unlocks are not linked to treasures; no pets or castle decorations yet.
- Art is simple code-drawn sprites; a pixel artist could replace them.
- Needs testing on real Android phones and tablets (touch, speed, narration voices).
- Privacy policy needs your date and contact details and a legal review.
