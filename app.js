const containerImgs = document.querySelector(".container-imgs");

const containerCuadrado = () => {
    containerImgs.style.height = containerImgs.offsetWidth + "px";
};

containerCuadrado();

window.addEventListener("resize", (e) => {
    containerCuadrado();
});

const img = document.querySelector(".container-imgs > img");

const imagenes = ["dog1.webp", "dog2.jpg", "dog3.jpg", "dog4.webp"];

let indiceImg = 0;
let primeraCarga = true;

function cambiarImagen() {
    if(primeraCarga) {
        primeraCarga = false;
    } else {
        img.style.opacity = 0;
    }
    setTimeout(() => {
        
        if (indiceImg === imagenes.length) {
            indiceImg = 0;
        }
        img.src = `./img/${imagenes[indiceImg]}`;
        img.alt = `Dog ${indiceImg + 1}`;
        img.style.opacity = 1; // establece la opacidad de la imagen a 1 para desvanecerla
        indiceImg++;
    }, 500); // espera 1 segundo antes de cambiar la imagen
}

cambiarImagen();
setInterval(cambiarImagen, 3000);

const contentModal = document.querySelector(".content-modal");
const modal = document.querySelector(".modal");
const spanCerrarModal = document.querySelector(".content-modal > span");
const imgModal = document.querySelector(".content-modal > img")

const cambiarSizeContent = () => {
    if(window.innerHeight < 630) {
        contentModal.style.width = "auto";
        contentModal.style.height = "90%";
    } else {
        contentModal.style.height = "auto";
        contentModal.style.width = "90%";
    }
};

cambiarSizeContent();

window.addEventListener("resize", () => {
    cambiarSizeContent();
});

const cerrarModal = () => {
    modal.style.display = "none";
    imgModal.src = "";
    document.body.style.overflow = "visible";
}

const abrirModal = () => {
    modal.style.display = "flex";
    document.body.style.overflow = "hidden";
    let indice;
    if(indiceImg === 0) {
        indice = 0;
    } else {
        indice = indiceImg - 1;
    }
    imgModal.src = `./img/${imagenes[indice]}`;
    imgModal.alt = `Dog ${indiceImg + 1}`;
}

window.addEventListener("click", (e) => {
    if(e.target === modal) {
        cerrarModal();
    }
});

spanCerrarModal.addEventListener("click", cerrarModal)

containerImgs.addEventListener("click", abrirModal);