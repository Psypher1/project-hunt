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

<section>
	<h1>Project Hunt</h1>
	<p>A wealth of projects to contribute to</p>
</section>
