<script>
	import "../style.css";
	import { onMount } from "svelte";
	import toast, { Toaster } from "svelte-french-toast";
	import toast_ from "svelte-french-toast";
	export let data;

	import { page } from "$app/stores";

	import { getImageUrl } from "$lib/helpers";

	const links = [
		{ label: "My Projects", href: "/my/projects" },
		{ label: "Profile", href: "/my/profile" }
	];

	// let { name, username, email } = data.user;
	// $: ({ name, username, email } = data.user);
	let showDropdown = false;
	function handleShowDropdown() {
		showDropdown = !showDropdown;
	}

	onMount(() => {
		toast.success("This site uses cookies to enhance user experience.", {
			icon: "ℹ️"
			// position: "bottom-center"
		});
	});
</script>

<Toaster />
<header class="container mx-auto py-4 border-b border-blue-300 px-4 md:px-0">
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
						class="rounded-full p-2 hover:shadow-md hover:shadow-gray-400 font-semibold text-xl"
					>
						<img
							src={data?.user?.avatar
								? getImageUrl(data?.user?.collectionId, data.user?.id, data.user?.avatar)
								: "/images/meerkat.jpg"}
							class="w-10 h-10 object-cover rounded-full"
							alt="user avatar"
						/>
						<!-- {data.user.name.split(" ")[0]} &darr; -->
					</button>

					<div
						class={`absolute transition duration-500 ease-out top-10 right-0 shadow-md shadow-gray-500 font-medium border border-gray-400 bg-white p-2 space-y-2 ${
							showDropdown ? "block" : "hidden"
						}`}
					>
						<!-- <a on:click={handleShowDropdown} href="/my/profile" class="hover:bg-blue-300 py-1 px-5"
							>Profile</a
						> -->
						{#each links as link}
							<a
								on:click={handleShowDropdown}
								href={link.href}
								class={`hover:bg-blue-400 block py-2 px-5 whitespace-nowrap border border-gray-300 rounded font-medium ${
									$page.url.pathname === link.href ? "bg-blue-500 text-white " : ""
								}`}>{link.label}</a
							>
						{/each}

						<form action="/logout" method="post">
							<button class="py-1 px-5 block w-full hover:bg-gray-200">Logout</button>
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
