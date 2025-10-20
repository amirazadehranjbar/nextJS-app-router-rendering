# Next.js App Router Rendering Demo 🚀

[![Next.js](https://img.shields.io/badge/Next.js-14.x-black?style=flat&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue?style=flat&logo=typescript)](https://www.typescriptlang.org/)
[![Vercel](https://img.shields.io/badge/Deploy-Vercel-orange?style=flat&logo=vercel)](https://vercel.com)

## 🌟 About the Project

Hello! This project is an educational demo for learning and exploring the **App Router** in Next.js. The main focus is on **rendering strategies** (such as Server-Side Rendering, Client-Side Rendering, Static Rendering, and Streaming).

This project is still **in development** (WIP), and I'm working on it as a Next.js learner. The goal is to implement and test rendering concepts step by step. If you spot any issues or have suggestions, I'd love to hear them! 😊

### Why This Project?
- **Hands-On Learning**: Each code section demonstrates a rendering concept.
- **Modern and Up-to-Date**: Built on Next.js 14+ and App Router.
- **Simple and Expandable**: Starts from the standard Next.js boilerplate, with advanced features coming soon.

## 🚀 Current Features (and Future Ones)
- ✅ **Server Components** as the default for server-side rendering.
- ✅ **Client Components** with `'use client'` for client-side interactions.
- 🔄 **Static Rendering** with `export const dynamic = 'force-static';`.
- 🔄 **Dynamic Rendering** based on user requests.
- 🔄 **Streaming** with `<Suspense>` for better loading experiences.
- 🔄 **Parallel Routes** and **Intercepting Routes** (in progress).
- 🔄 **Error Handling** and **Custom Loading States**.

Currently, the home page (`app/page.tsx`) shows a simple Server Component example. More pages will be added soon!

## 📦 Prerequisites
- Node.js 18+ or higher
- npm/yarn/pnpm/bun (whichever you prefer)

## 🛠 Installation and Setup
1. **Clone the Repo**:
   ```bash
   git clone https://github.com/amirazadehranjbar/nextJS-app-router-rendering.git
   cd nextJS-app-router-rendering