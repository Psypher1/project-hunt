import { writable } from "svelte/store";

function createCount() {
	const { subscribe, set, update } = writable(0);

	return {
		subscribe,
		increment: () => update((n) => n + 1),
		decrement: () => update((n) => n - 1),
		reset: () => set(0)
	};
}

function createScore() {
	const { subscribe, update } = writable(0);

	return {
		subscribe,
		increment: () => update((n) => n + 1)
	};
}

export const count = createCount();
export const score = createScore();
