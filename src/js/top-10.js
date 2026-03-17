import Swiper from "swiper";
import { Navigation } from "swiper/modules";
import "swiper/css";

const SELECTOR_VIEWPORT = "[data-top-10-viewport]";
const SELECTOR_SWIPER = "[data-top-10-swiper]";
const BREAKPOINT_DESKTOP = "(min-width: 960px)";

export function initTopTen() {
  const viewport = document.querySelector(SELECTOR_VIEWPORT);
  if (!viewport) return;

  const swiperEl = viewport.querySelector(SELECTOR_SWIPER);
  if (!swiperEl) return;

  const mq = window.matchMedia(BREAKPOINT_DESKTOP);
  let swiperInstance = null;

  function buildSwiper() {
    const isDesktop = mq.matches;

    if (swiperInstance) {
      swiperInstance.destroy(true, true);
      swiperInstance = null;
    }

    viewport
      .querySelectorAll("[data-top-10-control-wrapper]")
      .forEach((el) => el.remove());

    let prevBtn = null;
    let nextBtn = null;

    if (isDesktop) {
      const prevWrapper = document.createElement("div");
      prevWrapper.className =
        "c-top-10__control-wrapper c-top-10__control-wrapper--prev";
      prevWrapper.setAttribute("aria-hidden", "true");
      prevWrapper.dataset.top10ControlWrapper = "";
      prevWrapper.innerHTML = `
        <button type="button" class="c-top-10__control c-top-10__control--prev" aria-label="Scroll left" data-top-10-control-prev>
          <svg width="24" height="24" aria-hidden="true">
            <use href="/icons.svg#icon-chevron-left"></use>
          </svg>
        </button>`;

      const nextWrapper = document.createElement("div");
      nextWrapper.className =
        "c-top-10__control-wrapper c-top-10__control-wrapper--next";
      nextWrapper.setAttribute("aria-hidden", "true");
      nextWrapper.dataset.top10ControlWrapper = "";
      nextWrapper.innerHTML = `
        <button type="button" class="c-top-10__control c-top-10__control--next" aria-label="Scroll right" data-top-10-control-next>
          <svg width="24" height="24" aria-hidden="true">
            <use href="/icons.svg#icon-chevron-right"></use>
          </svg>
        </button>`;

      viewport.insertBefore(prevWrapper, swiperEl);
      viewport.appendChild(nextWrapper);

      prevBtn = prevWrapper.querySelector("[data-top-10-control-prev]");
      nextBtn = nextWrapper.querySelector("[data-top-10-control-next]");
    }

    swiperInstance = new Swiper(swiperEl, {
      modules: [Navigation],
      slidesPerView: "auto",
      spaceBetween: 0,
      slidesPerGroupAuto: true,
      speed: 500,
      allowTouchMove: true,
      grabCursor: true,
      watchOverflow: true,
      navigation: isDesktop
        ? {
            prevEl: prevBtn,
            nextEl: nextBtn,
            disabledClass: "c-top-10__control--hidden",
          }
        : false,
    });
  }

  buildSwiper();
  mq.addEventListener("change", buildSwiper);
}
