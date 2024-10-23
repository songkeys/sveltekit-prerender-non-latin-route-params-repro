import type { PageLoad } from "./$types";

export const prerender = true;

export const load: PageLoad = () => {
	return {
		slugs: ["latin", "中文", "😄"],
	};
};
