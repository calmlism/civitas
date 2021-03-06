/**
 * Hero object.
 * 
 * @param {Object} params
 * @license GPL-3.0-or-later
 * @class hero
 * @returns {hero}
 */
class hero {

	/**
	 * Object constructor.
	 * 
	 * @private
	 * @constructor
	 * @returns {hero}
	 * @param {Object} params
	 */
	constructor (params) {
		this._core = params.core;
		this.name = params.name;
		this.description = params.description;
		return this;
	}

	/**
	 * Return a pointer to the game core.
	 * 
	 * @public
	 * @returns {game}
	 */
	core () {
		return this._core;
	}
}
