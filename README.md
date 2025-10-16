# LocalStorage
El html cuenta con un <h1> Crea un título, un <input> para que puedas escribir, <button>) para que hagas clic y agregar y <ul> que servirá como contenedor para tus tareas.
El css es el diseño con el que se visualizara el index.html.
Y el js en cargartareas busca en la memoria del navegador (localStorage) si hay algo guardado con el nombre "tareas".
localStorage.getItem('tareas')
Si encuentra algotoma ese texto HTML y lo "pega" dentro de la lista <ul>.
Si no encuentra nada, la lista <ul> simplemente se queda vacía.

Agregar Tareas
Con el btnAgregar, seria la función con el que se agregan las tareas Cuando haces clic, toma el texto que escribiste en el <input>.
Si el texto no está vacío:
Crea un nuevo elemento HTML en memoria (un <li>).
Le asigna tu texto a ese <li>.
Añade ese <li> al final de la lista <ul> en la página.
Limpia el <input> para que puedas escribir otra cosa.
Guarda la lista: Vuelve a guardar el contenido HTML completo de la lista <ul> en el localStorage bajo el nombre "tareas".

Completar Tareas
Cualquier clic que ocurra dentro de la lista <ul>:
Cuando haces clic, el script comprueba si le diste a un elemento <li>.
Si es así, "alterna" la clase CSS .completada en ese <li> específico.
Si no la tenía, se la pone (y el CSS la tacha).
Si ya la tenía, se la quita (y el CSS le quita el tachado).
Guarda el cambio: Vuelve a guardar el contenido HTML completo de la lista (incluyendo la nueva clase .completada) en el localStorage.
