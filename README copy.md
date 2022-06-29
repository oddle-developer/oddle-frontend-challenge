This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Introduction

This is a project for Github searching. You can search for a Github user with their user name.

## Live site

https://github-search-2208.vercel.app/

### Tools and libraries

Server side rendering: NextJS
CSS-in-JS: Styled component
State management: Redux Toolkit, Redux Persist
Language: TypeScript
Package manager: Pnpm
Code formatter: Prettier
Linter: ESLint
Deploy tool: Vercel

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## User Story

Basic

- [x] As a user, I can search users based on username and view a list of user cards with pagination
- [x] As a user, within the list, I can see username, avatar image, followers count and following count on each card
- [x] As a user, I can like & unlike users while searching & browsing
- [x] As a user, I can view a list of liked users (preserve after refreshing the browsers)
- [x] As a user, I can view a specific user's information, including name, contact info, lists of repositories, list of followers & list of following users.

Bonus

- [x] As a user, I can view & use this website via desktop as well as mobile
- [ ] As a user, I can copy & paste current website url and it will always show the same contents under the same browser
- [x] As a user, I can search as I type without manually clicking a search button

For the user story "show the same contents under the same browser from a url" is done only on User detail screen and Favorite screen, the home screen have not been implemented this feature

## Design Materials

Basic

- [x] Please create the website following this design file on figma. Here we are using MUI for UI mock-ups.
      Bonus
- [x] A default or fallback image will be better.
- [x] Search Page will display pagination tab if needed (we will not enforce Liked Page)
- [x] Loading, error, and empty states are properly handled

## Technical Requirements

Basic

- [x] Consume GitHub API
- [x] This website must be built using React. React frameworks are welcome
- [x] Redux is used for state management
- [x] CSS-in-JS solutions will be highly preferred. Component libraries are also welcome (Here we are using MUI)
- [x] This website is production ready and deployed with a url
- [x] Write a README.md to explain how to set up local development & list down tools or libraries are used

Bonus

- [x] Written in TypeScript (please explain if any is used)
- [x] All pages are server-side rendered (can be static)
- [x] Pay attention to user experience (UX) when fetching data from API, navigating between pages & loading large contents.
- [x] Support dark mode

## Improve ideas

- Fetched data can be cached when user navigate to past pages
- Some syled components have similar style. Should apply DRY principle then isolate them to a different folder for common use
- User can sign up, log in, and star a project they like, it will call an API to actually star that project
- ...
