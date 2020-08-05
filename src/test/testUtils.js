import { ShallowWrapper } from "enzyme"

/**
 * Find elements by data-test attribute
 * @param {ShallowWrapper} wrapper 
 * @param {string} val 
 * @returns {ShallowWrapper}
 */
export const findByTestAttr = (wrapper, val) => {
    return wrapper.find(`[data-test="${val}"]`)
}
