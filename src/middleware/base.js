/**
 * @Description: base routing middleware
 * @author Gyang18
 * @date 2020/5/12
*/
import { getToken } from '@/helper/auth';
/**
 * middleware params
 * @param currentRoute { Object } current route
 * @param cuurentProps { Object }  current component props
 */
export default function baseMiddleware(currentRoute, cuurentProps) {
  if (!currentRoute) {
    return;
  }
  const { history } = cuurentProps;
  const { meta } = currentRoute.route;
  // set page title
  window.document.title = meta.title || 'yang-shop';
  // login auth
  if (!meta.auth) {
    return;
  }
  const token = getToken();
  if (token) {
    console.log('进入页面，获取数据');
  } else {
    history.push('/blank/login');
  }
}
