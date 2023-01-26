import { writable } from 'svelte/store';

interface AuthStoreModel {
	isLoggedIn: boolean;
	user?: any;
	firebaseControlled: boolean;
}

export const authStore = writable<AuthStoreModel>({
	isLoggedIn: false,
	user: null,
	firebaseControlled: false
});
