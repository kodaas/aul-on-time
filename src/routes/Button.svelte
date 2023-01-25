<script lang="ts">
	// export let type:String = "primary";
	export let size: String = 'default';
	export let to: string = '';

	$: padding = size === 'default' ? 'px-8 py-3' : 'px-2 py-1';
	$: rounded = size === 'default' ? 'rounded-2xl' : 'rounded-lg';
</script>

{#if to}
	<a
		href={to}
		class={`group text-black relative inline-block focus:outline-none focus:ring ${rounded}`}
	>
		<span
			class={`absolute inset-0 translate-x-0 translate-y-0 bg-primary transition-transform group-hover:translate-y-1.5 group-hover:translate-x-1.5 ${rounded}`}
		/>

		<span
			class={`relative inline-block  border-2 border-current  text-sm font-bold uppercase tracking-widest ${padding} ${rounded}`}
		>
			<slot />
		</span>
	</a>
{:else}
	<button class={`group text-black relative inline-block focus:outline-none focus:ring ${rounded}`}>
		<span
			class={`absolute inset-0 translate-x-0 translate-y-0 bg-primary transition-transform group-hover:translate-y-1.5 group-hover:translate-x-1.5 ${rounded}`}
		/>

		<span
			class={`relative inline-block  border-2 border-current  text-sm font-bold uppercase tracking-widest ${padding} ${rounded}`}
		>
			<slot />
		</span>
	</button>
{/if}
