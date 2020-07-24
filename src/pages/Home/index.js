import React, { useEffect, useState } from 'react';

import Container from '../../components/Container';
import { FormStyled, ListStyled } from './styles';

import api from '../../services/api';
import { githubRequest } from '../../services/github';
import { viacepRequest } from '../../services/viacep';



function Home() {

	const [github, SetGithub] = useState('guribeiro');
	const [githubResponse, SetGithubResponse] = useState({});

	const [cep, SetCep] = useState('');
	const [cepResponse, setCepResponse] = useState({});

	const [time, SetTime] = useState(null);

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

		setCepResponse({});
	}, [cep])

	async function loadCep(cep) {
		const { data, status } = await viacepRequest(cep);
		console.log(data);
		setCepResponse(data);

	}

	async function loadGitUser(github) {
		const { data } = await githubRequest(github);
		console.log(data)
	}
	return (
		<Container>
			<h1>Studying Debounce</h1>
			<FormStyled>
				<label htmlFor="">CEP</label>
				<input type="text"
					value={cep}
					onChange={(e) => SetCep(e.target.value)}
				/>
				<label htmlFor="">GITHUB</label>
				<input
					type="text"
					value={github}
					onChange={(e) => SetGithub(e.target.value)}
				/>
			</FormStyled>
			<ListStyled>
			</ListStyled>

		</Container>
	)
}
export default Home;
