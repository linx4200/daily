// 经常看到的 isolatedModules 配置是什么

// https://www.typescriptlang.org/tsconfig/#isolatedModules

// Ensure that each file can be safely transpiled without relying on other imports.

// While you can use TypeScript to produce JavaScript code from TypeScript code
// it’s also common to use other transpilers such as Babel to do this.
// However, other transpilers only operate on a single file at a time,
// which means they can’t apply code transforms that depend on understanding the full type system.

// 如果使用 Babel 转换 ts -> js, babel 是单个文件进行处理，不能完整理解整个项目的 系统性的 type declearion

// These limitations can cause runtime problems with some TypeScript features like const enums and namespaces.
// Setting the isolatedModules flag tells TypeScript to warn you if you write certain code that can’t be correctly interpreted by a single-file transpilation process.

// 用于 确保每个文件都可以单独被编译（比如用于 Babel、ESBuild 这些不支持跨文件分析的工具）。
// 它启用后，会限制一些只在 TypeScript 全局分析中才允许的用法。
// 它不会改变你的代码运行方式，也不会以其他任何方式影响 TypeScript 的类型检查或编译输出。