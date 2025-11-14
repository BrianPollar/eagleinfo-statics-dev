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

// ../../biz-nest/packages/auth/client/lib/esm/defines/refresh-token.define.js
init_esm();

// ../../biz-nest/packages/auth/client/lib/esm/auth-client.js
var AuthClient = class _AuthClient {
  /**
   * Creates an instance of {@link AuthClient} with environment validation.
   *
   * @param config - Configuration passed to the underlying {@link EhttpController}.
   * @param socialCallUrls - Optional social login URLs (Google/Facebook).
   * @throws {@link BizNestClientError} If configuration is invalid.
   */
  constructor(config, socialCallUrls) {
    if (!config || typeof config !== "object") {
      throw new BizNestClientError("config must be a valid object");
    }
    FrontendLogger.debug("AuthClient initialized");
    _AuthClient.http = new EhttpController(config);
    _AuthClient.localSocialCallUrls = socialCallUrls;
  }
  /**
   * Provides the initialized HTTP controller.
   *
   * @returns The singleton {@link EhttpController} instance.
   * @throws {@link BizNestClientError} If the client has not been initialized via constructor.
   */
  static get ehttp() {
    if (!_AuthClient.http) {
      throw new BizNestClientError("HTTP client not initialized. Call new AuthClient.");
    }
    return _AuthClient.http;
  }
  /**
  * Provides configured social login endpoints.
  *
  * @returns Social OAuth entrypoints for Google and Facebook.
  * @throws {@link BizNestClientError} If social URLs were not provided at construction.
  */
  static get socialCallUrls() {
    if (!_AuthClient.localSocialCallUrls) {
      throw new BizNestClientError("Social call URLs not provided at construction..");
    }
    return _AuthClient.localSocialCallUrls;
  }
};

// ../../biz-nest/packages/auth/client/lib/esm/defines/refresh-token.define.js
var RefreshToken = class _RefreshToken extends DatabaseAuto {
  /**
   * Constructs an instance of {@link RefreshToken}.
   *
   * @param data - The refresh-token data used to initialize the instance.
   */
  constructor(data) {
    super(data);
    this.user = data.user;
    this.token = data.token;
    this.expiresAt = new Date(data.expiresAt);
    this.userAgent = data.userAgent;
    this.ipAddress = data.ipAddress;
    this.isRevoked = data.isRevoked;
    this.replacedByToken = data.replacedByToken;
    this.tokenScope = data.tokenScope;
    this.tokenDefaultDays = data.tokenDefaultDays;
    this.userInfo = data.userInfo;
  }
  /**
   * Retrieves all refresh tokens with pagination support.
   *
   * @param offset - The starting point for pagination. Defaults to `0`.
   * @param limit - The number of items to retrieve. Defaults to `20`.
   * @returns A promise that resolves to the total count and an array of
   * {@link RefreshToken} instances.
   */
  static getAll(offset = 0, limit = 20) {
    return __async(this, null, function* () {
      const query = new URLSearchParams({
        offset: offset.toString(),
        limit: limit.toString()
      }).toString();
      const observer$ = AuthClient.ehttp.makeGet(`${_RefreshToken.baseUrl}?${query}`);
      const refreshTokens = yield lastValueFrom(observer$);
      return {
        count: refreshTokens.count,
        dataArr: refreshTokens.data.map((val) => new _RefreshToken(val))
      };
    });
  }
  /**
   * Filters refresh tokens based on the provided filter properties.
   *
   * @param filter - The filter criteria for retrieving refresh tokens.
   * @returns A promise that resolves to the total count and an array of
   * {@link RefreshToken} instances that match the filter.
   */
  static filterAll(filter) {
    return __async(this, null, function* () {
      const observer$ = AuthClient.ehttp.makePost(`${_RefreshToken.baseUrl}/filter`, filter);
      const refreshTokens = yield lastValueFrom(observer$);
      return {
        count: refreshTokens.count,
        dataArr: refreshTokens.data.map((val) => new _RefreshToken(val))
      };
    });
  }
  /**
   * Retrieves a single refresh token by resource identifier.
   *
   * @param resourceId - The unique identifier for the refresh token to retrieve.
   * @returns A promise that resolves to the {@link RefreshToken} instance.
   */
  static getOne(resourceId) {
    return __async(this, null, function* () {
      const observer$ = AuthClient.ehttp.makeGet(`${_RefreshToken.baseUrl}/${resourceId}`);
      const refreshToken = yield lastValueFrom(observer$);
      return new _RefreshToken(refreshToken);
    });
  }
  /**
   * Removes multiple refresh tokens based on the provided criteria.
   *
   * @param payload - The criteria for deleting multiple refresh tokens.
   * @returns A promise that resolves to the bulk delete operation result.
   */
  static bulkDelete(payload) {
    const observer$ = AuthClient.ehttp.makePost(`${_RefreshToken.baseUrl}/bulk-delete`, payload);
    return lastValueFrom(observer$);
  }
  /**
   * Revokes the current refresh token instance.
   *
   * @returns A promise that resolves to the delete operation result, or `null`.
   */
  revoke() {
    const observer$ = AuthClient.ehttp.makePost(`${_RefreshToken.baseUrl}/revoke`, { _id: this._id });
    return lastValueFrom(observer$);
  }
  /**
   * Removes the current refresh token instance.
   *
   * @returns A promise that resolves to the delete operation result, or `null`.
   */
  remove() {
    const observer$ = AuthClient.ehttp.makeDelete(`${_RefreshToken.baseUrl}/${this._id}`);
    return lastValueFrom(observer$);
  }
};
RefreshToken.baseUrl = "/refresh-token";

