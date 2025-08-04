document.querySelector("form").addEventListener("submit", function (e) {
    const consent = document.querySelector("input[name='dataConsent']");
    if (!consent.checked) {
        e.preventDefault();
        alert("Debes aceptar la política de privacidad para continuar.");
    }
});

function incrementValue(id) {
    const input =document.getElementById(id);
    const currentValue = parseInt(input.value) || 1;
    const maxValue = parseInt(input.max) || 10;
    if (currentValue < maxValue) {
        input.value = currentValue + 1;
    }
}

function decrementValue(id) {
    const input = document.getElementById(id);
    if (input.value > input.min) {
        input.value = parseInt(input.value) -1;
    }
}

function toggleMenu()