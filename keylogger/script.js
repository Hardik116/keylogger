const logdiv = document.getElementById("log");
const statediv = document.getElementById("state");
const start = document.getElementById("start");
const stop =document.getElementById("stop");

start.addEventListener('click',()=>{
    document.addEventListener("keydown",handledown)
    document.addEventListener("keyup",handleup)
})

stop.addEventListener('click',()=>{
    document.addEventListener("keydown",handledown)
    document.addEventListener("keyup",handleup)
    logdiv.textContent=""
    statediv.textContent=""
})

function handledown(e){
    logdiv.textContent= `key ${e.key} pressed down`
    statediv.textContent="key is down"
}
function handleup(e){
    logdiv.textContent= `key ${e.key} pressed up`
    statediv.textContent="key is up"
}