// ../../biz-nest/packages/auth/client/lib/esm/defines/user-ip.define.js
init_esm();
var UserIp = class _UserIp extends DatabaseAuto {
  /**
   * Constructs an instance of {@link UserIp}.
   *
   * @param data - The user IP data used to initialize the instance.
   */
  constructor(data) {
    super(data);
    this.user = data.user;
    this.greenIps = data.greenIps;
    this.redIps = data.redIps;
    this.unverifiedIps = data.unverifiedIps;
    this.blocked = data.blocked;
  }
  /**
   * Retrieves analytics related to user IP data.
   *
   * @param filter - Filter criteria to compute analytics on a subset of records.
   * @returns A promise that resolves to the computed user IP analytics.
   */
  static getUserIpAnalytics(filter) {
    const observer$ = AuthClient.ehttp.makePost(`${_UserIp.baseUrl}/analytics`, filter);
    return lastValueFrom(observer$);
  }
  /**
   * Retrieves all user IPs with pagination support.
   *
   * @param offset - The starting point for pagination. Defaults to `0`.
   * @param limit - The number of items to retrieve. Defaults to `20`.
   * @returns A promise that resolves to the total count and an array of
   * {@link UserIp} instances.
   */
  static getAll(offset = 0, limit = 20) {
    return __async(this, null, function* () {
      const query = new URLSearchParams({
        offset: offset.toString(),
        limit: limit.toString()
      }).toString();
      const observer$ = AuthClient.ehttp.makeGet(`${_UserIp.baseUrl}?${query}`);
      const userIps = yield lastValueFrom(observer$);
      return {
        count: userIps.count,
        dataArr: userIps.data.map((val) => new _UserIp(val))
      };
    });
  }
  /**
   * Filters user IPs based on the provided filter properties.
   *
   * @param filter - The filter criteria for retrieving user IP records.
   * @returns A promise that resolves to the total count and an array of
   * {@link UserIp} instances matching the filter.
   */
  static filterAll(filter) {
    return __async(this, null, function* () {
      const observer$ = AuthClient.ehttp.makePost(`${_UserIp.baseUrl}/filter`, filter);
      const userIps = yield lastValueFrom(observer$);
      return {
        count: userIps.count,
        dataArr: userIps.data.map((val) => new _UserIp(val))
      };
    });
  }
  /**
   * Retrieves a single user IP record by resource identifier.
   *
   * @param resourceId - The unique identifier for the user IP record to retrieve.
   * @returns A promise that resolves to the {@link UserIp} instance.
   */
  static getOne(resourceId) {
    return __async(this, null, function* () {
      const observer$ = AuthClient.ehttp.makeGet(`${_UserIp.baseUrl}/${resourceId}`);
      const userip = yield lastValueFrom(observer$);
      return new _UserIp(userip);
    });
  }
  /**
   * Removes multiple user IP records based on the provided criteria.
   *
   * @param payload - The criteria for deleting multiple user IPs.
   * @returns A promise that resolves to the bulk delete operation result.
   */
  static bulkDelete(payload) {
    const observer$ = AuthClient.ehttp.makePost(`${_UserIp.baseUrl}/bulk-delete`, payload);
    return lastValueFrom(observer$);
  }
  /**
   * Updates the current user IP record with the provided data.
   *
   * @param payload - The fields to update on this user IP record.
   * @returns A promise that resolves to the updated {@link UserIp} instance.
   */
  update(payload) {
    return __async(this, null, function* () {
      const observer$ = AuthClient.ehttp.makePut(`${_UserIp.baseUrl}/${this._id}`, payload);
      return new _UserIp(yield lastValueFrom(observer$));
    });
  }
  /**
   * Removes the current user IP record.
   *
   * @returns A promise that resolves to the delete operation result, or `null`.
   */
  remove() {
    const observer$ = AuthClient.ehttp.makeDelete(`${_UserIp.baseUrl}/${this._id}`);
    return lastValueFrom(observer$);
  }
};
UserIp.baseUrl = "/user-ip";

