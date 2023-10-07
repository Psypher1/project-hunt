/** @type {import('./$types').PageServerLoad} */
import { error, redirect } from "@sveltejs/kit";
import { slugify } from "$lib/helpers";

export async function load({ locals }) {
	if (!locals.pb.authStore.isValid) {
		throw redirect(303, "/login");
	}
}

//? A change of actions?

export const actions = {
	create: async ({ request, locals }) => {
		let formData = await request.formData();

		const thumbnail = formData.get("thumbnail");
		if (thumbnail.size === 0) {
			formData.delete("thumbnail");
		}
		// to ensure user is passed with request
		formData.append("user", locals.user.id);

		let title = formData.get("title");
		formData.append("slug", slugify(title));

		try {
			await locals.pb.collection("projects").create(formData);
		} catch (err) {
			console.log("Error: ", err);
			throw error(err.status, err.message);
		}

		throw redirect(303, "/");
	}
};
