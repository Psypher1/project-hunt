<script>
	import { enhance, applyAction } from "$app/forms";
	import { invalidateAll } from "$app/navigation";

	import { Modal } from "$features";
	import { Input, Button } from "$ui";

	export let form;
	export let data;

	let emailModalOpen;
	$: emailModalOpen = false;

	let passwordModalOpen;
	$: passwordModalOpen = false;

	let loading;
	$: loading = false;

	function togglEmailModal() {
		emailModalOpen = !emailModalOpen;
	}
	function togglePasswordModal() {
		passwordModalOpen = !passwordModalOpen;
	}

	function submitUpdateEmail() {
		loading = true;
		emailModalOpen = true;

		return async ({ result }) => {
			switch (result.type) {
				case "success":
					await invalidateAll();
					emailModalOpen = false;
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
	<title>Settings - {data?.user?.name}</title>
</svelte:head>

<!-- NOTE: THIS DOES NOT WORK CURRENTLY -->

<h2 class="text-lg font-semibold">Configure Your Settings</h2>

<section class="mt-8">
	<button
		on:click={togglEmailModal}
		class="py-2 px-4 border bg-blue-700 rounded text-blue-50 hover:bg-blue-600 transition duration-300"
		>Change Email</button
	>

	<Modal title="Email Change" open={emailModalOpen} on:close={togglEmailModal}>
		<svelte:fragment slot="body">
			<form action="?/updateEmail" method="post" use:enhance={submitUpdateEmail} class="mx-auto">
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
		on:click={togglePasswordModal}
		class="py-2 px-4 border bg-blue-700 rounded text-blue-50 hover:bg-blue-600 transition duration-300"
		>Change Password</button
	>

	<Modal title="Change Password" open={passwordModalOpen} on:close={togglePasswordModal}>
		<svelte:fragment slot="body">
			<form action="">
				<Input name="oldPassword" label="Old Password" type="text" />
				<Input name="password" type="password" label="NPassword" placeholder="Password" required />
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
