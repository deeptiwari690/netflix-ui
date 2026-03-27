import Swiper from "swiper";
import { Navigation } from "swiper/modules";
import "swiper/css";

const SELECTOR_VIEWPORT = "[data-top-10-viewport]";
const SELECTOR_SWIPER = "[data-top-10-swiper]";
const CLASS_HIDDEN = "c-top-10__control--hidden";

const createNavButton = (direction) => {
  const isLeft = direction === "prev";
  const iconId = isLeft ? "icon-chevron-left" : "icon-chevron-right";

  const button = document.createElement("button");
  button.className = [
    "c-top-10__control",
    `c-top-10__control--${direction}`,
  ].join(" ");
  button.type = "button";
  button.setAttribute("aria-label", isLeft ? "Scroll left" : "Scroll right");
  button.setAttribute(`data-top-10-control-${direction}`, "");
  button.innerHTML = `
    <svg
      class="c-top-10__control-icon"
      width="24"
      height="24"
      aria-hidden="true"
    >
      <use href="/icons.svg#${iconId}"></use>
    </svg>`;

  return button;
};

export function initTop10() {
  const viewport = document.querySelector(SELECTOR_VIEWPORT);
  if (!viewport) return;

  const swiperEl = viewport.querySelector(SELECTOR_SWIPER);
  if (!swiperEl) return;

  const prevButton = createNavButton("prev");
  const nextButton = createNavButton("next");

  viewport.appendChild(prevButton);
  viewport.appendChild(nextButton);

  new Swiper(swiperEl, {
    modules: [Navigation],
    slidesPerView: "auto",
    slidesPerGroupAuto: true,
    speed: 500,
    grabCursor: true,
    navigation: {
      prevEl: prevButton,
      nextEl: nextButton,
      disabledClass: CLASS_HIDDEN,
    },
  });
}
