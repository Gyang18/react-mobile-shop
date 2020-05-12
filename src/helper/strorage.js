/**
 * @Description: Method of operating local storage
 * @author Gyang18
 * @date 2020/5/12
*/

export function GET_KEY(key) {
  return JSON.parse(window.localStorage.getItem(key)) || null;
}
export function SET_KEY(key, data) {
  window.localStorage.setItem(key, JSON.stringify(data));
}
export function REMOVE_KEY(key) {
  window.localStorage.removeItem(key);
}
export function CLEAR() {
  window.localStorage.clear();
}
