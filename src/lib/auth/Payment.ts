import { goto } from '$app/navigation';

export const handlePayment = (email: string, amount: number) => {
	const handler = PaystackPop.setup({
		key: 'pk_test_73269c9f706929d5bc18b490e9a59caf4595264c', // Replace with your public key
		email,
		amount: amount * 100,

		onClose: () => {
			alert('Window closed.');
		},

		callback: (response: any) => {
			// const message = 'Payment complete! Reference: ' + response.reference;
			// alert(message)
			goto('/dashboard/track');
		}
	});

	handler.openIframe();
};
