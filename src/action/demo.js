const model = require("$model");

/**
 * Action demo.
 * @module action/demo
 */

/**
 * assign query and body
 * @param {Object} query get查询参数.
 * @param {Object} body post查询参数.
 * @return {Promise}
 */
exports.assign = (query, body) => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(Object.assign({}, query, body));
        }, 1000);
    });
};
