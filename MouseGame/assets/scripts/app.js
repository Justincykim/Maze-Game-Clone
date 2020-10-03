
let fail = 0;
const no = document.getElementsByClassName("no");
const start = document.getElementById("start");
const beg = document.getElementById("beg");
const water = document.querySelectorAll(".water")
const container = document.querySelector(".container-fluid");

let vis = document.querySelectorAll(".vis");

function toInv(){
    if(fail !== 0){
        return;
    }
    for(let i = 0; i < vis.length; i++){
        vis[i].classList.add("inv");
        vis[i].addEventListener("mouseover",function(){
            // alert("Go back to start!");
            fail++;
            start.textContent = "Restart"
            start.style.color = "red";
        });
    }
}

function toVis(){
    for(let i = 0; i < vis.length; i++){
        vis[i].classList.remove("inv");
    }
}

beg.addEventListener("mouseover",function(){
    if(fail !== 0){
        return;
    }
    for(let i = 0; i<water.length; i++){
        water[i].classList.add("warn");
    }
        window.setTimeout(toInv,10000);
})

for(let i = 0; i < no.length; i++){
    no[i].addEventListener("mouseover",function(){
        // alert("Go back to start!");
        fail++;
        start.textContent = "Restart"
        start.style.color = "black";
        container.classList.add("redOut");
    });
}

start.addEventListener("mouseover",function(){
    fail = 0;
    container.classList.remove("redOut");
    start.textContent = "Started"
    start.style.color = "blue";
    toVis();
    for(let i = 0; i<water.length; i++){
        water[i].classList.remove("warn");
    }
});


