import { json } from '@sveltejs/kit';

export async function POST({ cookies }) {
    // Remove the session cookie
    cookies.delete('session', {
        path: '/', // Must match the original cookie path
        httpOnly: true,
        sameSite: 'lax',
        secure: process.env.NODE_ENV === 'production'
    });

    return json({ message: "Logged out" });
}
