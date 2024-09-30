function convertTo12HourClock(time) {
  const hours = time.slice(0, 2);
  const minutes = time.slice(-2);
  if (hours == 0) {
    return `12:${minutes} AM`;
  } else if (hours == 12) {
    return `12:${minutes} PM`;
  } else if (hours > 12) {
    return `${hours - 12}:${minutes} PM`;
  } else {
    return `${hours}:${minutes} AM`;
  }
}

// Hint: I recommend calling the function with an input of '12:05'
console.log(convertTo12HourClock("00:05"));