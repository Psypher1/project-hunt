<script>
	export let data;
	import { Input } from "$ui";
</script>

<h2 class="text-lg font-semibold">Your Account</h2>

<form action="?/updateUsername" method="post" class="mt-8">
	<Input name="username" type="text" label="Username" value={data?.user?.username} disabled />
</form>
