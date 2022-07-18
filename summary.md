# docker basic(Container virtualization technology)

## what is Container virtualization technology?
Container virtualization technology(docker) enable us to create container with docker engine.
Container has many good points.

First, as it doesn't need a guest OS, can start quickly.
It is easy to prepare and destroy.

Second, we can get the same development environment because of setting up the environment from shared config file.
There can be a common environment in team and reduce environment-specific bugs.

Third, it visualizes your environment.
As I said above, we share a config file if use docker.
By seeing at the definition in it, you can understand current environment.

## main concepts
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

