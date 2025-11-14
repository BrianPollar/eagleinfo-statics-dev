import {
  scrollToTop
} from "./chunk-G2DKIAK6.js";
import {
  EagleInfoClientError,
  FrontendLogger,
  runSubscriptionsForSharedUse
} from "./chunk-MC4HAW4O.js";
import {
  __async,
  __spreadProps,
  __spreadValues
} from "./chunk-GEHWEZZY.js";

// projects/shared-lib/src/lib/defines/composition/list.ts
var splitFullUserName = (name) => {
  const nameParts = name.split(" ");
  const result = { firstName: "", lastName: "" };
  if (nameParts.length > 1) {
    result.firstName = nameParts[0];
    result.lastName = nameParts.slice(1).join(" ");
  } else {
    result.firstName = name;
  }
  return result;
};
var ListComposeProps = class {
  constructor() {
    this.dataArr = [];
    this.dataArrOrig = [];
    this.selections = [];
    this.isDeletingMany = false;
    this.offset = 0;
    this.limit = 10;
    this.filtersOpen = false;
    this.filterProps = {};
    this.count = 0;
    this.loading = false;
    this.currentIndex = 1;
  }
};
var ListCompose = class extends ListComposeProps {
  constructor(staticCaller, eventbus, windowService, toastr, customCaller = {
    method: "filterAll",
    extrasFilters: []
  }) {
    super();
    this.staticCaller = staticCaller;
    this.eventbus = eventbus;
    this.windowService = windowService;
    this.toastr = toastr;
    this.customCaller = customCaller;
    this.eventNamespace = `list-${Math.random().toString(36).substr(2, 9)}`;
    this.init();
  }
  onFilterProps(filter, elemId) {
    this.limit = 10;
    this.offset = 0;
    this.filterProps = filter;
    this.getDataArr();
    const elem = document.getElementById(elemId || "table-content");
    elem?.scrollIntoView();
  }
  init() {
    const handlers = {
      [`${this.eventNamespace}-deleteOne`]: (data) => {
        this.deleteOne(data);
      },
      [`${this.eventNamespace}-deleteMany`]: (data) => {
        this.deleteMany(data);
      },
      fromDate: (data) => {
        this.fromDate = data;
      },
      toDate: (data) => {
        this.toDate = data;
      },
      viewActivity: (data) => {
        this.header = data.header;
      },
      setFilterProps: (data) => {
        if (data && typeof data === "object") {
          this.filterProps = data;
        }
        this.eventbus.generalEvent$.next(null);
      }
    };
    const { cleanup } = runSubscriptionsForSharedUse(this.eventbus, handlers);
    this.cleanup = cleanup;
  }
  createdAtNotif(event) {
    if (event) {
      this.compareBy([
        {
          field: "createdAt",
          fieldValue: event,
          operator: "gte"
        }
      ]);
    } else {
      this.removePropCompareVal("createdAt");
      this.offset = 0;
      this.getDataArr();
    }
  }
  createdAtNotifRange(event) {
    if (event) {
      this.compareBy([
        {
          field: "createdAt",
          fieldValue: event[0],
          operator: "gte"
        },
        {
          field: "createdAt",
          fieldValue: event[1],
          operator: "lte"
        }
      ]);
    } else {
      this.removePropCompareVal("createdAt");
      this.offset = 0;
      this.getDataArr();
    }
  }
  openExtras(id) {
    if (this.currentActivePopupId === id) {
      this.currentActivePopupId = "";
      return;
    }
    this.currentActivePopupId = id;
  }
  resetPagination() {
    this.offset = 0;
  }
  getDataArr() {
    return __async(this, null, function* () {
      try {
        this.loading = true;
        this.getErr = "";
        if (!this.staticCaller[this.customCaller.method]) {
          return yield this.getDataArrAlt();
        }
        const filterProps = Object.assign({}, this.filterProps) || {};
        filterProps.limit = this.limit;
        filterProps.offset = this.offset;
        FrontendLogger.debug("filterProps ", filterProps);
        const { count, dataArr } = yield this.staticCaller[this.customCaller.method](filterProps, ...this.customCaller.extrasFilters);
        FrontendLogger.debug("filterAll dataArr, ", dataArr);
        this.count = count;
        this.offset += this.limit;
        this.dataArrOrig = dataArr;
        this.dataArr = this.dataArrOrig.slice();
        setTimeout(() => {
          FrontendLogger.debug("DEBUG IT", 9999999);
          this.eventbus.generalEvent$.next({ type: "makeList", data: true });
        }, 300);
        this.makeShowing();
      } catch (error) {
        FrontendLogger.error(error);
        this.getErr = error.code;
      } finally {
        this.loading = false;
      }
    });
  }
  getDataArrAlt() {
    return __async(this, null, function* () {
      try {
        if (!this.staticCaller.getAll) {
          this.loading = false;
          throw new EagleInfoClientError("filterAll and getAll is undefined, no way to cllect dataArr from server");
        }
        this.loading = true;
        this.getErr = "";
        const { count, dataArr } = yield this.staticCaller.getAll(this.offset, this.limit);
        FrontendLogger.debug("getAll dataArr, ", dataArr);
        this.offset += this.limit;
        this.count = count;
        this.dataArrOrig = dataArr;
        this.loading = false;
        this.dataArr = this.dataArrOrig;
        setTimeout(() => {
          this.eventbus.generalEvent$.next({ type: "makeList", data: true });
        }, 300);
        this.makeShowing();
      } catch (error) {
        FrontendLogger.error(error);
        this.getErr = error.code;
      } finally {
        this.loading = false;
      }
    });
  }
  toggleFiltersOpen() {
    this.filtersOpen = !this.filtersOpen;
  }
  makeShowing() {
    if (this.count < this.offset) {
      this.showingUpper = this.count;
      this.showingLower = this.offset - this.limit + 1;
    } else if (this.count >= this.offset) {
      this.showingUpper = this.offset;
      this.showingLower = this.offset - this.limit + 1;
    }
  }
  paginateItems(ev) {
    FrontendLogger.debug("paginateItems, ", ev);
    this.offset = ev.offset;
    this.limit = ev.limit;
    this.currentIndex = ev.currentIndex || 1;
    this.getDataArr();
    scrollToTop(this.windowService);
  }
  deleteOne(classInstance) {
    return __async(this, null, function* () {
      if (!classInstance) {
        throw new EagleInfoClientError("_id is undefined");
      }
      if (classInstance && classInstance.remove) {
        yield classInstance.remove();
        this.eventbus.generalEvent$.next({ type: this.eventNamespace + "-deleteOneCompleted", data: true });
        this.offset -= this.limit;
        this.deleteModalRef?.hide();
        this.getDataArr();
      }
    });
  }
  deleteMany(selections) {
    return __async(this, null, function* () {
      if (this.isDeletingMany) {
        this.toastr.error("Wait for the current delete process to complete", "Error");
        return;
      }
      if (!selections.length) {
        this.toastr.error("No selections", "Error");
        return;
      }
      if (!Array.isArray(selections)) {
        FrontendLogger.error("selections is not an array");
        return;
      }
      if (!this.staticCaller.bulkDelete) {
        this.toastr.error("removeMany is undefined", "Error");
        return;
      }
      try {
        this.isDeletingMany = true;
        yield this.staticCaller.bulkDelete({ _ids: selections });
        this.eventbus.generalEvent$.next({ type: this.eventNamespace + "-deleteManyCompleted", data: true });
        this.selections = [];
        this.offset -= this.limit;
        this.getDataArr();
        this.deleteModalRef?.hide();
      } catch (error) {
        FrontendLogger.error("Compose:deleteMany:: - err ", error);
      } finally {
        this.isDeletingMany = false;
      }
    });
  }
  toggleSelection(_ids) {
    _ids.forEach((_id) => {
      if (this.selections.includes(_id)) {
        const index = this.selections.findIndex((val) => val === _id);
        this.selections.splice(index, 1);
      } else {
        this.selections.push(_id);
      }
    });
    if (_ids.length === 0) {
      this.selections = [];
    }
  }
  sortBy(prop, direction) {
    this.offset = 0;
    this.filterProps = __spreadProps(__spreadValues({}, this.filterProps), {
      propSort: {
        [prop]: direction
      }
    });
    FrontendLogger.debug("sortBy filterProps", this.filterProps);
    this.getDataArr();
  }
  compareBy(comparefilters) {
    FrontendLogger.debug("on compare");
    for (const filter of comparefilters) {
      if (filter.fieldValue === null || filter.fieldValue === void 0 || !filter.operator) {
        this.removePropCompareVal(filter.field);
      }
    }
    const newFilters = comparefilters.filter((val) => val.fieldValue !== null && val.fieldValue !== void 0 && val.operator);
    this.offset = 0;
    this.filterProps = __spreadProps(__spreadValues({}, this.filterProps), {
      comparisonFilter: [
        ...newFilters
      ]
    });
    this.getDataArr();
  }
  filterBy(filterProp) {
    const keys = Object.keys(filterProp);
    FrontendLogger.debug("KEYS ", keys);
    for (const key of keys) {
      if (!filterProp[key]) {
        this.removePropFilterVal(key);
        delete filterProp[key];
      }
    }
    this.offset = 0;
    this.filterProps = __spreadProps(__spreadValues({}, this.filterProps), {
      propFilter: __spreadValues({}, filterProp)
    });
    FrontendLogger.debug("filterProps ", this.filterProps);
    this.getDataArr();
  }
  searchBy(searchFilter) {
    const keys = Object.keys(searchFilter);
    FrontendLogger.debug("SEARCH KEYS ", keys);
    for (const key of keys) {
      if (!searchFilter[key]) {
        this.removePropFilterVal(key);
        delete searchFilter[key];
      }
    }
    this.offset = 0;
    this.filterProps = __spreadProps(__spreadValues({}, this.filterProps), {
      searchFilter: __spreadValues({}, searchFilter)
    });
    this.getDataArr();
  }
  removeSearchFilterVal(key) {
    FrontendLogger.debug("remove with ", key);
    if (this.filterProps.searchFilter && this.filterProps.searchFilter[key]) {
      delete this.filterProps.searchFilter[key];
    }
  }
  removePropFilterVal(key) {
    FrontendLogger.debug("remove with ", key);
    if (this.filterProps.propFilter && this.filterProps.propFilter[key]) {
      delete this.filterProps.propFilter[key];
    }
  }
  removePropCompareVal(key) {
    FrontendLogger.debug("remove with ", key);
    if (this.filterProps.comparisonFilter && this.filterProps.comparisonFilter.length > 0) {
      this.filterProps.comparisonFilter = this.filterProps.comparisonFilter.filter((val) => val.field !== key);
    }
  }
  searchByName(name, parentField) {
    const fullName = splitFullUserName(name);
    if (!parentField) {
      this.searchBy(fullName);
    } else {
      this.searchBy({
        [`${parentField}.firstName`]: fullName.firstName,
        [`${parentField}.lastName`]: fullName.lastName
      });
    }
  }
};
var ListComposeAdminPanel = class extends ListCompose {
  constructor() {
    super(...arguments);
    this.showModal = false;
    this.modalTitle = "";
    this.modalMsg = "";
    this.modalCancelButton = true;
    this.modalCancelText = "Cancel";
    this.modalConfirmText = "Confirm";
    this.modalConfirmButton = true;
    this.multipleDelete = false;
  }
  openDeleteOneModal(id, modalTitle, modalMsg, extraData) {
    this.showModal = true;
    this.modalTitle = modalTitle;
    this.modalMsg = modalMsg;
    this.modalConfirmButton = true;
    this.modalCancelButton = true;
    this.modalConfirmText = "Confirm";
    this.modalCancelText = "Cancel";
    this.extraData = extraData;
    this.multipleDelete = false;
  }
  openDeleteManyModal(modalTitle, modalMsg) {
    this.showModal = true;
    this.modalTitle = modalTitle;
    this.modalMsg = modalMsg;
    this.modalConfirmButton = true;
    this.modalCancelButton = true;
    this.modalConfirmText = "Confirm";
    this.modalCancelText = "Cancel";
    this.extraData = this.selections;
    this.multipleDelete = true;
  }
  toggleModal() {
    this.showModal = !this.showModal;
  }
  onModalDeleteConfirm(ev) {
    if (!ev) {
      return;
    }
    if (!this.extraData) {
      FrontendLogger.error("extraData is undefined");
      return;
    }
    if (this.multipleDelete) {
      this.deleteMany(this.extraData);
    } else {
      this.deleteOne(this.extraData);
    }
  }
  ckeckUncheckAllLists() {
    this.selections = this.selections.length > 0 ? [] : this.dataArr.map((val) => val._id);
  }
};

export {
  ListComposeAdminPanel
};
//# sourceMappingURL=chunk-ANHFC4IG.js.map
