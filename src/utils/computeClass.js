// compute classnames for the 3 themes
/*
 - themeNumber - 0,1,2
 - main - class to be applied incl. theme1 styles
 - t2 - class for theme2
 - t3 - class for theme3
 - type
*/
export const computeClasses = (themeNumber, main, t2, t3, type) => {
  if (themeNumber === 1) return `${main} ${t2}${type ? " " + type : ""}`;
  if (themeNumber === 2) return `${main} ${t3}${type ? " " + type : ""}`;
  return main + " " + type;
};
