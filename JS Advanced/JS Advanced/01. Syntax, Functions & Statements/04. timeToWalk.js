function timeToWalk(steps, metersLength, speed) {
    let length = steps * metersLength;
    let totalRest = Math.floor((steps * metersLength) / 500) + 0.01;
    let time = (length / 1000) / speed * 60;
    let totalTimeInSeconds = (time + totalRest) * 60;
    let result = new Date(null, null, null, null, null, totalTimeInSeconds);
    console.log(result.toString().split(" ")[4]);
}