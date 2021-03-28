export default (el: any) => {
  var rect = el.getBoundingClientRect(),
    scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  return {
    res: {
      top: `${rect.top + scrollTop}px`,
      left: `${rect.top + scrollTop}px`,
      width: `${el.getBoundingClientRect().width}px`,
      height: `${el.getBoundingClientRect().height}px`,
    },
    req: { el },
  };
};
