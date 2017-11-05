let btn = document.getElementsByClassName( 'button' );
console.log( btn.length );

for ( let i = 0 ; i < btn.length ; i++ ){
  alert ( btn[ i ].innerText );
}

