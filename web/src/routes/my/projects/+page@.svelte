<script>
	/** @type {import('./$types').PageData} */
	export let data;

	import { getImageUrl } from "$lib/helpers";
	import { ProjectCard } from "$features";

	// console.log(data);

	const { projects } = data;
</script>

<svelte:head>
	<title>My Projects</title>
</svelte:head>

<div class="py-5">
	<h1 class="text-3xl font-bold">My Projects</h1>
</div>

{#if projects.length === 0}
	<div class="text-center mx-auto">
		<h2 class="text-xl mb-2">It seems that you don't have any projects</h2>
		<a
			href="/projects/new"
			class=" py-2 px-4 block border bg-blue-700 rounded text-blue-50 hover:bg-blue-600 transition duration-300 w-48 mx-auto"
			>Add one</a
		>
	</div>
{:else}
	<section class="grid grid-cols-3 gap-6">
		{#each projects as project}
			<ProjectCard {project} />
		{/each}
	</section>
{/if}
