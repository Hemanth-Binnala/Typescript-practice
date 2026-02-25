/// For react we use <> for fragments and during arrow functions
// so to differenciate the generic type add trailing coma (,) after <T> as <T,>
const getRandomElement1 = (list) => {
    if (list.length === 0) {
        throw new Error("List cannot be empty");
    }
    const randIdx = Math.floor(Math.random() * list.length);
    return list[randIdx];
};
export {};
//# sourceMappingURL=demo.js.map