<script>
	import Button from '../../Button.svelte';
	import CartItem from './CartItem.svelte';
</script>

<div class="h-full overflow-y-auto">
	<div class="pr-4" />
	<div>
		<div class="flex items-center mb-2">
			<p class="text-brandmain flex-1"><span class="font-medium text-sm ">Your Order</span></p>
			<button class="text-xs flex items-center w-fit bg-gray-100 py-2 px-3 rounded-full"
				><svg
					width="12"
					height="12"
					class="mr-1"
					viewBox="0 0 24 24"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
					><path
						d="M6 12H18"
						stroke="#14181F"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
					/><path
						d="M12 18L12 6"
						stroke="#14181F"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
					/></svg
				>Add another pack</button
			>
		</div>

		<div class="w-full border-t border-gray-200 mb-5" />

		<div class="">
			<CartItem />
		</div>

		<div class="w-full border-t border-gray-200 mt-4" />

		<div class="mt-8 mb-6 text-sm">
			<p class="flex items-center justify-between mb-6">
				<span>Sub total (1 item)</span><span>₦6,100</span>
			</p>
			<p class="flex items-center justify-between mb-6">
				<span>Delivery fee</span><span>₦0</span>
			</p>
			<p class="flex items-center justify-between mb-6">
				<span>Service fee</span><span>₦0</span>
			</p>
			<p class="flex items-center justify-between font-bold">
				<span>Total</span><span class="">₦6,100</span>
			</p>
		</div>

		<div class="flex justify-between w-full">
			<Button to={'/dashboard/checkout'}>Place order</Button>
			<Button>Clear orders</Button>
		</div>
	</div>
</div>
