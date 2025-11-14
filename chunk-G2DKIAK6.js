// projects/shared-lib/src/lib/utils/miscfns.ts
var markFormGroupTouched = (formGroup, instance) => {
  Object.values(formGroup.controls).forEach((control) => {
    control.markAsTouched();
    control.markAsDirty();
    if (control.controls && instance) {
    }
  });
};
var scrollToTop = (windowService) => {
  windowService.doc.body.scrollTop = windowService.doc.documentElement.scrollTop = 0;
};

export {
  markFormGroupTouched,
  scrollToTop
};
//# sourceMappingURL=chunk-G2DKIAK6.js.map
