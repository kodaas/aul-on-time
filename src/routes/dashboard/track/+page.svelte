<script lang="ts">
	import CartItem from '../components/CartItem.svelte'
	import Button from '../../Button.svelte'
	import TrackItem from './TrackItem.svelte';
</script>

<div
	class="lg:block mx-auto lg:w-[450px] lg:h-[calc(100vh_-_100px)]lg:pl-4 py-8 pb-16"
	id="cart"
>
	<div class="h-full">
		<div class="pr-4" />
		<div>
			<div class="flex w-full my-8">
				<Button to={'/dashboard/menu'}>Back to Menu</Button>
			</div>
			<div class="flex items-center mb-2">
				<p class="text-brandmain flex-1"><span class="text-2xl font-semibold">Your Order</span></p>
			</div>

			<div class="w-full border-t border-gray-200 mb-5" />

			<div class="">
				<TrackItem />
				<TrackItem />
			</div>
		</div>
	</div>
</div>
