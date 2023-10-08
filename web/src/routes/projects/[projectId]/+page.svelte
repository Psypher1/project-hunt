<script>
	export let data;

	let { project } = data;

	import { getImageUrl } from "$lib/helpers";
</script>

<svelte:head>
	<title>{project.title}</title>
</svelte:head>

<div class="p-4 shadow-md shadow-gray-400">
	<div class="mb-4">
		<img
			src={project.thumbnail
				? getImageUrl(project.collectionId, project.id, project.thumbnail, "100x100")
				: ""}
			alt=""
		/>
		<div class="mt-6 flex gap-4 items-end">
			<h1 class="text-3xl font-bold">{project.title}</h1>
			<a href={`/projects/${project.id}/edit`} class="text-blue-500 hover:text-blue-600">
				&#x270E; Edit</a
			>
		</div>
		<p>{project.tagline}</p>
		<!-- <p>{project.slug}</p> -->
		<a href={project.link} target="_blank" class="text-blue-600 underline">View Project</a>
	</div>

	<p>{project.description}</p>
</div>
