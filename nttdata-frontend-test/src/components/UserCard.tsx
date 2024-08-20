import React from 'react';
import { User } from '../interfaces/user';
import './UserCard.css';
import moment from 'moment';

interface UserCardProps {
	user: User;
}

const UserCard: React.FC<UserCardProps> = ({ user }) => {
	return (
		<div className="user-card">
			<img src={user.photo} alt={user.name} className="user-card__photo" />
			<h2 className="user-card__name">{user.name}</h2>
			<p className="user-card__info">{user.gender}</p>
			<p className="user-card__info">
				{user.city}, {user.country}
			</p>
			<p className="user-card__info">{user.email}</p>
			<p className="user-card__birthdate">
				Birthdate: {moment(user.birthdate).format('MMMM D, YYYY')}{' '}
			</p>
		</div>
	);
};

export default UserCard;
