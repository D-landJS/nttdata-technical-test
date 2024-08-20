import axios from 'axios';
import { User } from '../interfaces/user';

const API_URL = 'http://localhost:3000/api/users';

export const getUsers = async (): Promise<User[]> => {
	const response = await axios.get(API_URL);
	return response.data.data;
};
