const getAddedValue = (highest, divide) => {
    let addedValue = 0;
    if (highest <= 10) {
        if (divide === Infinity || divide > 10) {
            addedValue = 9;
        } else if (divide >= 6.6666666666666667) {
            addedValue = 8;
        } else if (divide >= 4) {
            addedValue = 8;
        } else if (divide >= 3) {
            addedValue = 7;
        } else if (divide >= 2.5) {
            addedValue = 6;
        } else if (divide >= 2) {
            addedValue = 5;
        } else if (divide >= 1.6666666666666667) {
            addedValue = 4.25;
        } else if (divide >= 1.4285714285714286) {
            addedValue = 3.5;
        } else if (divide >= 1.25) {
            addedValue = 2.5;
        } else if (divide >= 0.5) {
            addedValue = 1;
        }
    } else {
        if (divide === Infinity || divide >= 6.6666666666666667) {
            addedValue = 9;
        } else if (divide >= 4) {
            addedValue = 8;
        } else if (divide >= 3) {
            addedValue = 7;
        } else if (divide > 2.5) {
            addedValue = 6.5;
        } else if (divide > 2) {
            addedValue = 6;
        } else if (divide === 2) {
            addedValue = 5.5;
        } else if (divide >= 1.7857142857142858) {
            addedValue = 5.35;
        } else if (divide >= 1.6666666666666667) {
            addedValue = 5;
        } else if (divide >= 1.4492753623188406) {
            addedValue = 4;
        } else if (divide >= 1.25) {
            addedValue = 3.15;
        } else if (divide >= 1.11) {
            addedValue = 2.7;
        } else if (divide >= 1) {
            addedValue = 2;
        }
    }

    return addedValue;
};

export default getAddedValue;
