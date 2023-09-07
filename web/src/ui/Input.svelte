<script>
	export let label = "";
	export let name = "";
	export let type = "";
	export let value = "";
	export let placeholder = "";

	export let required;
</script>

<div class="space-y-1">
	<label for={name} class="uppercase text-sm">{label}</label>
	<input {type} {name} {value} {placeholder} {required} class="block border border-gray-400" />
</div>
