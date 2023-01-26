import { GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';
import { auth } from './firebase';

export const LoginWithGoogle = async () => {
	try {
		await signInWithPopup(auth, new GoogleAuthProvider());
		return true
	} catch (error) {
		console.log(error);
		return false
	}
};

export const Logout = async () => {
	try {
		await signOut(auth);
	} catch (error) {
		console.log(error);
	}
};
