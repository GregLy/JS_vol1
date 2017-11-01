const a = 6;
const h = 6;

function getTriangleArea( a, h ) {
  if ( ( a  >= 0 ) && ( h >= 0 ) ) {
    const result = ( a * h / 2 );
    return result;
  } else if ( ( a  <= 0 ) && ( h <= 0 ) ) {
    console.log ( 'wrong data' );
  }
}

