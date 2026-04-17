# Project structure

```text
.
├── docs/
│   ├── preview.md      # How to run a local preview server
│   └── structure.md    # Structure and conventions
├── index.html          # App entry page
├── scripts_preview.sh  # Local static preview server helper
└── src/
    ├── scripts/
    │   └── auth.js     # Auth view interactions
    └── styles/
        ├── auth.css    # Auth feature styles
        └── tokens.css  # Global design tokens + base styles
```

## Conventions

- Keep feature scripts in `src/scripts`.
- Keep reusable design values in `src/styles/tokens.css`.
- Keep feature styles in dedicated CSS files (e.g., `auth.css`).
- Keep docs in `docs/` and update them when structure changes.
