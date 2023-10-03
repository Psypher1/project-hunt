<script>
	import "../style.css";
	export let data;

	// let { name, username, email } = data.user;
	// $: ({ name, username, email } = data.user);
</script>

<header class="container mx-auto py-5 border-b border-blue-300 px-4 md:px-0">
	<nav class="flex items-center justify-between">
		<a href="/" class="text-2xl font-semibold text-blue-800">Project Hunt</a>
		{#if !data.user}
			<div class="flex gap-4">
				<a
					href="/login"
					class="py-2 px-4 border border-blue-400 rounded hover:text-blue-700 text-blue-500 transition duration-300"
					>Login</a
				>
				<a
					href="/register"
					class="py-2 px-4 border bg-blue-700 rounded text-blue-50 hover:bg-blue-600 transition duration-300"
					>Register</a
				>
			</div>
		{:else}
			<div class="flex items-center gap-4">
				<a
					href="/projects/new"
					class=" py-2 px-4 border bg-blue-700 rounded text-blue-50 hover:bg-blue-600 transition duration-300"
					>Add Project</a
				>
				<div class="w-8 h-8 rounded-full bg-blue-800" />

				<form action="/logout" method="post">
					<button>Logout</button>
				</form>
			</div>
		{/if}
	</nav>
</header>

<main class="container mx-auto py-8 px-6 sm:px-0">
	<slot />
</main>
