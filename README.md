# Proyecto Sistemas Operativos

## _Planteamiento_

Para este proyecto se debía llevar a cabo el despliegue de un ambiente computacional distribuido. En este se hará el despliegue de los servicios Apache y Docker-compose a través del servicio de red , proxy inverso, el cual se encarga de recibir las peticiones de red y redireccionarlas a los servicios mencionados anteriormente. Todo esto ejecutándose en múltiples máquinas virtuales.

## Tecnologias utilizadas
Para este proyecto se utilizaron las siguientes tecnologias:

- [VirtualBox] - Software de virtualización para arquitecturas x86/amd64.
- [Apache] - Servidor web HTTP de codigo abierto.
- [NGINX] - Servidor web/proxy inverso ligero de alto rendimiento y un proxy para protocolos de correo electrónico. Es software libre y de código abierto.
- [Docker] - Programa de código abierto que automatiza el despliegue de aplicaciones dentro de contenedores de software

## _Proceso de instalación_

### Docker-compose
```
sudo apt install docker
```

### Apache
```
sudo apt install apache2
```

### NGINX
```
sudo apt install nginx
```

## _Como ejecutar los programas_

### Docker-compose
#### Entrar a la carpeta
```
cd example
```
##### Iniciar el docker-compose
```
sudo docker-compose up
```
### Apache
#### Iniciar el Apache
```
sudo service apache2 start
```
#### Revisar el estado del servidor
```
sudo service apache2 status
```
### NGINX
####

[//]: # (These are reference links used in the body of this note and get stripped out when the markdown processor does its job. There is no need to format nicely because it shouldn't be seen. Thanks SO - http://stackoverflow.com/questions/4823468/store-comments-in-markdown-syntax)

  [VirtualBox]: <https://www.virtualbox.org/>
  [Apache]: <https://www.apache.org/>
  [NGINX]: <https://www.nginx.com/>
  [Docker]: <https://www.docker.com/>
