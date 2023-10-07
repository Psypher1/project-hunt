/** @type {import('./$types').PageServerLoad} */
import { serialiseNonPOJO } from "$lib/helpers";
import { error } from "@sveltejs/kit";

export async function load({ locals, params }) {
	async function getProject(slug) {
		try {
			const rawProject = await locals.pb.collection("projects").getOne(slug);
			const project = serialiseNonPOJO(rawProject);

			return project;
		} catch (err) {
			console.log("Error: ", err);
			throw error(err.status, err.message);
		}
	}

	return {
		project: getProject(params.slug)
	};
}
