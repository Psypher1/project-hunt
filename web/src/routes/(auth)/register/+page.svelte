<script>
	/** @type {import('./$types').PageData} */
	import { Input } from "$ui";
	import { Textarea } from "$ui";
</script>

<svelte:head>
	<title>Register</title>
</svelte:head>

<div class="py-5 text-center">
	<h1 class="text-2xl font-semibold">Register</h1>
	<p>
		Or <a href="/login" class="underline font-semibold text-blue-700">login</a> if you already have an
		account
	</p>
</div>
<form action="?/register" method="POST" class="max-w-xl mx-auto">
	<Input name="name" type="text" label="Name" placeholder="Name" required />
	<Input name="email" type="text" label="Email" placeholder="Email" required />
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
