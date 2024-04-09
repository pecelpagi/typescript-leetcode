import { twoSum } from "../solutions/001";

describe('001 - Two Sum', function () {
    it("should return [0, 1] when given input [3, 3] and 6", function () {
        const output = twoSum([3, 3], 6);
        expect(output).toStrictEqual([0, 1]);
    });

    it("should return [1, 2] when given input [3, 2, 4] and 6", function () {
        const output = twoSum([3, 2, 4], 6);
        expect(output).toStrictEqual([1, 2]);
    });

    it("should return [0, 1] when given input [2, 7, 11, 15] and 9", function () {
        const output = twoSum([2, 7, 11, 15], 9);
        expect(output).toStrictEqual([0, 1]);
    });
});