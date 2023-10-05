<script>
	import { Input } from "$ui";

	export let data;
	let loading;
	$: loading = false;
</script>

<h2 class="text-lg font-semibold">Your Account</h2>

<form class="mt-8">
	<Input name="username" type="text" label="Username" value={data?.user?.username} disabled />
	<button
		class="w-full py-2 px-4 border bg-blue-700 rounded text-blue-50 hover:bg-blue-600 transition duration-300"
		>Change Username</button
	>
</form>
