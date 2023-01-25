<script lang="ts">
	import Button from '../../Button.svelte';
import type { PageData } from './$types';
	import MenuHeader from './MenuHeader.svelte';
	import MenuList from './MenuList.svelte';

	export let data: PageData;
</script>

<MenuHeader />

<MenuList />


