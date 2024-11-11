
const urlParams = new URLSearchParams(window.location.search);
const plan = urlParams.get('plan');


document.getElementById("plan").value = plan || "Plano não especificado";


function validateField(input, condition, errorMsgId, fieldName) {
    const errorMsg = document.getElementById(errorMsgId);
    if (condition) {
        input.classList.add("error-border");
        errorMsg.style.display = "block";
        return false;
    } else {
        input.classList.remove("error-border");
        errorMsg.style.display = "none";
        console.log(`Campo ${fieldName} foi validado`);
        return true;
    }
}


function clearErrors() {
    const errorMessages = document.querySelectorAll(".error-message");
    errorMessages.forEach(error => {
        error.style.display = "none";
    });
    const inputs = document.querySelectorAll(".error-border");
    inputs.forEach(input => {
        input.classList.remove("error-border");
    });
}


document.getElementById("paymentForm").addEventListener("submit", function (event) {
    let isValid = true;

    
    const name = document.getElementById("name");
    isValid = validateField(name, name.value.length < 3, "name-error", "Nome Completo") && isValid;


    const email = document.getElementById("email");
    isValid = validateField(email, !/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email.value), "email-error", "Email") && isValid;

    
    const cardNumber = document.getElementById("card-number");
    isValid = validateField(cardNumber, !/^\d{16}$/.test(cardNumber.value), "card-error", "Número do Cartão") && isValid;

  
    const expiryDate = document.getElementById("expiry-date");
    isValid = validateField(expiryDate, !/^(0[1-9]|1[0-2])\/(0[1-9]|[12][0-9]|3[01])\/\d{4}$/.test(expiryDate.value), "expiry-error", "Data de Expedição") && isValid;

    
    const cvv = document.getElementById("cvv");
    isValid = validateField(cvv, !/^\d{3}$/.test(cvv.value), "cvv-error", "CVV") && isValid;

   
    if (isValid) {
        clearErrors(); 
        alert("Pagamento processado com sucesso!");
    } else {
        event.preventDefault(); 
    }
});
