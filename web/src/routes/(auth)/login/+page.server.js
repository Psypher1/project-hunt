import { error, redirect, invalid } from "@sveltejs/kit";
import { validateData } from "$lib/helpers.js";
import { loginUserSchema } from "$lib/schema.js";

export const actions = {
	login: async ({ locals, request }) => {
		// const body = Object.fromEntries(await request.formData());

		// * now using validation
		const { formData, errors } = await validateData(await request.formData(), loginUserSchema);

		if (errors) {
			return invalid(400, {
				data: formData,
				errors: errors.fieldErrors
			});
		}

		try {
			await locals.pb.collection("users").authWithPassword(formData.email, formData.password);

			/* 
			! For the fact that this requires an email service, I most likely won't implement
			if did the email verification stuff
			if (!locals.pb?.authStore?.model.verified) {
				locals.pb.authStore.clear();
				return {
					notVerifie: true
				};
			}
			*/
		} catch (err) {
			console.log("Error", err);
			throw error(500, "It all went tits up...");
		}

		throw redirect(303, "/");
	}
};
