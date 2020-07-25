import React, { useEffect, useState } from 'react';

import { viacepRequest } from '../../services/viacep';

import { FaSpinner } from 'react-icons/fa'

import Container from '../../components/Container';
import InputStyled from '../../components/Input';
import {
	FormStyled,
	InfosStyled,
	AdressStyled,
	ButtonStyled,

} from './styles';



function Home() {

	const [cep, SetCep] = useState('');
	const [cepResponse, SetCepResponse] = useState({});
	const [loading, SetLoading] = useState(false);

	const [savedCeps, SetSavedCeps] = useState([]);

	const [time, SetTime] = useState(null);

	useEffect(() => {

		localStorage.setItem('@debounce/ceps', JSON.stringify(savedCeps));
	}, [savedCeps])

	useEffect(() => {
		clearTimeout(time);

		if (cep) {
			const timer = setTimeout(
				() => {
					try {
						loadCep(cep);
					} catch (error) {
						alert('error has occured!')
					}
				}, 1000)

			SetTime(timer);
		}

		SetCepResponse({});
	}, [cep])

	async function loadCep(cep) {
		SetLoading(true);
		const { data } = await viacepRequest(cep);

		SetCepResponse(data);
		SetLoading(false);

	}

	function handleSaveCep(e) {
		e.preventDefault();
		const { localidade, bairro, logradouro, uf } = cepResponse;

		const newCep = {
			cep,
			localidade,
			bairro,
			logradouro,
			uf,
		}

		if (cep !== '') {
			SetSavedCeps([...savedCeps, newCep]);
			SetCep('');
			SetCepResponse({});
			prompt('saved')
		}
	}
	return (
		<Container>
			<h1>Studying Debounce</h1>
			<FormStyled>
				<label htmlFor="">CEP</label>
				<InputStyled
					type="text"
					value={cep}
					onChange={(e) => SetCep(e.target.value)}
					placeholder='01234-567'
				/>
			</FormStyled>
			<InfosStyled>
				<h2>Endereço</h2>
				<AdressStyled onSubmit={handleSaveCep}>

					<label>Localidade</label>
					<InputStyled
						type="text"
						value={cepResponse.localidade || ''}
						readOnly />

					<label>Bairro</label>
					<InputStyled
						type="text"
						value={cepResponse.bairro || ''}
						readOnly />

					<label>Logradouro</label>
					<InputStyled
						type="text"
						value={cepResponse.logradouro || ''}
						readOnly />

					<label>UF</label>
					<InputStyled
						type="text"
						value={cepResponse.uf || ''}
						readOnly />

					<ButtonStyled load={loading}>
						{loading ? <FaSpinner /> : 'Cadastrar'}
					</ButtonStyled>

				</AdressStyled>

			</InfosStyled>

		</Container>
	)
}
export default Home;
