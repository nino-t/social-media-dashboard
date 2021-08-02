# social-media-dashboard

## Install with docker
Open Terminal, then type command:  
> git clone https://github.com/nino-t/social-media-dashboard.git

Go to project folder :
> cd social-media-dashboard

Type following command :  

> docker build —tag social-media-dashboard:1.0 . (Build app with Dockerfile)
>
> docker container create --name app-dashboard -p 3000:3000 social-media-dashboard:1.0 (Create docker container after build image)
>
> docker container start app-dashboard (Start docker container)
>
> docker container stop app-dashboard (Stop docker container)

Open link http://localhost:3000 at your browser, if your docker  container is running.

## Install at local
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

## License
MIT