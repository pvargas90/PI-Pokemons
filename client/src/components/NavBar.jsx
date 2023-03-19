import React from 'react';
import styled from 'styled-components';
import SearchBar from './SearchBar';
const NavBar = ({
	types,
	clearFilter,
	filterCreated,
	filterTypes,
	sort,
	setCurrentPage,
}) => {

	// estilos de la navBar
	const NavFilter = styled.nav`
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 40px 80px 40px;
		@media (max-width: 900px) {
			& {
				position: sticky;
				top: 94px;
				z-index: 1;
				padding: 10px 20px;
				display: block;
			}
		}
	`;

	const ContainerFilter = styled.div`
		flex-basis: 70%;
		display: flex;
		justify-content: flex-end;
		padding-left: 30px;
		align-items: center;
	`;

	const Select = styled.select`
		width: 150px;
		padding: 10px 5px;
		border-radius: 5px;
		border: 1px solid #7e7e7e;
		background: #1e2125;
		color: #e2dddd;
		font-size: 16px;
		margin-left: 40px;
		letter-spacing: 1px;
		cursor: pointer;
		text-transform: capitalize;
		@media (max-width: 900px) {
			& {
				display: none;
			}
		}
	`;

	const BtnClear = styled.p`
		cursor: pointer;
		margin-right: 30px;
		font-size: 18px;
		letter-spacing: 2px;
		margin: 0;
		padding: 10px;
		border-radius: 5px;
		&:hover {
			background-color: #c0bbbb5e;
		}
		@media (max-width: 900px) {
			& {
				display: none;
			}
		}
	`;

	return (
		<NavFilter>
			<SearchBar setCurrentPage={setCurrentPage} />
			<ContainerFilter>
				<BtnClear onClick={(e) => clearFilter(e)}>Limpiar Filtro</BtnClear>
				<Select onChange={(e) => filterTypes(e)}>
					<option disabled selected>
						Tipos
					</option>
					<option value='Todos'>All</option>
					{types?.map((type) => {
						return (
							<option
								key={type.id}
								value={`${type.name}`}
							>{`${type.name}`}</option>
						);
					})}
				</Select>
				<Select onChange={(e) => filterCreated(e)}>
					<option disabled selected>
						Creado/Existente
					</option>
					<option value='All'>Todos</option>
					<option value='number'>Existente</option>
					<option value='string'>Creado</option>
				</Select>
				<Select onChange={(e) => sort(e)}>
					<option disabled selected>
						Ordenar
					</option>
					<option value='alf-asc'>A - Z</option>
					<option value='alf-des'>Z - A</option>
				</Select>
			</ContainerFilter>
		</NavFilter>
	);
};
export default NavBar;
