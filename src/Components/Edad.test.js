import { mayorEdad } from "./Edad";

describe("mayorDeEdad", () => {
  test("devuelve true si la edad es mayor o igual a 18", () => {
    expect(mayorEdad(18)).toBe(true);
    expect(mayorEdad(25)).toBe(true);
  });

  test("devuelve false si la edad es menor a 18", () => {
    expect(mayorEdad(17)).toBe(false);
  });

  test("devuelve null si la edad es un número negativo", () => {
    expect(mayorEdad(-5)).toBe(null);
  });
});
