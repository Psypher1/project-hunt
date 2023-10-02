<script>
	/** @type {import('./$types').PageData} */
	import { score } from "../../store";
</script>

<div class="mt-8">
	<p>Score: {$score}</p>
	<button on:click={score.increment}>Add</button>
</div>
