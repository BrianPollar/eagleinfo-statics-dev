import {
  BizNestClientError,
  DatabaseAuto,
  EhttpController,
  FrontendLogger,
  validateData
} from "./chunk-MC4HAW4O.js";
import {
  init_esm,
  lastValueFrom
} from "./chunk-4EXDEK5V.js";
import {
  __async
} from "./chunk-GEHWEZZY.js";

// ../../biz-nest/packages/notification/client/lib/esm/defines/notif-api-key.define.js
init_esm();

// ../../biz-nest/packages/notification/client/lib/esm/notif-client.js
var NotificationClient = class _NotificationClient {
  /**
   * Creates an instance of NotificationClient with comprehensive environment validation.
   * @param {IehttpControllerConfig} config - Configuration object for the Axios HTTP client
   * @throws {BizNestClientError} If the provided configuration is invalid
   * @example
   * const client = new NotificationClient({
   *   baseURL: 'https://api.example.com',
   *   timeout: 5000
   * });
   */
  constructor(config) {
    if (!config || typeof config !== "object") {
      throw new BizNestClientError("config must be a valid object");
    }
    FrontendLogger.debug("NotificationClient initialized");
    _NotificationClient.http = new EhttpController(config);
  }
  /**
   * Gets the singleton instance of the HTTP controller.
   * @static
   * @returns {EhttpController} The HTTP controller instance
   * @throws {BizNestClientError} If the client has not been initialized
   * @example
   * // After initializing NotificationClient
   * const httpClient = NotificationClient.ehttp;
   * const response = await httpClient.get('/notifications');
   */
  static get ehttp() {
    if (!_NotificationClient.http) {
      throw new BizNestClientError(`HTTP client not initialized. 
        Call new NotificationClient() with proper configuration first.`);
    }
    return _NotificationClient.http;
  }
};

