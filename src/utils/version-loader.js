// This module is quite special, as it is run in compile time.
// It fetches the current version from `package.json` and export the version!
//

let { version } = require('../../config/buildConfig')

module.exports = () => ({ code: 'module.exports=' + JSON.stringify(version) })
