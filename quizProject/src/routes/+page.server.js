import { redirect } from "@sveltejs/kit";

export async function load({ locals }) {
    // console.log(locals.user.email);
    //console.log(`${locals.user.email}`);
    // @ts-ignore
    if (locals.user) {
        console.log("signed in already");
        throw redirect(302, "/dashboard");
    }
}
