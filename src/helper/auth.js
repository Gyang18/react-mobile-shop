/**
 * @Description: user auth
 * @author Gyang18
 * @date 2019/9/21
 */

const TokenKey = 'token';

function getToken() {
  return window.localStorage.getItem(TokenKey) || null;
}
function setToken(key) {
  if (!key) {
    throw Error('Token not passed in');
  }
  window.localStorage.setItem(TokenKey, key);
}
function removeToken() {
  window.localStorage.removeItem(TokenKey);
}

export {
  getToken,
  setToken,
  removeToken,
};
