/**
 * Action creator
 */

//  编写常量，用于规范type
export const CHANGE_USER = "CHANGE_USER";

export function changeuser(username) {
  return {
    type: CHANGE_USER,
    payload: { username }
  };
}
export default {
  changeuser
};
