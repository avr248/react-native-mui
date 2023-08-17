export const getUniqueNestedKeys = (data) => {
    const keys = [];
    const traverseObject = (obj) => {
        for (const [key, value] of Object.entries(obj)) {
            if (typeof value === 'object') {
                traverseObject(value);
            }
            else {
                keys.push(key);
            }
        }
    };
    traverseObject(data);
    return [...new Set(keys)];
};
export const getMaxNestedLevel = (obj) => {
    let maxNestedLevel = 0;
    for (const key in obj) {
        if (typeof obj[key] === 'object') {
            const nestedLevel = getMaxNestedLevel(obj[key]) + 1;
            maxNestedLevel = Math.max(maxNestedLevel, nestedLevel);
        }
    }
    return maxNestedLevel;
};
