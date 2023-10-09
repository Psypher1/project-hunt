import { error, redirect } from "@sveltejs/kit";

import { serialiseNonPOJO } from "$lib/helpers";

export async function load({ locals }) {
	if (!locals.pb.authStore.isValid) {
		throw redirect(303, "/login");
	}

	async function getUsersProjects(userId) {
		try {
			const rawProjects = await locals.pb.collection("projects").getFullList(undefined, {
				filter: `user = "${userId}"`
			});
			const projects = serialiseNonPOJO(rawProjects);

			return projects;
		} catch (err) {
			console.log("Error: ", err);
			throw error(err.status, err.message);
		}
	}

	return {
		projects: getUsersProjects(locals.user.id)
	};
}

export const actions = {
	deleteProject: async function ({ locals, request }) {
		const { id } = Object.fromEntries(await request.formData());

		try {
			await locals.pb.collection("projects").delete(id);
		} catch (err) {
			console.log("Error: ", err);
			throw error(err.status, err.message);
		}
		return {
			success: true
		};
	}
};
