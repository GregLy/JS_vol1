const femaleNames = [ 'Asia', 'Kasia', 'Ola', 'Jola' ];
const maleNames = [ 'Piotrek', 'Marek', 'Arek', 'Jarek' ];
const allNames = [];
const array = allNames.concat( femaleNames, maleNames );
console.log( array );

const test = [ 'Adam', 'Andrzej' ];
test.push( 'Hubert' );
console.log( test );

const newName = 'Marian';
if ( allNames.indexOf( newName ) === -1 ){
  allNames.push( newName );
  console.log( allNames );
}

