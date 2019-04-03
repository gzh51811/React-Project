/**
 * Action creator
 */

//  编写常量，用于规范type
export const SHOW_MENUS = "SHOW_MENUS";
export const HIDE_MENUS = "HIDE_MENUS";
export const CHANGE_CURRENT = "CHANGE_CURRENT";

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
export default {
  showMenus,
  hideMenus,
  changecurrent
};
