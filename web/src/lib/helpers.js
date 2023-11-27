const { randomBytes } = import("node:crypto");

function serialiseNonPOJO(obj) {
	// does the same as JSON.parse(JSON.stringify(obj))
	return structuredClone(obj);
}

function slugify(input) {
	if (!input) return "";

	// make lower case and trim
	let slug = input.toLowerCase().trim();

	//  remove accents from characters
	slug = slug.normalize("NFD").replace(/[\u0300-\u036f]/, "");

	// invalid chars with spaces
	slug = slug.replace(/[^a-z0-9\s-]/g, " ").trim();

	// multiple spaces or hyphens with hyphen
	slug = slug.replace(/[\s-]+/g, "-");

	return slug;
}

const dbUrl = "http://localhost:8090";

function getImageUrl(collectionId, recordId, filename, size = "0x0") {
	return `${dbUrl}/api/files/${collectionId}/${recordId}/${filename}?thumb=${size}`;
}

async function validateData(formData, schema) {
	const body = Object.fromEntries(formData);

	try {
		const data = schema.parse(body);
		return {
			formData: data,
			errors: null
		};
	} catch (err) {
		console.log("Errors: ", err);
		const errors = err.flatten();

		return {
			formData: body,
			errors
		};
	}
}

function geenerateUsername(name) {
	const id = randomBytes(2).toString("hex");
	return `${name.slice(0, 5)}${id}`;
}

export const generateUserAlt = (name) => {
	const id = randomBytes(2).toString("hex");
	return `${name.slice(0, 5)}${id}`;
};

export { serialiseNonPOJO, geenerateUsername, slugify, getImageUrl, validateData };
