import { error } from "@sveltejs/kit";

/** @type {import('./$types').PageServerLoad} */
export async function load() {
	return {};
}

export const actions = {
	updateEmail: async ({ locals, request }) => {
		let data = Object.fromEntries(await request.formData());

		try {
			await locals.pb.collection("users").requestEmail(data.email);
		} catch (err) {
			throw error(err.status, err.message);
		}
		return {
			success: true
		};
	}
};
