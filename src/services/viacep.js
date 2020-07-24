import { apiViacep } from './api';

export const viacepRequest = async (cep) =>
	apiViacep.get(`${cep}/json`)
