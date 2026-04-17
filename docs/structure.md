# Project Structure

This repo uses a scalable layout so UI flows can grow into a multi-purpose app:

- `index.html`: Entry page and semantic auth markup.
- `src/styles/tokens.css`: Shared design tokens/global styles.
- `src/styles/auth.css`: Auth page-specific styles.
- `src/scripts/auth.js`: Auth view state and form interaction logic.
- `docs/structure.md`: Notes on codebase structure.

As additional app modules are built, follow the same pattern:

- `src/styles/<feature>.css` for feature-level styling.
- `src/scripts/<feature>.js` for feature-level behavior.
