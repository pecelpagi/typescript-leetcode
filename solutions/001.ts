function twoSum(nums: number[], target: number): number[] {
    let seen: { [key: number]: number } = {}
    let retval: number[] = [];

    for (let i: number = 0; i < nums.length; i++) {
        const diff: number = target - nums[i];
        if (diff in seen) {
            retval = [seen[diff], i];

            break;
        } else {
            seen[nums[i]] = i
        }
    }

    return retval;
};

export { twoSum }