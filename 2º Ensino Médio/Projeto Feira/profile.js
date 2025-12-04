const sidebar = document.getElementById("sidebar");
const openSidebar = document.getElementById("openSidebar");
const closeSidebar = document.getElementById("closeSidebar");

openSidebar.addEventListener("click", () => {
    sidebar.classList.add("show");
    closeSidebar.style.display = "block";
    closeSidebar.textContent = "→";
});

closeSidebar.addEventListener("click", () => {
    sidebar.classList.remove("show");
    closeSidebar.style.display = "none";
});

/* TROCA DE IMAGEM */
const inputFile = document.getElementById("input-file");
const circle = document.getElementById("circle");
const iconDefault = document.getElementById("icon-default");
const profileImg = document.getElementById("profile-img");

circle.addEventListener("click", () => {
    inputFile.click();
});

inputFile.addEventListener("change", () => {
    const file = inputFile.files[0];
    if (!file) return;

    profileImg.src = URL.createObjectURL(file);
    profileImg.style.display = "block";
    iconDefault.style.display = "none";
});


/* inputFile.onchange = function (){
    profilePic.src = URL.createObjectURL(inputFile.files[0])
} */