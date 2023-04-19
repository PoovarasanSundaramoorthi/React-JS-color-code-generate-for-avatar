/**
 * Get Random Color Code
 *
 * @returns
 */
export function getColorCode() {
  let makeColorCode = "0123456789ABCDEF",
    code = "#";
  for (let count = 0; count < 6; count++) {
    code = code + makeColorCode[Math.floor(Math.random() * 16)];
  }

  return code;
}
