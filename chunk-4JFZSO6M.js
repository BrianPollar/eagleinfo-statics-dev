import {
  Validators
} from "./chunk-H6XV6YF3.js";

// projects/shared-lib/src/lib/validators/pattern.ts
function patternWithMessage(regex, message) {
  return (control) => {
    const patternValidator = Validators.pattern(regex);
    const error = patternValidator(control);
    if (error) {
      return { customPattern: message };
    }
    return null;
  };
}

export {
  patternWithMessage
};
//# sourceMappingURL=chunk-4JFZSO6M.js.map
