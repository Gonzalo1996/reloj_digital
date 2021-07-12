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

function btnDelete(newAlarm) {
    const btnDelete = document.createElement('button');
    
    newAlarm.appendChild(btnDelete);
    btnDelete.innerHTML = 'x';
    btnDelete.classList.add('button');
    btnDelete.onclick = function () {
        this.parentNode.parentNode.removeChild(this.parentNode);
    }
}

function addAlarm() {
    
    let $getTime = document.getElementById("timeAlarm").value;
    const $containerAlarm = document.getElementById('clock-right');
    const $alarm = document.getElementById('alarm-btns');
    const newAlarm = document.createElement('div');
  
    newAlarm.innerHTML = `<p id='prueba' style='display: inline-block'>${$getTime}</p>`;
    $getTime = document.getElementById("timeAlarm").value ="00:00:00";
    $containerAlarm.insertBefore(newAlarm,$alarm);

    btnDelete(newAlarm);
    
   
    //document.getElementById('prueba').innerText = $getTime;
    //$containerAlarm.insertBefore(btnDelete,$btnsAlarm);
   // console.log("Existo? : ",$getTime);
}

document.addEventListener("DOMContentLoaded",function () {
    
    let interval = setInterval(setDate);


    $btnAdd.onclick = function () {
   
        addAlarm();
        console.log('Agregué nueva alarma')
    }
})