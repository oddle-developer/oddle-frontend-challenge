# Frontend challenge

## Instruction
1. Allocate around 4 hours on this project _(Spending more time is okay but we believe that 4 hours is reasonable to complete all requirements and some bonus points)_
2. Create a web application that consumes [Github API](https://developer.github.com/v3/) and follow the [requirements](https://github.com/oddle-developer/oddle-frontend-challenge#requirements)
3. Host your production ready application on [Heroku](http://heroku.com) or [Now](https://zeit.co/now)
4. Push your new repository in your Github account
5. Send us the links to your Github repository and the deployed application
6. While completing all bonus points are not mandatory but it is expected to complete some of them since the core requirements should be finished within 4 hours
7. We really appreciate if you are willing to spend more time to finish all those bonus tasks
 
## Requirements
- There is a search bar to let the user search by username (login name)
- While searching, the application shows an animated loading indicator made by CSS (using gif image is not allowed)
- After the search is completed, the application shows the list of users along with their avatar and their username on the same page
- If the results are not complete in one page, the pagination is shown on the screen
- When a list item is clicked, the application is navigated to a new page that display the parsed JSON payload of that user
- The new page also has to display the list of the user's repositories, followers and following
- The application is built by [React](https://github.com/facebook/react) and [Redux](https://github.com/reactjs/redux)
- [Webpack](https://github.com/webpack/webpack) is being used to build the application
- The application style is built by one of the CSS preprocessors or CSS-in-JS
- The application has to be responsive and optimised for mobile
- A documentation on how the application works and how to set up and build the project is provided
- The application is production ready (__HINT:__ try Google’s PageSpeed or Lighthouse)
 
## Bonus points
- The application is deployed on [AWS](https://aws.amazon.com) instead of [Heroku](http://heroku.com) or [Now](https://zeit.co/now)
- The application supports IE10 and/or Android native browser (Chrome 30.0)
- The pages are server-side rendered and are cached in the server
- All pages' URL is reusable - meaning it can be copied and pasted on different browser and still shows the same result
- All pages are SEO optimised
- The project supports code splitting for each pages
- The results list also asynchronous-ly shows the number of followers and following of each user without going the user page
- The search input does the searching as you type (See google search as an example)
- There is animated transition between pages
- The application supports theming and can easily be switched between themes
