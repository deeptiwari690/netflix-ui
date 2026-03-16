export function initRecaptchaDisclosure() {
  const toggle = document.querySelector(
    ".c-footer__recaptcha-disclosure-toggle",
  );
  const disclosure = document.querySelector(".c-footer__recaptcha-disclosure");

  toggle.addEventListener(
    "click",
    () => {
      disclosure.setAttribute("data-expanded", "true");
      toggle.remove();
    },
    { once: true },
  );
}
