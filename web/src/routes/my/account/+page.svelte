<script>
	import { enhance, applyAction } from "$app/forms";
	import { invalidateAll } from "$app/navigation";

	import { Input } from "$ui";
	import { Modal } from "$features";

	export let data;
	// export let form;
	let loading;
	$: loading = false;

	let showModal;
	$: showModal = false;

	function handleToggleModal() {
		showModal = !showModal;
	}

	function submitUpdatUsername() {
		loading = true;
		showModal = true;

		return async ({ result }) => {
			switch (result.type) {
				case "success":
					await invalidateAll();
					showModal = false;
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

<h2 class="text-lg font-semibold">Your Account</h2>

<section class="mt-8">
	<Input name="username" type="text" label="Username" value={data?.user?.username} disabled />

	<button
		on:click={handleToggleModal}
		class="py-2 px-4 border bg-blue-700 rounded text-blue-50 hover:bg-blue-600 transition duration-300"
		>Change Username</button
	>

	<Modal title="Username Change" open={showModal} on:close={handleToggleModal}>
		<svelte:fragment slot="body">
			<form
				action="?/updateUsername"
				method="post"
				use:enhance={submitUpdatUsername}
				class=" mx-auto"
			>
				<Input
					name="username"
					label="Enter New Username"
					type="text"
					value={data?.user?.username}
					disabled={loading}
				/>
				<button
					class="w-full py-2 px-4 border bg-blue-700 rounded text-blue-50 hover:bg-blue-600 transition duration-300"
					disabled={loading}>{loading ? "Loading..." : "Change Username"}</button
				>
			</form>
		</svelte:fragment>
	</Modal>
</section>
