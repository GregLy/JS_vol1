const a = 6;
const h = 6;

function getTriangleArea( a, h ) {
  if ( ( a  >= 0 ) || ( h >= 0 ) ) {
    console.log ( 'result higher then zero' );
  }   else if ( ( a  <= 0 ) && ( h <= 0) ) {
    console.log ( 'wrong data' );
  }
  function returnedValue {
  return ( a*h/2 );
  }
}

