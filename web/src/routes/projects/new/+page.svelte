<script>
	import { enhance, applyAction } from "$app/forms";
	import { invalidateAll } from "$app/navigation";

	import { Input, Textarea } from "$ui";

	let loading;
	$: loading = false;

	function addProjectHandler() {
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

<svelte:head>
	<title>Add Project</title>
</svelte:head>

<div class="py-5 text-center">
	<h1 class="text-3xl font-bold">Add Your Project</h1>
	<p>Tell us about the cool thing you made.</p>
</div>

<form
	action="?/create"
	method="POST"
	use:enhance={addProjectHandler}
	enctype="multipart/form-data"
	class="max-w-xl mx-auto"
>
	<Input
		name="title"
		type="text"
		label="Project Title"
		placeholder="Project Title"
		required
		disabled={loading}
	/>
	<Input
		name="tagline"
		type="text"
		label="Project Tagline"
		placeholder="Project Tagline"
		required
		disabled={loading}
	/>
	<Input
		name="link"
		type="text"
		label="Project Link"
		placeholder="Project Link"
		required
		disabled={loading}
	/>
	<Textarea
		name="description"
		type="text"
		label="Project Description"
		placeholder="Project Description"
		disabled={loading}
	/>
	<Input name="thumbnail" type="file" label="Project Thumbnail" />

	<button
		class="w-full py-2 px-4 border bg-blue-700 rounded text-blue-50 hover:bg-blue-600 transition duration-300"
		disabled={loading}>{loading ? "Loading..." : "Add Project"}</button
	>
</form>
