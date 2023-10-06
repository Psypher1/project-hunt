<script>
	import "../style.css";
	export let data;

	// let { name, username, email } = data.user;
	// $: ({ name, username, email } = data.user);
	let showDropdown = false;
	function handleShowDropdown() {
		showDropdown = !showDropdown;
	}
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
				<div class="relative">
					<button
						on:click={handleShowDropdown}
						class="rounded py-2 px-4 hover:shadow-md hover:shadow-gray-400 font-semibold text-xl"
						>{data.user.name.split(" ")[0]} &darr;</button
					>

					<div
						class={`absolute transition duration-500 ease-out top-10 right-0 shadow-md shadow-gray-500 font-medium border border-gray-400 bg-white p-2 space-y-2 ${
							showDropdown ? "block" : "hidden"
						}`}
					>
						<a on:click={handleShowDropdown} href="/my/profile" class="hover:bg-blue-300 py-1 px-4"
							>Profile</a
						>

						<form action="/logout" method="post">
							<button class="py-1 px-4 hover:bg-gray-200">Logout</button>
						</form>
					</div>
				</div>
			</div>
		{/if}
	</nav>
</header>

<main class="container mx-auto py-8 px-6 sm:px-0">
	<slot />
</main>