// ../../biz-nest/packages/auth/client/lib/esm/defines/user-login-attempt.define.js
init_esm();
var UserLoginAttempt = class _UserLoginAttempt extends DatabaseAuto {
  /**
   * Constructs an instance of {@link UserLoginAttempt}.
   *
   * @param data - The login-attempt data used to initialize the instance.
   */
  constructor(data) {
    super(data);
    this.user = data.user;
    this.ip = data.ip;
    this.successful = data.successful;
  }
  /**
   * Retrieves all login attempts with pagination support.
   *
   * @param offset - The starting point for pagination. Defaults to `0`.
   * @param limit - The number of items to retrieve. Defaults to `20`.
   * @returns A promise that resolves to the total count and an array of
   * {@link UserLoginAttempt} instances.
   */
  static getAll(offset = 0, limit = 20) {
    return __async(this, null, function* () {
      const query = new URLSearchParams({
        offset: offset.toString(),
        limit: limit.toString()
      }).toString();
      const observer$ = AuthClient.ehttp.makeGet(`${_UserLoginAttempt.baseUrl}?${query}`);
      const loginAttempts = yield lastValueFrom(observer$);
      return {
        count: loginAttempts.count,
        dataArr: loginAttempts.data.map((val) => new _UserLoginAttempt(val))
      };
    });
  }
  /**
   * Filters login attempts based on the provided filter properties.
   *
   * @param filter - The filter criteria for retrieving login attempts.
   * @returns A promise that resolves to the total count and an array of
   * {@link UserLoginAttempt} instances that match the filter.
   */
  static filterAll(filter) {
    return __async(this, null, function* () {
      const observer$ = AuthClient.ehttp.makePost(`${_UserLoginAttempt.baseUrl}/filter`, filter);
      const loginAttempts = yield lastValueFrom(observer$);
      return {
        count: loginAttempts.count,
        dataArr: loginAttempts.data.map((val) => new _UserLoginAttempt(val))
      };
    });
  }
  /**
   * Retrieves a single login attempt by resource identifier.
   *
   * @param resourceId - The unique identifier for the login attempt to retrieve.
   * @returns A promise that resolves to the {@link UserLoginAttempt} instance.
   */
  static getOne(resourceId) {
    return __async(this, null, function* () {
      const observer$ = AuthClient.ehttp.makeGet(`${_UserLoginAttempt.baseUrl}/${resourceId}`);
      const loginAttempt = yield lastValueFrom(observer$);
      return new _UserLoginAttempt(loginAttempt);
    });
  }
  /**
   * Removes multiple login attempts based on the provided criteria.
   *
   * @param payload - The criteria for deleting multiple login attempts.
   * @returns A promise that resolves to the bulk delete operation result.
   */
  static bulkDelete(payload) {
    const observer$ = AuthClient.ehttp.makePost(`${_UserLoginAttempt.baseUrl}/bulk-delete`, payload);
    return lastValueFrom(observer$);
  }
  /**
   * Removes the current login attempt.
   *
   * @returns A promise that resolves to the delete operation result, or `null`.
   */
  remove() {
    const observer$ = AuthClient.ehttp.makeDelete(`${_UserLoginAttempt.baseUrl}/${this._id}`);
    return lastValueFrom(observer$);
  }
};
UserLoginAttempt.baseUrl = "/login-attempt";

