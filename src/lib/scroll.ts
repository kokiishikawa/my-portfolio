// 要素のページ上端からのレイアウト位置を返す(transform の影響を受けない)
// getBoundingClientRect() は transform 込みの見た目の位置を返すため、
// 未発火の .reveal (translateY(32px)) 内の要素を測るとスクロール位置が 32px ずれる。
// offsetTop はレイアウト上の位置なので、offsetParent をたどって合算する。
export const getElementTop = (element: HTMLElement) => {
  let top = 0;
  let el: HTMLElement | null = element;
  while (el) {
    top += el.offsetTop;
    el = el.offsetParent as HTMLElement | null;
  }
  return top;
};
