<script lang="ts">
	import { checkoutStore } from './../../../stores';
	import { LoginWithGoogle } from '$lib/auth';
	import { authStore, stateStore } from './../../../stores';
	import Button from '../../Button.svelte';
	import { handlePayment } from '$lib/auth/Payment';
	import { goto } from '$app/navigation';
	let PaymentMethod: string = 'cash';

	$: isSelected = (value: string) => value === PaymentMethod;

	const CheckOut = (e: Event) => {
		e.preventDefault();
		// TODO: Validate Form
		

		function addPayment() {
			// TODO: Add Payment Plaform Here
			if ($checkoutStore.Total - 250)
				handlePayment('fiyinfoluwa.ajala@student.aul.edu.ng', $checkoutStore.Total);
		}

		if (!$authStore.isLoggedIn) {
			LoginWithGoogle().then((status) => {
				if (status && $checkoutStore.Total - 250)
					PaymentMethod !== 'card' ? goto('/dashboard/track') : addPayment();
			});
		} else {
			if ($checkoutStore.Total - 250)
				PaymentMethod !== 'card' ? goto('/dashboard/track') : addPayment();
		}
	};
</script>

<section>
	<form class="grid grid-cols-6 gap-4">
		<div class="col-span-6">
			<label for="Email" class="block text-xs font-medium text-gray-700"> Email </label>

			<input
				type="email"
				id="Email"
				readonly
				value={$authStore?.user?.email}
				class="w-full mt-1 border-gray-200 rounded-md shadow-sm sm:text-sm"
			/>
		</div>

		<div class="col-span-6">
			<label for="Phone" class="block text-xs font-medium text-gray-700"> Phone </label>

			<input
				type="tel"
				id="Phone"
				value={$authStore?.user?.phoneNumber}
				readonly={$authStore?.user?.phoneNumber}
				required
				class="w-full mt-1 border-gray-200 rounded-md shadow-sm sm:text-sm"
			/>
		</div>

		<div class="col-span-6">
			<label for="course" class="block text-xs font-medium text-gray-700"> Course </label>

			<input
				type="text"
				id="course"
				value={$authStore?.user?.course}
				readonly={$authStore?.user?.course}
				required
				class="w-full mt-1 border-gray-200 rounded-md shadow-sm sm:text-sm"
			/>
		</div>

		<fieldset class="col-span-6">
			<div class="grid w-full grid-cols-3 space-x-2 rounded-xl border p-1">
				<div>
					<input
						on:click={(e) => {
							PaymentMethod = 'card';
						}}
						type="radio"
						name="option"
						id="card"
						class="peer hidden"
						checked={isSelected('card')}
					/>
					<label
						for="card"
						class="block cursor-pointer select-none rounded-xl p-2 text-center peer-checked:bg-primary peer-checked:font-bold peer-checked:text-white"
						>Card</label
					>
				</div>

				<div>
					<input
						on:click={(e) => {
							PaymentMethod = 'cash';
						}}
						type="radio"
						name="option"
						id="cash"
						class="peer hidden"
						checked={isSelected('cash')}
					/>
					<label
						for="cash"
						class="block cursor-pointer select-none rounded-xl p-2 text-center peer-checked:bg-primary peer-checked:font-bold peer-checked:text-white"
						>Cash</label
					>
				</div>

				<div>
					<input
						on:click={(e) => {
							PaymentMethod = 'pos';
						}}
						type="radio"
						name="option"
						id="pos"
						class="peer hidden"
						checked={isSelected('pos')}
					/>
					<label
						for="pos"
						class="block cursor-pointer select-none rounded-xl p-2 text-center peer-checked:bg-primary peer-checked:font-bold peer-checked:text-white"
						>POS</label
					>
				</div>
			</div>
			<legend class="block text-sm font-medium mb-3 text-gray-700"> Payment Method </legend>
		</fieldset>

		{#if $stateStore.DeliveryMethod === 'delivery'}
			<fieldset class="col-span-6">
				<legend class="block text-sm font-medium text-gray-700"> Location </legend>

				<div class="mt-1 -space-y-px bg-white rounded-md shadow-sm">
					<div>
						<label for="building" class="sr-only">Building</label>

						<select
							required
							id="building"
							class="relative w-full border-gray-200 rounded-t-md focus:z-10 sm:text-sm"
						>
							<option>Admin</option>
							<option>Peace</option>
							<option>Purity</option>
							<option>Patience</option>
							<option>Faculty 01</option>
							<option>Faculty 02</option>
							<option>Back of Faculty</option>
						</select>
					</div>

					<div>
						<label class="sr-only" for="block"> Block </label>

						<input
							required
							type="text"
							id="block"
							placeholder="Exact Block Or Room Number"
							class="relative w-full border-gray-200 rounded-b-md focus:z-10 sm:text-sm"
						/>
					</div>
				</div>
			</fieldset>
		{/if}

		<div class="col-span-6 space-x-5 mt-5">
			<Button on:click={CheckOut}>Pay Now</Button>
			<Button to={'/dashboard/menu'}>Back to Menu</Button>
		</div>
	</form>
</section>
