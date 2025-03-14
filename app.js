// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos=[];

function agregarAmigo (){
    let inputNombre=document.getElementById('amigo');
    let nombre=inputNombre.value;  //tratar de validar solo texto
    if (nombre===''){
        alert("Por favor, inserte un nombre");
        return;
    }
    if (amigos.includes(nombre)){
        alert('Este nombre ya fue agregado. Favor de distiguirlo'); //si hay algún nombre repetido, alertará y no agregará el nombre tecleado
        inputNombre.value='';
        return;
    }
    amigos.push(nombre);
    console.log(amigos);
    inputNombre.value=''; //limpia input
    agregarLista();
    inputNombre.focus(); //queda acitvo el area input para escribir
    
}

function agregarLista (){
    let lista=document.getElementById('listaAmigos');
    lista.innerHTML="";
    let contador=1;
    for (let i =0; i<amigos.length; i++, contador++){
        let elemento=document.createElement('li');
        elemento.textContent=`${contador}.  ${amigos[i]}`;
        lista.appendChild(elemento);//lo agrega como hijo último de la ul (nodo, punto de árbol de nodos en el DOM)
    }
    
}

function sortearAmigo(){
    if(amigos.length===0 || amigos.length===1){
        alert('¡Se requiere más de un amigo para sortear!');
        return;
    } 

    let amigoElegido=amigos[Math.floor(Math.random()*amigos.length)];
    let pantalla=document.getElementById('resultado');
    pantalla.innerHTML=`¡El elegido ha sido ${amigoElegido}!`;
}