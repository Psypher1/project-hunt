<script>
	/** @type {import('./$types').PageData} */
	import { Modal } from "$features";
	import { Input } from "$ui";

	let showModal = false;

	function handleToggleModal() {
		showModal = !showModal;
	}
	function handleTogglePasswordModal() {
		showModal = !showModal;
	}
	export let data;
</script>

<h2 class="text-lg font-semibold">Configure Your Settings</h2>

<section class="mt-8">
	<button
		on:click={handleToggleModal}
		class="py-2 px-4 border bg-blue-700 rounded text-blue-50 hover:bg-blue-600 transition duration-300"
		>Change Email</button
	>

	<Modal title="Email Change" open={showModal} on:close={handleToggleModal}>
		<svelte:fragment slot="body">
			<form action="" class=" mx-auto">
				<Input name="email" label="Change email" type="text" value={data?.user?.email} />
				<button
					class="w-full py-2 px-4 border bg-blue-700 rounded text-blue-50 hover:bg-blue-600 transition duration-300"
					>Change Email</button
				>
			</form>
		</svelte:fragment>
	</Modal>
</section>
