<script lang="ts">
	import type { ExtraModel } from '$lib/model';
	import { foodStore, checkoutStore } from '../../../stores';

	export let foodId: string;
	export let quantity: number;
	export const extras: ExtraModel[] = [];
	export const status: string = '';
	export let id: number;

	let food = $foodStore.filter((x) => x.foodId === foodId)[0];

	$checkoutStore.subTotal = $checkoutStore.subTotal + (+food.price * quantity + +food.packPrice);

</script>

<div class="bg-white border border-dashed border-gray-300  p-3 rounded-lg mb-4 last:mb-0">
	<div class="flex items-center justify-between pb-4 ">
		<p class="font-medium text-xs">Pack {id + 1}</p>
		<button class="bg-red-50 p-1 rounded-full"
			><svg
				width="14"
				height="14"
				viewBox="0 0 24 24"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
				><path
					d="M14 10L14 17"
					stroke="red"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
				/><path
					d="M10 10L10 17"
					stroke="red"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
				/><path
					d="M6 6V5C5.44772 5 5 5.44772 5 6H6ZM18 6H19C19 5.44772 18.5523 5 18 5V6ZM6 7H18V5H6V7ZM17 6V20H19V6H17ZM17 20H7V22H17V20ZM7 20V6H5V20H7ZM7 20H7H5C5 21.1046 5.89543 22 7 22V20ZM17 20V22C18.1046 22 19 21.1046 19 20H17Z"
					fill="red"
				/><path
					d="M4 6H20"
					stroke="red"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
				/><path
					d="M16 6V7C16.5523 7 17 6.55228 17 6H16ZM8 6H7C7 6.55228 7.44772 7 8 7V6ZM9 4H15V2H9V4ZM15 4V6H17V4H15ZM16 5H8V7H16V5ZM9 6V4H7V6H9ZM15 4H17C17 2.89543 16.1046 2 15 2V4ZM9 2C7.89543 2 7 2.89543 7 4H9V4V2Z"
					fill="red"
				/></svg
			></button
		>
	</div>
	<div class="mb-4 last:mb-0">
		<div class="flex w-full text-sm">
			<div class=" flex-1">
				<div class="flex mb-1">
					<p class="flex-1 text-xs text-gray-700 mr-3">
						<span class="block leading-tight text-sm capitalize">{food.name}</span><span
							class="block text-xxs text-gray-400">₦{food.price}</span
						>
					</p>
					<span class="flex items-center bg-gray-100 rounded-full overflow-hidden h-[25px]"
						><button class="px-2 h-full"
							><svg
								width="14"
								height="14"
								viewBox="0 0 24 24"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
								><path
									d="M6 12H18"
									stroke="#14181F"
									stroke-width="2"
									stroke-linecap="round"
									stroke-linejoin="round"
								/></svg
							></button
						><span class="text-xxs font-medium px-1">{quantity}</span><button class="px-2 h-full"
							><svg
								width="14"
								height="14"
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
							></button
						></span
					>
				</div>
			</div>
		</div>
	</div>
	<div class="mb-4 last:mb-0">
		<div class="flex w-full text-sm">
			<div class=" flex-1">
				<div class="flex mb-1">
					<p class="flex-1 text-xs text-gray-700 mr-3">
						<span class="block leading-tight first-letter:capitalize">Plastic container </span><span
							class="block text-xxs text-gray-400">₦{food.packPrice}</span
						>
					</p>
				</div>
			</div>
		</div>
	</div>
	<div class="flex mt-3">
		<button class="text-xxs py-1 px-2 text-sm border rounded-full flex items-center"
			><svg
				width="10"
				height="10"
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
			>Add to this pack</button
		><button class="text-xxs py-1 px-2 text-sm border border-dashed rounded-lg ml-auto"
			>Duplicate pack</button
		>
	</div>
</div>
