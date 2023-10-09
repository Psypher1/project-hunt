/** @type {import('./$types').PageServerLoad} */
import { serialiseNonPOJO } from "$lib/helpers";
import { error } from "@sveltejs/kit";

export async function load({ locals, params }) {
	async function getProject(projectId) {
		try {
			const rawProject = await locals.pb.collection("projects").getOne(projectId);
			const project = serialiseNonPOJO(rawProject);

			return project;
		} catch (err) {
			console.log("Error: ", err);
			throw error(err.status, "Ain't no project here mayne");
		}
	}

	return {
		project: getProject(params.projectId)
	};
}
