let buttonel=document.querySelector(".roll-button")
let diceel=document.getElementById("dice")
let rollhistry=document.getElementById("roll-history")
let histrlsit=[]
console.log(histrlsit);

function rolldice(){
    let rollresult=Math.floor(Math.random()*6)+1
    const diceface=getdiceface(rollresult)
    diceel.innerHTML=diceface
    histrlsit.push(rollresult)
    updatehistry()
}

function updatehistry(){
    rollhistry.innerHTML = ""; // Clear previous history
    for (let i = 0; i < histrlsit.length; i++) {
        const listitem=document.createElement("li")
        listitem.innerHTML=`Roll ${i +1}: <span>${getdiceface(histrlsit[i])}</span>`
        rollhistry.appendChild(listitem)
    }
}

function getdiceface(rollresult){
switch(rollresult){
    case 1:
        return "&#9856;"
    case 2:
        return "&#9857;"
    case 3:
        return "&#9858;"
    case 4:
        return "&#9859;"
    case 5:
        return "&#9860;"
    case 6:
        return "&#9861;"
    default:
        return "";
    }
}



buttonel.addEventListener("click",()=>{
    diceel.classList.add("roll-animation")
    setTimeout(()=>{
    diceel.classList.remove("roll-animation")
    rolldice()
    },2000)

})