import { array } from "./arrayAnalyze";
test('array operations',()=>{
    expect(array.length([1,2,3,4])).toBe(4)
    expect(array.average([2,4,6])).toBe(4)
    expect(array.max([1,2,3,4])).toBe(4)
    expect(array.min([1,2,3,4])).toBe(1)
})