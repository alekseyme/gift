import axios from 'axios';

export default function api() {
	const api = axios.create({
		baseURL: 'https://62b4636aa36f3a973d32e8ac.mockapi.io',
	});

	return api;
}
