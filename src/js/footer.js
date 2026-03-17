const SELECTOR_TOGGLE = "[data-recaptcha-disclosure-toggle]";
const SELECTOR_DISCLOSURE = "[data-recaptcha-disclosure]";

export function initRecaptchaDisclosure() {
  const toggle = document.querySelector(SELECTOR_TOGGLE);
  const disclosure = document.querySelector(SELECTOR_DISCLOSURE);

  if (!toggle || !disclosure) return;

  toggle.addEventListener(
    "click",
    () => {
      disclosure.setAttribute("data-expanded", "true");
      toggle.remove();
    },
    { once: true },
  );
}
