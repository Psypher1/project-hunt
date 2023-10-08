<script>
	export let data;
	let { project } = data;
	import { getImageUrl } from "$lib/helpers";
	import { Input, Textarea } from "$ui";
</script>

<div class="py-5 text-center">
	<h1 class="text-3xl font-bold">Edit <span class="text-blue-700">{project.title}</span></h1>
	<p>How are we updating things?</p>
</div>

<form action="?/updateProject" method="POST" enctype="multipart/form-data" class="max-w-xl mx-auto">
	<Input
		name="title"
		type="text"
		value={project.title ?? ""}
		label="Project Title"
		placeholder="Project Title"
		required
	/>
	<Input
		name="tagline"
		type="text"
		value={project.tagline ?? ""}
		label="Project Tagline"
		placeholder="Project Tagline"
		required
	/>
	<Input
		name="link"
		type="text"
		value={project.link ?? ""}
		label="Project Link"
		placeholder="Project Link"
		required
	/>
	<Textarea
		name="description"
		type="text"
		value={project.description ?? ""}
		label="Project Description"
		placeholder="Project Description"
	/>
	<div class="flex gap-12 mb-3 items-center">
		{#if project.thumbnail}
			<div>
				<img
					src={getImageUrl(project.collectionId, project.id, project.thumbnail, "100x100")}
					alt=""
				/>
				<button formaction="?/delteThumbnail">del</button>
			</div>
		{/if}
		<Input name="thumbnail" type="file" label="Project Thumbnail" />
	</div>
	<button
		class="w-full py-2 px-4 border bg-blue-700 rounded text-blue-50 hover:bg-blue-600 transition duration-300"
		>Add Project</button
	>
</form>
