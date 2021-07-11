[![Open in Visual Studio Code](https://open.vscode.dev/badges/open-in-vscode.svg)](https://open.vscode.dev/organization/repository)

# Index

- [Remarks](#remarks)
- [Demo](#demo)
- [Hosting](#host)
- [Motivation](#motivation)
- [Challenges](#challenges)
- [Tech Stack / Dependencies](#deps)
- [Features](#features)
- [Run locally](#run)
- [Authors](#authors)

<h2>E-shop demo</h2>

This is a SPA built on top of the [Fake Store API](https://fakestoreapi.com/) using [Create React App](https://github.com/facebook/create-react-app).

<h2 id="remarks">Remarks</h2>

N.B: the /checkout, /favorites, /contact and /product/:id routes are not yet finished.

<h2 id="demo">Demo</h2>

[E-shop demo](https://samyzog.github.io/e-shop-demo/)

<h2 id="host">Hosting</h2>

This web app is hosted on [Github Pages](https://pages.github.com/)

<h2 id="motivation">Motivation</h2>

I made this demo to have hands-on practical experience with React state management, React Router, using hooks and custom hooks, context API and data fetching. 

<h2 id="challenges">Challenges</h2>

I used the Fake Store API to get placeholder items for the demo.

The caching mechanism for the fetch requests is done using local storage, which is not ideal I know :), but the amount of data fetched is very small and this is just a small demo.

I used React's context API to control Cart and Favorites component logic.

<h2 id="deps">Tech Stack / Dependencies</h2>

- [React](https://reactjs.org/)
- [React Router](https://reactrouter.com/)
- [Sass](https://sass-lang.com/)

  
<h2 id="features">Features</h2>

- Light/dark mode toggle (cached)
- Add items to cart / favorites (cached)
- Category slider
- Responsive design (grid, flexbox)

  
<h2 id="run">Run Locally</h2>

Clone the project

```bash
  git clone https://github.com/SamyZog/e-shop-demo
```

Go to the project directory

```bash
  cd e-shop-demo
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm start
```

  
<h2 id="authors">Authors</h2>

- [@SamyZog](https://www.github.com/SamyZog)

  
