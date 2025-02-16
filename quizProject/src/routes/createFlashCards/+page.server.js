import { redirect } from "@sveltejs/kit";

export async function load({ locals }) {
    // @ts-ignore
    if (!locals.user) {
        console.log("User is not logged in, redirecting to login...");
        throw redirect(302, "/");
    } else {
        // @ts-ignore
        return { user: locals.user };
    }
    
}