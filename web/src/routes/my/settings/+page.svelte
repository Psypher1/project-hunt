<script>
	/** @type {import('./$types').PageData} */
	import { Modal } from "$features";
	import { Input } from "$ui";

	let emailModalOpen;
	$: emailModalOpen = false;

	function handleToggleModal() {
		emailModalOpen = !emailModalOpen;
	}
	function handleTogglePasswordModal() {
		emailModalOpen = !emailModalOpen;
	}
	export let form;
</script>

<!-- NOTE: THIS DOES NOT WORK CURRENTLY -->

<h2 class="text-lg font-semibold">Configure Your Settings</h2>

<section class="mt-8">
	<button
		on:click={handleToggleModal}
		class="py-2 px-4 border bg-blue-700 rounded text-blue-50 hover:bg-blue-600 transition duration-300"
		>Change Email</button
	>

	<Modal title="Email Change" open={emailModalOpen} on:close={handleToggleModal}>
		<svelte:fragment slot="body">
			<form action="?/updateEmail" class=" mx-auto">
				<Input name="email" label="Change email" type="text" value={form?.data?.email} />
				<button
					class="w-full py-2 px-4 border bg-blue-700 rounded text-blue-50 hover:bg-blue-600 transition duration-300"
					>Change Email</button
				>
			</form>
		</svelte:fragment>
	</Modal>
</section>
