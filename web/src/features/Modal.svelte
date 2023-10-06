<script>
	import { createEventDispatcher } from "svelte";
	const dispatch = createEventDispatcher();
	export let open = false;

	export let title;
</script>

{#if open}
	<section
		class="modal z-50 fixed w-full h-full top-0 left-0 flex items-center justify-center p-4 lg:p-0"
	>
		<!-- overlay -->
		<div class="modal-overlay fixed h-full w-full bg-gray-900 opacity-50" />
		<!-- modal content -->
		<div
			class="bg-white w-full lg:h-max lg:w-1/2 mx-auto rounded-md shadow-xl z-50 overflow-y-auto"
		>
			<div class="head bg-gray-200 p-4 flex justify-between">
				<h3 class="text-lg font-semibold">{title}</h3>
				<button on:click={() => dispatch("close")} class="w-8 h-8 text-red-900 bg-red-300 rounded"
					>X</button
				>
			</div>
			<div class="content p-6">
				<slot name="body" />
			</div>
		</div>
	</section>
{/if}
