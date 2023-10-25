// script.js
document.addEventListener("DOMContentLoaded", function () {
    const cepInput = document.getElementById("cep");
    const pagamentoSelect = document.getElementById("pagamento");
    const finalizarButton = document.querySelector(".finalizar");

    finalizarButton.addEventListener("click", function () {
        const selectedPayment = pagamentoSelect.value;
        const zipCode = cepInput.value;

        <input type="text" class="form-control" onkeypress="$(this).mask('00.000-000')"></input>

        alert(`Ocorreu um erro\nForma de Pagamento: ${selectedPayment}\nCEP: ${zipCode}`);
    });
});