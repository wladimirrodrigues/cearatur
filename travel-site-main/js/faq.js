/**
 * This function is responsible for the FAQ section
 * Essa função é responsável pela seção de FAQ
 */
export function faq() {
  const faqItems = document.querySelectorAll(".faq-item");

  // If there are no FAQ items, return undefined
  // Se não houver itens de FAQ, return undefined
  if (!faqItems.length) return;

  /**
   * This function toggles the visibility of the answer of a FAQ item
   *
   * Essa função alterna a visibilidade da resposta de um item de FAQ
   * @param {HTMLElement} item
   */
  const toggleFaqItem = (item) => {
    const answer = item.querySelector(".answer");

    if (answer.style.display === "block") {
      answer.style.display = "none";
    } else {
      answer.style.display = "block";
    }
  };

  // Add event listener to each FAQ item, so that when the button is clicked, the answer is shown/hidden
  // Adiciona um event listener a cada item de FAQ, para que quando o botão for clicado, a resposta seja mostrada/ocultada
  faqItems.forEach((item) => {
    const button = item.querySelector("button");
    button.addEventListener("click", () => {
      toggleFaqItem(item);
    });
  });
}