// ../../biz-nest/packages/notification/client/lib/esm/defines/notif-api-key.define.js
var NotificationApiKey = class _NotificationApiKey extends DatabaseAuto {
  /**
   * Creates a new NotificationApiKey instance
   * @param notifApiKey - The notification API key data
   */
  constructor(notifApiKey) {
    super(notifApiKey);
    this.apiKey = notifApiKey.apiKey;
    this.enabled = notifApiKey.enabled;
    this.expiresAt = notifApiKey.expiresAt;
    this.owner = notifApiKey.owner;
    this.maxEmails = notifApiKey.maxEmails;
    this.maxSms = notifApiKey.maxSms;
    this.usedEmails = notifApiKey.usedEmails;
    this.usedSms = notifApiKey.usedSms;
    this.lastUsedAt = notifApiKey.lastUsedAt;
  }
  /**
   * Retrieves a paginated list of notification API keys
   * @param {number} offset - The number of items to skip before starting to collect the result set
   * @param {number} limit - The maximum number of items to return
   * @returns {Promise<{count: number, dataArr: NotificationApiKey[]}>}
   * An object containing the total count and array of API keys
   * @throws {Error} If the API request fails
   * @example
   * // Get first 10 API keys
   * const { count, dataArr } = await NotificationApiKey.getAll(0, 10);
   */
  static getAll(offset, limit) {
    return __async(this, null, function* () {
      const query = new URLSearchParams({
        offset: offset.toString(),
        limit: limit.toString()
      }).toString();
      const observer$ = NotificationClient.ehttp.makeGet(`${_NotificationApiKey.baseUrl}?${query}`);
      const response = yield lastValueFrom(observer$);
      return {
        count: response.count,
        dataArr: response.data.map((val) => new _NotificationApiKey(val))
      };
    });
  }
  /**
   * Retrieves notification API keys based on filter criteria
   * @param {IfilterProps} filter - The filter criteria to apply
   * @returns {Promise<{count: number, dataArr: NotificationApiKey[]}>} Filtered API keys with count
   * @throws {Error} If the API request fails
   * @example
   * // Get all enabled API keys
   * const { dataArr } = await NotificationApiKey.filterAll({
   *   conditions: { enabled: true }
   * });
   */
  static filterAll(filter) {
    return __async(this, null, function* () {
      const observer$ = NotificationClient.ehttp.makePost(`${_NotificationApiKey.baseUrl}/filter`, { filter });
      const response = yield lastValueFrom(observer$);
      return {
        count: response.count,
        dataArr: response.data.map((val) => new _NotificationApiKey(val))
      };
    });
  }
  /**
   * Retrieves a single notification API key by ID
   * @param {string} resourceId - The ID of the API key to retrieve
   * @returns {Promise<NotificationApiKey>} The requested API key
   * @throws {Error} If the API key is not found or request fails
   * @example
   * const apiKey = await NotificationApiKey.getOne('123abc');
   */
  static getOne(resourceId) {
    return __async(this, null, function* () {
      const observer$ = NotificationClient.ehttp.makeGet(`${_NotificationApiKey.baseUrl}/${resourceId}`);
      const response = yield lastValueFrom(observer$);
      return new _NotificationApiKey(response);
    });
  }
  /**
   * Creates a new notification API key
   * @param {Omit<InotifApiKey, '_id' | 'createdAt' | 'updatedAt'
   * | 'apiKey' | 'usedEmails' | 'usedSms'>} payload - The API key configuration
   * @returns {Promise<NotificationApiKey>} The newly created API key
   * @throws {Error} If the API request fails or validation fails
   * @example
   * const newKey = await NotificationApiKey.add({
   *   enabled: true,
   *   owner: 'user123',
   *   maxEmails: 1000,
   *   maxSms: 500
   * });
   */
  static add(payload) {
    return __async(this, null, function* () {
      const observer$ = NotificationClient.ehttp.makePost(`${_NotificationApiKey.baseUrl}`, payload);
      return new _NotificationApiKey(yield lastValueFrom(observer$));
    });
  }
  /**
   * Updates the current API key's configuration
   * @param {Omit<Partial<InotifApiKey>, '_id' | 'createdAt' |
   * 'updatedAt' | 'apiKey' | 'usedEmails' | 'usedSms'>} payload - The fields to update
   * @returns {Promise<NotificationApiKey>} The updated API key
   * @throws {Error} If the update fails or API key doesn't exist
   * @example
   * // Disable an API key
   * await apiKeyInstance.update({ enabled: false });
   */
  update(payload) {
    return __async(this, null, function* () {
      const observer$ = NotificationClient.ehttp.makePut(`${_NotificationApiKey.baseUrl}/${this._id}`, payload);
      return new _NotificationApiKey(yield lastValueFrom(observer$));
    });
  }
  /**
   * Deletes the current API key
   * @returns {Promise<IdeleteOneResponse | null>} The result of the delete operation
   * @throws {Error} If the deletion fails
   * @example
   * const result = await apiKeyInstance.remove();
   * if (result?.success) {
   *   console.log('API key deleted successfully');
   * }
   */
  remove() {
    return __async(this, null, function* () {
      const observer$ = NotificationClient.ehttp.makeDelete(`${_NotificationApiKey.baseUrl}/${this._id}`);
      const response = yield lastValueFrom(observer$);
      return response;
    });
  }
  /**
   * Checks if the API key has expired
   * @returns {boolean} True if the API key has expired, false otherwise
   */
  isExpired() {
    return this.expiresAt ? new Date(this.expiresAt) < /* @__PURE__ */ new Date() : false;
  }
  /**
   * Checks if the API key can send an email
   * @returns {boolean} True if the API key can send an email, false otherwise
   */
  canSendEmail() {
    if (!this.enabled || this.isExpired()) {
      return false;
    }
    return !this.maxEmails || (this.usedEmails || 0) < this.maxEmails;
  }
};
NotificationApiKey.baseUrl = "/notification-api-key";

