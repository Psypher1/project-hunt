import { error, redirect } from "@sveltejs/kit";
import { serialiseNonPOJO } from "$lib/helpers";

export async function load({ locals, params }) {
	if (!locals.pb.authStore.isValid) {
		throw error(401, "Unauthorised");
	}

	try {
		const rawProject = await locals.pb.collection("projects").getOne(params.projectId);
		const project = serialiseNonPOJO(rawProject);

		if (locals.user.id === project.user) {
			return {
				project
			};
		} else {
			throw error(403, "Forbidden");
		}
	} catch (err) {
		console.log("Error: ", err);
		throw error(err.status, err.message);
	}
}

export const actions = {
	updateProject: async ({ locals, request, params }) => {
		let formData = await request.formData();

		const thumbnail = formData.get("thumbnail");
		if (thumbnail.size === 0) {
			formData.delete("thumbnail");
		}

		try {
			await locals.pb.collection("projects").update(params.projectId, formData);
		} catch (err) {
			console.log("Error: ", err);
			throw error(err.status, err.message);
		}

		throw redirect(303, `/projects/${params.projectId}`);
	},
	deleteThumbnail: async () => {}
};
