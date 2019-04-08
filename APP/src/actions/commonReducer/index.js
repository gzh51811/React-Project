/**
 * Action creator
 */

//  编写常量，用于规范type
export const SHOW_MENUS = "SHOW_MENUS";
export const HIDE_MENUS = "HIDE_MENUS";
export const CHANGE_CURRENT = "CHANGE_CURRENT";
export const ROUTER_BACK = "ROUTER_BACK";

export function showMenus() {
  return {
    type: SHOW_MENUS
  };
}
export function hideMenus() {
  return {
    type: HIDE_MENUS
  };
}
export function changecurrent(current) {
  return {
    type: CHANGE_CURRENT,
    payload: { current }
  };
}
export function back(his) {
  return {
    type: ROUTER_BACK,
    payload: his
  };
}
export default {
  showMenus,
  hideMenus,
  changecurrent,
  back
};
