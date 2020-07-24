import { apiGithub } from './api';

export const githubRequest = async (username) =>
	apiGithub.get(username);



