import { User } from '../interfaces/user';
import UserCard from './UserCard';
import './UserList.css';

interface UserListProps {
	users: User[];
}

const UserList: React.FC<UserListProps> = ({ users }) => {
	return (
		<div className="user-list">
			{users.map(user => (
				<UserCard key={user.email} user={user} />
			))}
		</div>
	);
};

export default UserList;
