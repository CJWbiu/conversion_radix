import { NUM_MAP } from './const';

function splitNums (
    value: string, 
    reverse = true
): number[] {
    let nums = value.split('')
        .map(str => {
            let num = NUM_MAP[str.toLocaleLowerCase()] || +str;
            return num;
        });

    return reverse ? nums.reverse() : nums;
}

function calcuIntParts (
    nums: number[], 
    base: number
): number {
    return nums.reduce((total, curr, index) => {
        return total += curr * Math.pow(base, index);
    }, 0);
}

function calcuDecimalParts (
    nums: number[], 
    base: number
): number {
    return nums.reduce((total, curr, index) => {
        return total += curr * Math.pow(base, -(index + 1));
    }, 0);
}

/**
 * 将任意进制转换为十进制
 * @param {number} originBase 
 * @param {string|number} value 
 * @returns {string}
 */
function conversionDecimal (
    originBase: number, 
    value: string | number
): string {
    let intParts: number[] = [];
    let decimalParts: number[] = [];
    let nums = String(value).split('.');

    intParts = splitNums(nums[0]);
    
    if (nums[1]) {
        decimalParts = splitNums(nums[1], false);
    }

    let result = calcuIntParts(intParts, originBase) + calcuDecimalParts(decimalParts, originBase);

    return result.toString();
}

/**
 * 将十进制转换成任意进制
 * @param {number} base 
 * @param {string|number} value 
 * @returns {string}
 */
function conversionDecimalToAny (base: number, value: string | number): string {
    return (+value).toString(base);
}

/**
 * 转换进制
 * @param {number} originBase 源进制
 * @param {number} targetBase 目标进制
 * @param {string|number} value 带转换的值
 * @returns {string}
 */
function conversionRadix (
    originBase: number, 
    targetBase: number, 
    value: string | number
): string {
    let decimal = conversionDecimal(originBase, value);

    if (targetBase === 10) {
        return decimal;
    }

    return conversionDecimalToAny(targetBase, decimal);
}

export { conversionRadix, conversionDecimal, conversionDecimalToAny };