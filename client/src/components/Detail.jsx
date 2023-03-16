import React from "react";
import fondoHome from "../img/FondoHome.jpeg";
import styled from "styled-components";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPokemonsById } from "../actions";
import { NavLink, useParams } from "react-router-dom";
const Detail = () => {
  const dispatch = useDispatch();
  let { id } = useParams();
  useEffect(() => {
    dispatch(getPokemonsById(id));
  }, [dispatch]);

  const {
    id: idPoke,
    name,
    img,
    attack,
    defense,
    speed,
    types,
    hp,
    weight,
    height,
  } = useSelector((state) => state.detail);

  const Container = styled.div`
    background: url(${fondoHome});
    background-size: cover;
    width: 100vw;
    height: 100vh;
    display: flex;
    font-family: "Poppins";
    display: flex;
    justify-content: center;
    align-items: center;
  `;
  const ContainerPoke = styled.div`
    box-shadow: 8px 13px 26px 9px rgba(0, 0, 0, 0.75);
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: #000;
    opacity: 0.8;
    width: 900px;
    height: 700px;
    border-radius: 30px;
    color: #2e2e2e;
    padding: 30px;
  `;

  const Title = styled.h1`
    color: #fff;
    font-size: 90px;
    letter-spacing: 10px;
    margin: 0px 0px 20px;
  `;

  const PokeImg = styled.img`
    width: 500px;
    height: 500px;
  `;

  const ContainerStats = styled.div`
    padding: 10px 30px;
    margin-left: 100px;
  `;

  const ContainerInfo = styled.div`
    display: flex;
    justify-content: space-space-evenly;
    align-items: center;
    height: 600px;
  `;
  const Stats = styled.p`
    font-size: 25px;
    font-weight: 700;
    margin-right: 10px;
    color: #fff;
  `;

  const SVG = styled.svg`
    height: 70px;
    width: 70px;
    color: #fff;
    position: absolute;
    left: 80px;
    top: 80px;

    &:hover {
      transform: scale(1.2);
      transition: 1s ease-in-out;
      color: #36a0e7;
    }
  `;

  const Type = styled.p`
    font-size: 25px;
    font-weight: 700;
    margin-right: 10px;
    color: #fff;
  `;

  const ID = styled.span`
    position: absolute;
    top: 20px;
    left: 30px;
    color: #2e2e2e;
    font-weight: 500;
    font-size: 24px;
    letter-spacing: 1px;
  `;

  return (
    <Container>
      <NavLink to="/home">
        <SVG
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
        </SVG>
      </NavLink>
      <ContainerPoke>
        <ID>{typeof idPoke === "number" ? `# ${id}` : "CREATED"}</ID>
        <Title>{name}</Title>
        <ContainerInfo>
          <PokeImg src={img} alt={`Imagen de ${name}`} />
          <ContainerStats>
			<Stats>Tipo:</Stats>
            {types?.map((t) => (
              <Type>{t}</Type>
            ))}
            <Stats>Vida: {hp}</Stats>
            <Stats>Ataque: {attack}</Stats>
            <Stats>Defensa: {defense}</Stats>
            <Stats>Velocidad: {speed}</Stats>
            <Stats>Peso: {weight}</Stats>
            <Stats>Altura: {height}</Stats>
          </ContainerStats>
        </ContainerInfo>
      </ContainerPoke>
    </Container>
  );
};

export default Detail;
