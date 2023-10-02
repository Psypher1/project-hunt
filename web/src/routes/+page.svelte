<script>
	import Input from "$ui/Input.svelte";
	import Textarea from "$ui/Textarea.svelte";

	import { score } from "../store";
	import { writable } from "svelte/store";

	// const score = writable(0);

	function add() {
		score.update((n) => n + 1);
	}

	let score_value;
	$: score_value;
	// score.subscribe((value) => {
	// 	score_value = value;
	// });
	$: scorePercentage = (score / 7) * 100;
</script>

<form action="" class="">
	<Input name="name" type="text" label="Name" placeholder="Name" required />
	<Textarea name="message" label="Message" placeholder="Message" required />
</form>
