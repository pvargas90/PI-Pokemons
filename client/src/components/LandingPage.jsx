import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import landingpick from '../img/landing.jpeg';

const LandingPage = () => {
	const ContainerLanding = styled.div`
		height: 100vh;
		background: url(${landingpick});
		background-position: center;
		background-repeat: no-repeat;
		background-size: cover;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	`;

	const LandingH1 = styled.h1`
		font-size: 50px;
		color: #000;
		text-align: Left;
		margin-top: 700px;
	`;

	const LandingH2 = styled.h2`
		font-size: 30px;
		color: #000;
		text-align: Left;
		margin-top: 0px;
	`;

	const LandingBtn = styled.button`
		font-size: 30px;
		width: 200px;
		padding: 10px;
		border-radius: 10px;
		background-color: #fff;
		color: #000;
		border: 2px solid #242323;
		cursor: pointer;
		margin: 0 auto 100px;
		&:hover {
			border: 6px solid #2468B1;
			background-color: #FCCF00;
		}
	`;

	return (
		<ContainerLanding>
			<LandingH1>PI Pokemon</LandingH1>
			<LandingH2>Paola Vargas</LandingH2>
			<NavLink to='/home'>
				<LandingBtn>INGRESAR</LandingBtn>
			</NavLink>
		</ContainerLanding>
	);
};

export default LandingPage;
