alumns = [
    {
        name: "William",
        lastname: "Pinto",
        cedula: 28769872,
        password: "hola",
    },
    {
        name: "Miguel",
        lastname: "Petit",
        cedula: 28767977,
        password: "6",
    },
    {
        name: "Jhon",
        lastname: "Molina",
        cedula: 28777846,
        password: "9",
    },
    {
        name: "Roger",
        lastname: "Morillo",
        cedula: 8,
        password: "8",
    },
    {
        name: "Fabbio",
        lastname: "Galante",
        cedula: 31543956,
        password: "10elgoat",
    },
    {
        name: "Crismar",
        lastname: "Hernandez",
        cedula: 28767682,
        password: "4321",
    },
    
]

teacher = [
    {
        name: "Alejandro",
        lastname: "Chiquito",
        cedula: 3,
        password: "3"
    },
    {
        name: "Aurimar",
        lastname: "Semejal",
        cedula: 26598855,
        password: "1234"
    },
    {
        name: "Carmen",
        lastname: "Marcano",
        cedula: 5,
        password: "5",
    },
]

administrator = [
    {
        name: "Jose",
        lastname: "Perez",
        cedula: 2,
        password: "2",
    },
    {
        name: "Ana",
        lastname: "Garcia",
        cedula: 20987645,
        password: "admi2",
    },
]

var getAlumn;
var getTeacher;
var getAdministrator;
var userType = document.getElementsByName('userType');

document.getElementById('validate-date').addEventListener("click", ()=> { 
    let IdentityCard = document.getElementById('identityCard').value;
    let password = document.getElementById('password').value;
    userType = document.getElementsByName('userType');

    for(let i = 0; i < userType.length; i++) { // Definiendo que tipo de usuario escogio el usuario
        if(userType[i].checked) { // Verifica cual tipo de usuario se selecciono
            userType = userType[i].value; // Guarda el tipo de usuario seleccionado
            console.log(userType);
            break;
        }
    }
  
    if(typeof userType == "object"){
        alert("Selecciona una opcion");
    }

    if(userType == "student") { // Si el usuario eligio que es estudiante, entrara en este bloque de codigo
        for (let i = 0; i < alumns.length; i++) {
            if(IdentityCard == alumns[i].cedula){
                getAlumn = alumns[i];
                console.log(getAlumn)
                break;           
            }
        }

         if(getAlumn == undefined) { 
            alert("Alumno no encontrado");
        } else if (getAlumn.password != password){
            alert("Clave incorrecta");
        } else {  
            alert("Bienvenido!!");
            document.getElementById('login').style.display = 'none';  
            document.getElementById('barra-de-navegacion').style.display = 'block';
            document.getElementById('barra-secundaria').className = 'block z-20 flex bg-white font-bold p-4 justify-between sticky top-0';
            document.getElementById('username').innerHTML = `${getAlumn.name} ${getAlumn.lastname}`;
            document.getElementById('start-section-student').className = "block";
            document.getElementById('section-start').className= "bg-blue-400 flex items-center space-x-2 cursor-pointer h-14 p-5";
        }
    } 

    if(userType == "teacher") { // Si el usuario eligio que es profesor, entrara en este bloque de codigo
        for (let i = 0; i < teacher.length; i++) {
            if(IdentityCard == teacher[i].cedula){
                getTeacher = teacher[i];
                break;           
            }
        }
         if(getTeacher == undefined) {
            alert("Profesor no encontrado");
        } else if (getTeacher.password != password){
            alert("Clave incorrecta");
        } else {  
            alert("Bienvenido!!");
            document.getElementById('login').style.display = 'none';  
            document.getElementById('barra-de-navegacion').style.display = 'block' ;
            document.getElementById('barra-secundaria').className = 'block z-20 flex bg-white font-bold p-4 justify-between sticky top-0';
            document.getElementById('username').innerHTML = `${getTeacher.name} ${getTeacher.lastname}`;
            document.getElementById('start-section-student').className = "block";
            document.getElementById('section-start').className = "bg-blue-400 flex items-center space-x-2 cursor-pointer h-14 p-5";      
        }
    } 

    if(userType == "administrator") { // Si el usuario eligio que es administrador, entrara en este bloque de codigo
        for (let i = 0; i < administrator.length; i++) {
            if(IdentityCard == administrator[i].cedula){
                getAdministrator = administrator[i];
                break;           
            }
        }
         if(getAdministrator == undefined) {
            alert("Administrador no encontrado");
        } else if (getAdministrator.password != password){
            alert("Clave incorrecta");
        } else {  
            alert("Bienvenido!!");
            document.getElementById('login').style.display = 'none'; 
            document.getElementById('barra-de-navegacion').style.display = 'block' 
            document.getElementById('barra-secundaria').className = 'block z-20 flex bg-white font-bold p-4 justify-between sticky top-0';
            document.getElementById('username').innerHTML = `${getAdministrator.name} ${getAdministrator.lastname}`;     
            document.getElementById('start-section-administrator').className = "block"
            document.getElementById('section-start').className = "bg-blue-400 flex items-center space-x-2 cursor-pointer h-14 p-5";
        }
    }   

})

