const mainWrapper = document.getElementById("mainWrapper");
const frontPage = document.getElementById("frontPage");
const frontPageH4 = document.getElementById("frontPageH4");
const frontPageH1 = document.getElementById("frontPageH1");
const choicesScreen = document.getElementById("choicesScreen");
const addSubjectScreen = document.getElementById("addSubjectScreen");
const addSubjectSpan = document.getElementById("addSubjectSpan");
const addSubjectInput = document.getElementById("addSubjectInput");

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