export function load({ cookies }) {
	const visited = cookies.get('visited');
	cookies.set("visited", "yes")
	console.log(visited);

	return {
		visited
	};
}