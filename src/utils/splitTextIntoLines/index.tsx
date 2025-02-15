function splitTextIntoLines(text: string, lines: number): string[] {
    if (lines <= 0) {
        throw new Error("Lines must be greater than 0");
    }

    const lengthPerLine = Math.ceil(text.length / lines);
    const result: string[] = [];

    for (let i = 0; i < text.length; i += lengthPerLine) {
        result.push(text.slice(i, i + lengthPerLine));
    }

    return result;
}

export default splitTextIntoLines;
