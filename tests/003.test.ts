import { lengthOfLongestSubstring } from "../solutions/003";

describe('003 - Longest Substring Without Repeating Characters', function () {
    it("should return 1 when given input 'a'", function () {
        const retval = lengthOfLongestSubstring('a');

        expect(retval).toEqual(1);
    });

    it("should return 2 when given input 'ab'", function () {
        const retval = lengthOfLongestSubstring('ab');

        expect(retval).toEqual(2);
    });

    it("should return 2 when given input 'abb'", function () {
        const retval = lengthOfLongestSubstring('abb');

        expect(retval).toEqual(2);
    });

    it("should return 2 when given input 'abba'", function () {
        const retval = lengthOfLongestSubstring('abba');

        expect(retval).toEqual(2);
    });

    it("should return 3 when given input 'abbac'", function () {
        const retval = lengthOfLongestSubstring('abbac');

        expect(retval).toEqual(3);
    });

    it("should return 3 when given input 'abcabcbb'", function () {
        const retval = lengthOfLongestSubstring('abcabcbb');

        expect(retval).toEqual(3);
    });

    it("should return 1 when given input 'bbbbb'", function () {
        const retval = lengthOfLongestSubstring('bbbbb');

        expect(retval).toEqual(1);
    });

    it("should return 3 when given input 'pwwkew'", function () {
        const retval = lengthOfLongestSubstring('pwwkew');

        expect(retval).toEqual(3);
    });

    it("should return 3 when given input 'dvdf'", function () {
        const retval = lengthOfLongestSubstring('dvdf');

        expect(retval).toEqual(3);
    });
});