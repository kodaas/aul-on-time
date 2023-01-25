<script lang="ts">
	import { fly } from 'svelte/transition';
	import Cart from '../components/Cart.svelte';
	import type { LayoutData } from './$types';

	export let data: LayoutData;
</script>

<section in:fly={{ y: 20, duration: 500 }} class="px-5 py-10 pb-28 space-y-8 relative">
	<slot />
</section>

<div
	class="hidden border-l lg:block lg:w-[406px] lg:h-[calc(100vh_-_100px)] lg:overflow-hidden lg:sticky top-32 lg:pl-4 py-8 pb-16"
	id="cart"
>
	<Cart />
</div>
