
export async function load({ locals }) {
    // Get user from locals (set in hooks)
    // @ts-ignore
    if (!locals.user) {
        return { user: null };
    }

    // @ts-ignore
    return { user: locals.user }; // User session data
}

