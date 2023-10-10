# Products page

This SPA has been bootstrapped with
[CRA](https://github.com/facebook/create-react-app) and styled with
[Tailwind CSS](https://tailwindcss.com/). It contains a list of products of
different categories which can be edited, deleted, created and filtered. The app
also features pagination.

[Demo](https://bekzodisakov.github.io/product-list/)

![App screenshot](/frontend/src/assets/screenshot.png "App screenshot")

[json-server](https://www.npmjs.com/package/json-server) is used for backend.
The backend data is stored inside `db.json` file that is hosted in the server.

Frontend is hosted by [github pages](https://pages.github.com/) and backend by
[render.com](https://render.com/)

### Run project locally

#### In the `/frontend` directory, you run:

#### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

#### `npm run deploy`

Deploys the app to [github pages](https://pages.github.com/). More on
[how to deploy to github pages](https://github.com/gitname/react-gh-pages).

#### In the `/backend` directory, you run:

#### `npm run dev`

Runs the server in the development mode.\
Open [http://localhost:8080](http://localhost:8080) to view it in your browser. The
changes will be live as you change the code.
