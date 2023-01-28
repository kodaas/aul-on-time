import { writable } from 'svelte/store';
import type { AuthStoreModel, StateStoreModel } from '$lib/model';


export const authStore = writable<AuthStoreModel>({
	isLoggedIn: false,
	user: null,
	firebaseControlled: false,
	isAdmin: false
});

export const stateStore = writable<StateStoreModel>({
	DeliveryMethod: 'delivery',
	foodCategories: [],
	openTime: '09:30 am - 10:00 pm',
	location: {
		building: 'peace',
		block: 'F211'
	}
});

// export const cartStore = writable<foodModel[]>();

/*		
	👉 Models

	food: {foodId, name, description, price, packPrice, img, isAvailable, [categoryName], [OrderID] }

	categories <Local>: [CategoryName]

	cart <local> : [pack]

	pack <local> : {foodId, quantity, extras, status}
	
	extras <local> : [{extraID, quantity}]
	
	extra : {extraId, name, price} ❗ Have a local copy to avoid calling twice

	checkout <local> : {subTotal, cart.length, deliveryFee, serviceFee, Total} 
	❗USE const freezeObject = Object.freeze(checkout) AND fetch only price from firebase

	Order: {orderId, status, cart}



*/

export const checkoutStore = writable({
	DeliveryMethod: 'delivery'
});

export const foodStore = writable([
	{
		DeliveryMethod: 'delivery'
	}
]);
