const form = document.querySelector('.form-usuario');
form.addEventListener('submit', function(event) {
    const campos = document.querySelectorAll('.input-box input, .termo input');
    campos.forEach(campo => {
        const popup = campo.parentElement.querySelector('.popup');
        if ((campo.type === 'checkbox' && !campo.checked) || (campo.type !== 'checkbox' && campo.value.trim() === '')) {
            popup.style.display = 'block';
            event.preventDefault(); // Impede o envio do formulário
        } else {
            popup.style.display = 'none';
            campo.classList.remove('invalid'); // Remover a classe 'invalid' quando o popup desaparece
        }
    });


// Oculta popups ao clicar dentro dos inputs ou na página toda
const inputs = document.querySelectorAll('.input-box input');
inputs.forEach(input => {
    input.addEventListener('click', function() {
        const popup = this.parentElement.querySelector('.popup');
        popup.style.display = 'none';
    });
});

document.addEventListener('click', function(event) {
    if (!event.target.closest('.input-box')) {
        const popups = document.querySelectorAll('.popup');
        popups.forEach(popup => {
            popup.style.display = 'none';
            const input = popup.parentElement.querySelector('input');
            input.classList.remove('invalid'); // Remover a classe 'invalid' quando o popup desaparece
        });
    }
});

document.getElementById("nome").addEventListener("input", function() {
    var nomeInput = this.value.trim();
    var nomePattern = /^[a-zA-Z\s]{10,}$/; // Apenas letras e espaços, mínimo de 10 caracteres

    if (!nomePattern.test(nomeInput)) {
        this.classList.add("invalid");
        if (nomeInput.length < 10) {
            document.getElementById("nome-popup").textContent = "*Caracteres inválidos";
           
        } else {
            document.getElementById("nome-popup").textContent = "*Mínimo de 10 caracteres necessários";
        }
        document.getElementById("nome-popup").classList.add("active");
    } else {
        this.classList.remove("invalid");
        document.getElementById("nome-popup").classList.remove("active");
    }
});

// Adicionando evento para remover o popup quando clicar fora do campo de entrada
document.addEventListener("click", function(event) {
    var nomeInput = document.getElementById("nome");
    var nomePopup = document.getElementById("nome-popup");
    
    if (event.target !== nomeInput && event.target !== nomePopup) {
        nomePopup.classList.remove("active");
        nomeInput.classList.remove("invalid"); // Remover a classe 'invalid' quando o popup desaparece
    }
});
});


document.addEventListener("DOMContentLoaded", function() {
document.getElementById("validarBtn").addEventListener("click", function() {
  validarNome();
});

// Adiciona um evento de escuta para monitorar mudanças no campo de entrada
document.getElementById("nome").addEventListener("input", function() {
  var nomeInput = this.value.trim();
  if (nomeInput === "") {
    document.querySelector(".popup").style.display = "none";
  }
});
});

function validarNome() {
var nomeInput = document.getElementById("nome").value.trim();

// Expressão regular para validar nome completo (sem números e símbolos)
var regexNome = /^[^\d\s!@#$%^&*()_+={}\[\]|\\:;"'<>,.?/~`]+$/;

if (nomeInput === "" || !regexNome.test(nomeInput)) {
  document.querySelector(".popup").textContent = "* Caracteres inválidos";
  document.querySelector(".popup").style.display = "inline";
} else {
  document.querySelector(".popup").style.display = "none";
  alert("Nome completo válido: " + nomeInput);
}
}