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

document.querySelectorAll("[data-enable]").forEach(checkbox => {
    function update() {
        if (checkbox.checked && checkbox.name) {
            document.querySelectorAll(`input[name="${checkbox.name}"][data-enable]`).forEach(other => {
                if (other !== checkbox) {
                    other.checked = false;
                    // Trigger de update voor de andere checkbox om zijn target te verbergen
                    const otherTarget = document.getElementById(other.dataset.enable);
                    if (otherTarget) {
                        otherTarget.classList.remove("show");
                        otherTarget.classList.add("hidden");
                        otherTarget.style.maxHeight = "0";
                        otherTarget.style.pointerEvents = "none";
                    }
                }
            });
        }
        const targetId = checkbox.dataset.enable;
        const target = document.getElementById(targetId);

        if (target) {
            if (checkbox.checked) {
                target.classList.add("show");
                target.classList.remove("hidden");
                target.style.maxHeight = "100px"; // Nodig voor de transition
                target.style.pointerEvents = "auto";
            } else {
                target.classList.remove("show");
                target.classList.add("hidden");
                target.style.maxHeight = "0";
                target.style.pointerEvents = "none";
            }
            
            // Vergeet niet je syncRequiredFields aan te roepen als je die nog gebruikt!
            if (typeof syncRequiredFields === "function") {
                syncRequiredFields();
            }
        }
    }

    checkbox.addEventListener("change", update);
    update(); // Run direct voor de beginstand
});


document.getElementById('nieuweVerkrijgerButton').addEventListener('click', function(e) {
    // De e.preventDefault moest ik vragen aan ChatGPT
    // Vraag: De pagina herlaadt soms, hoe kan ik dit fixen + [code]
    // Antwoord: Voorkom dat de pagina herlaadt (als de knop in een form staat) met e.preventDefault(); Optioneel kan je ook onderaan de functie de required state herberekenen met de logica van een andere functie die je gebruikt: if (typeof syncRequiredFields === "function") {syncRequiredFields();}
    e.preventDefault();

    const container = document.getElementById('VerkrijgersZonderAangifte');
    const huidigAantal = container.querySelectorAll('.verkrijgerObject').length;
    const nieuweIndex = huidigAantal + 1;
    
    const htmlTemplate = `
        <div class="verkrijgerObject" id="verkrijgerObject-${nieuweIndex}" style="border-top: 1px solid #ccc; margin-top: 20px; padding-top: 20px;">
            <h4>Verkrijger ${nieuweIndex}</h4>
            <label>
                Bsn/RSIN
                <input type="number" name="BSN-RSIN-Verkrijger-${nieuweIndex}" placeholder="Aangifte aantallen">
            </label>
            <div class="first-three">
                <label>
                    Voorletter
                    <input required type="text" name="voorLetterGemachtigde-${nieuweIndex}" placeholder="Voorletter(s)">
                </label>
                <label>
                    Tussenvoegsel(s)
                    <input type="text" name="tussenVoegselGemachtigde-${nieuweIndex}" placeholder="Tussenvoegsel">
                </label>
                <label>
                    Achternaam
                    <input required type="text" name="achterNaamGemachtigde-${nieuweIndex}" placeholder="Achternaam">
                </label>
            </div>

            <p>Krijgt deze verkrijger waarvoor u geen aangifte doet het hele vermogen?</p>
            <label>
                <input required type="radio" name="verkrijgerHeleVermogen-${nieuweIndex}" value="ja"> Ja
            </label>
            <label>
                <input type="radio" name="verkrijgerHeleVermogen-${nieuweIndex}" value="nee"> Nee
            </label>

            <p>Doet deze verkrijger een beroep op diens legitieme portie (wettelijke erfdeel)?</p>
            <label>
                <input required type="radio" name="verkrijgerLegitiemeBeroep-${nieuweIndex}" value="ja"> Ja
            </label>
            <label>
                <input type="radio" name="verkrijgerLegitiemeBeroep-${nieuweIndex}" value="nee"> Nee
            </label>
            
            <button id="verwijderVerkrijgerButton" type="button" onclick="this.parentElement.remove()">Verwijder deze verkrijger</button>
        </div>
    `;

    container.insertAdjacentHTML('beforeend', htmlTemplate);
    
    if (typeof syncRequiredFields === "function") {
        syncRequiredFields();
    }
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
        syncRequiredFields();
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
    syncRequiredFields();
});

function syncRequiredFields() {
    const inputs = document.querySelectorAll('input[type="text"], input[type="radio"], input[type="date"], input[type="number"]');

    inputs.forEach(input => {
        const parent = input.closest('label') || input.closest('div') || input;
        const style = window.getComputedStyle(parent);
        const isVisible = style.opacity === "1" && style.pointerEvents !== "none";

        if (isVisible) {
            if (input.type === 'radio') {
                // Namen van de inputs, als je meer wilt voeg er meer toe met de formule input.name === [input name]
                if (input.value === "ja" || input.value === "BSN") {
                    input.required = true;
                } else {
                    input.required = false;
                }
            }
            if(input.placeholder === "Tussenvoegsel" || input.value === "nee" || input.value === "Becon" || input.value === "Protocol" || input.value === "metAndereVekrijgers" || input.value === "metAndereErfgenamen" || input.value === "alleenMijzelf" || input.value === "geenErfgenaam" || input.name==="metAndereVerkrijgersAantallen" || input.name==="metAndereErfgenamenAantallen"|| input.name==="geenErfgenaamAantallen"){
                input.required = false;
            }
            else {
                input.required = true;
            }
        } else {
            input.required = false;
        }
    });
}

document.addEventListener('change', syncRequiredFields);
window.addEventListener('DOMContentLoaded', syncRequiredFields);