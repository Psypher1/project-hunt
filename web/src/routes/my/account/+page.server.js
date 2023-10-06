import { error } from "@sveltejs/kit";

/** @type {import('./$types').PageServerLoad} */
export async function load() {
	return {};
}

export const actions = {
	updateUsername: async ({ request, locals }) => {
		let data = Object.fromEntries(await request.formData());

		try {
			await locals.pb.collection("users").getFirstListItem(`username = "${data.username}"`);
		} catch (err) {
			if (err.status === 404) {
				try {
					const { username } = await locals.pb
						.collection("users")
						.update(locals.user.id, { username: data.username });
					locals.user.username = username;
					return {
						success: true
					};

					// const { username } = await locals.pb
					// 	.collection("users")
					// 	.update(locals.user.id, { username: data.username });
					// locals.user.username = username;
					// return {
					// 	success: true
					// };
				} catch (err) {
					console.log("Error", err);
					throw error(400, "Somehting blew up changing your username");
				}
			}
			console.log("Error", err);
			throw error(err.status, err.message);
		}
	}
};
