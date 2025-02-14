import { connectDB } from '../../../../lib/server/db';
import { hashPassword, verifyPassword } from '../../../../lib/server/auth';

export async function POST ({ request, cookies }) {
    try {
        const client = await connectDB();

        const db = client.db("users");
        const userCollection = db.collection("userInfo");
    
        const { email, password } = await request.json();
    
        //search to see if user exists
        const existingUser = await userCollection.findOne({ email });
        if (!existingUser) {
            return new Response(JSON.stringify({ error: "email already registered" }), { status: 400 });
        }
        const userId = existingUser._id;
        const hashedPassword = existingUser.password;
        // console.log(hashedPassword);
        console.log(existingUser._id);
        if(!(await verifyPassword(password, hashedPassword))) {
            return new Response(JSON.stringify({error: "Password is incorrect"}), { status: 401 });
        }
        console.log(email);
        cookies.set("session", JSON.stringify({ email, userId }), {
            httpOnly: true,   // Prevents JavaScript access (security)
            path: "/",        // Cookie is valid on all routes
            maxAge: 3600,     // Expire after 1 hour (3600 seconds)
            sameSite: "strict"
          });
        return new Response(JSON.stringify({ message: "login successful!"}), { status: 200 });

    } catch(error) {
        console.log("error with signing in!");
        return new Response(JSON.stringify({ error: "login failed!"}), { status: 500 });
    }


}