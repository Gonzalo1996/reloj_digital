

document.addEventListener("DOMContentLoaded",function () {
    
    setInterval(setDate,100);
})

function setDate() {
    
    let date = new Date(); 
    const year = `${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}`;
    const time = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
    const pTime = document.getElementById('date');
      
    pTime.innerText = year + " " + time;
}