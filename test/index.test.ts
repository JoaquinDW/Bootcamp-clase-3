import { Clase, dobleNumero } from "../index"
import { it, describe, expect } from "vitest"

describe("Ejercicio 1", () => {
  it("dobleNumero debería devolver el doble del número ingresado", () => {
    expect(dobleNumero(2)).toBe(4)
    expect(dobleNumero(5)).toBe(10)
    expect(dobleNumero(10)).toBe(20)
  })
})

describe("Ejercicio 2", () => {
  it("Clase debería devolver un objeto literal con los valores de las propiedades", () => {
    const clase = new Clase()
    expect(clase).toEqual({ numero: 1, texto: "Hola", booleano: true })
  })
})
