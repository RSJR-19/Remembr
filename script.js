const mainWrapper = document.getElementById("mainWrapper");
const frontPage = document.getElementById("frontPage");
const frontPageH4 = document.getElementById("frontPageH4");
const frontPageH1 = document.getElementById("frontPageH1");
const choicesScreen = document.getElementById("choicesScreen");
const addSubjectScreen = document.getElementById("addSubjectScreen");
const addSubjectSpan = document.getElementById("addSubjectSpan");
const addSubjectInput = document.getElementById("addSubjectInput");
const addButton = document.getElementById("addButton");


choicesScreen.style.display = "none";
addSubjectScreen.style.display = "none";



function scale(){
mainWrapper.classList.add("active");
frontPageH4.classList.add("fade");
frontPageH1.classList.add("fade");
setTimeout(()=>{
frontPage.style.display = "none";
choicesScreen.style.display = "flex";

setTimeout(() => {
choicesScreen.classList.add("fadeIn");
},50);
},500)


}

function addSubject(){
    addSubjectInputValue = "";
    choicesScreen.classList.remove("fadeIn");
    setTimeout(() => {
    choicesScreen.style.display = "none";
    addSubjectScreen.style.display = "flex";
    setTimeout(() => {
        addSubjectScreen.classList.add("active");

    },50)
    },500)
    

}

addSubjectInput.addEventListener("input", ()=> {
        addSubjectSpan.innerText = `Subject Title: ${addSubjectInput.value}`;
})


//BACK BUTTONS//
function backAdd(){
    addSubjectScreen.classList.remove("active");
    setTimeout(() =>{
        addSubjectScreen.style.display = "none";
        choicesScreen.style.display = "flex";
        setTimeout(() => {
         choicesScreen.classList.add("fadeIn");
        },50)


    },500)

}

function backMain(){
    console.log("renan")
    choicesScreen.classList.remove("fadeIn");
    setTimeout(() => {
        choicesScreen.style.display = "none";
        frontPage.style.display = "flex";
        

        setTimeout(()=> {
            mainWrapper.classList.remove("active");
            setTimeout(()=>{
                 frontPageH4.classList.remove("fade");
            frontPageH1.classList.remove("fade");
            },350)
           

        },25)


    },500)


}