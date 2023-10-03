/** @type {import('./$types').PageServerLoad} */
import { error, redirect } from "@sveltejs/kit";
// import { geenerateUsername } from "$lib/helpers";

export const actions = {
	register: async ({ locals, request }) => {
		// we run Object.fromEntries to avoid having to individually specifying form fields
		// const formData = await request.formData()
		// const data = Object.fromEntries({...formData})
		// let username = geenerateUsername(body.name.split(" ").join("")).toLowwercase();

		const body = Object.fromEntries(await request.formData());
		let username = body.name.split(" ").join("");
		username = username.toLowerCase();

		console.log(body, username);

		try {
			await locals.pb.collection("users").create({ username, ...body });

			// for email verification
			// await locals.pb.collection("user").requestVerification(body.email);

			locals.pb.authStore.clear();
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
