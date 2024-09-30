function rotateAngleByDegrees(initialAngle, rotation) {
  // Calculate the new angle
  let newAngle = initialAngle + (rotation % 360);
  if (newAngle >= 360) {
    newAngle -= 360;
  } else if (newAngle < 0) {
    newAngle += 360;
  }
  return newAngle;
}

console.log(rotateAngleByDegrees(90,-100));