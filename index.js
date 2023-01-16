import * as cssText from "bundle-text:./index.css";
import * as cssModuleClasses from "./index.module.css";
import * as cssModuleText from "bundle-text:./index.module.css";

import * as scssText from "bundle-text:./index.scss";
import * as scssModuleClasses from "./index.module.scss";
import * as scssModuleText from "bundle-text:./index.module.scss";

console.log(`CSS text (type: ${typeof cssText}):\n`, cssText);
console.log(
  `CSS module classes (type: ${typeof cssModuleClasses}):\n`,
  cssModuleClasses
);
console.log(
  `CSS module text (type: ${typeof cssModuleText}):\n`,
  cssModuleText
);

console.log(`SCSS text (type: ${typeof scssText}):\n`, scssText);
console.log(
  `SCSS module classes (type: ${typeof scssModuleClasses}):\n`,
  scssModuleClasses
);
console.log(
  `SCSS module text (type: ${typeof scssModuleText}):\n`,
  scssModuleText
);
