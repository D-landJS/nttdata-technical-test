import UserList from './components/UserList';
import { useFetchUsers } from './hooks/useFetchUsers';
import './App.css'; // Importa el archivo CSS

function App() {
	const { users, loading, error } = useFetchUsers();

	if (loading) {
		return (
			<div className="app__spinner-container">
				<div className="app__spinner"></div>
			</div>
		);
	}

	if (error) {
		return <p className="app__error-message">{error}</p>;
	}

	return (
		<div className="app">
			<h1 className="app__title">User List</h1>
			<UserList users={users} />
		</div>
	);
}

export default App;