function selectCalendar() { // Esta funcion se ejecuta al darle click a la seccion de calendario del nav
    if(userType == "administrator") { // Si el usuario entra como administrador, entrara en esta condicional
        document.getElementById('calenderAministrator').className = "block"; // Muestra el calendario del administrador
        document.getElementById('section-calender').className = "bg-blue-400 select-none flex items-center space-x-2 cursor-pointer h-14 p-4";
        document.getElementById('start-section-administrator').className = 'hidden'; // Oculta la seccion de inicio de administrador
        document.getElementById('section-start').className= "flex select-none items-center space-x-2 cursor-pointer h-14 p-5 hover:bg-blue-400";
        document.getElementById('section-activities').className = "flex select-none items-center space-x-2 cursor-pointer h-14 p-5 hover:bg-blue-400";
        document.getElementById('activities-section-student').className = "hidden";

    } else if(userType == "student") { // Si el usuario entra como estudiante, entrara en esta condicional
        document.getElementById('calenderStudent').className = "block" // Muestra el calendario del estudiante
        document.getElementById('section-calender').className = "bg-blue-400 flex select-none items-center space-x-2 cursor-pointer h-14 p-4";
        document.getElementById('start-section-student').className = "hidden"; // Oculta la seccion de inicio de estudiante
        document.getElementById('section-start').className = "flex items-center select-none space-x-2 cursor-pointer h-14 p-5 hover:bg-blue-400"; 
        document.getElementById('activities-section-student').className = "hidden"
        document.getElementById('section-activities').className = "flex items-center select-none space-x-2 cursor-pointer h-14 p-5 hover:bg-blue-400";
             
    } else {
        document.getElementById('calenderStudent').className = "block";
        document.getElementById('section-calender').className= "bg-blue-400 select-none flex items-center space-x-2 cursor-pointer h-14 p-4";
        document.getElementById('start-section-student').className = "hidden"; // Oculta la seccion de inicio de estudiante
        document.getElementById('section-start').className = "flex items-center select-none space-x-2 cursor-pointer h-14 p-5 hover:bg-blue-400";
        document.getElementById('section-activities').className = "flex items-center select-none space-x-2 cursor-pointer h-14 p-5 hover:bg-blue-400";
        document.getElementById('activities-section-teacher').className = "hidden";
    }
}

