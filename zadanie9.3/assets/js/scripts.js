const text = 'Velociraptor is a genus of herbivorous ceratopsid dinosaur that first appeared during the late Maastrichtian stage of the late Cretaceous period.';
console.log ( text );

const dinosaur = 'Triceratops';
const toUpperCase = dinosaur.toUpperCase();
console.log ( toUpperCase );

const dino = 'Velociraptor is a genus of herbivorous ceratopsid dinosaur that first appeared during the late Maastrichtian stage of the late Cretaceous period.';
const newDino = dino.replace( 'Velociraptor', dinosaur );
const finDin = newDino.slice( 0, 72 );
console.log ( finDin );
