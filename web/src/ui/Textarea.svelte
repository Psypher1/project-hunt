<script>
	export let name = "";
	export let label = "";
	export let value = "";
	export let placeholder = "";
</script>

<div class="mb-2">
	<label for={name} class="block uppercase font-bold text-gray-600 text-xs">{label}</label>
	<textarea
		{name}
		{value}
		{placeholder}
		class={`mt-1 w-full block p-2 border border-gray-400 placeholder:text-gray-400`}
		id=""
		cols="30"
		rows="5"
	/>
</div>
