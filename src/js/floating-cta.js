export function initFloatingCta() {
  const floatingCta = document.createElement("div");
  floatingCta.className = "c-floating-cta";
  floatingCta.innerHTML = `
    <button type="button" class="c-floating-cta__btn c-btn c-btn--full c-btn--lg">
      Get Started
    </button>
  `;
  document.body.appendChild(floatingCta);

  const triggers = document.querySelectorAll(".c-cta-bar");

  const observer = new IntersectionObserver((entries) => {
    const anyVisible = [...entries].some((e) => e.isIntersecting);
    floatingCta.classList.toggle("c-floating-cta--visible", !anyVisible);
  });

  triggers.forEach((trigger) => observer.observe(trigger));
}
