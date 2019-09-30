function solve(radius, height) {
    let s = Math.sqrt((radius * radius) + (height * height));
    let area = Math.PI * radius * radius + Math.PI * radius * s;
    let volume = (1 / 3) * Math.PI * (radius * radius) * height;
    console.log(`volume = ${volume.toFixed(4)}`);
    console.log(`area = ${area.toFixed(4)}`);
}

solve(100, 200);