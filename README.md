# Saatva News Hiring Test
This repository contains all of the artifacts I have created for the "Saatva News" hiring test. While vanilla JavaScript/HTML/CSS would have been more than adequate to this project, I chose React as it would be directly relevant to the technology stack at Saatva.

This is my first project using React and Sass. I saw this as an opportunity to showcase my ability to pick up new technologies quickly and effectively.

Thank you for your consideration, and hope you enjoy!

## Hosted Solution
The solution is <a href="http://saatva.thisiteration.com" target="_blank">hosted on my website</a> for your convenience.

## Distribution Build 
[dist/dorfman_hiring-test_build.zip](dist/dorfman_hiring-test_build.zip) contains the "production-ready" app as built with NPM 6.4.1 from the source code residing in this repo as of the final commit. The app is configured to use relative asset paths, so you may unzip the archive and put the contents in any directory on a web server of your choosing.

## Build from source
You may clone the repository and run a dev build locally by navigating to the project root and running: 

```npm start```

You may also build the production assets from source and deploy on a web server of your choosing:

``` npm run build```

## Technologies Leveraged
The following are the primary technologies used in this project. See "package.json" for the full list of dependencies.
1. <a href="https://www.npmjs.com/" target="_blank">NPM 6.4.1</a>
2. <a href="https://reactjs.org/" target="_blank">React 16.6.3</a>
3. <a href="https://www.npmjs.com/package/node-sass" target="_blank">Sass 4.10.0</a>
4. <a href="https://fontawesome.com/how-to-use/on-the-web/using-with/react" target="_blank">Fontawesome React Component 0.1.3</a>
5. <a href="https://www.npmjs.com/package/axios" target="_blank">Axios 0.18.0</a> (resolved with a CORS issue I was facing with ```fetch```)
