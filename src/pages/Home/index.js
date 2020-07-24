import React, { useEffect, useState } from 'react';

// import { Container } from './styles';

import api from '../../services/api';
import { githubRequest } from '../../services/github';
import { viacepRequest } from '../../services/viacep';



function Home() {

	const [github, SetGithub] = useState('guribeiro');
	const [cep, SetCep] = useState('08599020');


	async function loadCep(cep) {
		const { data } = await viacepRequest(cep);
		console.log(data)
	}

	async function loadGitUser(github) {
		const { data } = await githubRequest(github);
		console.log(data)
	}
	return (
		<div>
			<h1>Olá Mundo</h1>
			<button onClick={loadGitUser}>github</button>
			<button onClick={() => loadCep('08599020')}>cep</button>
		</div>
	)
}
export default Home;
