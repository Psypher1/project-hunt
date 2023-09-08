<script>
	import Input from "$ui/Input.svelte";
	import Textarea from "$ui/Textarea.svelte";
</script>

<h1 class="text-4xl">Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

<form action="">
	<Input name="name" type="text" label="Name" placeholder="Name" required />
	<Textarea name="message" label="Message" placeholder="Message" />
</form>
