import Swiper from "swiper";
import { Navigation } from "swiper/modules";
import "swiper/css";

export function initTopTen() {
  const viewport = document.querySelector(".c-top-10__viewport");
  if (!viewport) return;

  const swiperEl = viewport.querySelector(".swiper");
  const mq = window.matchMedia("(min-width: 960px)");
  let swiperInstance = null;

  function buildSwiper() {
    const isDesktop = mq.matches;

    if (swiperInstance) {
      swiperInstance.destroy(true, true);
      swiperInstance = null;
    }

    viewport
      .querySelectorAll(".c-top-10__control-wrapper")
      .forEach((el) => el.remove());

    let prevBtn = null;
    let nextBtn = null;

    if (isDesktop) {
      const prevWrapper = document.createElement("div");
      prevWrapper.className =
        "c-top-10__control-wrapper c-top-10__control-wrapper--prev";
      prevWrapper.setAttribute("aria-hidden", "true");
      prevWrapper.innerHTML = `
        <button type="button" class="c-top-10__control c-top-10__control--prev" aria-label="Scroll left">
          <svg width="24" height="24" aria-hidden="true">
            <use href="/icons.svg#icon-chevron-left"></use>
          </svg>
        </button>`;

      const nextWrapper = document.createElement("div");
      nextWrapper.className =
        "c-top-10__control-wrapper c-top-10__control-wrapper--next";
      nextWrapper.setAttribute("aria-hidden", "true");
      nextWrapper.innerHTML = `
        <button type="button" class="c-top-10__control c-top-10__control--next" aria-label="Scroll right">
          <svg width="24" height="24" aria-hidden="true">
            <use href="/icons.svg#icon-chevron-right"></use>
          </svg>
        </button>`;

      viewport.insertBefore(prevWrapper, swiperEl);
      viewport.appendChild(nextWrapper);

      prevBtn = prevWrapper.querySelector(".c-top-10__control--prev");
      nextBtn = nextWrapper.querySelector(".c-top-10__control--next");
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
