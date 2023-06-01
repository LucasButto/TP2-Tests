import { mayorEdad } from "./Edad";

describe("mayorDeEdad", () => {
  test("devuelve 'Eres mayor de edad' si la edad es mayor o igual a 18", () => {
    expect(mayorEdad(18)).toBe("Eres mayor de edad");
    expect(mayorEdad(25)).toBe("Eres mayor de edad");
  });

  test("devuelve 'Eres menor de edad' si la edad es menor a 18", () => {
    expect(mayorEdad(17)).toBe("Eres menor de edad");
  });

  test("devuelve 'No es una edad válida' si la edad es un número negativo", () => {
    expect(mayorEdad(-5)).toBe("No es una edad válida");
  });
});
