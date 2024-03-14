# Proyecto Social Media

En éste proyecto se crea una web en la que el usuario debe registrarse, logarse y a partir de ahí puede revisar su perfil, ver los posts de otros usuarios y los suyos propios, dar likes, hacer comentarios, editar y eliminar posts.

## Índice

1. [Tecnologías utilizadas](#tecnologias-utilizadas)
2. [Utilización](#utilizacion)
3. [Home](#home)
4. [Registro](#registro)
5. [Login / Logout](#loginlogout)
6. [Perfil](#perfil)
7. [Buscador](#buscador)
8. [Screenshots](#screenshots)

<a name="tecnologias-utilizadas"></a>

## Tecnologías utilizadas

![Static Badge](https://img.shields.io/badge/react-18.2.0-lightblue)
![Static Badge](https://img.shields.io/badge/Sass-1.70.0-pink)
![Static Badge](https://img.shields.io/badge/Ant_Design-5.15.1-white)

<a name="utilizacion"></a>

## Utilización

La web consta de una cabecera superior en la que el usuario puede acceder a las distintas funciones implementadas. Según esté logado o no los apartados disponibles variarán.

Se divide en: '**Home**, '**Login / Logout** ', '**Registro**', '**Perfil**' y '**buscador de posts**'.

<a name="home"></a>

### Home

Ésta es la vista inicial, la cual está visible independientemente de que el usuario esté logado o no.

Se presenta la lista de posts publicados por todos los usuarios de la red social, pero en caso de no estar logado únicamente se puede ver los posts, no interactuar con ellos.

En caso de estar ya logado, si se pulsa sobre un post se accede al detalle del mismo, en el que se puede ver el título y texto junto a los likes que tiene de otros usuarios. En caso de haber comentarios también se visualizarán.

Si se pulsa sobre el icono de like se puede dar o quitar el like, y en el cuadro inferior puede añadirse un comentario.

También es posible editar o eliminar el post, siempre que el usuario sea el autor del mismo, en caso contrario no aparecerán los botones inferiores _Editar_ y _Eliminar_.

<a name="registro"></a>

### Registro

En ésta vista se debe crear un nuevo usuario.

Los campos a rellenar son:

- _Nombre_: aquí se introduce el nombre del usuario.
- _Apellido_: aquí se introduce el apellido.
- _Email_: se introduce el email.
- _Contraseña_: se introduce una contraseña.

Tras rellenarlos se pulsa el botón _Registro_ y si el proceso ha sido correcto se redirigirá automáticamente a la vista '_Login_'.

<a name="loginlogout"></a>

### Login / Logout

Aquí el usuario puede entrar o salir del servicio.

#### Login

Se introduce el email y la contraseña del usuario. Hasta que no se acceda correctamente las partes privadas del usuario son inaccesibles. Se redirigirá a la pantalla de _Perfil_

#### Logout

Tras pulsar el usuario se desloga y deja de poder acceder a sus datos privados. Se redirigirá de nuevo a la pantalla de _Login_.

<a name="perfil"></a>

### Perfil

Esta sección únicamente es visible en caso de que el usuario esté logado en el sistema.

Aquí se ve el nombre, apellidos e email del usuario, y también los post publicados.

Al pulsar sobre un post pueden realizarse las mismas acciones indicadas en la sección de Home.

<a name="buscador"></a>

### Buscador

Esta sección se trata de una barra de entrada de texto en la que se pueden buscar posts por su título. No es necesario que se introduzca el título completo, en caso de introducir un texto que coincida con parte del título de algún post lo presentará igualmente.

Tras introducir el texto, podemos solicitar la búsqueda pulsando las teclas _Enter_, _Intro_, o pulsando el icono de la _lupa_.

Tendremos acceso desde aquí a todas las opciones disponibles en la sección _Home_.

<a name="screenshots"></a>

## Screenshots

### Home

![Home](https://github.com/IKLANLO/proyectoSocialMedia_frontend/assets/143275701/8df3de01-be0a-47ef-a073-72eafb23cd4f)

![Home2](https://github.com/IKLANLO/proyectoSocialMedia_frontend/assets/143275701/f3b98d53-a456-41cd-ba57-5d362f716e96)

### Login

![Login](https://github.com/IKLANLO/proyectoSocialMedia_frontend/assets/143275701/fe7b34fd-d94d-4d4c-88c1-639fc9803b60)

### Perfil

![Perfil](https://github.com/IKLANLO/proyectoSocialMedia_frontend/assets/143275701/2843e533-9262-4691-adb2-6e5e83dc44cc)

![Perfil2](https://github.com/IKLANLO/proyectoSocialMedia_frontend/assets/143275701/25554f03-bd9a-4e74-9619-d4c4bf24b29e)

![Perfil3](https://github.com/IKLANLO/proyectoSocialMedia_frontend/assets/143275701/2f52306e-1b75-4126-a4a3-38f05f88bd7e)
