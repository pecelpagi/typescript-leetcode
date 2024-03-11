type CacheData = {
    index: number;
    value: number;
};

function twoSum(nums: number[], target: number): number[] {
    let cache: { [key: number]: CacheData } = {}
    let results: number[] = [];

    for (let i: number = 0; i < nums.length; i++) {
        const val: number = nums[i];
        const cacheKey: number = val;

        if (cacheKey in cache) {
            const equalTarget = cache[cacheKey].value + val === target;

            if (equalTarget) {
                const firstIndex: number = cache[cacheKey].index;
                const lastIndex: number = i;
                results = [firstIndex, lastIndex];
                break;
            }
        } else {
            cache[target - val] = { index: i, value: val };
        }
    }

    return results;
};

export { twoSum }