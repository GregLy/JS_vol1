let list = document.getElementById( 'list' ),
  add = document.getElementById( 'add' );
add.addEventListener( 'click', () => {
  const element = document.createElement( 'li' );
  const lengthLi = document.getElementsByTagName( 'li' );
  element.innerHTML = `item${  lengthLi.length}`;
  list.appendChild( element );
} );

