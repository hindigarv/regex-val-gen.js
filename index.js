function isValidPattern(pattern) {
    return pattern.startsWith("^") && pattern.endsWith("$");
}

export function generateValuesFromRegex(pattern) {
    let index = 0;
    let words = [""];

    if (!isValidPattern(pattern)) {
        return [];
    }

    let getNextOptions = function() {
        let options = []
        let currOption = "";
        while (pattern[index] !== ')') {
            let ch = pattern[index]
            index++
            if (ch === '|') {
                options.push(currOption)
                currOption = ""
                continue
            }
            currOption += ch;
        }
        options.push(currOption)
        index++
        if (pattern[index] === '?') {
            options.push("")
            index++
        }
        return options
    }

    while (pattern[index] !== '$') {
        let ch = pattern[index]
        index++

        if (ch === '^') continue
        if (ch === '(') {
            let options = getNextOptions()
            if (options) {
                words = words
                    .flatMap(r => options.map(o => r + o) )
            }
            continue
        }
        words = words.map(w => w + ch)
    }

    return words
}
