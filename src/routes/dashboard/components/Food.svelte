<script lang="ts">
	// export let foodId: string;
	export let price: string;
	export let name: string;
	export let description: string;
	export let img: string;
	export let isAvailable: boolean;
	// export let categories: string[];
	// export let packPrice: string;
</script>

<button
	on:click
	title="Add Food to Cart"
	class="relative text-left box-border border border-gray-200 rounded-lg overflow-hidden grid grid-cols-3 cursor-pointer active:opacity-60 hover:shadow-md transition hover:-translate-y-1 hover:border-primary/50"
>
	<div class="flex flex-col h-full col-span-2 p-4">
		<p class="capitalize text-sm leading-5 md:text-base md:font-medium">{name}</p>

		<p class="mt-1 text-xs text-[#999999]">{description}</p>

		{#if isAvailable}
			<span class="bg-green-50 self-start mt-2 py-[o.1rem] px-2 text-green-700 text-xs rounded-full"
				>Available</span
			>
		{:else}
			<span class="bg-red-50 self-start mt-2 py-[o.1rem] px-2 text-red-700 text-xs rounded-full"
				>Not Available</span
			>
		{/if}

		<p class="text-brandmain font-medium mt-auto">₦{price}</p>
	</div>

	<div
		class="col-span-1 bg-gray-300 relative min-h-[150px] md:min-h-[170px] bg-no-repeat bg-1/2 bg-cover"
		style={`background-image: url(${img});`}
	/>
</button>
