export interface Post {
	userId: number;
	id: number;
	title: string;
	body: string;
}

export interface User {
	id: number;
	email: string;
	first_name: string;
	last_name: string;
	avatar: string;
}

export interface UserData {
	name: string;
	job: string;
}

export interface CreatedUserData {
	name: string;
	job: string;
	id: number;
	createdAt: string;
}
