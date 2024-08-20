import { useState, useEffect } from 'react';
import { getUsers } from '../services/userService';
import { User } from '../interfaces/user';

export const useFetchUsers = () => {
	const [users, setUsers] = useState<User[]>([]);
	const [loading, setLoading] = useState<boolean>(true);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		const fetchUsers = async () => {
			try {
				const data = await getUsers();
				console.log(data);

				setUsers(data);
			} catch (err) {
				console.log(err);

				setError('Failed to fetch users');
			} finally {
				setLoading(false);
			}
		};

		fetchUsers();
	}, []);

	return { users, loading, error };
};
