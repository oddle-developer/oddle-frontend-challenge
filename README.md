# # Website Link or final result
https://github-project-red.vercel.app/


# # Getting Started
to run this app type npm run dev on your terminal, it will be directed to localhost:3000

this app was built using nextJS, my reason to choose nextJS because to solve the SEO problem, as I know for SEO better to choose the server rendering side than using client-side

and for this app also i'm not used redux/state management because when we use nextjs we don't need to use state manegement because we use ssr except if we use ssg we can use redux or other state management.

this app also use webpack under the hood.

# # Requirements 
 
- While searching, the application shows an animated loading indicator made by CSS (using gif image is not allowed) - Done
- After the search is completed, the application shows the list of users along with their avatar and their username on the same page - Done
- When a list item is clicked, the application is navigated to a new page that display the parsed JSON payload of that user - Done
- The new page also has to display the list of the user's repositories, followers and following - Done
- Webpack is being used to build the application - Done
- The application style is built by one of the CSS preprocessors or CSS-in-JS - Done
- The application has to be responsive and optimised for mobile - Done
- also the bonus point has been included that's why i'm choosing nextJS

# # steps to build this app
- type npx create-next-app on your terminal
- type code. on your terminal after finishing the installation, it will open your vs code alongside the source code.
- type npm run dev in the terminal, it will be directed to localhost:3000
- go to the styles directory to create the scss file, don't forget to npm install sass or yarn add sass because nextJS doesn't include sass loader.
- after that in the _app.js we can import the CSS file that we need.
- thus, I create a components folder to store all of my react components after that I create a user folder inside the pages folder, this page is related to user detail to show repos, followers, names, photos, etc.
- and index.js folder it is related to home page to show all of GitHub user. 
- to fetch data I'm using getServerSideProps this very useful to fetch data in the server every time we make a request.
- and the advantage use nextjs we don't need a third-party library like react-router-dom, we just need to create a js file inside folder pages, it is automatically will generate the route for every page.


# # React Normal
Of course, I have provided the webpack version alongside with context API the pattern similar to redux, I have defined my action, state, and reducer, this also using sass, however, this was my old project two years ago when I was first time learn reactJS in udemy, I was following the tutorial but the difference is i set up this app using webpack and sass.
this the link: https://github.com/michaelanggriawan/github-finder
