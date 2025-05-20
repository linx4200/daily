// b-module.js
import { bear } from "./a-module.js"; // 引入其他模块的常量
console.log('[Module]', bear, 'is cute!'); // 引入后能正常读取
console.log('[Module]', horse, 'is cute!'); // 不引入则报错