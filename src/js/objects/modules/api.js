/**
 * Main Game API object.
 * 
 * @param {type} params
 * @class {city_builder.api}
 * @returns {city_builder.__constructor}
 */
city_builder.api = function (params) {

	/**
	 * Reference to the core object.
	 * 
	 * @type {city_builder.game}
	 */
	this.core = null;

	/**
	 * Module version.
	 * 
	 * @private
	 * @type {String}
	 */
	this.version = '0.2.0';

	/**
	 * Sign in a visitor using the specified data.
	 * 
	 * @param {Object} data
	 * @returns {city_builder.api@call;request}
	 */
	this.login = function (data) {
		return this.request({
			url: 'login',
			data: data
		});
	};

	/**
	 * Return the module version.
	 * 
	 * @public
	 * @returns {String}
	 */
	this.get_version = function () {
		return this.version;
	};

	/**
	 * Sign out the currently logged in user.
	 * 
	 * @returns {city_builder.api@call;request}
	 */
	this.logout = function () {
		return this.request({
			url: 'logout'
		});
	};

	/**
	 * Get information about the application and API version.
	 *
	 * @returns {city_builder.api@call;request}
	 */
	this.api_version = function() {
		return this.request({
			url: 'version'
		});
	};

	/**
	 * Get information about the currently logged in user's city.
	 *
	 * @returns {city_builder.api@call;request}
	 */
	this.city_info = function() {
		return this.request({
			url: 'city'
		});
	};

	/**
	 * Perform a heartbeat request and get data about it.
	 *
	 * @returns {city_builder.api@call;request}
	 */
	this.heartbeat = function() {
		return this.request({
			url: 'heartbeat'
		});
	};

	/**
	 * Register a visitor using the specified data.
	 * 
	 * @param {Object} data
	 * @returns {city_builder.api@call;request}
	 */
	this.register = function (data) {
		return this.request({
			url: 'register',
			data: data
		});
	};

	/**
	 * Export the specified data to the API endpoint.
	 * 
	 * @param {Object} data
	 * @returns {city_builder.api@call;request}
	 */
	this.do_export = function (data) {
		return this.request({
			url: 'export',
			data: data
		});
	};

	/**
	 * Import the specified data from the API endpoint.
	 * 
	 * @param {Object} data
	 * @returns {city_builder.api@call;request}
	 */
	this.do_import = function (data) {
		return this.request({
			url: 'import',
			data: data
		});
	};

	/**
	 * Internal function for performing an API AJAX request.
	 * 
	 * @param {Object} data
	 * @returns {city_builder.api}
	 */
	this._request = function (data) {
		$.ajax({
			type: (typeof data.requestType !== 'undefined') ? data.requestType : 'POST',
			dataType: typeof data.dataType !== 'undefined' ? data.dataType : 'jsonp',
			xhrFields: {
				withCredentials: (typeof data.auth === 'undefined' || data.auth === true) ? true : false
			},
			crossDomain: true,
			data: data.data,
			url: city_builder.API_VERSION_URL + data.url,
			async: (typeof data.async === 'undefined' || data.async == true) ? true : false,
			success: data.success instanceof Function ? data.success : function () {
				// TODO
			},
			error: data.error instanceof Function ? data.error : function () {
				// TODO
			}
		});
		return this;
	};

	/**
	 * Object constructor.
	 * 
	 * @private
	 * @returns {city_builder.event}
	 * @param {Object} params
	 */
	this.__constructor = function (params) {
		this.core = params.core;
		return this;
	};

	// Fire up the constructor
	return this.__constructor(params);
};