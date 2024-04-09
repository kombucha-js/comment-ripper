'use strict';

const  util   = require( 'node:util' );
const  assert = require( 'node:assert/strict' );
const  { test, describe, it, before, after }  = require( 'node:test' );
const fs = require( 'fs' );
const { rip_comments, rip_directives } = require( './index.cjs' );





describe( 'test1', ()=>{
  it( 'as 1', ()=>{
    assert.throws( ()=> assert.fail('woo'));
  });

  it( 'as 2', ()=>{
    const s = fs.readFileSync( './source-code.mjs' ).toString();
    const result = rip_comments(s);
    console.log( result );
  });

  it( 'as 2', ()=>{
    const s = fs.readFileSync( './source-code.mjs' ).toString();
    const result =  rip_comments(s).map(s=>rip_directives(s)).flat() ;

    console.log( result );
  });
});







