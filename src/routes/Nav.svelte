<script>
	import logo from '$lib/img/logo.png';
	import Button from './Button.svelte';
</script>

<div class="w-full bg-[#fff4d4] z-10 sticky top-0">
	<nav aria-label="Site Nav" class="mx-auto flex max-w-5xl items-center justify-between p-4">
		<a href="/" class="inline-flex h-20 w-20 items-center justify-center rounded-lg">
			<img src={logo} width="100%" alt="Aul on Time" />
		</a>

		<ul class="flex items-center gap-5 text-lg font-medium text-gray-500">
			<li class="hidden lg:block">
				<a class="rounded-lg px-3 py-2" href="/"> Home </a>
			</li>

			<li><a class="rounded-lg px-3 py-2" href="/dashboard/menu"> Menu </a></li>

			<li>
				<Button size={'small'}>Login</Button>
				<!-- <a
        class="inline-flex items-center rounded-lg px-3 py-2"
        href="/"
        target="_blank"
      >
        External
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          class="ml-1.5 h-4 w-4"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
          ></path>
        </svg>
      </a> -->
			</li>
		</ul>
	</nav>
</div>
