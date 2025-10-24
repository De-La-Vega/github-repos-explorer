# 🚀 GitHub Repos Explorer

A modern React + Next.js 15 application to explore public GitHub repositories by username.

---

## 🚀 Features & Tech Stack

| Category             | Description                                                                            |
| -------------------- | -------------------------------------------------------------------------------------- |
| 🔍 **Search & Sort** | Search public repositories by GitHub username and sort by stars, forks, or last update |
| ⚡ **Data Layer**    | Instant caching and refetching with **React Query**                                    |
| 🎨 **UI / UX**       | Responsive interface built with **TailwindCSS** and **shadcn/ui**                      |
| 🧱 **Type Safety**   | Fully typed using **TypeScript**                                                       |
| 🧪 **Testing**       | Unit-tested with **Vitest** and **React Testing Library**                              |
| 🔧 **Code Quality**  | Managed with **ESLint**, **Prettier**, and **Husky** pre-commit hooks                  |
| 💡 **Framework**     | Powered by **Next.js 14 (App Router)**                                                 |
| ☁️ **Deployment**    | Hosted on **Vercel**                                                                   |
| 🛠️ **CI/CD**         | Automated checks via **GitHub Actions** (lint → test → build)                          |

---

## 🧠 How it works

- User enters a GitHub username
- Client calls GitHub API via React Query
- Repos are cached and rendered with Tailwind UI
- Errors and loading states handled gracefully

---

## 🧪 Run locally

```
npm install
npm run dev
```

Then open http://localhost:3000

---

## 🚀 Deploy

1. Push your repo to GitHub
2. Go to vercel.com → import repo
3. That’s it — auto build and deploy!

---

## 🧾 License

MIT License

Copyright (c) 2025 Vitaliy Kirenkov
