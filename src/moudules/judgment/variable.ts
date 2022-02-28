import { TOSTRING_OBJECT } from '@/data/judgment';

/**
 * 将变量转换为 [Object *]
 * @param value
 * @returns
 */
const typeToString = (value: any): String => Object.prototype.toString.call(value);

/**
 * 是否为对象
 * isObject({}) => true
 * isObject(null | undefined | function) => false
 * @param value
 * @returns
 */
export const isObject = (value: Object): Boolean => {
  return value != null && typeToString(value) === TOSTRING_OBJECT;
}