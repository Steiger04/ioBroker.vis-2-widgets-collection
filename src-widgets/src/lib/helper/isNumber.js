function isNumber(x) {
    if (x == null || `${x}`.trim() === '' || Number.isNaN(+x)) {
        return false;
    }

    return true;
}

export default isNumber;
