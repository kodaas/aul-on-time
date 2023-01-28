<script lang="ts">
	import { stateStore } from "../../../stores";

	$: isSelected = (value: string) => value === $stateStore.DeliveryMethod;

</script>

<form class="justify-between py-2 px-1 space-x-1">
	<div class="grid w-full grid-cols-2 space-x-2 rounded-xl border p-1">
		<div>
			<input on:click={() => $stateStore.DeliveryMethod = 'delivery'} type="radio" name="option" id="delivery" class="peer hidden" checked={isSelected('delivery')} />
			<label
				
				for="delivery"
				class="block cursor-pointer select-none rounded-xl p-2 text-center peer-checked:bg-primary peer-checked:font-bold peer-checked:text-white"
				>Delivery</label
			>
		</div>

		<div>
			<input on:click={() => $stateStore.DeliveryMethod = 'pickup'} type="radio" name="option" id="pickUp" class="peer hidden" checked={isSelected('pickup')} />
			<label
				
				for="pickUp"
				class="block cursor-pointer select-none rounded-xl p-2 text-center peer-checked:bg-primary peer-checked:font-bold peer-checked:text-white"
				>Pick Up</label
			>
		</div>
	</div>
</form>
