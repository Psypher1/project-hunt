const { randomBytes } = import("node:crypto");

function serializeNonPOJO(obj) {
	// does the same as JSON.parse(JSON.stringify(obj))
	return structuredClone(obj);
}

function geenerateUsername(name) {
	const id = randomBytes(2).toString("hex");
	return `${name.slice(0, 5)}${id}`;
}

export { serializeNonPOJO, geenerateUsername };
