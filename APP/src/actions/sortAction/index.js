/**
 * Action creator
 */

//  编写常量，用于规范type
export const UPDATE_SORT = 'UPDATE_SORT'

export function updateSort(data){
    return {
        type:UPDATE_SORT,
		payload : data
    }
}


export default {
    updateSort
}