// ../../biz-nest/packages/auth/client/lib/esm/defines/user-suspicious-activity.define.js
init_esm();
var UserSuspiciousActivity = class _UserSuspiciousActivity extends DatabaseAuto {
  /**
   * Constructs an instance of {@link UserSuspiciousActivity}.
   *
   * @param data - The suspicious-activity data used to initialize the instance.
   */
  constructor(data) {
    super(data);
    this.user = data.user;
    this.ip = data.ip;
    this.reason = data.reason;
  }
  /**
   * Retrieves all suspicious activity items with pagination support.
   *
   * @param offset - The starting point for pagination. Defaults to `0`.
   * @param limit - The number of items to retrieve. Defaults to `20`.
   * @returns A promise that resolves to the total count and an array of
   * {@link UserSuspiciousActivity} instances.
   */
  static getAll(offset = 0, limit = 20) {
    return __async(this, null, function* () {
      const query = new URLSearchParams({
        offset: offset.toString(),
        limit: limit.toString()
      }).toString();
      const observer$ = AuthClient.ehttp.makeGet(`${_UserSuspiciousActivity.baseUrl}?${query}`);
      const suspiciousActivities = yield lastValueFrom(observer$);
      return {
        count: suspiciousActivities.count,
        dataArr: suspiciousActivities.data.map((val) => new _UserSuspiciousActivity(val))
      };
    });
  }
  /**
   * Filters suspicious activity based on the provided filter properties.
   *
   * @param filter - The filter criteria for retrieving suspicious activity.
   * @returns A promise that resolves to the total count and an array of
   * {@link UserSuspiciousActivity} instances matching the filter.
   */
  static filterAll(filter) {
    return __async(this, null, function* () {
      const observer$ = AuthClient.ehttp.makePost(`${_UserSuspiciousActivity.baseUrl}/filter`, filter);
      const suspiciousActivities = yield lastValueFrom(observer$);
      return {
        count: suspiciousActivities.count,
        dataArr: suspiciousActivities.data.map((val) => new _UserSuspiciousActivity(val))
      };
    });
  }
  /**
   * Retrieves a single suspicious activity item by resource identifier.
   *
   * @param resourceId - The unique identifier for the suspicious activity to retrieve.
   * @returns A promise that resolves to the {@link UserSuspiciousActivity} instance.
   */
  static getOne(resourceId) {
    return __async(this, null, function* () {
      const observer$ = AuthClient.ehttp.makeGet(`${_UserSuspiciousActivity.baseUrl}/${resourceId}`);
      const suspiciousActivity = yield lastValueFrom(observer$);
      return new _UserSuspiciousActivity(suspiciousActivity);
    });
  }
  /**
   * Removes multiple suspicious activity items based on the provided criteria.
   *
   * @param payload - The criteria for deleting multiple suspicious activity items.
   * @returns A promise that resolves to the bulk delete operation result.
   */
  static bulkDelete(payload) {
    const observer$ = AuthClient.ehttp.makePost(`${_UserSuspiciousActivity.baseUrl}/bulk-delete`, payload);
    return lastValueFrom(observer$);
  }
  /**
   * Removes the current suspicious activity item.
   *
   * @returns A promise that resolves to the delete operation result, or `null`.
   */
  remove() {
    const observer$ = AuthClient.ehttp.makeDelete(`${_UserSuspiciousActivity.baseUrl}/${this._id}`);
    return lastValueFrom(observer$);
  }
};
UserSuspiciousActivity.baseUrl = "/suspicious-activity";

