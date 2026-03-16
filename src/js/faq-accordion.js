export function initFaqAccordion() {
  const items = document.querySelectorAll(".c-faq-accordion__item");

  items.forEach((item) => {
    const toggle = item.querySelector(".c-faq-accordion__toggle");
    const question = item.querySelector(".c-faq-accordion__question");
    const answer = item.querySelector(".c-faq-accordion__answer");

    toggle.setAttribute("aria-expanded", "false");

    toggle.addEventListener("click", () => {
      const isExpanded = toggle.getAttribute("aria-expanded") === "true";

      toggle.setAttribute("aria-expanded", String(!isExpanded));
      question.setAttribute("data-expanded", String(!isExpanded));
      answer.setAttribute("data-expanded", String(!isExpanded));
    });
  });
}
