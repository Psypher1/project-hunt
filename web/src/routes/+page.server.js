import { error } from "@sveltejs/kit";

/** @type {import('./$types').PageServerLoad} */
export async function load({ locals }) {
	async function getProjects() {
		try {
			const projects = await locals.pb.collection("projects").getFullList(undefined);

			return projects;
		} catch (err) {
			console.log("Error: ", err);
			throw error(err.status, err.message);
		}
	}

	return {
		projects: getProjects()
	};
}
