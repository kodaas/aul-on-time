<script lang="ts">
	import { LoginWithGoogle, Logout } from '$lib/auth';
	import { authStore } from '../../../stores';
	import Button from '../../Button.svelte';

	
</script>

<div>
	{#if $authStore.isLoggedIn}
		<div class="mt-16 w-1/2 mx-auto flex justify-between">
			<Button to={'/dashboard/history'}>Order History</Button>
			<Button on:click={Logout} to={'/'}>Logout</Button>
		</div>
		<section class="pt-16 bg-blueGray-50">
			<div class="w-full lg:w-/w-1/2 px-4 mx-auto">
				<div
					class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg "
				>
					<div class="px-6">
						<div class="text-center mt-12">
							<div class="w-full mb-5">
								<img
									alt="..."
									src={$authStore.user.photoURL}
									class="shadow-xl rounded-full h-auto w-44 align-middle border-none mx-auto"
								/>
							</div>

							<h3 class="text-xl font-semibold leading-normal mb-2 text-blueGray-700">
								{$authStore.user.displayName}
							</h3>
							<div class="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold lowercase">
								<i class="fas facebook-square mr-2 text-lg text-blueGray-400" />
								{$authStore.user.email}
							</div>
							<div class="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold lowercase">
								{#if $authStore.user?.phoneNumber}
									{$authStore.user?.phoneNumber}
								{/if}
							</div>
							<div class="mb-2 text-blueGray-600 mt-10">
								<i class="fas fa-briefcase mr-2 text-lg text-blueGray-400" />
								{$authStore.user?.course}
							</div>
							<div class="mb-2 text-blueGray-600">
								<i class="fas fa-university mr-2 text-lg text-blueGray-400" />
								Anchor University Lagos
							</div>
						</div>

						<div class="flex flex-wrap justify-center">
							<div class="w-full px-4 flex justify-center">
								<div class="relative" />
							</div>
							<div class="w-full px-4 text-center mt-20">
								<div class="flex justify-center py-4 lg:pt-4 pt-8">
									<div class="mr-4 p-3 text-center">
										<span class="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
											22
										</span>
										<span class="text-sm text-blueGray-400">Orders</span>
									</div>
									<div class="mr-4 p-3 text-center">
										<span class="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
											10
										</span>
										<span class="text-sm text-blueGray-400">Delivery</span>
									</div>
									<div class="lg:mr-4 p-3 text-center">
										<span class="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
											89
										</span>
										<span class="text-sm text-blueGray-400">Pickup</span>
									</div>
								</div>
							</div>
						</div>
						<div class="mt-10 py-10 border-t border-blueGray-200 text-center">
							<div class="flex flex-wrap justify-center">
								<div class="w-full lg:w-9/12 px-4">
									<p class="mb-4 text-lg leading-relaxed text-blueGray-700">
										An artist of considerable range, Jenna the name taken by Melbourne-raised,
										Brooklyn-based Nick Murphy writes, performs and records all of his own music,
										giving it a warm, intimate feel with a solid groove structure. An artist of
										considerable range.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	{:else}
		<div class="mt-20">
			<h1 class="text-3xl font-bold py-3">Login to View Profile</h1>
			<Button on:click={LoginWithGoogle} size={'small'}>Login with Google</Button>
		</div>
	{/if}
</div>
