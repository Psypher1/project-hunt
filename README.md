# Project Hunt

> This is a project built to practice Svletekit and Pocketbase

🎯 A curated project listing app for finding projects to contribute to.
Description

Project Hunt is a web application designed to help developers find open-source projects to contribute to. Whether you are a beginner looking to gain experience or an experienced developer wanting to give back to the community, Project Hunt aims to provide a platform that connects developers with exciting projects.

The app is built using the following technologies:

- SvelteKit: A framework for building web applications using Svelte components.
- Tailwind CSS: A highly customizable CSS framework for building modern and responsive user interfaces.
- Pocketbase: A lightweight database-as-a-service platform for managing application data.

## Features

- user sign up
- adding project
- viewing projects

## Project Structure

```
project-hunt/
├── backend/
│   ├── pb_migrations
│   ├── pocketbase.exe
│   └── ...
└── web/
    ├── src/
    │   ├── features/
    │   │   ├── index.js
    │   │   ├── Modal.svelte
    │   │   └── ProjectCard.svelte
    │   ├── lib/
    │   │   └── helpers.js
    │   ├── routes/
    │   │   ├── (auth)/
    │   │   │   └── ...
    │   │   ├── my/
    │   │   │   └── ...
    │   │   ├── projects/
    │   │   │   └── ...
    │   │   ├── +layout.server.js
    │   │   ├── +layout.svelte
    │   │   └── +page.svelte
    │   ├── ui/
    │   │   ├── index.js
    │   │   ├── Input.svelte
    │   │   └── ...
    │   ├── app.html
    │   ├── hooks.server.js
    │   └── styles.css
    └── static
```

---

## Commands

1. To start backend: run `./pocketbase serve` within the folder that holds pocket base
2. frontend: run `pnpm dev` in web directory
