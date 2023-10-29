<script>
	export let title;
	export let description;

	export let metaTitle = title ? `${title} - Project Hunt` : "Project Hunt";
</script>

<svelte:head>
	<title>{metaTitle}</title>
	<meta name="title" content={metaTitle} />
	<meta name="description" content={description} />
</svelte:head>
