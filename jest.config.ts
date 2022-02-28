const path = require('path');

module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  rootDir: '',
  moduleFileExtensions: ['ts', 'js'],
  transform: {
    '.*\\.(j|t)s$': 'ts-jest',
  },
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    '^~~/(.*)$': '<rootDir>/$1',
  },
  testPathIgnorePatterns: ['node_modules', 'dist', '/__tests__/interface.ts$'],
  // extensionsToTreatAsEsm: [".ts"],
  // 将 `ts-jest` 的配置注入到运行时的全局变量中
  // globals: {
  //   'ts-jest': {
  //     // 是否使用 babel 配置来转译
  //     babelConfig: true,
  //     // 编译 Typescript 所依赖的配置
  //     tsConfig: '<rootDir>/tsconfig.json',
  //     // 是否启用报告诊断，这里是不启用
  //     diagnostics: false,
  //   },
  // },
};
