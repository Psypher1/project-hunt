<script>
	import Head from "../features/Head.svelte";
	import Button from "../ui/Button.svelte";

	export let count;
	$: count = 0;

	function add() {
		count += 1;
	}
</script>

<svelte:head>
	<title>Project Hunt</title>

	<meta name="description" content="Find projects to contribute" />
</svelte:head>

<section class="text-center">
	<h1 class="text-5xl font-bold">Project Hunt</h1>
	<p>A wealth of projects to contribute to</p>

	<Button classes="text-3xl" on:click={add}>Click me</Button>

	<p>{count}</p>
</section>
