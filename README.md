## ✨ React/Tailwind Todo App

Based on the original [here](https://github.com/jvikraman/react-tailwind-todo-app) but modified to be on updated dependencies
and to interact with the [sample Koa Rest App](https://github.com/george-wilson-al/koa-rest). Between these two applications
is a modern MERN application designed for testing purposes.

---

### A simple react todo app with the following features:

- Tailwind CSS to handle UI
- Local JSON api/endpoint to simulate a server environment for todo CRUD operations
- Works with/without the local server endpoint
- Uses built-in react state for state management

### 🤔 How to?

---

- Clone this repo to your local and do an `npm or yarn install`
- Then use either `npm or yarn start` to serve the application at `localhost` port `3000`
- To run the full combined stack you can use docker compose. From this directory run `docker compose up -d`
then run the following things to provision the mongo db

```sh
docker exec -it mongo-db mongosh mongodb://127.0.0.1:27017/dummy --eval 'disableTelemetry()'
docker exec -it mongo-db mongosh mongodb://127.0.0.1:27017/dummy --eval 'db.disableFreeMonitoring()'
docker exec -it mongo-db mongosh mongodb://127.0.0.1:27017/dummy --eval 'db.createCollection("todos")'
```

Once complete the server will be available on localhost:3000 in your browser

#### 🎉 💥 🥳 And that's it...You should now have a simple react/tailwind todo app up and running !!
