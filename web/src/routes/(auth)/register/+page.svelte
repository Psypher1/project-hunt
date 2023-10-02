<script>
	/** @type {import('./$types').PageData} */
	import { Input } from "$ui";
	import { Textarea } from "$ui";
</script>

<svelte:head>
	<title>Register</title>
</svelte:head>

<form action="" class="max-w-xl mx-auto">
	<Input name="name" type="text" label="Name" placeholder="Name" required />
	<Input name="password" type="password" label="Password" placeholder="Password" required />
	<Input
		name="confirmPassword"
		type="password"
		label="Confirm Password"
		placeholder="Confirm Password"
		required
	/>
	<button
		class="py-2 px-4 border bg-blue-700 rounded text-blue-50 hover:bg-blue-600 transition duration-300"
		>Register</button
	>
</form>
