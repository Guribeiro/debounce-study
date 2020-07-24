import axios from'axios';

export const apiViacep = axios.create({
	baseURL: 'https://viacep.com.br/ws',
});

export const apiGithub = axios.create({
	baseURL: 'https://api.github.com/users',
})

