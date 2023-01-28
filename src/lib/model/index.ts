export interface UserModel {
	phoneNumber: string;
}

export interface AuthStoreModel {
	isLoggedIn: boolean;
	user?: any;
	firebaseControlled: boolean;
	isAdmin?: boolean;
}

export interface StateStoreModel {
	DeliveryMethod: string;
	foodCategories: string[];
	openTime: string;
	location: {
		building: string;
		block: string;
	};
}

export interface FoodModel {
	foodId: string;
	name: string;
	description: string;
	price: number;
	packPrice: number;
	img: string;
	isAvailable: boolean;
	categories: CategoryModel[];
}

export interface CategoryModel {
	name: string;
}

export interface PackModel {
	foodId: string;
	quantity: number;
	extras: ExtraModel;
	status: string;
}

export interface ExtraModel {
	extraId: string;
	name: string;
	price: number;
}

export interface CheckoutModel {
	subTotal: number;
	cartSize: number;
	deliveryFee: number;
	serviceFee?: number;
	Total: number;
}

export interface OrderModel {
	orderId: string;
	status: string;
	cart: PackModel[] | [];
}
