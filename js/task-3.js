function getElementWidth(content, padding, border) {
  // Функція для конвертації рядкових значень з одиницями у числа
  function parsePx(value) {
    return parseFloat(value); // перетворює рядок на число
  }
  
  // Перетворюємо значення параметрів у числа
  const contentWidth = parsePx(content);
  const paddingWidth = parsePx(padding);
  const borderWidth = parsePx(border);

  // Розраховуємо загальну ширину
  const totalWidth = contentWidth + 2 * paddingWidth + 2 * borderWidth;

  return totalWidth;
}
console.log(getElementWidth("50px", "8px", "4px")); // 74
console.log(getElementWidth("60px", "12px", "8.5px")); // 101
console.log(getElementWidth("200px", "0px", "0px")); // 200
