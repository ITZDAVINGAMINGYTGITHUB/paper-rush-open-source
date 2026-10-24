# Paper Rush

**Paper Rush v1.6** is a paper-craft rhythm platformer built with React, Vite, TypeScript, Tailwind, and Supabase-backed community features.

This repository is the public open-source home for the project.

## What Paper Rush includes

- Multiple movement/gameplay modes
- A level editor and community level browser
- Online publishing and ratings
- Leaderboards and a ranked demon list
- Local-only fallback when backend configuration is unavailable
- Browser-first deployment with Vite

## Open-source status

Paper Rush is being published from its existing v1.6 production codebase. The game itself is not being rebuilt for this repository.

Source code released here is licensed under the **MIT License** unless a file says otherwise.

The Paper Rush name, branding, and any third-party or separately licensed media/assets are **not automatically covered by the MIT license**. Do not redistribute assets unless their license or source explicitly allows it.

## Current public source

The repository currently includes the first audited reusable game module plus project documentation. Additional v1.6 source can be synchronized from the production repository after secret, privacy, and third-party-asset checks.

## Development setup

The production project uses Node.js with Vite.

Typical development commands:

```bash
npm ci
npm run dev
npm test
npm run build
```

For backend-enabled development, copy `.env.example` to `.env` and provide your own Supabase project values. Never commit `.env`.

Without backend variables, Paper Rush is designed to fall back to local-only storage for supported features.

## Security

Do not commit API secrets, session tokens, user records, database exports, private production configuration, or credentials. See [SECURITY.md](SECURITY.md).

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md).

## License

Source code in this repository is available under the [MIT License](LICENSE), except where otherwise stated.
