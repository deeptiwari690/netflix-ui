const SELECTOR_TRIGGER = "[data-recaptcha-disclosure-trigger]";
const SELECTOR_DISCLOSURE = "[data-recaptcha-disclosure]";

export function initRecaptchaDisclosure() {
  const trigger = document.querySelector(SELECTOR_TRIGGER);
  const disclosure = document.querySelector(SELECTOR_DISCLOSURE);

  if (!trigger || !disclosure) return;

  trigger.addEventListener(
    "click",
    () => {
      disclosure.dataset.expanded = "true";
      trigger.remove();
    },
    { once: true },
  );
}