// ../../biz-nest/packages/auth/client/lib/esm/defines/user.define.js
init_esm();
var User = class _User extends DatabaseAuto {
  /**
   * Constructs a {@link User} instance from provided data after basic validation.
   *
   * Ensures at least one contact method exists and validates common fields.
   *
   * @param data - The user data to initialize the model with.
   * @throws {@link BizNestClientValidationError} If required fields are invalid.
   */
  constructor(data) {
    validateData(data, {
      urId: {
        validate: (v) => typeof v === "string" && v.trim().length > 0,
        message: "User ID must be a non-empty string"
      },
      email: {
        required: false,
        validate: (v) => v === void 0 || typeof v === "string" && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v),
        message: "Invalid email format"
      },
      phone: {
        required: false,
        validate: (v) => typeof v === "string" && v.trim().length > 0,
        message: "Phone must be a non-empty string"
      },
      verified: {
        required: false,
        validate: (v) => typeof v === "boolean",
        message: "Verified must be a boolean"
      }
    });
    super(data);
    this.urId = data.urId;
    this.firstName = data.firstName;
    this.lastName = data.lastName;
    this.email = data.email;
    this.profilePicture = data.profilePicture;
    this.profileCoverPicture = data.profileCoverPicture;
    this.phone = data.phone;
    this.verified = data.verified || false;
    this.socialAuthFrameworks = data.socialAuthFrameworks;
    this.phoneVerificationMeta = data.phoneVerificationMeta;
    this.emailVerificationMeta = data.emailVerificationMeta;
    this.recoveryPhoneNumbers = data.recoveryPhoneNumbers;
    this.recoveryEmails = data.recoveryEmails;
    this.phoneCode = data.phoneCode;
    this.twoFaConfig = data.twoFaConfig;
    this.preferredLoginMethod = data.preferredLoginMethod;
  }
  /**
   * The user's displayable name (first and last concatenated).
   */
  get names() {
    return `${this.firstName} ${this.lastName}`.trim();
  }
  /**
   * The user's full display name (alias of {@link User.names}).
   */
  get fullNames() {
    return `${this.firstName} ${this.lastName}`.trim();
  }
  /**
   * Retrieves all users with pagination.
   *
   * @param offset - The starting point for the list of users. Defaults to `0`.
   * @param limit - The maximum number of users to retrieve. Defaults to `20`.
   * @returns A promise that resolves to an object containing the count and an
   * array of {@link User} instances.
   */
  static getAll(offset = 0, limit = 20) {
    return __async(this, null, function* () {
      const query = new URLSearchParams({
        offset: offset.toString(),
        limit: limit.toString()
      }).toString();
      const observer$ = AuthClient.ehttp.makeGet(`${_User.baseUrl}?${query}`);
      const users = yield lastValueFrom(observer$);
      return {
        count: users.count,
        dataArr: users.data.map((val) => new _User(val))
      };
    });
  }
  /**
   * Filters users based on provided criteria.
   *
   * @param filter - The filter criteria for retrieving users.
   * @returns A promise that resolves to an object containing the count and an
   * array of {@link User} instances.
   */
  static filterAll(filter) {
    return __async(this, null, function* () {
      const observer$ = AuthClient.ehttp.makePost(`${_User.baseUrl}/filter`, filter);
      const users = yield lastValueFrom(observer$);
      return {
        count: users.count,
        dataArr: users.data.map((val) => new _User(val))
      };
    });
  }
  /**
   * Retrieves a single user by ID.
   *
   * @param resourceId - The unique identifier of the user.
   * @returns A promise that resolves to the {@link User} instance.
   */
  static getOne(resourceId) {
    return __async(this, null, function* () {
      const observer$ = AuthClient.ehttp.makeGet(`${_User.baseUrl}/${resourceId}`);
      return new _User(yield lastValueFrom(observer$));
    });
  }
  /**
   * Updates a user by identifier with the provided payload.
   *
   * @param _id - The user identifier to update.
   * @param payload - The update request body.
   * @returns A promise that resolves to the updated {@link User} instance.
   */
  static updateOne(_id, payload) {
    return __async(this, null, function* () {
      const observer$ = AuthClient.ehttp.makePut(`${_User.baseUrl}/${_id}`, payload);
      return new _User(yield lastValueFrom(observer$));
    });
  }
  /**
   * Updates the current user's profile with the provided payload.
   *
   * @param payload - The update request body.
   * @returns A promise that resolves to the updated {@link User} instance.
   */
  updateProfile(payload) {
    return __async(this, null, function* () {
      const observer$ = AuthClient.ehttp.makePut(`${_User.baseUrl}/${this._id}`, payload);
      return new _User(yield lastValueFrom(observer$));
    });
  }
  /**
   * Uploads a new profile picture for the current user instance.
   *
   * @param file - The image file to upload.
   * @returns An observable that emits the updated user DTO.
   */
  uploadProfilePicture(file) {
    return AuthClient.ehttp.uploadFiles([file], `${_User.baseUrl}/upload-profile-picture`, { _id: this._id });
  }
  /**
   * Uploads a new profile cover picture for the current user instance.
   *
   * @param file - The image file to upload.
   * @returns An observable that emits the updated user DTO.
   */
  uploadProfileCoverPicture(file) {
    return AuthClient.ehttp.uploadFiles([file], `${_User.baseUrl}/upload-profile-cover-picture`, { _id: this._id });
  }
  /**
   * Removes images associated with the current user instance.
   *
   * @param fileIds - The image identifiers to remove.
   * @returns A promise that resolves to the updated {@link User} instance.
   */
  deleteImages(fileIds) {
    return __async(this, null, function* () {
      const observer$ = AuthClient.ehttp.makePost(`${_User.baseUrl}/delete-images`, { fileIds, _id: this._id });
      return new _User(yield lastValueFrom(observer$));
    });
  }
};
User.baseUrl = "/user";

