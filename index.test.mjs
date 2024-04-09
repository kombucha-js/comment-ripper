
import assert from  'node:assert/strict' ;
import { test, describe, it, before, after }  from  'node:test' ;
import fs from 'fs';
import { rip_comments, rip_directives } from './index.mjs';


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







