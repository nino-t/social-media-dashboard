# elaw-web-v2



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

### Install with docker

(https://www.docker.com/get-started)

Open Terminal, then type command:  
> git clone https://github.com/nino-t/elaw-web-v2.git

Go to project folder :
> cd elaw-web-v2

Type following command :  

> docker build —tag elaw-web-v2:1.0 . (Build app with Dockerfile)
>
> docker container create --name elaw-web -p 3000:3000 elaw-web-v2:1.0 (Create docker container after build image)
>
> docker container start elaw-web (Start docker container)
>
> docker container stop elaw-web (Stop docker container)

Open link http://localhost:3000 at your browser, if your docker  container is running.

### Install at local
Open Terminal, then type command:  
> git clone https://github.com/nino-t/elaw-web-v2.git

Go to project folder :
> cd elaw-web-v2

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
