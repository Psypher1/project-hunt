<script>
	import { Input } from "$ui";

	export let data;
	// export let form;
	let loading;
	$: loading = false;

	import { Modal } from "$features";

	let showModal = false;

	function handleToggleModal() {
		showModal = !showModal;
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
			<form action="?/updateUsername" method="post" class=" mx-auto">
				<Input
					name="username"
					label="Enter New Username"
					type="text"
					value={data?.user?.username}
				/>
				<button
					class="w-full py-2 px-4 border bg-blue-700 rounded text-blue-50 hover:bg-blue-600 transition duration-300"
					>Change Username</button
				>
			</form>
		</svelte:fragment>
	</Modal>
</section>
