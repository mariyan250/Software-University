function giftBoxCoverage(input) {
    let sizeOfSide = Number(input.shift());
    let sheetsOfPaper = Number(input.shift());
    let singleSheetCovers = Number(input.shift());

    let area = 6 * sizeOfSide * sizeOfSide
    let sheetsCover = 0;

    for (let i = 1; i <= sheetsOfPaper; i++) {
        if (i % 3 == 0) {
            sheetsCover += singleSheetCovers * 0.25;
        } else {
            sheetsCover += singleSheetCovers;
        }
    }

    let percent = (sheetsCover / area) * 100;
    console.log(`You can cover ${percent.toFixed(2)}% of the box.`);
}

giftBoxCoverage(['2.5', '32', '4.25']);