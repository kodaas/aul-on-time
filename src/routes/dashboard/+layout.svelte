<script lang="ts">
	import Nav from './components/DashboardNav.svelte';
	import type { LayoutData } from './$types';

	// export let data: LayoutData;
</script>

<Nav />

<main class="max-w-7xl min-h-[85vh] mx-auto lg:flex relative bg-white md:pt-0 px-5">
	<slot />
</main>