// ../../biz-nest/packages/auth/client/lib/esm/utils/auth.js
init_esm();
var meAdmin = () => {
  FrontendLogger.debug("AuthService:meAdmin::");
  const observer$ = AuthClient.ehttp.makeGet("/admin/me");
  return lastValueFrom(observer$);
};
var adminLogin = ({ email, phone }) => {
  FrontendLogger.debug("AuthService:adminLogin");
  const observer$ = AuthClient.ehttp.makePost("/admin/login", { email, phone });
  return lastValueFrom(observer$);
};
var adminVerify = ({ verificationToken, rememberMeDays }) => {
  FrontendLogger.debug("AuthService:adminVerify");
  const observer$ = AuthClient.ehttp.makePost("/admin/verify", { verificationToken, rememberMeDays });
  return lastValueFrom(observer$);
};
var getUserPermissions = (userId) => {
  const observer$ = AuthClient.ehttp.makeGet(`/auth/get-user-permissions/${userId}`);
  return lastValueFrom(observer$);
};
var updateUserPermissions = (userId, payload) => {
  const observer$ = AuthClient.ehttp.makePut(`/auth/update-user-permissions/${userId}`, payload);
  return lastValueFrom(observer$);
};
var logout = () => {
  const observer$ = AuthClient.ehttp.makePost("/auth/logout", {});
  return lastValueFrom(observer$);
};
var wsLogin = () => {
  const observer$ = AuthClient.ehttp.makePost("/auth/ws-login", {});
  return lastValueFrom(observer$);
};
var wsRefresh = () => {
  const observer$ = AuthClient.ehttp.makePost("/auth/ws-refresh", {});
  return lastValueFrom(observer$);
};

export {
  AuthClient,
  RefreshToken,
  UserIp,
  UserLoginAttempt,
  UserSuspiciousActivity,
  User,
  meAdmin,
  adminLogin,
  adminVerify,
  getUserPermissions,
  updateUserPermissions,
  logout,
  wsLogin,
  wsRefresh
};
//# sourceMappingURL=chunk-H7TI67RE.js.map
