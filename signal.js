const direct = ["north","east","south","west"];

const signal = {
    north:{
        green:document.getElementById("ng"),
        yellow:document.getElementById("ny"),
        red:document.getElementById("nr")
    },
     east:{
        green:document.getElementById("eg"),
        yellow:document.getElementById("ey"),
        red:document.getElementById("er")
    },
     south:{
        green:document.getElementById("sg"),
        yellow:document.getElementById("sy"),
        red:document.getElementById("sr")
    },
     west:{
        green:document.getElementById("wg"),
        yellow:document.getElementById("wy"),
        red:document.getElementById("wr")
    }
}

function triggersignal(dir,timeLeft){
    console.log("hii");
    
    const timer = setInterval(()=>{
        timeLeft--;
        if(timeLeft>5){
            signal[dir].green.style.opacity = 1;
            signal[dir].red.style.opacity = 0.4;
        }
        if(timeLeft>0 && timeLeft<5){
            signal[dir].yellow.style.opacity = 1;
            signal[dir].red.style.opacity = 0.4;
            signal[dir].green.style.opacity = 0.4;
        }
        if(timeLeft==0){
            signal[dir].red.style.opacity = 1;
            signal[dir].yellow.style.opacity = 0.4;
        }
    },1000)
}
function startsignal(){
       console.log("hii");
    let timeLeft;
    triggersignal("north",10)
    timeLeft=10;

    setTimeout(() => {
        triggersignal("east",10)
    }, 10000);
    setTimeout(() => {
        triggersignal("south",10)
    }, 20000);
    setTimeout(() => {
        triggersignal("west",10)
    }, 30000);
}
// starsignal();