function selectStart() {
    if(userType == "administrator") {
        document.getElementById('start-section-administrator').className = "block";
        document.getElementById('section-start').className= "bg-blue-400 flex select-none items-center space-x-2 cursor-pointer h-14 p-5";
        document.getElementById('calenderAministrator').className = "hidden";
        document.getElementById('section-calender').className = "flex items-center select-none space-x-2 cursor-pointer h-14 p-4 hover:bg-blue-400";
        document.getElementById('section-activities').className = "flex items-center select-none space-x-2 cursor-pointer h-14 p-5 hover:bg-blue-400";
        document.getElementById('activities-section-student').className = "hidden"
    } else if(userType == "student") {
        document.getElementById('calenderStudent').className = "hidden";
        document.getElementById('section-calender').className = "flex items-center select-none space-x-2 cursor-pointer h-14 p-4 hover:bg-blue-400";
        document.getElementById('section-start').className = "bg-blue-400 flex select-none items-center space-x-2 cursor-pointer h-14 p-5";
        document.getElementById('start-section-student').className = "block";
        document.getElementById('activities-section-student').className = "hidden";
        document.getElementById('section-activities').className = "flex items-center select-none space-x-2 cursor-pointer h-14 p-5 hover:bg-blue-400";
    } else {
        document.getElementById('calenderStudent').className = "hidden";
        document.getElementById('section-calender').className = "flex items-center select-none space-x-2 cursor-pointer h-14 p-4 hover:bg-blue-400";
        document.getElementById('section-activities').className = "flex items-center select-none space-x-2 cursor-pointer h-14 p-5 hover:bg-blue-400";
        document.getElementById('section-start').className = "bg-blue-400 flex select-none items-center space-x-2 cursor-pointer h-14 p-5";
        document.getElementById('start-section-student').className = "block";
        document.getElementById('activities-section-teacher').className = "hidden"; 
    }
}

function selectActivities() {
    if(userType == "administrator") {
        document.getElementById('calenderAministrator').className = "hidden";
        document.getElementById('start-section-administrator').className = "hidden";
        document.getElementById('section-activities').className = "bg-blue-400 flex items-center select-none space-x-2 cursor-pointer h-14 p-5";
        document.getElementById('section-start').className = "flex items-center select-none space-x-2 cursor-pointer h-14 p-5 hover:bg-blue-400";
        document.getElementById('section-calender').className = "flex items-center select-none space-x-2 cursor-pointer h-14 p-4 hover:bg-blue-400";
        document.getElementById('activities-section-student').className = "block"

    } else if(userType == "student") {
        document.getElementById('calenderStudent').className = "hidden";
        document.getElementById('start-section-student').className = "hidden";
        document.getElementById('activities-section-student').className = "block"
        document.getElementById('section-activities').className = "bg-blue-400 flex items-center select-none space-x-2 cursor-pointer h-14 p-5";
        document.getElementById('section-calender').className = "flex items-center select-none space-x-2 cursor-pointer h-14 p-4 hover:bg-blue-400";
        document.getElementById('section-start').className = "flex items-center select-none space-x-2 cursor-pointer h-14 p-5 hover:bg-blue-400";

    } else {
        document.getElementById('calenderStudent').className = "hidden";
        document.getElementById('start-section-student').className = "hidden";
        document.getElementById('section-calender').className = "flex items-center select-none space-x-2 cursor-pointer h-14 p-4 hover:bg-blue-400";
        document.getElementById('section-start').className = "flex items-center select-none space-x-2 cursor-pointer h-14 p-5 hover:bg-blue-400";
        document.getElementById('section-activities').className = "bg-blue-400 flex items-center select-none space-x-2 cursor-pointer h-14 p-5";
        document.getElementById('activities-section-teacher').className = "block";
        if(getTeacher.name == "Alejandro") {
            document.getElementById('add-activitie').className = "col-start-7 row-start-2 row-end-6 bg-blue-400 flex flex-col items-center justify-center space-y-2";
        } else if(getTeacher.name == "Aurimar") {
            document.getElementById('add-activitie').className = "col-start-2 row-start-5 row-end-9 bg-blue-400 flex flex-col items-center justify-center space-y-2";
        } else if(getTeacher.name == "Carmen") {
            document.getElementById('add-activitie').className = "row-start-2 row-end-6 col-start-3 bg-blue-400 flex flex-col items-center justify-center space-y-2";
        }
    }
}

