<script>
	import { Input } from "$ui";
	export let form;
</script>

<svelte:head>
	<title>Login</title>
</svelte:head>

<section aria-label="login form">
	<div class="py-5 text-center">
		<h1 class="text-2xl font-bold">Login</h1>
		<p>
			Or <a href="/register" class="underline font-semibold text-blue-700">register</a> if you don't
			have an account
		</p>
	</div>
	<form action="?/login" method="POST" class="max-w-xl mx-auto">
		<Input
			name="email"
			type="email"
			label="Email"
			placeholder="Email"
			value={form?.data?.email ?? ""}
			errors={form?.errors?.email}
			required
		/>
		<!-- value={form?.data?.email ?? ""} -->
		<Input
			name="password"
			type="password"
			label="Password"
			placeholder="Password"
			errors={form?.errors?.password}
			required
		/>

		<button
			class="w-full py-2 px-4 border bg-blue-700 rounded text-blue-50 hover:bg-blue-600 transition duration-300"
			>Login</button
		>
	</form>
</section>
