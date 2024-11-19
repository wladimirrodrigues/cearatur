import { customErrors } from "./custom-errors.js";

/**
 * @type {HTMLFormElement}
 */
const form = document.querySelector(".contact-form");
/**
 * @type {HTMLInputElement[]}
 */
const requiredFields = form.querySelectorAll("[required]");

/**
 * Add event listener to each required field, so that when the field is invalid, a custom error message is shown
 * Adiciona um event listener a cada campo obrigatório, para que quando o campo for inválido, uma mensagem de erro personalizada seja exibida
 */
for (const field of requiredFields) {
  field.addEventListener("invalid", customErrors);
}

/**
 * This function is responsible for handling the form submission
 * Essa função é responsável por lidar com o envio do formulário
 */
form.addEventListener("submit", (event) => {
  // Prevent the default form submission
  // Impede o envio padrão do formulário
  event.preventDefault();
  const formData = new FormData(form);
  /**
   * This object will contain all the data from the form
   * Esse objeto conterá todos os dados do formulário
   */
  const data = Object.fromEntries(formData);

  // Save the data in the local storage
  // Salva os dados no local storage
  window.localStorage.setItem(`@ceara_tur:${data.email}`, JSON.stringify(data));

  alert("Contato salvo com sucesso!");
  form.reset();
});