//  Guardar los datos de la seccion de informacion del inicio
var saveInfo = localStorage.getItem('informacion'); // Se obtiene la informacion del local storage
console.log(typeof saveInfo, "info")
if(typeof saveInfo == "string" && saveInfo != "") { // Si hay informacion, entrara en esta condicion
    document.getElementById("info").innerHTML = saveInfo; // Se escribe en el cuadro la informacion obtenida
    document.getElementById("delete-info").className = "block w-10 cursor-pointer absolute bottom-0 right-20 m-1"; // Muestra el boton para borrar informacion
}
let submitInfo = document.querySelector('#submitInfo'); // Toma el boton de enviar 
submitInfo.addEventListener("click", ()=> { // Al hacer click en el boton, se ejecuta esta funcion
    let info = document.getElementById('info').value; // Toma lo escrito en el bloque de informacion
    if(info == "") { // Si no hay nada escrito en el bloque de informacion, entrara en esta condicion
        alert("No hay informacion para enviar"); // Se muestra este mensaje
    } else { // Si hay algo escrito, entrara en esta condicion
        alert("Guardado correctamente"); // Muestra el mensaje
        localStorage.setItem('informacion', info); // Se guarda en el local storage lo escrito en el bloque de informacion
    }  
})
document.getElementById("delete-info").addEventListener("click", ()=> { // Se obtiene el boton de eliminar y al darle click se ejecuta:
    document.getElementById("info").value = ""; // Borra lo escrito en el bloque de informacion
    localStorage.setItem('informacion', ""); // Borra lo escrito en el local storage
})

// Obtener los datos de la seccion de informacion del inicio
if(saveInfo == "" || saveInfo == null){
    document.getElementById('get-info-student').innerHTML = "No hay información."; // Muestra lo guardado en la seccion de estudiante // 
} else {
    document.getElementById('get-info-student').innerHTML = (`${saveInfo}`); // Muestra lo guardado en la seccion de estudiante
}

// Muestra el modal de agregar actividades
document.getElementById('button-add-activitie').addEventListener('click', ()=> {  // Al darle click al boton se muestra el modal
    modalActivities = document.querySelector('#modal-activitie'); // Toma el dialog de actividades
    modalActivities.showModal(); // Le da estilos al modal
    if(getTeacher.name == "Alejandro") {
        let getActivitieLenguaje1 = localStorage.getItem('actividad-lenguaje-1');
        if(typeof getActivitieLenguaje1 == "string") {
            getActivitieLenguaje1 = JSON.parse(getActivitieLenguaje1);
            document.getElementById('delete-activitie').className = "block absolute bottom-0 left-0 m-1";
            document.getElementById('title-activitie').value = getActivitieLenguaje1[0].title;
            document.getElementById('description-activitie').value = getActivitieLenguaje1[0].description;
            document.getElementById('time-activitie').value = getActivitieLenguaje1[0].time;
        }
    } else if(getTeacher.name == "Aurimar") {
        let getActivitieTeoria = localStorage.getItem('actividad-teoria');
        if(typeof getActivitieTeoria == "string") {
            getActivitieTeoria = JSON.parse(getActivitieTeoria);
            document.getElementById('delete-activitie').className = "block absolute bottom-0 left-0 m-1";
            document.getElementById('title-activitie').value = getActivitieTeoria[0].title;
            document.getElementById('description-activitie').value = getActivitieTeoria[0].description;
            document.getElementById('time-activitie').value = getActivitieTeoria[0].time;
        }
    } else if (getTeacher.name == "Carmen"){
        let getActivitieSistemaDeProduccion = localStorage.getItem('actividad-sistema-de-produccion');
        if(typeof getActivitieSistemaDeProduccion == "string") {
            getActivitieSistemaDeProduccion = JSON.parse(getActivitieSistemaDeProduccion);
            document.getElementById('delete-activitie').className = "block absolute bottom-0 left-0 m-1";
            document.getElementById('title-activitie').value = getActivitieSistemaDeProduccion[0].title;
            document.getElementById('description-activitie').value = getActivitieSistemaDeProduccion[0].description;
            document.getElementById('time-activitie').value = getActivitieSistemaDeProduccion[0].time;
        }
    }
})

