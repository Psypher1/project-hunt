<script>
	/** @type {import('./$types').PageData} */
	import { Modal } from "$features";
	import { Input, Button } from "$ui";

	let emailModalOpen;
	$: emailModalOpen = false;

	let passwordModalOpen;
	$: passwordModalOpen;

	function handleToggleModal() {
		emailModalOpen = !emailModalOpen;
	}
	function handleTogglePasswordModal() {
		passwordModalOpen = !passwordModalOpen;
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
			<form action="?/updateEmail" class="mx-auto">
				<Input name="email" label="Eneter New Email" type="text" value={form?.data?.email} />
				<button
					class="w-full py-2 px-4 border bg-blue-700 rounded text-blue-50 hover:bg-blue-600 transition duration-300"
					>Update My Email</button
				>
			</form>
		</svelte:fragment>
	</Modal>
</section>

<section class="mt-8">
	<button
		on:click={handleTogglePasswordModal}
		class="py-2 px-4 border bg-blue-700 rounded text-blue-50 hover:bg-blue-600 transition duration-300"
		>Change Password</button
	>

	<Modal title="Change Password" open={passwordModalOpen} on:close={handleTogglePasswordModal}>
		<svelte:fragment slot="body">
			<form action="">
				<Input name="oldPassword" label="Old Password" type="text" />
				<Input name="password" type="password" label="Password" placeholder="Password" required />
				<Input
					name="passwordConfirm"
					type="password"
					label="Confirm New Password"
					placeholder="Confirm Password"
					required
				/>
				<Button classes="w-full">Change My Password</Button>
			</form>
		</svelte:fragment>
	</Modal>
</section>
