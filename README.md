# Frontend Challenge
> Please take your time and complete the submission steps in 1 week

##Note
This test has been deprecated as of 20230324. Please refer to [new assignment](https://codesandbox.io/p/sandbox/toggle-button-2ksm9s?file=%2FREADME.md)

We will be really appreciated if you are willing to spend more time to finish all bonus tasks.

## Introduction

You will build a simpler version of GitHub [search console](https://github.com/search) website so that users can browse & explore. This website includes following 3 pages 

1. Search Page `/`: User can type in **username** and show a list of users 
2. Liked Page `/liked`: User can keep a list of **liked users** for future reference
3. User Detail Page `/users/:username`: User can know more about an individual user

This challenge is evaluated in following 3 aspects, [User Story](#user-story), [Design Material](#design-materials) and [Technical Requirements](#technical-requirements). 

Each aspect will have **basic** (required for submission) & **bonus** (optional) sections


Make sure you fully understand the requirements before proceeding

---

## User Story

### Basic

1. As a user, I can search users based on `username` and view a list of user cards with pagination
2. As a user, within the list, I can see `username`, `avatar` image, `followers` count and `following` count on each card
3. As a user, I can like & unlike users while searching & browsing
4. As a user, I can view a list of liked users (preserve after refreshing the browsers)
5. As a user, I can view a specific user's information, including name, contact info, lists of `repositories`, list of `followers` & list of `following` users.

### Bonus

1. As a user, I can view & use this website via desktop as well as mobile 
2. As a user, I can copy & paste current website url and it will always show the same contents under the same browser
3. As a user, I can search as I type without manually clicking a search button

---

## Design Materials 

 > CSS doesn't have to be pixel perfect, we are cool as long as the ratio doesn't look too different from the mock-up. Feel free to add more designs based on existed layouts & components.

### Basic

1. Please create the website following this [design file](https://www.figma.com/file/kt2BetKOPYrbGHhQcHy1SE/Oddle-Fe-Challenge) on figma. Here we are using [MUI](https://mui.com) for UI mock-ups. 

### Bonus

1. A default or fallback image will be better.
2. Search Page will display pagination tab if needed (we will not enforce Liked Page)
3. Loading, error, and empty states are properly handled

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

To submit, you are going to create a pull request that contains all the code changes. This pull request points to an empty branch that has [oddle-hire-js](https://github.com/oddle-hire-js) as the reviewer and has the required information in the description (see step no. 8). For the detailed process, follow our step-by-step instructions: 

1. Create a private repository on your GitHub account
2. Make sure you have a *small* initial commit e.g. could be this `README.md` file or any framework templates.
3. Code, commit and push as many times as you want.
4. Create a branch named `submission` by checking out at the initial commit and continue your work on your working branch. 
5. When it is ready for review, create a Pull Request with naming convention `[READY4REVIEW]` in your private repository based on your working branch merging towards `submission`.
6. Invite [oddle-hire-js](https://github.com/oddle-hire-js) as collaborator & reviewer to see your changes.
7. Share a public website url deploying the latest version of your application
8. In your pull request description, please add the following information: 
    - Full Name
    - Email Address
    - How did you know about this job
    - Feedback on this assessment


----

## Reference

- [MUI](https://mui.com)
- GitHub [Search Console](https://github.com/search)
- GitHub API [docs](https://docs.github.com/en/rest)
