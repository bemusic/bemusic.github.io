
// :doc:
// This module exports the query string in browser.
//
// Example::
//
//    import query from 'bemuse/query'
//    alert(query.mode)

import querystring from 'querystring'
export default querystring.parse(location.search.replace(/^\?/, ''))
