<script>
	export let data;

	let { project } = data;

	import { getImageUrl } from "$lib/helpers";
</script>

<svelte:head>
	<title>{project.title}</title>
</svelte:head>

<section class="p-4 shadow-md shadow-gray-400 border-gray-300 border">
	<div class="flex items-center gap-5">
		{#if project.thumbnail}
			<img
				src={project.thumbnail
					? getImageUrl(project.collectionId, project.id, project.thumbnail, "100x100")
					: ""}
				alt={project.title}
				class="w-24 h-24"
			/>
		{/if}
		<!-- content -->
		<div class="">
			<div class="mt-4 flex gap-4 items-end">
				<h1 class="text-3xl font-bold">{project.title}</h1>
				<!-- <a href={`/projects/${project.id}/edit`} class="text-blue-500 hover:text-blue-600">
					&#x270E; Edit</a
				> -->
			</div>
			<p class="mt-2">{project.tagline}</p>
			<a href={project.link} target="_blank" class="text-blue-600 underline">View Project</a>
		</div>
	</div>

	<div class="mt-4">
		<p class="max-w-prose">{project.description}</p>
	</div>
</section>
