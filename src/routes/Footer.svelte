<script>
	import logo from '$lib/img/logo.png';
</script>

<footer aria-label="Site Footer" class="bg-gray-100">
	<div class="relative mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8 lg:pt-24">
		<div class="lg:flex lg:items-end lg:justify-between">
			<div>
				<div class="flex justify-center text-primary lg:justify-start">
					<img src={logo} width="30%" alt="Aul on Time" />
				</div>

				<p class="mx-auto mt-6 max-w-md text-center leading-relaxed text-gray-500 lg:text-left">
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt consequuntur amet culpa
					cum itaque neque.
				</p>
			</div>

			<nav aria-label="Footer Nav" class="mt-12 lg:mt-0">
				<ul class="flex flex-wrap justify-center gap-6 md:gap-8 lg:justify-end lg:gap-12">
					<li>
						<a class="text-gray-700 transition hover:text-gray-700/75" href="/"> About </a>
					</li>

					<li>
						<a class="text-gray-700 transition hover:text-gray-700/75" href="/"> Services </a>
					</li>

					<li>
						<a class="text-gray-700 transition hover:text-gray-700/75" href="/"> Projects </a>
					</li>

					<li>
						<a class="text-gray-700 transition hover:text-gray-700/75" href="/"> Blog </a>
					</li>
				</ul>
			</nav>
		</div>

		<p class="mt-12 text-center text-sm text-gray-500 lg:text-right">
			Copyright &copy; 2022. All rights reserved.
		</p>
	</div>
</footer>