// ../../biz-nest/packages/notification/client/lib/esm/defines/notif-stn-user.define.js
init_esm();
var NotifStnUser = class _NotifStnUser {
  /**
   * Creates a new NotifStnUser instance with validated data
   * @param {InotifStnUser} notifStnUser - The notification settings data
   * @throws {Error} If the notification settings data is invalid
   */
  constructor(notifStnUser) {
    const validChannels = ["email", "sms", "push", "web"];
    validateData(notifStnUser, {
      _id: {
        validate: (v) => typeof v === "string" && v.trim().length > 0,
        message: "Unique identifier must be a non-empty string"
      },
      company: {
        required: false,
        validate: (v) => v === void 0 || typeof v === "string" && v.trim().length > 0,
        message: "Company ID must be a non-empty string if provided"
      },
      disableAll: {
        required: false,
        validate: (v) => v === void 0 || typeof v === "boolean",
        message: "Disable all must be a boolean if provided"
      },
      allow: {
        validate: (v) => Array.isArray(v) && v.every((setting) => typeof setting === "object" && setting !== null),
        message: "Allow must be an array of notification settings"
      },
      frequency: {
        required: false,
        validate: (v) => v === void 0 || typeof v === "number" && v >= 0,
        message: "Frequency must be a non-negative number if provided"
      },
      channels: {
        required: false,
        validate: (v) => v === void 0 || Array.isArray(v) && v.every((channel) => typeof channel === "string" && validChannels.includes(channel)),
        message: `Channels must be an array of valid notification channels: ${validChannels.join(", ")}`
      },
      timezone: {
        required: false,
        validate: (v) => v === void 0 || typeof v === "string",
        message: "Timezone must be a string if provided"
      },
      language: {
        required: false,
        validate: (v) => v === void 0 || typeof v === "string",
        message: "Language must be a string if provided"
      },
      isActive: {
        required: false,
        validate: (v) => v === void 0 || typeof v === "boolean",
        message: "Is active must be a boolean if provided"
      }
    });
    this._id = notifStnUser._id;
    this.authUser = notifStnUser.authUser;
    this.company = notifStnUser.company;
    this.disableAll = notifStnUser.disableAll;
    this.allow = notifStnUser.allow;
    this.frequency = notifStnUser.frequency;
    this.channels = notifStnUser.channels;
    this.timezone = notifStnUser.timezone;
    this.language = notifStnUser.language;
    this.isActive = notifStnUser.isActive;
    this.targetId = notifStnUser.targetId;
  }
  /**
   * Retrieves a paginated list of notification settings for users
   * @param {number} offset - The number of items to skip before starting to collect the result set
   * @param {number} limit - The maximum number of items to return
   * @returns {Promise<NotifStnUser[]>} Array of notification settings
   * @throws {Error} If the API request fails
   * @example
   * // Get first 10 notification settings
   * const settings = await NotifStnUser.getAll(0, 10);
   */
  static getAll(offset, limit) {
    return __async(this, null, function* () {
      const query = new URLSearchParams({
        offset: offset.toString(),
        limit: limit.toString()
      }).toString();
      const observer$ = NotificationClient.ehttp.makeGet(`${_NotifStnUser.baseUrl}?${query}`);
      const response = yield lastValueFrom(observer$);
      return response.map((item) => new _NotifStnUser(item));
    });
  }
  /**
   * Retrieves notification settings based on filter criteria
   * @param {IfilterProps} filter - The filter criteria to apply
   * @returns {Promise<NotifStnUser[]>} Filtered notification settings
   * @throws {Error} If the API request fails
   * @example
   * // Get notification settings for active users
   * const activeSettings = await NotifStnUser.filterAll({
   *   conditions: { isActive: true }
   * });
   */
  static filterAll(filter) {
    return __async(this, null, function* () {
      const observer$ = NotificationClient.ehttp.makePost(`${_NotifStnUser.baseUrl}/filter`, { filter });
      const response = yield lastValueFrom(observer$);
      return response.map((item) => new _NotifStnUser(item));
    });
  }
  /**
   * Retrieves notification settings for a specific user
   * @param {string} resourceId - The ID of the notification settings to retrieve
   * @returns {Promise<NotifStnUser>} The requested notification settings
   * @throws {Error} If the settings are not found or request fails
   * @example
   * const userSettings = await NotifStnUser.getOne('user123');
   */
  static getOne(resourceId) {
    return __async(this, null, function* () {
      const observer$ = NotificationClient.ehttp.makeGet(`${_NotifStnUser.baseUrl}/${resourceId}`);
      const response = yield lastValueFrom(observer$);
      return new _NotifStnUser(response);
    });
  }
  /**
   * Creates new notification settings for a user
   * @param {TnotifStnUserRequest<true>} payload - The notification settings to create
   * @returns {Promise<NotifStnUser>} The created notification settings
   * @throws {Error} If creation fails or validation fails
   * @example
   * const newSettings = await NotifStnUser.add({
   *   user: 'user123',
   *   allow: [],
   *   channels: ['email', 'push'],
   *   isActive: true
   * });
   */
  static add(payload) {
    return __async(this, null, function* () {
      const observer$ = NotificationClient.ehttp.makePost(`${_NotifStnUser.baseUrl}`, payload);
      return new _NotifStnUser(yield lastValueFrom(observer$));
    });
  }
  /**
   * Updates the current notification settings
   * @param {TnotifStnUserRequest} payload - The fields to update
   * @returns {Promise<NotifStnUser>} The updated notification settings
   * @throws {Error} If the update fails or settings don't exist
   * @example
   * // Disable email notifications
   * await userSettings.update({
   *   channels: ['push', 'sms']
   * });
   */
  update(payload) {
    return __async(this, null, function* () {
      const observer$ = NotificationClient.ehttp.makePut(`${_NotifStnUser.baseUrl}/${this._id}`, payload);
      return new _NotifStnUser(yield lastValueFrom(observer$));
    });
  }
};
NotifStnUser.baseUrl = "/notification-setting-user";

