import { redirect } from "@sveltejs/kit";

export async function load({ locals }) {
    // @ts-ignore
    if (locals.user) {
        throw redirect(302, "/dashboard");
    }
}
