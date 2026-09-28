import { calculator } from "./calculator";


test ('to check our calculator',() => {
    expect(calculator.add(2,3)).toBe(5),
    expect(calculator.subtract(3,2)).toBe(1),
    expect(calculator.multiply(3,2)).toBe(6),
    expect(calculator.divide(3,3)).toBe(1)
})