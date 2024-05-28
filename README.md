# PhotoLabs

PhotoLabs is a simple, single-page Pinterest clone. The tech stack includes the following frameworks and technologies: Express, PostgreSQL, React, JavaScript, and SASS.

On this site, you can find a couple of familiar UI and UX features that have been implemented for a slightly improved UX that read as follows;

- The user may click on the heart icon to "like" a photo, which will then display a notification on the heart icon in the top right of the screen.

- The user may click on the a photo to view its larger version in a modal, which display similar photos under the larger one. This modal also supports the "like" functionality for the larger photo as well as the similar ones underneath it.

- Should the user want to categorize their photo feed, the navigation bar at the top has topics through which they can filter the photos that are displayed on their feed based on the topic. 

## Final Product

!["Screenshot of PhotoLabs page"](https://github.com/Xanadude2112/PhotoLabs/blob/main/frontend/docs/home.png)

!["Screenshot of PhotoLabs page "like" photo functionality"](https://github.com/Xanadude2112/PhotoLabs/blob/main/frontend/docs/like.png)

!["Screenshot of PhotoLabs page modal functionality with similar photos"](https://github.com/Xanadude2112/PhotoLabs/blob/main/frontend/docs/modal.png)

!["Screenshot of PhotoLabs topics filter functionality"](https://github.com/Xanadude2112/PhotoLabs/blob/main/frontend/docs/topic.png)

## Getting Started

1. [Create](https://docs.github.com/en/repositories/creating-and-managing-repositories/creating-a-repository-from-a-template) a new repository using this repository as a template.
2. Clone your repository onto your local device.
3. Install dependencies using the `npm install` command.
3. Start the web server using the `npm run local` command. The app will be served at <http://localhost:8080/>.
4. Go to <http://localhost:8080/> in your browser.

## Dependencies

- Body-Parser
- Express
- Chance
- MD5
- Timeago.js
- Node 5.10.x or above

## DevDependencies

- Nodemon




# react-photolabs
The PhotoLabs project for the Web Development React course programming.

# Photolabs

## Setup

Install dependencies with `npm install` in each respective `/frontend` and `/backend`.

## [Frontend] Running Webpack Development Server

```sh
cd frontend
npm start
```

## [Backend] Running Backend Servier

Read `backend/readme` for further setup details.

```sh
cd backend
npm start
```
