<script>
	import Head from "../features/Head.svelte";
	import Button from "../ui/Button.svelte";

	export let data;
	const { projects } = data;
	console.log(data);
</script>

<Head description="Find projects to contribute" />

<section class="text-center">
	<h1 class="text-5xl font-bold">Project Hunt</h1>
	<p>A wealth of projects to contribute to</p>
</section>

<section class="py-16">
	<div class="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
		{#each projects as project}
			<article class="p-4 border border-gray-400 rounded shadow-md shadow-gray-400">
				<h3 class="text-xl font-semibold hover:text-blue-700">
					<a href={`/projects/${project.id}`} class="text-xl">{project.title} &rarr;</a>
				</h3>
				<p class="text-gray-800">{project.tagline}</p>
			</article>
		{/each}
	</div>
</section>
