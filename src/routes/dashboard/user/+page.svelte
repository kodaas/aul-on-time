<script lang="ts">
	import Button from '../../Button.svelte';
import type { PageData } from './$types';

	// export let data: PageData;
</script>


<div>
	<h1 class="text-9xl py-10">User</h1>
	<Button to={'/dashboard/history'}>Order History</Button>
</div>
