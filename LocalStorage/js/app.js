const inputTarea = document.getElementById('nuevaTarea');
const btnAgregar = document.getElementById('btnAgregar');
const listaTareas = document.getElementById('listaTareas');

listaTareas.innerHTML = localStorage.getItem('tareas') || '';
btnAgregar.addEventListener('click', () => {
    const textoTarea = inputTarea.value.trim();

    if (textoTarea !== '') {
        const nuevaTarea = document.createElement('li');
        nuevaTarea.textContent = textoTarea;
        listaTareas.appendChild(nuevaTarea);
        inputTarea.value = '';
        localStorage.setItem('tareas', listaTareas.innerHTML);
    }
});
listaTareas.addEventListener('click', (e) => {
    if (e.target.tagName === 'LI') {
        e.target.classList.toggle('completada');
        localStorage.setItem('tareas', listaTareas.innerHTML);
    }
});

inputTarea.addEventListener('keyup', (e) => {
    if (e.key === 'Enter') {
        btnAgregar.click();
    }
});