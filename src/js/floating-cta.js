const SELECTOR_CTA_TRIGGER = "[data-cta-bar]";

export function initFloatingCta() {
  const floatingCta = document.createElement("div");
  floatingCta.className = "c-floating-cta";
  floatingCta.innerHTML = `
    <button type="button" class="c-floating-cta__btn c-btn c-btn--full c-btn--lg" data-floating-cta-btn>
      Get Started
    </button>
  `;
  document.body.appendChild(floatingCta);

  const triggers = document.querySelectorAll(SELECTOR_CTA_TRIGGER);

  if (!triggers.length) return;

  const observer = new IntersectionObserver((entries) => {
    const anyVisible = entries.some((entry) => entry.isIntersecting);
    floatingCta.classList.toggle("c-floating-cta--visible", !anyVisible);
  });

  triggers.forEach((trigger) => observer.observe(trigger));
}