// Guardar los datos del modal de agregar actividades
document.getElementById('submitActivitie').addEventListener('click', ()=> { // Toma el boton de enviar y se ejecuata la funcion
    if(getTeacher.name == "Alejandro") {
        activitieLenguaje1 = [
            {
                title: document.getElementById('title-activitie').value,
                description: document.getElementById('description-activitie').value,
                time: document.getElementById('time-activitie').value,
            },
        ]  
        if(activitieLenguaje1[0].title == '' || activitieLenguaje1[0].description == '' || activitieLenguaje1[0].time == '') {
            alert("Completa el formulario...");
        } else {
            let setActivite = JSON.stringify(activitieLenguaje1);
            localStorage.setItem("actividad-lenguaje-1", setActivite);
            alert("Guardado correctamente");
        }

    } else if(getTeacher.name == "Aurimar") {
        activitieTeoria = [
            {
                title: document.getElementById('title-activitie').value,
                description: document.getElementById('description-activitie').value,
                time: document.getElementById('time-activitie').value,
            },
        ]
        if(activitieTeoria[0].title == '' || activitieTeoria[0].description == '' || activitieTeoria[0].time == '') {
            alert("Complete el formulario...");
        } else {
            let setActivite = JSON.stringify(activitieTeoria);
            localStorage.setItem("actividad-teoria", setActivite);
            alert("Guardado correctamente");
        }

    } else if(getTeacher.name == "Carmen") {
        activitieSistemaDeProduccion = [
            {
                title: document.getElementById('title-activitie').value,
                description: document.getElementById('description-activitie').value,
                time: document.getElementById('time-activitie').value,
            },
        ]
        if(activitieSistemaDeProduccion[0].title == '' || activitieSistemaDeProduccion[0].description == '', activitieSistemaDeProduccion[0].time == '') {
            alert("Complete el formulario...");
        } else {
            let setActivite = JSON.stringify(activitieSistemaDeProduccion);
            localStorage.setItem("actividad-sistema-de-produccion", setActivite);
            alert("Guardado correctamente");
        }
    }
})

document.getElementById('delete-activitie').addEventListener("click", ()=> {
    document.getElementById('title-activitie').value = "";
    document.getElementById('description-activitie').value = "";
    document.getElementById('time-activitie').value = "";
    if(getTeacher.name == "Alejandro") {
        localStorage.setItem("actividad-lenguaje-1", "");
    } else if(getTeacher.name == "Aurimar") {
        localStorage.setItem("actividad-teoria", "");
    } else {
        localStorage.setItem("actividad-sistema-de-produccion", "");
    }
})    

