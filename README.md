# Docker basic(Container virtualization technology)

## What is Container virtualization technology?
Container virtualization technology(docker) enable us to create container with docker engine.
Container has many good points.

First, as it doesn't need a guest OS, can start quickly.
It is easy to prepare and destroy.

Second, we can get the same development environment because of setting up the environment from shared config file.
There can be a common environment in team and reduce environment-specific bugs.

Third, it visualizes your environment.
As I said above, we share a config file if use docker.
By seeing at the definition in it, you can understand current environment.

## Main concepts
Docker's main concepts are here.

- Image
  - Image is meta data.
  - Container is created from it.
  - How images there are?
    - php, node, ubuntu, nginx and more... [(you can search dockerHub)](https://hub.docker.com/search?q=)
- Container
  - Container is virtualized and isolated space on host OS.
  - It is created from image.
  - Multiple containers are independent of each other.
  - not a virtualized server.
- DockerFile
  - If you want to add commands and packages to a published image, you can create a custom image from Dockerfile.
  - I'll share how to write a config to Dockerfile later.

## Command
### Image

Check image lists.

```
$ docker image ls -a
```

Download image.

> You may not use this command often　because the `docker run` that is used frequently contain inside.

```
$ docker image pull
```

Delete images

```
$ docker rmi [imageID]
```

Build image from Dockerfile.

```
$ docker image build [path]
```
### Container

Check only started container.
If you want to check all container, you use -a option.

```
$ docker container ls
```

Create and start container.
Check option.

```
$ docker container run

# example
# create and start nodejs_container based on node image. It is kept on and automatically deleted when is stopped.
$ docker container run --name nodejs_container --rm -itd node  
```

Stop started container.

```
$ docker container stop [containerID or name]
```

Delete container.

```
$ docker container rm [containerID or name]
```

If you want to be into container and execute command, use `docker container exec`.

```
$ docker container exec [containerID or name] command
# connect, into container
$ docker container exec -it [containerID or name] bash
```

## How to write Dockerfile.
In this section, focus on a basic expression of writing Dockerfile.

### FROM
Specify base image.

`FROM node:14`
### WORKDIR
Specify entry directory.In the following description, it will be executed in this directory.

`WORKDIR /app`

### RUN
Run command.
`RUN apt-get update`

### COPY
Copy file from host machine.

`COPY .package-lock.json .`

### CMD
Command that is run when run "docker run".
> [The main purpose of a CMD is to provide defaults for an executing container. These defaults can include an executable, or they can omit the executable, in which case you must specify an ENTRYPOINT instruction as well.](https://docs.docker.com/engine/reference/builder/#cmd)

`CMD echo "This is a test." | wc -`

## docker-compose
`docker-compose` is tool that manage multiple containers on single host OS.
I have put the sample code in this repo.

```
$ cd this_project
$ docker-compose up -d
```

go to `http://localhost:3001/` with browser.

Main commands are here.

- docker-compose up (-d)(--build)
  - create and start resources.
- docker-compose down
  - stop and remove resources.

## conclude
Thank you for viewing.

## Reference
Confirm all.
- [docker container / image コマンド新旧比較](https://qiita.com/zembutsu/items/6e1ad18f0d548ce6c266)
- [実践 Docker - ソフトウェアエンジニアの「Docker よくわからない」を終わりにする本](https://zenn.dev/suzuki_hoge/books/2022-03-docker-practice-8ae36c33424b59)
- [docker docs](https://docs.docker.com/)
- [開運研修 2020 Docker](https://speakerdeck.com/cybozuinsideout/docker2020)
- [React + Express + Docker の環境構築](https://qiita.com/ykdoi/items/488f73c4eb22dd0a066b)
- [Node.js Web アプリケーションを Docker 化する](https://nodejs.org/ja/docs/guides/nodejs-docker-webapp/)
- [Compose specification](https://docs.docker.com/compose/compose-file/)
