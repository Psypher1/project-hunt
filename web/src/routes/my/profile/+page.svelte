<script>
	import { enhance, applyAction } from "$app/forms";
	import { invalidateAll } from "$app/navigation";

	import { Input } from "$ui";
	import { getImageUrl } from "$lib/helpers";

	export let data;
	let { user } = data;

	function showPreview(event) {
		const target = event.target;
		const files = target.files;

		if (files.length > 0) {
			const src = URL.createObjectURL(files[0]);
			const preview = document.querySelector(".avatar-preview");
			preview.src = src;
		}
	}

	let loading;
	$: loading = false;

	function submitUpdateHandler() {
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
	<title>Profile - {user?.name}</title>
</svelte:head>

<h2 class="text-lg font-semibold">Update Your Profile</h2>

<form
	action="?/updateProfile"
	method="post"
	enctype="multipart/form-data"
	use:enhance={submitUpdateHandler}
	class="mt-8"
>
	<!-- <div class="w-32 h-32 rounded-full bg-blue-800 mb-2" /> -->
	<div class="mb-2">
		<img
			src={user?.avatar
				? getImageUrl(data?.user?.collectionId, data.user?.id, data.user?.avatar)
				: "/images/meerkat.jpg"}
			class="avatar-preview w-32 h-32 object-cover rounded-full"
			alt="avatar"
		/>
		<!-- https://ui-avatars.com/api/?name=${user.name} -->
		<Input name="avatar" type="file" accept="image/*" on:change={showPreview} />
	</div>
	<Input name="username" type="text" label="Username" value={data?.user?.username} disabled />
	<Input name="name" type="text" label="Name" value={data?.user?.name} disabled={loading} />
	<button
		class="w-full py-2 px-4 border bg-blue-700 rounded text-blue-50 hover:bg-blue-600 transition duration-300"
		disabled={loading}>{loading ? "Loading..." : "Update Profile"}</button
	>
</form>