// ../../biz-nest/packages/notification/client/lib/esm/defines/notification.define.js
init_esm();
var NotificationMain = class _NotificationMain extends DatabaseAuto {
  /**
   * Creates a new NotificationMain instance with validated data
   * @param {Imainnotification} data - The notification data
   * @throws {Error} If the notification data is invalid
   */
  constructor(data) {
    validateData(data, {
      title: {
        validate: (v) => typeof v === "string" && v.trim().length > 0,
        message: "Title must be a non-empty string"
      },
      body: {
        validate: (v) => typeof v === "string" && v.trim().length > 0,
        message: "Body must be a non-empty string"
      },
      icon: {
        required: false,
        validate: (v) => v === void 0 || typeof v === "string",
        message: "Icon must be a string if provided"
      },
      notifType: {
        required: false,
        validate: (v) => v === void 0 || typeof v === "string",
        message: "Notification type must be a string if provided"
      },
      notifInvokerId: {
        required: false,
        validate: (v) => v === void 0 || typeof v === "string" && v.trim().length > 0,
        message: "Notification invoker ID must be a non-empty string if provided"
      },
      expireOn: {
        required: false,
        validate: (v) => {
          if (v !== void 0) {
            const expireDate = new Date(v);
            return !isNaN(expireDate.getTime()) && expireDate > /* @__PURE__ */ new Date();
          }
          return true;
        },
        message: "Expiration date must be a valid future date if provided"
      }
    });
    super(data);
    this.authUser = data.authUser;
    this.targetId = data.targetId;
    this.targetType = data.targetType;
    this.title = data.title;
    this.body = data.body;
    this.icon = data.icon;
    this.notifType = data.notifType;
    this.notifInvokerId = data.notifInvokerId;
    this.viewed = data.viewed;
    this.username = data.username;
    this.email = data.email;
    this.phone = data.phone;
    this.phoneCode = data.phoneCode;
    this.extraDetails = data.extraDetails;
  }
  /**
   * Retrieves a paginated list of notifications
   * @param {number} [offset=0] - The number of items to skip before starting to collect the result set
   * @param {number} [limit=20] - The maximum number of items to return
   * @param {string} [targetId] - The ID of the target to filter notifications for
   * @returns {Promise<{count: number, dataArr: NotificationMain[]}>} Object containing count and array of notifications
   * @throws {Error} If the API request fails
   * @example
   * // Get first 20 notifications
   * const { count, dataArr } = await NotificationMain.getAll();
   */
  static getAll(offset = 0, limit = 20, targetId) {
    return __async(this, null, function* () {
      let query = new URLSearchParams({
        offset: offset.toString(),
        limit: limit.toString()
      }).toString();
      if (targetId) {
        query += `&targetId=${targetId}`;
      }
      const observer$ = NotificationClient.ehttp.makeGet(`${_NotificationMain.baseUrl}?${query}`);
      const notifications = yield lastValueFrom(observer$);
      return {
        count: notifications.count,
        dataArr: notifications.data.map((val) => new _NotificationMain(val))
      };
    });
  }
  /**
   * Retrieves notifications based on filter criteria
   * @param {IfilterProps} filter - The filter criteria to apply
   * @returns {Promise<{count: number, dataArr: NotificationMain[]}>} Object containing count and filtered notifications
   * @throws {Error} If the API request fails
   * @example
   * // Get unread notifications
   * const { dataArr } = await NotificationMain.filterAll({
   *   conditions: { viewed: false }
   * });
   */
  static filterAll(filter) {
    return __async(this, null, function* () {
      const observer$ = NotificationClient.ehttp.makePost(`${_NotificationMain.baseUrl}/filter`, filter);
      const notifns = yield lastValueFrom(observer$);
      return {
        count: notifns.count,
        dataArr: notifns.data.map((val) => new _NotificationMain(val))
      };
    });
  }
  /**
   * Marks all notifications as read for the current user
   * @param {string} [targetId] - The ID of the target to mark notifications for
   * @returns {Promise<Isuccess>} Success status of the operation
   * @throws {Error} If the API request fails
   * @example
   * await NotificationMain.markAllAsRead();
   */
  static markAllAsRead(targetId) {
    const observer$ = NotificationClient.ehttp.makePost(`${_NotificationMain.baseUrl}/mark-all-read`, { targetId });
    return lastValueFrom(observer$);
  }
  /**
   * Gets the count of unviewed notifications for the current user
   * @param {string} [targetId] - The ID of the target to get unviewed notifications for
   * @returns {Promise<number>} Count of unviewed notifications
   * @throws {Error} If the API request fails
   * @example
   * const unreadCount = await NotificationMain.getUnviewedLength();
   */
  static getUnviewedLength(targetId) {
    const observer$ = NotificationClient.ehttp.makePost(`${_NotificationMain.baseUrl}/unviewed-length`, { targetId });
    return lastValueFrom(observer$);
  }
  /**
   * Marks the current notification as viewed
   * @returns {Promise<NotificationMain>} The updated notification instance
   * @throws {Error} If the update fails or notification doesn't exist
   * @example
   * const updatedNotification = await notificationInstance.updateViewed();
   */
  updateViewed() {
    return __async(this, null, function* () {
      const observer$ = NotificationClient.ehttp.makePost(`${_NotificationMain.baseUrl}/update-viewed`, { _id: this._id });
      return new _NotificationMain(yield lastValueFrom(observer$));
    });
  }
  /**
   * Checks if the notification has expired
   * @returns {boolean} True if the notification has expired, false otherwise
   */
  isExpired() {
    return this.expireOn ? new Date(this.expireOn) < /* @__PURE__ */ new Date() : false;
  }
};
NotificationMain.baseUrl = "/notification";

export {
  NotificationClient,
  NotificationApiKey
};
//# sourceMappingURL=chunk-DEKWU2RH.js.map
