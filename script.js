let currentIndex = 0;

const paginas = document.querySelectorAll(".pagina");
const pageIndexText = document.getElementById('pageIndex');
const datePickers = document.querySelectorAll(".datePickerID");

document.body.classList.add("activeJs");
// Max datepicker https://stackoverflow.com/questions/32378590/set-date-input-fields-max-date-to-today
// ChatGPT: Van GetElementByID naar querySelectorAll. 
// Antwoord: Ik zie het probleem al! Op dit moment roep je de naam 'datePickerID' aan als element en niet als class, verander dit naar .datePickerID. Daarna moet je elke datePicker aanreoepen in de javascript met een forEach.
const today = new Date().toISOString().split("T")[0];

datePickers.forEach(date => {
    date.max = today;
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

// ChatGPT Prompt: Zou je mij kunnen helpen met een filter maken voor de inputs die niet te zien zijn (Door Opacity: 0;?) Ik krijg de filter niet voor elkaar.
// Antwoord: Je hoeft de opacity niet mee te nemen in de filter! Alleen de pointer events van jouw CSS! Bijvoorbeeld:
document.getElementById("next").addEventListener("click", () => {
    let allValid = true;
    const currentPage = paginas[currentIndex];

    // // Pakt alle inputs die 'required' zijn voor de form
    // // Filter toegevoegd omdat de CSS sommige inputs op opacity: 0; zet
    const inputs = Array.from(currentPage.querySelectorAll("input[required]"))
        .filter(input => {
            const style = getComputedStyle(input);
            return style.pointerEvents !== "none";
        });


    inputs.forEach(input => {
        if (!input.checkValidity()) {
            allValid = false;
            input.reportValidity();
        }
    });

    if (!allValid) return;

    if (currentIndex < paginas.length - 1) {
        currentIndex++;
        showPage(currentIndex);
    }
});