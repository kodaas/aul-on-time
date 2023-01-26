<script lang="ts">
	import { LoginWithGoogle, Logout } from '$lib/auth';
	import { authStore } from '../../../stores';
	import Button from '../../Button.svelte';
</script>

<div>
	<h1 class="text-9xl py-10">User</h1>

	{#if $authStore.isLoggedIn}
		<h1 class="text-5xl py-10">Hello {$authStore.user.displayName}</h1>
		<h1 class="text-5xl py-10">Email: {$authStore.user.email}</h1>
		<Button to={'/dashboard/history'}>Order History</Button>
		<Button on:click={Logout} to={'/'}>Logout</Button>
	{:else}
		<Button on:click={LoginWithGoogle} size={'small'}>Login with Google</Button>
	{/if}
</div>
