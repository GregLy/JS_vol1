function drawTree( repeatItems ) {
  for ( let i = 0 ; i < repeatItems ; i++ ) {
    let star = '';
    for ( let j = 0 ; j <= i ; j++ ) {
      star += '*';
    }
  }
  console.log( star );
}
