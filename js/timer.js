const $getTime = document.getElementById("timeAlarm");
const $btnAdd = document.getElementById('newAlarm');
const $btnEdit = document.getElementById('newAlarm');

let cont = 0;

function setDate() {
    
    let date = new Date(); 
    let year = `${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}`;
    let time = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
    const $pTime = document.getElementById('date');
      
    $pTime.innerText = year + " " + time;
}

function addAlarm() {
    
    cont++
    const $containerAlarm = document.getElementById('clock-right');
    const $btnsAlarm = document.getElementById('alarm-btns');
    const newAlarm = document.createElement('div');
    const btnDelete = document.createElement('button');

    newAlarm.innerHTML = 'Nueva Alarma ' + cont + "  ";
    
    btnDelete.innerHTML = 'x';
    btnDelete.classList.add('button');

    $containerAlarm.insertBefore(newAlarm,$btnsAlarm);
    newAlarm.appendChild(btnDelete);

    btnDelete.onclick = function () {
        this.parentNode.parentNode.removeChild(this.parentNode);
        console.log('hola eliminar');
    }
}



document.addEventListener("DOMContentLoaded",function () {
    
    let interval = setInterval(setDate,1000);
    console.log($getTime)

    $btnAdd.onclick = function () {
   
        addAlarm();
        console.log('Agregué nueva alarma')
    }


    
})