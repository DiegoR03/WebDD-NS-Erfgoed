let currentIndex = 0;

const paginas = document.querySelectorAll(".pagina");
const pageIndexText = document.getElementById('pageIndex')

document.addEventListener("change", () => {
    document.querySelectorAll("[data-disable]").forEach(button => {
        const targets = button.dataset.disable.split(",");

        targets.forEach(id => {
            const field = document.getElementById(id.trim());
            if (field) {
                field.classList.toggle("disabled", button.checked);
            }
        });
    });
    document.querySelectorAll("[data-unlock]").forEach(button => {
        const targets = button.dataset.unlock.split(",");

        targets.forEach(id => {
            const field = document.getElementById(id.trim());
            if (field) {
                field.classList.toggle("unlocked", button.checked);
            }
        });
    });
});

document.querySelectorAll("[box-enable]").forEach(checkbox => {

    function update() {
        const targetId = checkbox.dataset.enable;
        const target = document.getElementById(targetId);

        if (target) {
            target.style.display = checkbox.checked ? "block" : "none";
        }
    }

    checkbox.addEventListener("change", update);
    update();
});

function showPage(index) {
    paginas.forEach((pagina, i) => {
        pagina.classList.toggle("active", i === index);
        pageIndexText.innerHTML = currentIndex + 1;
        document.body.scrollTop;
    });
}

showPage(currentIndex);

document.getElementById("prev").addEventListener("click", () => {
    if (currentIndex > 0) {
        currentIndex--;
        showPage(currentIndex);
    }
});

document.getElementById("next").addEventListener("click", () => {
    if (currentIndex < paginas.length - 1) {
        currentIndex++;
        showPage(currentIndex);
    }
});