/**
 * @Description: Random production string
 * @author Gyang18
 * @date 2020/5/12
*/

/**
 * @param length { Number } str length
 * @returns {string}
 */
export default function (length) {
  const data = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F',
    'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y',
    'Z', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r',
    's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  let nums = '';
  for (let i = 0; i < length; i += 1) {
    const r = parseInt(Math.random() * 61, 10);
    nums += data[r];
  }
  return nums;
}
