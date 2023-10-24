import Pocketbase from "pocketbase";
import { serialiseNonPOJO } from "$lib/helpers";

import { PUBLIC_PB_HOST } from "$env/static/public";
// const client = new PocketBase("http://127.0.0.1:8090")

export async function handle({ event, resolve }) {
	event.locals.pb = new Pocketbase(PUBLIC_PB_HOST);
	// the cookie has to be loaded from headers to ensure authentication passes
	event.locals.pb.authStore.loadFromCookie(event.request.headers.get("cookie") || "");

	/*
	 * Ensure Cookie is current
	 */

	try {
		// get up to date cook
		if (event.locals.pb.authStore.isValid) {
			await event.locals.pb.collection("users").authRefresh();
		}
	} catch (_) {
		// clear the auth store on failed refresh
		event.locals.pb.authStore.clear();
	}

	if (event.locals.pb.authStore.isValid) {
		//the structure returned from `locals.pb.authStore.model` is not correact format, it has to be serialized
		event.locals.user = serialiseNonPOJO(event.locals.pb.authStore.model);
	} else {
		event.locals.user = undefined;
	}

	const response = await resolve(event);

	// TODO Secure before deploying
	response.headers.set("set-cookie", event.locals.pb.authStore.exportToCookie({ secure: false }));

	return response;
}
