const redirectButton=document.querySelector("#sign-up");
const redirectGoogleBtn=document.querySelector(".google-btn");
//add click event for sign-up button
redirectButton.addEventListener("click",()=>{
    window.location.href="dashboard.html";

});

document.querySelector(".logout-div").addEventListener("click", () => {
    window.location.href = "../html/index.html";
});


