let list = document.getElementById( 'list' );
add.addEventListener( 'click', () => {
  let element = document.createElement( 'li' );
  element.innerHTML = 'item';
  let li = document.getElementsByTagName( 'li' );
  console.log( li.length );
  list.appendChild( element );
} );
