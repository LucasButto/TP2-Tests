import { useState } from "react";
import { useForm } from "react-hook-form";

export const mayorEdad = (age) => {
  if (age >= 18) {
    return true;
  } else if (age >= 0 && age < 18) {
    return false;
  } else {
    return null;
  }
};

const Edad = () => {
  const [result, setResult] = useState();

  const { register, handleSubmit } = useForm();

  const submitFunction = (age) => {
    let intAge = parseInt(age.edad);
    setResult(
      mayorEdad(intAge) === true
        ? "Mayor de edad"
        : mayorEdad(intAge) === false
        ? "Menor de edad"
        : "Ingrese un numero valido"
    );
  };
  return (
    <>
      <form onSubmit={handleSubmit(submitFunction)}>
        <label htmlFor="edad">Edad</label>
        <input type="number" {...register("edad", { required: true })} />
        <button type="submit">Enviar</button>
      </form>
      <p>{result}</p>
    </>
  );
};

export default Edad;
