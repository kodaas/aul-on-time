<script lang="ts">
	import Cart from '../components/Cart.svelte';
	import type { LayoutData } from './$types';

	// export let data: LayoutData;
</script>

<section
	class="lg:border-r px-10 lg:block lg:w-[500px] lg:h-[calc(100vh_-_100px)] lg:overflow-hidden lg:sticky top-32 lg:pl-4 py-8 pb-16"
>
	<Cart />
</section>

<section
	class=" px-10 lg:block lg:w-[550px] mx-auto lg:h-[calc(100vh_-_100px)] lg:overflow-hidden lg:sticky top-32 lg:pl-4 py-8 pb-16"
>
	<slot />
</section>