// Muestra la actividades del estudiante
document.getElementById('activitie-lenguaje').addEventListener('click', ()=> { // Toma el bloque de hora de Lenguaje de programacion 1
    document.getElementById('get-activitie').className = "block bg-white overflow-auto  shadow-2xl shadow-green-500 break-words p-5 mt-5 mb-10 ml-5 w-64 h-72 border-l-8 rounded-lg border-green-300"; // Le da estilos al div donde se mostraran las actividades
    let arrayLenguaje1 = localStorage.getItem('actividad-lenguaje-1');
    if(arrayLenguaje1 == "" || arrayLenguaje1 == null) {
        document.getElementById('get-title').innerHTML = "No hay actividades.";
        document.getElementById('get-description').innerHTML = "";
        document.getElementById('get-time').innerHTML = "";
    } else {
    arrayLenguaje1 = JSON.parse(localStorage.getItem('actividad-lenguaje-1'))    
    arrayLenguaje1.forEach(element => {
        document.getElementById('get-title').innerHTML = element.title;
        document.getElementById('get-description').innerHTML = element.description;
        document.getElementById('get-time').innerHTML = element.time;
    })}
})
document.getElementById('activitie-teoria').addEventListener('click', ()=> { // Toma el bloque de hora de Teoria de Sistemas
    document.getElementById('get-activitie').className = "block bg-white overflow-auto shadow-2xl shadow-green-500 break-words p-5 mt-5 mb-10 ml-5 w-64 h-72 border-l-8 rounded-lg border-green-300"; // Le da estilos al div donde se mostraran las actividades
    let arrayTeoria = localStorage.getItem('actividad-teoria');
    if(arrayTeoria == "" || arrayTeoria == null) {
        document.getElementById('get-title').innerHTML = "No hay actividades.";
        document.getElementById('get-description').innerHTML = "";
        document.getElementById('get-time').innerHTML = "";
    } else {
    arrayTeoria = JSON.parse(localStorage.getItem('actividad-teoria'));
    arrayTeoria.forEach(element => {
        document.getElementById('get-title').innerHTML = element.title;
        document.getElementById('get-description').innerHTML = element.description;
        document.getElementById('get-time').innerHTML = element.time;
    })}
})
document.getElementById('activitie-sistema-de-produccion').addEventListener('click', ()=> { 
    document.getElementById('get-activitie').className = "block bg-white overflow-auto shadow-2xl shadow-green-500  break-words p-5 mt-5 mb-10 ml-5 w-64 h-72 border-l-8 rounded-lg border-green-300"; // Le da estilos al div donde se mostraran las actividades
    let arraySistemaDeProduccion = localStorage.getItem('actividad-sistema-de-produccion');
    if(arraySistemaDeProduccion == "" || arraySistemaDeProduccion == null) {
        document.getElementById('get-title').innerHTML = "No hay actividades.";
        document.getElementById('get-description').innerHTML = "";
        document.getElementById('get-time').innerHTML = "";
    } else {
    arraySistemaDeProduccion = JSON.parse(localStorage.getItem('actividad-sistema-de-produccion'));
    arraySistemaDeProduccion.forEach(element => {
        document.getElementById('get-title').innerHTML = element.title;
        document.getElementById('get-description').innerHTML = element.description;
        document.getElementById('get-time').innerHTML = element.time;
    })}
})

// Muestra el modal para cerrar sesion
document.getElementById("section-exit").addEventListener("click", ()=> { // Cuando se le da click a la seccion de salir, se ejecuta
    let modalExit = document.getElementById("box-exit"); // Se obtiene el modal  
    modalExit.showModal(); // Le da estilos al modal
    document.getElementById("exit").addEventListener("click", ()=> { // Cuando se le da click al boton de si, se ejecuta
        location.reload(); // Recarga la pagina y cierra sesion
    })
})

for(let i = 1; i < 31; i++) {
    let juneAdministrator = document.querySelector('#dia'+ i); // Toma los dias de junio del administrador  
    let juneStudent = document.querySelector("#select" + i); // Toma los dias de junio del estudiante
    let dia = localStorage.getItem('dia'+ i + 'junio');
    if(typeof dia == "string" && dia != "") {
        juneAdministrator.classList.remove("hover:bg-sky-500", "hover:rounded-lg", "hover:text-white");
        juneAdministrator.classList.add("bg-emerald-400", "rounded-full");
        juneStudent.classList.remove("hover:bg-sky-500", "hover:rounded-lg", "hover:text-white");
        juneStudent.classList.add("bg-emerald-400", "rounded-full");
    }
    juneAdministrator.addEventListener("click", ()=> {
        document.getElementById('value').value = dia;
        document.getElementById('delete-events').addEventListener("click", ()=> {
            document.getElementById('value').value = "";
            localStorage.setItem('dia'+ i + 'junio', "");
        })
    })
}

