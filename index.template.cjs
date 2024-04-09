params: body
'use strict';

function inspect(s) {
  return JSON.stringify( s, (k,v)=>typeof v === 'function' ? v.toString() : v, 2 );
}





<%=body %>


module.exports.rip_comments      = rip_comments;
module.exports.rip_directives    = rip_directives;
