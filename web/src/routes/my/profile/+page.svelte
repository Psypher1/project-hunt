<script>
	import { Input } from "$ui";

	export let data;
</script>

<svelte:head>
	<title>Profile - {data?.user?.name}</title>
</svelte:head>

<h2 class="text-xl font-semibold">Update Your Profile</h2>

<form action="?/updateProfile" method="post" class="mt-8">
	<Input name="username" type="text" label="Username" value={data?.user?.username} disabled />
	<Input name="name" type="text" label="Name" value={data?.user?.name} />
	<button
		class="w-full py-2 px-4 border bg-blue-700 rounded text-blue-50 hover:bg-blue-600 transition duration-300"
		>Update Profile</button
	>
</form>
