# Enterprise Operations Dashboard

A reference implementation of a data-heavy enterprise UI built with **Next.js 14**, **React 18**, **TypeScript**, and **MUI**. The project showcases:

- **Front-end architecture** for industrial monitoring apps (layout shell, route-level pages, feature hooks).
- **Design system wrappers** (`UiButton`, `UiTable`, `UiModal`, etc.) that sit atop MUI to enforce consistent props, accessibility, and testing hooks.
- **Deterministic data flows** using React Query + mocked datasets to mimic real telemetry, KPIs, and configuration APIs without external services.
- **Stateful data tooling** (table utilities, query error toggles, shared loading/empty/error states) for large table interactions.

---

## Getting Started

### Prerequisites
- Node.js **18.17+** (Next.js 14 will not run on Node 16).
- Yarn 1.22 (comes with the repo’s lockfile).

Install dependencies:

```bash
yarn install
```

### Run the Dev Server

```bash
yarn dev
```

The dashboard is served at http://localhost:3000 with hot reload enabled.

### Run the Test Suite

```bash
yarn test --runInBand
```

Tests cover table utilities plus the Dashboard/Table View/Configuration pages with React Testing Library. All mocked APIs rely on deterministic timers, so `jest.useFakeTimers()` is employed inside the tests.

### Linting

```bash
yarn lint
```

> **Note:** Linting requires Node ≥ 18.17. If you see `Node.js version >= v18.17.0 is required`, upgrade your local runtime.

---

## Folder Structure

```
src/
├─ components/
│  ├─ dashboard/           # KPI-specific components (e.g., KpiCard)
│  ├─ layout/              # App chrome (Sidebar, Header, AppLayout)
│  └─ ui/                  # Design system wrappers + shared states
├─ data/                   # Type definitions + deterministic mock data
├─ hooks/                  # React Query hooks + helpers (error toggle, etc.)
├─ pages/
│  ├─ dashboard/           # KPI view rendering grid + summary table
│  ├─ table-view/          # Full equipment table with modals
│  ├─ configuration/       # Controlled form with validation + toast
│  └─ _app.tsx             # ThemeProvider + global styles
├─ tests/
│  ├─ pages/               # Page-level React Testing Library suites
│  ├─ utils/               # Pure utility + hook tests
│  └─ testUtils.tsx        # renderWithProviders helper
├─ theme.ts                # Centralized typography, spacing, focus states
└─ utils/                  # Table utilities (filter/sort/pagination) + formatters
```

`tsconfig.jest.json`, `jest.config.cjs`, and `jest.setup.js` configure ts-jest, testing-library helpers, and Next.js shims. React Query clients in tests are provided via `renderWithProviders` to simulate the real app environment.

---

## Key Concepts Demonstrated

1. **Data-heavy UI performance:** React Query caching + fake latency simulate production APIs, while utility hooks handle filtering, sorting, and pagination outside the components.
2. **Design system layering:** Wrapper components restrict props, expose test IDs, enforce accessibility defaults, and centralize theming.
3. **Resilient state UX:** Every remote call shares Loading/Empty/Error states, modals are accessible (focus trapping + Escape), and forms include inline validation with deterministic defaults.
