// Your code here
function moveDodgerLeft(){
  const leftCoordinateString = dodger.style.left.replace("px", "");
  const leftCoordinate = parseInt(leftCoordinateString, 10);

  if (leftCoordinate > 0){
    dodger.style.left = `${leftCoordinate - 1}px`;
  }
}

moveDodgerLeft();
moveDodgerRight();

function moveDodgerRight(){
  const leftCoordinateString = dodger.style.left.replace("px", "");
  const leftCoordinate = parseInt(leftCoordinateString, 10);

  if (leftCoordinate < 360){
    dodger.style.left = `${leftCoordinate + 1}px`;
  } 

}
