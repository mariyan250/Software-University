function solve(band, album, song) {
    let fullRotation = 2.5;
    let duration = band.length * album.length * song.length / 2;
    let rotations = Math.ceil(duration / fullRotation);

    console.log(`The plate was rotated ${rotations} times.`);
}