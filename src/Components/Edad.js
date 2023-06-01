import { useState } from "react";
import { useForm } from "react-hook-form";

export const mayorEdad = (age) => {
  if (age >= 18) {
    return "Eres mayor de edad";
  } else if (age >= 0 && age < 18) {
    return "Eres menor de edad";
  } else {
    return "No es una edad válida";
  }
};

const Edad = () => {
  const [result, setResult] = useState();

  const { register, handleSubmit } = useForm();

  const submitFunction = (age) => {
    let intAge = parseInt(age.edad);
    setResult(mayorEdad(intAge));
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
