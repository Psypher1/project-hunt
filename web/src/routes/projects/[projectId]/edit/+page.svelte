<script>
	import { enhance, applyAction } from "$app/forms";
	import { invalidateAll } from "$app/navigation";

	export let data;
	let { project } = data;

	import { getImageUrl } from "$lib/helpers";
	import { Input, Textarea } from "$ui";

	let loading;
	$: loading = false;

	function editProjectHandler() {
		loading = true;
		return async ({ result }) => {
			switch (result.type) {
				case "success":
					await invalidateAll();
					break;
				case "error":
					break;
				default:
					await applyAction(result);
			}
			loading = false;
		};
	}
</script>

<div class="py-5 text-center">
	<h1 class="text-3xl font-bold">Edit <span class="text-blue-700">{project.title}</span></h1>
	<p>How are we updating things?</p>
</div>

<form
	action="?/updateProject"
	method="POST"
	use:enhance={editProjectHandler}
	enctype="multipart/form-data"
	class="max-w-xl mx-auto"
>
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
		disabled={loading}
		required
	/>
	<Input
		name="link"
		type="text"
		value={project.link ?? ""}
		label="Project Link"
		placeholder="Project Link"
		disabled={loading}
		required
	/>
	<Textarea
		name="description"
		type="text"
		value={project.description ?? ""}
		label="Project Description"
		placeholder="Project Description"
		disabled={loading}
	/>
	<div class="flex gap-12 mb-3 items-center">
		{#if project.thumbnail}
			<div class="flex flex-col gap-2 justify-center">
				<img
					src={getImageUrl(project.collectionId, project.id, project.thumbnail, "100x100")}
					alt=""
					class="w-8 h-8"
				/>
				<button
					formaction="?/deleteThumbnail"
					class=" text-red-500 bg-red-100 py-1 px-3 rounded font-semibold">del</button
				>
			</div>
		{/if}
		<Input name="thumbnail" type="file" label="Project Thumbnail" />
	</div>
	<button
		class="w-full py-2 px-4 border bg-blue-700 rounded text-blue-50 hover:bg-blue-600 transition duration-300"
		>Update Project</button
	>
</form>
