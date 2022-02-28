// /**
//  * 滚动到指定位置，兼容替代 scrollIntoView
//  */
// export function scrollToViewAnimate(targetEl, options = {}) {
//   let scrollEl = options.scrollEl || document.body;
//   //获取元素相对窗口的top值，此处应加上窗口本身的偏移
//   const scrollTop =
//     scrollEl.scrollTop ||
//     document.body.scrollTop ||
//     document.documentElement.scrollTop ||
//     window.pageYOffset;
//   if (scrollEl.nodeName === 'BODY' && !document.body.scrollTop && scrollTop) {
//     scrollEl = document.documentElement;
//   }
//   if (scrollEl.nodeName === 'BODY' && !scrollTop) {
//     scrollEl = [scrollEl, document.documentElement];
//   }
//   const speed = options.speed || 50;
//   const deviation = options.deviation || 0;
//   const rect = targetEl.getBoundingClientRect();
//   const nextTop = scrollTop + rect.top;
//   const direction = rect.top >= 0 ? 'up' : 'down';
//   let currentTop = scrollTop;
//   let isEnd = false;
//   let requestId;
//   //采用requestAnimationFrame，平滑动画
//   function step() {
//     if (direction === 'up') {
//       currentTop += speed;
//       if (currentTop > nextTop) {
//         currentTop = nextTop + deviation;
//         isEnd = true;
//       }
//     } else {
//       currentTop -= speed;
//       if (currentTop < nextTop) {
//         currentTop = nextTop + deviation;
//         isEnd = true;
//       }
//     }
//     if (isArray(scrollEl)) scrollEl.forEach(el => el.scrollTo(0, currentTop));
//     else scrollEl.scrollTo(0, currentTop);
//     requestId = window.requestAnimationFrame(step);
//     isEnd && window.cancelAnimationFrame(requestId);
//   }
//   window.requestAnimationFrame(step);
// }