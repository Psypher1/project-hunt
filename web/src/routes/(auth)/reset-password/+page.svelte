<script>
	/** @type {import('./$types').PageData} */
	import { Input } from "$ui";
</script>

<section class="py-5">
	<h1 class="text-2xl font-semibold text-center">Oops, you forgot how to get back in</h1>
	<p class="text-center">No worries, we'll send your a reset link</p>

	<form action="?/login" method="POST" class="max-w-xl mx-auto mt-8">
		<Input name="email" type="text" label="Email" placeholder="Email" required />

		<button
			class="w-full py-2 px-4 border bg-blue-700 rounded text-blue-50 hover:bg-blue-600 transition duration-300 text-sm uppercase"
			>Send Password Reset Link</button
		>
	</form>
</section>
