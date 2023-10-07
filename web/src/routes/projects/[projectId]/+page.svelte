<script>
	export let data;

	let { project } = data;
</script>

<svelte:head>
	<title>{project.title}</title>
</svelte:head>

<div class="py-5">
	<h1 class="text-3xl font-bold">{project.title}</h1>
	<p>{project.tagline}</p>
	<p>{project.slug}</p>
	<a href={project.link}>View Project</a>
</div>

<div>
	<p>{project.description}</p>
</div>
