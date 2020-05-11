function fullName(name) {
    if (!name) {
        return "";
    }

    const { first, middle, last } = name;

    let fullName = '';
    fullName += first ? first : "";
    fullName += first && last ? " " : "";
    fullName += last ? last : "";

    return fullName;
}

module.exports = fullName;
