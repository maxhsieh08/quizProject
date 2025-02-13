import { connectDB } from '../../../../lib/server/db';
import { hashPassword, verifyPassword } from '../../../../lib/server/auth';

export async function POST ({ request }) {
    try {
        const client = await connectDB();

        const db = client.db("users");
        const userCollection = db.collection("userInfo");
    
        const { email, password } = await request.json();
    
        //search to see if user exists
        const existingUser = await userCollection.findOne({ email });
        if (!existingUser) {
            return new Response(JSON.stringify({ error: "Email already registered" }), { status: 400 });
        }
        const hashedPassword = existingUser.password;
        console.log(hashedPassword);
        if(!(await verifyPassword(password, hashedPassword))) {
            return new Response(JSON.stringify({error: "Password is incorrect"}), { status: 401 });
        }

        return new Response(JSON.stringify({ message: "login successful!"}), { status: 200 });

    } catch(error) {
        console.log("error with signing in!");
        return new Response(JSON.stringify({ error: "login failed!"}), { status: 500 });
    }


}