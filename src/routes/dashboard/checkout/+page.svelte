<script lang="ts">
	import Button from '../../Button.svelte';
	let PaymentMethod: string = 'cash';

	$: isSelected = (value: string) => value === PaymentMethod;

	$: Hidden = !isSelected('card') ? 'hidden' : '';
</script>

<section>
	<form class="grid grid-cols-6 gap-4">
		<!-- <div class="col-span-3">
			<label for="FirstName" class="block text-xs font-medium text-gray-700"> First Name </label>

			<input
				type="text"
				id="FirstName"
				class="w-full mt-1 border-gray-200 rounded-md shadow-sm sm:text-sm"
			/>
		</div> -->

		<!-- <div class="col-span-3">
			<label for="LastName" class="block text-xs font-medium text-gray-700"> Last Name </label>

			<input
				type="text"
				id="LastName"
				class="w-full mt-1 border-gray-200 rounded-md shadow-sm sm:text-sm"
			/>
		</div> -->

		<div class="col-span-6">
			<label for="Email" class="block text-xs font-medium text-gray-700"> Email </label>

			<input
				type="email"
				id="Email"
				class="w-full mt-1 border-gray-200 rounded-md shadow-sm sm:text-sm"
			/>
		</div>

		<div class="col-span-6">
			<label for="Phone" class="block text-xs font-medium text-gray-700"> Phone </label>

			<input
				type="tel"
				id="Phone"
				class="w-full mt-1 border-gray-200 rounded-md shadow-sm sm:text-sm"
			/>
		</div>

		<fieldset class="col-span-6">
			<div class="grid w-full grid-cols-3 space-x-2 rounded-xl border p-1">
				<div>
					<input
						type="radio"
						name="option"
						id="card"
						class="peer hidden"
						checked={isSelected('card')}
					/>
					<label
						for="card"
						on:click={(e) => {
							PaymentMethod = 'card';
						}}
						class="block cursor-pointer select-none rounded-xl p-2 text-center peer-checked:bg-primary peer-checked:font-bold peer-checked:text-white"
						>Card</label
					>
				</div>

				<div>
					<input
						type="radio"
						name="option"
						id="cash"
						class="peer hidden"
						checked={isSelected('cash')}
					/>
					<label
						for="cash"
						on:click={(e) => {
							PaymentMethod = 'cash';
						}}
						class="block cursor-pointer select-none rounded-xl p-2 text-center peer-checked:bg-primary peer-checked:font-bold peer-checked:text-white"
						>Cash</label
					>
				</div>

				<div>
					<input
						type="radio"
						name="option"
						id="pos"
						class="peer hidden"
						checked={isSelected('pos')}
					/>
					<label
						for="pos"
						on:click={(e) => {
							PaymentMethod = 'pos';
						}}
						class="block cursor-pointer select-none rounded-xl p-2 text-center peer-checked:bg-primary peer-checked:font-bold peer-checked:text-white"
						>POS</label
					>
				</div>
			</div>
			<legend class="block text-sm font-medium mb-3 text-gray-700"> Payment Method </legend>

			<div class={`mt-1 ${Hidden} -space-y-px bg-white rounded-md shadow-sm`}>
				<div>
					<label for="CardNumber" class="sr-only"> Card Number </label>

					<input
						type="text"
						id="CardNumber"
						placeholder="Card Number"
						class="relative w-full mt-1 border-gray-200 rounded-t-md focus:z-10 sm:text-sm"
					/>
				</div>

				<div class="flex -space-x-px">
					<div class="flex-1">
						<label for="CardExpiry" class="sr-only"> Card Expiry </label>

						<input
							type="text"
							id="CardExpiry"
							placeholder="Expiry Date"
							class="relative w-full border-gray-200 rounded-bl-md focus:z-10 sm:text-sm"
						/>
					</div>

					<div class="flex-1">
						<label for="CardCVC" class="sr-only"> Card CVC </label>

						<input
							type="text"
							id="CardCVC"
							placeholder="CVC"
							class="relative w-full border-gray-200 rounded-br-md focus:z-10 sm:text-sm"
						/>
					</div>
				</div>
			</div>
		</fieldset>

		<fieldset class="col-span-6">
			<legend class="block text-sm font-medium text-gray-700"> Location </legend>

			<div class="mt-1 -space-y-px bg-white rounded-md shadow-sm">
				<div>
					<label for="building" class="sr-only">Building</label>

					<select
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
						type="text"
						id="block"
						placeholder="Exact Block Or Room Number"
						class="relative w-full border-gray-200 rounded-b-md focus:z-10 sm:text-sm"
					/>
				</div>
			</div>
		</fieldset>

		<div class="col-span-6 space-x-5 mt-5">
			<Button>Pay Now</Button>
			<Button to={'/dashboard/menu'}>Back to Menu</Button>
		</div>
	</form>
</section>
