
function remove_leading_string_from_comment_block( comment_block ) {
  return comment_block.replace( /^\s*\*/mg ,'' );
}

export function rip_comments( source_code ) {
  const pat = /\/\*([\s\S]*?)\*\//g;
  let arr=null;
  const result=[];
  while ( (arr=pat.exec( source_code ))  ) {
    result.push( remove_leading_string_from_comment_block( arr[1] ) );
  }
  return result;
}

export function rip_directives( comment ) {
  const pat=/^(\s*#)(.*)/gm;
  let arr;
  const result = [];
  while ( arr=pat.exec( comment ) ) {
    result.push( arr[2] );
  }
  return result;
}

