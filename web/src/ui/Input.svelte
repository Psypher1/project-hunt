<script>
	export let label = "";
	export let name = "";
	export let type = "";
	export let value = "";
	export let placeholder = "";
	export let classes = "";

	export let disabled = false;

	export let errors;
</script>

<div class={`mb-2 ${classes}`}>
	<label for={name} class="uppercase font-bold text-gray-600 text-xs">{label}</label>
	<input
		{type}
		{name}
		{value}
		{placeholder}
		{disabled}
		{...$$restProps}
		class={`mt-1 w-full block p-2 border border-gray-400 placeholder:text-gray-400 ${
			disabled ? "bg-gray-300 font-medium" : ""
		}`}
	/>
	{#if errors}
		{#each errors as error}
			<label for={name}>{error}</label>
		{/each}
	{/if}
</div>
