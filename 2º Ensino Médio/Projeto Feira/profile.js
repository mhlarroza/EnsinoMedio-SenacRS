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

const saveBtn = document.getElementById("saveChanges");
const username = document.getElementById("username");
const distance = document.getElementById("distance");

function showSaveBtn() {
    saveBtn.style.display = "block";
}

username.addEventListener("input", showSaveBtn);
distance.addEventListener("input", showSaveBtn);

inputFile.addEventListener("change", () => {
    const file = inputFile.files[0];
    if (!file) return;

    profileImg.src = URL.createObjectURL(file);
    profileImg.style.display = "block";
    iconDefault.style.display = "none";

    showSaveBtn();
});

saveBtn.addEventListener("click", () => {

    // SALVAR NOME
    localStorage.setItem("username", username.value);

    // SALVAR DISTÂNCIA
    localStorage.setItem("distance", distance.value);

    // SALVAR IMAGEM DE PERFIL
    if (profileImg.src) {
        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");

        canvas.width = profileImg.naturalWidth;
        canvas.height = profileImg.naturalHeight;

        ctx.drawImage(profileImg, 0, 0);
        const imageData = canvas.toDataURL("image/png");

        localStorage.setItem("profileImage", imageData);
    }

    saveBtn.style.display = "none";
    alert("Alterações salvas!");
});

window.addEventListener("load", () => {

    // Carregar nome
    const savedName = localStorage.getItem("username");
    if (savedName) username.value = savedName;

    // Carregar distância
    const savedDistance = localStorage.getItem("distance");
    if (savedDistance) distance.value = savedDistance;

    // Carregar imagem
    const savedImage = localStorage.getItem("profileImage");
    if (savedImage) {
        profileImg.src = savedImage;
        profileImg.style.display = "block";
        iconDefault.style.display = "none";
    }
});
