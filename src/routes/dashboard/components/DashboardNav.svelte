<script>
	import logo from '$lib/img/logo.png';
	import Button from '../../Button.svelte';
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

			<li>
				<a
					href="/dashboard/user"
					class="bg-gray-300 block h-10 w-10 rounded-full bg-no-repeat bg-1/2 bg-cover"
				>
			</a>
				<!-- style={`background-image: url();`} -->
			</li>
		</ul>
	</nav>
</div>
