// när man klickar på pilen under frågan faller svaret ner
const fosS = document.querySelectorAll(".fos")

fosS.forEach(fos => {
    fos.addEventListener("click" , () => {
    fos.classList.toggle("active");
    });
})