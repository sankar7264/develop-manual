# Presidio Web

## Description

Presidio's front end React application.

### This application uses following technologies -

- [React](https://reactjs.org/)
- [Next](https://nextjs.org/)
- [Material-UI](https://mui.com/material-ui/getting-started/overview/)
- [Storybook](https://storybook.js.org/)
- [i18n](https://nextjs.org/docs/advanced-features/i18n-routing)
- [Google Maps](https://react-google-maps-api-docs.netlify.app/)

#### Architecture diagram and stack details [here](<(https://t3thinktank.atlassian.net/wiki/spaces/PT/pages/3056009378/Architecture+Diagram+for+Presidio+Frontend)>)

#### Coding guidelines and editor setup

We are following an airbnb style guide for linting which is further extensible. These standards are well documented [here](https://t3thinktank.atlassian.net/wiki/spaces/PT/pages/3023110179/Development+Best+Practices+-+Frontend)

### Relevant documentation on confluence

- [Gitlab guidelines](https://t3thinktank.atlassian.net/wiki/spaces/PT/pages/3083501569/Best+Practices+for+Gitlab)
- [Storybook configuration](https://t3thinktank.atlassian.net/wiki/spaces/PT/pages/3062693889/Storybook+configuration)

# Installation and Usage

## Dependencies

All dependencies are listed in the [package.json](https://gitlab.t-3.com/presidio/presidio-web/-/blob/development/package.json) file, which is located in the root folder of the project.

## Setup

- Clone this repository inside the code editor (VS Code recommended)
- Checkout the development branch
- Run this command to install necessary prod and dev dependencies - **yarn install** (Make sure you have yarn installed globally in your system)

## Environment Variables

### For development

- Create a .env.local file in the root repository
- Paste the contents from .env.example file. If any value is missing, please reach out to the lead

### For testing

- Create a .env.test file in the root repository
- Paste the contents from .env.test.example file. If any value is missing, please reach out to the lead

## Running application for development

- Run this command inside the terminal to start dev server - **yarn dev**
- Create a branch from development when working on a new feature of a bug

## Running production build

Run this command inside the terminal to start production build - **yarn start**

## Code Review Instructions

For code reviews, create a Merge Request in Gitlab against the target branch, and assign any required reviewers to the request.

---