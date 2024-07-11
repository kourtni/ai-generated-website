# An AI Generated Website

This project is to test to see how well AI tools perform at the creation of a custom website.

While there may be some human involvement to change names or update some aspects of the copy,
the vast majority of functionality will be implemented using AI tooling.

## Project Structure

Below is a combined project structure proposed by [Claude 3.5](https://claude.ai/) and [ChatGPT 4o](https://chatgpt.com/).

```
root_folder/
├── package.json (root)
├── pnpm-workspace.yaml
└── packages/
    └── chan-ko-website/
    |   ├── package.json
    |   └── src/
    |       └── (your React app files)
    └── questionnaire-website/
        ├── client
        |   ├── package.json
        │   ├── tsconfig.json
        │   ├── vite.config.ts
        |   └── src/
        |       └── (your React app files)
        ├── server
        |   ├── package.json
        │   ├── tsconfig.json
        |   └── src/
        |       └── (Express files)
```

Click [here](ProjectStructure.md) for the full project structure.

### Root package.json file

- This file is at the root of the project.
- It doesn't include direct dependencies for the app, only devDependencies shared across all packages.
- The scripts use pnpm filters to run commands in all packages.

### Package package.json files

- These files are located at packages/<package-name>/package.json.
- It includes all the specific dependencies and scripts for the specific package.

### Benefits of this setup

- Better organization for multi-package projects.
- Shared devDependencies reduce duplication.
- Easy to add more packages in the future if needed.

This setup allows you to have multiple packages in your project (like separate packages for the website, a backend API, shared components, etc.) while managing them all from a single root.

## Local Development

If you want to fully test the website funtionality, be certain to create an `env.local` file in the
root directory that holds the endpoint URL for where the ContactForm will post data. This file has
been added to `.gitignore` so that it will not added to the repo.

## Install Dependencies

- In the root directory, run `pnpm install` to install all dependencies.
- To add a dependency to the chan-ko-website package, use:  
  `pnpm add <dependency-package-name> --filter @chan-ko-llc/chan-ko-website`
- To run scripts, use: `pnpm run dev` or `pnpm run build` from the root directory.