for(i = 1; i < 31; i++){     
    let june = document.querySelector('#dia'+ i); // Toma los dias de junio del administrador  
    
    let modal = document.querySelector('#modal'); // Toma la ventana emergente
    june.addEventListener("click", ()=> { // Cuando le de click a algun dia de junio ejecuta esta funcion
       select = june.id; // Toma el dia seleccionado
       modal.showModal(); // Le da estilos al modal
       submitEvent = document.getElementById('submitEvent'); // Toma el buton de enviar del modal
       submitEvent.addEventListener("click", ()=> { // Cuando le de click al boton de enviar se ejecuta esta funcion
            value = document.getElementById('value').value // Toma lo escrito en el modal
            if(value == "") {
                
            } else {
                localStorage.setItem(select+'junio', value); // Guarda lo escrito en el local storage 
            }          
        })
    })   
}

for(i = 1; i < 31; i++){
    let dias = document.querySelector("#select" + i); // Toma los dias de junio del estudiante
    let june = document.querySelector('#dia'+ i); // Toma los dias de junio del administrador  
    dias.addEventListener("click", ()=> { // Cuando le de click a algun dia de junio ejecuta esta funcion
        let select = june.id;  // Toma el dia seleccionado
        let showSavedEvent = document.getElementById('showSavedEvent'); // Toma el div donde se mostrara el evento
        let eventSaved = localStorage.getItem(select +"junio"); // Toma el evento que se guardo en ese dia del local storage
        showSavedEvent.className = "block bg-white text-xl shadow-2xl shadow-blue-500 break-words font-bold text-center p-5 mt-5 mb-10 ml-5 w-64 h-72 border-l-8 rounded-lg border-blue-400" // Le da estilos al div
        if(eventSaved == "" || eventSaved == undefined) {
            showSavedEvent.innerHTML = '<p> No hay eventos </p>';
        } else {
            showSavedEvent.innerHTML = `<p>${eventSaved}</p>` // Escribe en el div el evento guardado
        }
    })
}

array = []; // Aqui se guardaran los eventos disponibles
dia = []; // Aque se guardaran la fecha de esos eventos

for(let i = 1; i < 31; i++) { // En este ciclo se guardaran todos los eventos con sus fechas
   let save = localStorage.getItem('dia'+ i + 'junio'); // En esta variable se guardan los eventos que estan en el local storage
   if(typeof save == "string" && save != "") { // Si hay eventos escritos, entra en esta condicion
    array.push(save); // Se guardan los eventos en el array 
    dia.push(i); // Se guardan la fecha de los eventos en el array
   }
}

let checked = false;
document.getElementById("checked-events").addEventListener("click", ()=> { // Se ejecuta cuando se le da click al boton de mostrar eventos
    if(checked == false) { // Cuando se active el boton, entra en esta condicion
        div = document.getElementById("show-all");
        text = document.getElementById("text-show");
        div.className = className = "block relative h-80 overflow-auto font-bold mt-4 mb-4 border-blue-500 p-5";  
        if(array.length == 0) { // Si no hay eventos escritos en el array, entra esta condicion
            div.classList.remove("h-80", "overflow-auto");
            text.className = "";
            text.innerHTML += `<p class="text-xl text-center">No hay eventos.</p>`; // Muestra el mensaje "No hay eventos"
            checked = true; //  Cambia la variable a true
        } else{ // Sino, entra en esta condicion
            for(let j = 0; j <= array.length - 1; j++) { // En este ciclo, guarda los eventos y los muestra
                text.innerHTML += `<div class="border-l-8 p-2 bg-white rounded-lg border-blue-500 w-48 h-56"> <p class="text-blue-400"> ${dia[j]} de Junio</p> <p class="text-center font-bold mt-3"> ${array[j]} </p></div>`;
                checked = true;          
            }
        }
    } else{
        document.getElementById("show-all").className = "hidden";
        text.innerHTML = "";
        checked = false;
    }
})

