/**
 * Action creator
 */

//  编写常量，用于规范type
export const UPDATE_SORT = 'UPDATE_SORT'

export function updateSort(){
    return {
        type:UPDATE_SORT
    }
}


export default {
    updateSort
}