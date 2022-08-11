const fecha = document.querySelector('#fecha');
const lista = document.querySelector('#lista');
const input = document.querySelector('#input');
const btnEnter = document.querySelector('#enter');
const check = 'fa-check-circle';
const uncheck = 'fa-circle';
const lineThrough = 'line-through';
let id = 0;
const LIST = [];


const FECHA = new Date ()
fecha.innerHTML = FECHA.toLocaleDateString('es-MX',{weekday: 'long', month: 'short', day:'numeric'})



function agregarTarea(tarea, id, realizado, eliminado) {

    if(eliminado){
        return
    }

    const REALIZADO = realizado ? check :uncheck;

    const line = realizado ?lineThrough :'';

    const elemento = `<li id="elemento">
                      <i class="far ${REALIZADO}" data="realizado" id="${id}"></i>
                      <p class="text ${line}">${tarea}</p>
                      <i class="fa-solid fa-trash" data="eliminado" id="${id}"></i>
                      </li>`

    lista.insertAdjacentHTML('beforeend', elemento);
};

function tareaRealizada(element){
    element.classList.toggle(check);
    element.classList.toggle(uncheck);
    element.parentNode.querySelector('.text').classList.toggle(lineThrough);
    LIST[element.id].realizado = LIST[element.id].realizado ?false :true;
};

function tareaEliminada(element){
    element.parentNode.parentNode.removeChild(element.parentNode);
    LIST[element.id].eliminado = true;
};


btnEnter.addEventListener('click', () => {
    const tarea = input.value;
    if (tarea) {
        agregarTarea(tarea, id, false, false);
        LIST.push({
            nombre: tarea,
            id: id,
            realizado: false,
            eliminado: false
        })
    }
    input.value = '';

    id++
});

document.addEventListener('keyup', function (event) {
    if (event.key == 'Enter') {
        const tarea = input.value;
        if (tarea) {
            agregarTarea(tareaid, false, false);
            LIST.push({
                nombre: tarea,
                id: id,
                realizado: false,
                eliminado: false
            })
        }
        input.value = '';

        id++
    }
});

lista.addEventListener('click',function(event){
    const element = event.target 
    const elementData = element.attributes.data.value
    console.log(elementData)
    
    if(elementData == 'realizado') {
        tareaRealizada(element)
    }
    else if(elementData == 'eliminado') {
        tareaEliminada(element)
        console.log("elimnado")
    }
    localStorage.setItem('TODO',JSON.stringify(LIST))
})

