<script>
	/** @type {import('./$types').PageData} */
	// export let data;

	import { HeadingOne, HeadingTwo } from "$ui/headings";
	import { Input } from "$ui";
</script>

<div class="py-5 text-center">
	<h1 class="text-3xl font-bold">Add Your Project</h1>
	<p>Tell us about the cool thing you made.</p>
</div>

<form action="?/create" method="POST" class="max-w-xl mx-auto">
	<Input name="title" type="text" label="Project Title" placeholder="Project Title" required />
	<Input name="link" type="text" label="Project Link" placeholder="Project Link" required />
	<Input
		name="tagline"
		type="text"
		label="Project Tagline"
		placeholder="Project Tagline"
		required
	/>
	<textarea name="description" id="" cols="30" rows="10" />

	<button
		class="w-full py-2 px-4 border bg-blue-700 rounded text-blue-50 hover:bg-blue-600 transition duration-300"
		>Login</button
	>
</form>
