<script lang="ts">
	let categories = ['All', 'BreakFast', 'Lunch', 'Dinner', 'Chops'];
	let selectedCategory: string = 'all';
	$: tabClass = (category: string) =>
		selectedCategory === category.toLowerCase()
			? 'bg-primary/5 text-primary py-1 px-3 rounded-lg font-medium cursor-pointer'
			: ' py-1 px-3 rounded-lg font-medium text-slate-400 cursor-pointer';
</script>

<nav class="flex space-x-5 border-b pb-3 max-w-full whitespace-nowrap overflow-auto">
	{#each categories as category, i (i)}
		<div
			class={tabClass(category)}
			on:click={() => {
				selectedCategory = category.toLowerCase();
			}}
			on:keydown={() => {selectedCategory = category.toLowerCase()}}
		>
			{category}
		</div>
	{/each}
</nav>
