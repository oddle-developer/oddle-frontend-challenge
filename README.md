# Frontend Challenge
> We will be really appreciated if you are willing to spend more time to finish all bonus tasks.

## Introduction

You will build a simple GitHub [search console](https://github.com/search) so that users can browse & explore. This website includes following 3 pages 

1. Search Page `/`: User can type in **username** and show a list of users 
2. Liked Page `/liked`: User can keep a list of **liked users** for future reference
3. User Detail Page `/users/:username`: User can know more about an individual user

---

## User Story

### Basic

- As a user, I can search users based on `username` and view a list of users displaying `username` & `avatar` with pagination
- As a user, I can like & unlike users while searching & browsing
- As a user, I can view a list of liked users
- As a user, I can view a specific user's information, including name, contact info & lists of `repositories`, `followers` & `following`

### Bonus

- As a user, while searching I can know each users' number of repositories, followers & following
- As a user, I can view & use this website via desktop as well as mobile 
- As a user, I can copy & paste current website url and it will always show the same contents under the same browser
- As a user, I can search as I type without manually clicking a search button

---

## Design Materials 
> Feel free to add more designs based on existed layouts & components.

Please create the website following this [design file](https://www.figma.com/file/kt2BetKOPYrbGHhQcHy1SE/Oddle-Fe-Challenge) on figma. 

Here we are using [MUI](https://mui.com) for UI mock-ups. 

Note:

- **Dark mode** is optional
- Avatar background colour is optional; A default or fallback image will be better.
- Search Page will display pagination tab if needed (we will not enforce Liked Page)
- CSS doesn't have to be pixel perfect, we are cool as long as the ratio doesn't look too different from the mock-up

---

## Technical Requirements

### Basic

1. Consume [GitHub API](https://docs.github.com/en/rest)
2. This website must be built using [React](https://reactjs.org). React frameworks are welcome
3. [Redux](https://redux.js.org) is used for state management 
4. CSS-in-JS solutions will be highly preferred. Component libraries are also welcome (Here we are using MUI)
5. This website is production ready and deployed with a url
6. Write a `README.md` to explain how to set up local development & list down tools or libraries are used

### Bonus

1. Written in TypeScript (please explain if `any` is used)
2. All pages are server-side rendered (can be static)
3. Pay attention to user experience (UX) when fetching data from API, navigating between pages & loading large contents.
4. Support dark mode

---

## Submission Steps

1. Submit your assignment by creating a repository on your GitHub account
2. Code. Commit and Push as many times as you want.
3. Once ready, create an orphan branch named `submission`. Then create a Pull Request with naming convention `[READY4REVIEW]` in your private repo based on your working branch merging towards `submission`. [reference link](https://stackoverflow.com/questions/1384325/in-git-is-there-a-simple-way-of-introducing-an-unrelated-branch-to-a-repository)
4. Invite [oddle-developer](https://github.com/oddle-developer) as collaborator & reviewer
5. Share a public website url deploying the latest version of your application
6. In your review request description, please add the following information: Full Name, Email Address, How did you know about this job?

----

## Reference

- [MUI](https://mui.com)
- GitHub [Search Console](https://github.com/search)
- GitHub API [docs](https://docs.github.com/en/rest)
- How to set up an orphan branch: [StackOverflow](https://stackoverflow.com/questions/1384325/in-git-is-there-a-simple-way-of-introducing-an-unrelated-branch-to-a-repository)
