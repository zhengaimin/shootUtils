import { objectString } from '@/type/basic';

/**
 * 获取目录中的文件内容
 * @returns
 */
export function importAll(context: any, extRegExp = /\.js$/, keyRegExpCb = (key: string) => key, split = '') {
  console.log(context);
  const modules = {} as objectString;
  const replace = (str: string) => str.replace(/\.\//g, '').replace('/', split).replace(extRegExp, '');

  context.keys().forEach((key: string) => {
    const name = keyRegExpCb(replace(key));
    if (name) modules[name] = context(key).default ? context(key).default : context(key);
  });

  return modules;
}

export const noop = () => { };