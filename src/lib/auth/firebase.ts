import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { authStore } from '../../stores';

const firebaseConfig = {
	apiKey: 'AIzaSyChHo0rI2_Dfl4pI5O7b5bkv6cpWgejWOw',
	authDomain: 'aul-on-time.firebaseapp.com',
	projectId: 'aul-on-time',
	storageBucket: 'aul-on-time.appspot.com',
	messagingSenderId: '934732629313',
	appId: '1:934732629313:web:1f391634e2a78ee3654dc0',
	measurementId: 'G-HN2MW874G3'
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);

onAuthStateChanged(auth, (user) => {
	authStore.set({
		isLoggedIn: user !== null,
		user,
		firebaseControlled: true
	});

	console.log('User: ', user);
});
