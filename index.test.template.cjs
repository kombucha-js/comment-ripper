params: body
'use strict';

const  util   = require( 'node:util' );
const  assert = require( 'node:assert/strict' );
const  { test, describe, it, before, after }  = require( 'node:test' );
const fs = require( 'fs' );
const { rip_comments, rip_directives } = require( './index.cjs' );


<%=body %>
