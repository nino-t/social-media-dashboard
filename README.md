# social-media-dashboard



### What you need for running app?

- NodeJS Version 14
- Docker (If you want running app in docker)

### Stack technology
- ReactJS (Frontend/Client Framework)
- Typescript (JS Typechecker)
- Redux (State Management)
- Redux-thunk (Redux middleware for action creators more easy)
- Jest & enzyme (Testing)
- Tailwind (CSS Framework)
- Axios (Http Request)
- React-router-dom (Routing in React)
- https://jsonplaceholder.typicode.com (JSON dummy data)

### Todo
- [x] ~~User can view list of users~~
- [x] ~~User can view list of posts of each user~~  
- [x] ~~User can view list of albums of each user~~  
- [x] ~~User can view the detail of each post and its comment~~  
- [x] ~~User can view list of photos from an album~~  
- [x] ~~User can view the detail of photo~~
- [x] ~~User can add, edit and delete post~~
- [x] ~~User can add, edit and delete comment~~

### Install with docker

(https://www.docker.com/get-started)

Open Terminal, then type command:  
> git clone https://github.com/nino-t/social-media-dashboard.git

Go to project folder :
> cd social-media-dashboard

Type following command :  

> docker build —tag social_media_dashboard:1.0 . (Build app with Dockerfile)
>
> docker container create --name app-dashboard -p 3000:3000 social_media_dashboard:1.0 (Create docker container after build image)
>
> docker container start app-dashboard (Start docker container)
>
> docker container stop app-dashboard (Stop docker container)

Open link http://localhost:3000 at your browser, if your docker  container is running.

### Install at local
Open Terminal, then type command:  
> git clone https://github.com/nino-t/social-media-dashboard.git

Go to project folder :
> cd social-media-dashboard

Type following command :  

> yarn (For install dependency)
>
> yarn dev (For running server + client for development mode)
>
> yarn build (For build app for production mode)
>
> yarn start (For running app after build)

### License
MIT
