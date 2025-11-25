Tailwind CSS setup for this project

Files added/updated:

- `tailwind.config.cjs`
- `postcss.config.cjs`
- `src/index.css` (Tailwind directives inserted)

Install dev dependencies:

```powershell
npm install -D tailwindcss postcss autoprefixer;
# or with pnpm: pnpm add -D tailwindcss postcss autoprefixer;
# or with yarn: yarn add -D tailwindcss postcss autoprefixer
```

Run the dev server after installing:

```powershell
npm run dev
```

Tailwind will scan `./index.html` and `./src/**/*.{js,ts,jsx,tsx}` as configured in `tailwind.config.cjs`.
