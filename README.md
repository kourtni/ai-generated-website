# An AI Generated Website

This project is to test to see how well AI tools perform at the creation of a custom website.

While there may be some human involvement to change names or update some aspects of the copy,
the vast majority of functionality will be implemented using AI tooling.

## Project Structure
Below is the project structure proposed by [Claude 3.5](https://claude.ai/).
```
root_folder/
├── package.json (root)
├── pnpm-workspace.yaml
└── packages/
    └── website/
        ├── package.json
        └── src/
            └── (your React app files)
```
Click [here](ProjectStructure.md) for the full project structure.

### Root package.json
* This file is at the root of the project.
* It doesn't include direct dependencies for the app, only devDependencies shared across all packages.
* The scripts use pnpm filters to run commands in all packages.

### Website package.json
* This file is located at packages/website/package.json.
* It includes all the specific dependencies and scripts for the React app

## Install Dependencies
* In the root directory, run pnpm install to install all dependencies.
* To add a dependency to the website package, use:  
`pnpm add <package-name> --filter @chan-ko-llc/website`
* To run scripts, use: pnpm run dev or pnpm run build from the root directory.

### Benefits of this setup
* Better organization for multi-package projects.
* Shared devDependencies reduce duplication.
* Easy to add more packages in the future if needed.

This setup allows you to have multiple packages in your project (like separate packages for the website, a backend API, shared components, etc.) while managing them all from a single root.
