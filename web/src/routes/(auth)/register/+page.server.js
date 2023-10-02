/** @type {import('./$types').PageServerLoad} */
import { error, redirect } from "@sveltejs/kit";
import { geenerateUsername } from "$lib/helpers";

export const actions = {
	register: async ({ locals, request }) => {
		const body = Object.fromEntries(await request.formData());

		let username = geenerateUsername(body.name.split(" ").join("")).toLowwercase();

		try {
			await locals.pb.collection("users").create({ username, ...body });
			await locals.pb.collection("user").requestVerification(body.email);
		} catch (err) {
			console.log("Error", err);
			throw error(500, "Something went wrong...");
		}

		throw redirect(303, "/login");
	}
};

export async function load() {
	return {};
}
