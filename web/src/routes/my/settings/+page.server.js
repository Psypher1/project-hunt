import { error, redirect } from "@sveltejs/kit";

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
	},

	updatePassword: async ({ locals, request }) => {
		const data = Object.fromEntries(await request.formData());
		try {
			await locals.pb.collection("users").update(locals?.user?.id, data);

			// log user out if sucessful
			locals.pb.authStore.clear();
		} catch (err) {
			console.log("Error", err);
			throw error(err.status, err.message);
		}
		throw redirect(303, "/login");
	}
};
