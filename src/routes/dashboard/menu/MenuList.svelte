<script lang="ts">
	import { cartStore, foodStore, checkoutStore } from './../../../stores';
	import type { FoodModel, PackModel } from '$lib/model';
	import Food from '../components/Food.svelte';
	import MenuNav from './MenuNav.svelte';
	import eba from '$lib/img/eba.png';
	import goatMeat from '$lib/img/goat-meat.png';
	import rice from '$lib/img/rice.png';
	import bean from '$lib/img/bean.webp';

	let foods: FoodModel[] = [
		{
			foodId: '1',
			name: 'White Rice & Stew',
			description: 'Fresh white rice & stew with goat meat',
			price: '3000',
			packPrice: '100',
			img: rice,
			isAvailable: true,
			categories: ['breakfast', 'lunch', 'dinner']
		},
		{
			foodId: '2',
			name: 'OHA SOUP & EBA',
			description: 'Native oha soup @ goat meat with EBA',
			price: '3000',
			packPrice: '100',
			img: eba,
			isAvailable: true,
			categories: ['lunch', 'dinner']
		},
		{
			foodId: '3',
			name: 'Goat Meat',
			description: 'Fried Goat Meat',
			price: '800',
			packPrice: '100',
			img: goatMeat,
			isAvailable: false,
			categories: ['lunch', 'dinner']
		},
		{
			foodId: '4',
			name: 'Beans',
			description: 'delicious native bean',
			price: '1000',
			packPrice: '100',
			img: bean,
			isAvailable: true,
			categories: ['lunch']
		}
	];

	$foodStore = foods;

	const addToCart = (foodId: string, isAvailable: boolean) => {
		if (isAvailable) {
			let pack: PackModel = { foodId, quantity: 1, status: 'not ready', extras: [] };

			$cartStore = [...$cartStore, pack];
		}
		console.log($cartStore, foodId);
	};

	$: $checkoutStore.cartSize = $cartStore.length;
	$: $checkoutStore.Total = $checkoutStore.subTotal + $checkoutStore.deliveryFee;
</script>

<section class="space-y-5">
	<MenuNav />

	<div class="grid md:grid-cols-2 gap-6 mt-8">
		<!-- <div
			title="Add New Food"
			class="relative box-border border border-dashed border-gray-500 rounded-lg overflow-hidden grid grid-cols-3 cursor-pointer active:opacity-60 hover:border-primary"
		>
			<div class="flex flex-col col-span-2 p-4">
				<div class="w-full h-full grid place-items-center">
					<svg
						width="50"
						height="50"
						class="mr-0.5"
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
					>
				</div>
			</div>
			<div
				class="col-span-1 bg-gray-300 relative min-h-[150px] md:min-h-[170px] bg-no-repeat bg-1/2 bg-cover"
			/>
		</div> -->

		{#each foods as food, foodId (foodId)}
			<Food {...food} on:click={() => addToCart(food.foodId, food.isAvailable)} />
		{/each}
	</div>
</section>
