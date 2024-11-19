/**
 * Custom error messages
 * Mensagens de erro personalizadas
 * @param {Event} event
 * @param {Array<HTMLInputElement>} fields
 */
export const customErrors = (event) => {
  /**
   * The field that triggered the event
   * O campo que disparou o evento
   * @type {HTMLInputElement}
   */
  const field = event.target;

  function verifyErrors() {
    let foundError = false;

    if (!field) return;

    /**
     * Check if the field is valid
     * Verifica se o campo é válido
     */
    for (let error in field.validity) {
      if (error !== "customError" && field.validity[error]) {
        foundError = Boolean(error);
      }
    }

    return foundError;
  }

  const error = verifyErrors();

  if (error) {
    field.setCustomValidity("Campo obrigatório");
  } else {
    field.setCustomValidity("");
  }
};
