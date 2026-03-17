const SELECTOR_FAQ_ITEM = "[data-faq-accordion-item]";
const SELECTOR_FAQ_TOGGLE = "[data-faq-accordion-toggle]";
const SELECTOR_FAQ_ANSWER = "[data-faq-accordion-answer]";

export function initFaqAccordion() {
  const items = document.querySelectorAll(SELECTOR_FAQ_ITEM);

  items.forEach((item) => {
    const toggle = item.querySelector(SELECTOR_FAQ_TOGGLE);
    const answer = item.querySelector(SELECTOR_FAQ_ANSWER);

    if (!toggle || !answer) return;

    toggle.addEventListener("click", () => {
      const isExpanded = toggle.getAttribute("aria-expanded") === "true";
      toggle.setAttribute("aria-expanded", String(!isExpanded));
      answer.setAttribute("data-expanded", String(!isExpanded));
    });
  });
}
