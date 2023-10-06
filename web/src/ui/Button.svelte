<script>
	export let classes = "";
</script>

<button
	{...$$restProps}
	class={`py-2 px-4 border bg-blue-700 rounded text-blue-50 hover:bg-blue-600 transition duration-300 ${classes}`}
>
	<slot />
</button>
