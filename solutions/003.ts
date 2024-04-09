export function lengthOfLongestSubstring(s: string): number {
    const n: number = s.length;
    const charMap: { [key: string]: number } = {};
    let maxLength: number = 0;
    let startIndex: number = 0;

    for (let index = 0; index < n; index++) {
        let currentValue: string = s[index];

        if (!(currentValue in charMap) || (charMap[currentValue] < startIndex)) {
            charMap[currentValue] = index;
            maxLength = Math.max((index + 1) - startIndex, maxLength);
        } else {
            startIndex = charMap[currentValue] + 1;
            charMap[currentValue] = index;
        }
    }

    return maxLength;
};