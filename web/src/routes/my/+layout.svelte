<script>
	import { page } from "$app/stores";
	const links = [
		{ label: "Profile", href: "/my/profile" },
		{ label: "Account", href: "/my/account" },
		{ label: "Settings", href: "/my/settings" }
	];

	export let data;

	// console.log(data);
</script>

<div class="mb-4 py-2 border-b-2 border-blue-600">
	<h1 class="font-semibold text-3xl">{data?.user?.name}</h1>
</div>
<div class="flex">
	<aside class="px-2 py-1 w-48">
		{#each links as link}
			<a
				href={link.href}
				class={`mb-2 py-2 px-6 block border border-gray-300 hover:bg-blue-400 rounded font-semibold ${
					$page.url.pathname === link.href ? "bg-blue-500 text-white " : ""
				}`}>{link.label}</a
			>
		{/each}
	</aside>
	<section class="w-[40rem] shadow-md shadow-gray-400 p-4">
		<slot />
	</section>
</div>
