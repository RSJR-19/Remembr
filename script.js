const mainWrapper = document.getElementById("mainWrapper");
const frontPage = document.getElementById("frontPage");
const frontPageH4 = document.getElementById("frontPageH4");
const frontPageH1 = document.getElementById("frontPageH1");
const choicesScreen = document.getElementById("choicesScreen");

choicesScreen.style.display = "none";

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