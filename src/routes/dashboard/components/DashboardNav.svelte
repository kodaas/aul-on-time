<script>
	import { authStore } from './../../../stores';
	import logo from '$lib/img/logo.png';
	import Button from '../../Button.svelte';
	import { LoginWithGoogle } from '$lib/auth';

</script>

<div class="w-full z-10 sticky bg-white top-0 border-b">
	<nav aria-label="Site Nav" class="mx-auto flex max-w-5xl items-center justify-between p-4">
		<a href="/" class="inline-flex h-20 w-20 items-center justify-center rounded-lg">
			<img src={logo} width="100%" alt="Aul on Time" />
		</a>

		<ul class="flex items-center gap-5 text-lg font-medium text-gray-500">
			<li class="">
				<a class="rounded-lg px-3 py-2" href="/"> Home </a>
			</li>

			<li class="">
				<a class="rounded-lg px-3 py-2" href="/dashboard/track"> Track </a>
			</li>

			<!-- <li>
				<Button size={'small'}>Login</Button>
			</li> -->

			{#if $authStore.isLoggedIn}
				<li>
					<a
						href="/dashboard/user"
						class="bg-gray-300 block h-12 w-12 overflow-hidden rounded-full bg-no-repeat bg-1/2 bg-cover"
					>
						<img width="100%" src={$authStore.user.photoURL} alt="user" />
					</a>
				</li>
			{:else}
				<li>
					<Button on:click={LoginWithGoogle} size={'small'}>Login with Google</Button>
				</li>
			{/if}
		</ul>
	</nav>
</div>
