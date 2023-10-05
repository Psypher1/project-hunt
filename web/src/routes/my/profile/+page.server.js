import { error } from "@sveltejs/kit";

/** @type {import('./$types').PageServerLoad} */
export async function load() {
	return {};
}

export const actions = {
	updateProfile: async ({ locals, request }) => {
		let data = await request.formData();

		try {
			// destructure to ensure things get updated after from submission
			const { name, username } = await locals.pb.collection("users").update(locals?.user?.id, data);

			locals.user.name = name;
			locals.user.usernme = username;
		} catch (err) {
			console.log("Error", err);

			throw error(400, "Someting went ooof");
		}
		return {
			success: true
		};
	}
};
