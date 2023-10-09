<script>
	export let project;

	import { getImageUrl } from "$lib/helpers";

	import { Modal } from "$features";
	import { Input } from "$ui";

	let deleteModalOpen;
	$: deleteModalOpen = false;

	function toggleDeleteModal() {
		deleteModalOpen = !deleteModalOpen;
	}
</script>

<article class="mb-5 border border-gray=300 shadow-md shadow-gray-400 p-4">
	<img
		src={project.thumbnail
			? getImageUrl(project.collectionId, project.id, project.thumbnail, "100x100")
			: ""}
		alt={project.title}
		class="w-8 h-8"
	/>
	<h3 class="text-xl font-semibold hover:text-blue-800">
		<a href={`/projects/${project.id}`}>{project.title}</a>
	</h3>
	<p class="text-gray-800">{project.tagline}</p>

	<a href={`/projects/${project.id}/edit`}>Edit</a>
	<button on:click={toggleDeleteModal} class="text-red-600">Delete</button>

	<Modal title={`YEET ${project.title}`} open={deleteModalOpen} on:close={toggleDeleteModal}>
		<svelte:fragment slot="body">
			<h3 class="text-lg font-semibold">
				Are you sure you want to yeet this one? It can't be unyeeted afterwards
			</h3>
			<form action="?/deleteProject" method="post">
				<Input type="hidden" name="id" value={project.id} />
				<button
					class="py-2 px-4 border bg-red-700 rounded text-red-50 hover:bg-red-600 transition duration-300"
					>YEET!</button
				>
			</form>
		</svelte:fragment>
	</Modal>
</article>
