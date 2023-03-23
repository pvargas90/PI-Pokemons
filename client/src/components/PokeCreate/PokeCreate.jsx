import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postPokemon, getTypes } from "../../actions";

import { NavLink, useHistory } from "react-router-dom";

import styles from "./createPoke.module.css";

const PokeCreate = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const types = useSelector((state) => state.types);
  const pokemons = useSelector((state) => state.allPokemons);
  const [input, setInput] = useState({
    name: "",
    hp: 1,
    attack: 1,
    defense: 1,
    speed: 1,
    weight: 1,
    height: 1,
    types: [],
    img: "data:image/png;base64,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",
  });

  function handleChange(e) {
    e.preventDefault();
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  }

  function handleCheck(e) {
    if (e.target.checked) {
      setInput({
        ...input,
        types: [...input.types, parseInt(e.target.value)],
      });
    }
    if (!e.target.checked) {
      setInput({
        ...input,
        types: input.types.filter((type) => type !== parseInt(e.target.value)),
      });
    }
  }

  function handleSubmit(e) {
    dispatch(postPokemon(input));
    alert("Pokémon Creado");
    setInput({
      name: "",
      hp: 0,
      attack: 0,
      defense: 0,
      speed: 0,
      weight: 0,
      height: 0,
      types: [],
      img: "",
    });
    history.push("/home");
  }

  function handleChangeName(e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value, // target es el comando que nos permite acceder a la propiedad target de un objeto event
    });
    setError(
      validate({
        ...input,
        [e.target.name]: e.target.value,
      })
    );
    if (
      pokemons.find(
        (poke) =>
          poke.name.toLowerCase() === e.target.value.toLowerCase().trim()
      )
    ) {
      setError({
        ...input,
        [e.target.name]: "Pokémon duplicado",
      });
    }
  }
  const [error, setError] = useState({});

  function validate(input) {
    let errors = {};
    if (input.name === "") {
      errors.name = "Nombre requerido";
    } else if (input.name.trim().length < 4) {
      errors.name = "El minimo de caracteres requeridos es 3";
    }

    return errors;
  }

  useEffect(() => {
    dispatch(getTypes());
  }, []);

  return (
    <div className={styles.container}>
      {error.name ? (
        <div className={styles.containerError}>
          <p className={styles.errTitle}>ERRORS</p>
          <ul class={styles.UlistErr}>
            <li class={styles.listErr}>{error.name}</li>
          </ul>
        </div>
      ) : null}
      <NavLink to="/home" className={styles.svgBtn}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M11 15l-3-3m0 0l3-3m-3 3h8M3 12a9 9 0 1118 0 9 9 0 01-18 0z"
          />
        </svg>
      </NavLink>
      <div className={styles.containerForm}>
        <h1 className={styles.title}>Crear Pokemon</h1>
        <form onSubmit={(e) => handleSubmit(e)}>
          {error.name ? (
            <input
              className={styles.inputFormError}
              type="text"
              name="name"
              placeholder="Nombre"
              onChange={(e) => handleChangeName(e)}
            ></input>
          ) : (
            <input
              className={styles.inputForm}
              type="text"
              name="name"
              placeholder="Nombre"
              onChange={(e) => handleChangeName(e)}
            ></input>
          )}

          <input
            className={styles.inputForm}
            type="number"
            min="1"
            name="hp"
            placeholder="Vida"
            onChange={(e) => handleChange(e)}
          ></input>
          <input
            className={styles.inputForm}
            type="number"
            min="1"
            name="attack"
            placeholder="Ataque"
            onChange={(e) => handleChange(e)}
          ></input>
          <input
            className={styles.inputForm}
            type="number"
            min="1"
            name="defense"
            placeholder="Defensa"
            onChange={(e) => handleChange(e)}
          ></input>
          <input
            className={styles.inputForm}
            type="number"
            min="1"
            name="speed"
            placeholder="Velocidad"
            onChange={(e) => handleChange(e)}
          ></input>
          <input
            className={styles.inputForm}
            type="number"
            min="1"
            name="weight"
            placeholder="Peso"
            onChange={(e) => handleChange(e)}
          ></input>
          <input
            className={styles.inputForm}
            type="number"
            min="1"
            name="height"
            placeholder="Altura"
            onChange={(e) => handleChange(e)}
          ></input>
          <input
            className={styles.inputForm}
            type="text"
            name="img"
            placeholder="URL imagen"
            onChange={(e) => handleChange(e)}
          ></input>
          <input
            className={styles.inputForm}
            type="text"
            name="types"
            placeholder="Tipos"
            onChange={(e) => handleChange(e)}
          ></input>

          {error.name || input.name.trim().length < 4 ? (
            <button className={styles.btnDisabled} disabled>
              Create
            </button>
          ) : (
            <button className={styles.btn}>Create</button>
          )}
        </form>
      </div>
    </div>
  );
};

export default PokeCreate;
