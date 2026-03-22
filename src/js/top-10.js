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

    let prevBtn = null;
    let nextBtn = null;

    if (isDesktop) {
      prevBtn = document.createElement("button");
      prevBtn.className = "c-top-10__control c-top-10__control--prev";
      prevBtn.setAttribute("type", "button");
      prevBtn.setAttribute("aria-label", "Scroll left");
      prevBtn.setAttribute("data-top-10-control-prev", "");
      prevBtn.innerHTML = `
        <svg class="c-top-10__control-icon" width="24" height="24" aria-hidden="true">
          <use href="/icons.svg#icon-chevron-left"></use>
        </svg>`;

      nextBtn = document.createElement("button");
      nextBtn.className = "c-top-10__control c-top-10__control--next";
      nextBtn.setAttribute("type", "button");
      nextBtn.setAttribute("aria-label", "Scroll right");
      nextBtn.setAttribute("data-top-10-control-next", "");
      nextBtn.innerHTML = `
        <svg class="c-top-10__control-icon" width="24" height="24" aria-hidden="true">
          <use href="/icons.svg#icon-chevron-right"></use>
        </svg>`;

      viewport.insertBefore(prevBtn, swiperEl);
      viewport.appendChild(nextBtn);
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
