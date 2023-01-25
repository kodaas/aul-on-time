<script lang="ts">
	let DeliveryMethod = 'Pick Up';

	$: {
		console.log(DeliveryMethod);
	}

	let DeliveryList = ['Delivery', 'Pick Up'];
</script>

<form class="justify-between py-2 px-1 space-x-1">
	<div class="grid w-full grid-cols-2 space-x-2 rounded-xl border p-1">

		<div>
			<input
				type="radio"
				name="option"
				id="delivery"
				class="peer hidden"
			/>
			<label
				for="delivery"
				class="block cursor-pointer select-none rounded-xl p-2 text-center peer-checked:bg-primary peer-checked:font-bold peer-checked:text-white"
				>Delivery</label
			>
		</div>

		<div>
			<input
				type="radio"
				name="option"
				id="pickUp"
				class="peer hidden"
				checked
			/>
			<label
				for="pickUp"
				class="block cursor-pointer select-none rounded-xl p-2 text-center peer-checked:bg-primary peer-checked:font-bold peer-checked:text-white"
				>Pick Up</label
			>
		</div>
	</div>
</form>
