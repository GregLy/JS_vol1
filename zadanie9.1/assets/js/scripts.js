const a = 6;
const h = 6;
function getTriangleArea() {
  if ( ( a  >= 0 ) && ( h >= 0 ) ) {
    const result = ( a * h / 2 );
    return result;
  } else {
    console.log ( 'wrong data' );
  }
}

console.log( getTriangleArea( 10, 6 ) );

const triangle1Area = getTriangleArea( 10, 15 );
const triangle2Area = getTriangleArea( 5, 10 );
const triangle3Area = getTriangleArea( 15, 25 );
