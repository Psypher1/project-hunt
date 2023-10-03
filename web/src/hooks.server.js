import Pocketbase from "pocketbase";
import { serialiseNonPOJO } from "$lib/helpers";

// const client = new PocketBase("http://127.0.0.1:8090")

export async function handle({ event, resolve }) {
	event.locals.pb = new Pocketbase("http://127.0.0.1:8090");
	// the cookie has to be loaded from headers to ensure authentication passes
	event.locals.pb.authStore.loadFromCookie(event.request.headers.get("cookie") || "");

	if (event.locals.pb.authStore.isValid) {
		//the structure returne from `locals.pb.authStore.model` is not correact format, it has to be serialized
		event.locals.user = serialiseNonPOJO(event.locals.pb.authStore.model);
	} else {
		event.locals.user = undefined;
	}

	const response = await resolve(event);

	response.headers.set("set-cookie", event.locals.pb.authStore.exportToCookie({ secure: false }));

	return response;
}
