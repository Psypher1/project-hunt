<script>
	import { page } from "$app/stores";
	const links = [
		{ label: "Profile", href: "/my/profile" },
		{ label: "Settings", href: "/my/settings" }
	];

	export let data;

	// console.log(data);
</script>

<div class="mb-4 py-2 border-b border-blue-600">
	<h1 class="font-bold text-2xl">{data.user.name}</h1>
</div>
<div class="flex">
	<aside class="px-2 py-1 w-48">
		{#each links as link}
			<a
				href={link.href}
				class={`mb-2 py-2 px-6 block bg-gray-200 hover:bg-blue-300 rounded ${
					$page.url.pathname === link.href ? "bg-blue-400 text-blue-50" : ""
				}`}>{link.label}</a
			>
		{/each}
	</aside>
	<section class="flex-1 border-gray-600 border p-4">
		<slot />
	</section>
</div>
