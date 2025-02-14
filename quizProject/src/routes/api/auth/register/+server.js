import { connectDB } from '../../../../lib/server/db';
import { hashPassword } from '../../../../lib/server/auth';

export async function POST({ request }) {
  try {
    const client = await connectDB();
 
    const db = client.db("users");
    const usersCollection = db.collection("userInfo");

    const { email, password } = await request.json();

        // ✅ Validation: Check username length
    if (!email || email.trim().length < 1) {
      return new Response(JSON.stringify({ error: "Username must be at least 1 character" }), { status: 400 });
    }

    // ✅ Validation: Check password length
    if (!password || password.length < 5) {
      return new Response(JSON.stringify({ error: "Password must be at least 5 characters" }), { status: 400 });
    }
    // ✅ Check if email is already registered
    const existingUser = await usersCollection.findOne({ email });
    if (existingUser) {
      return new Response(JSON.stringify({ error: "Username already registered" }), { status: 400 });
    }

    // ✅ Hash the password
    const hashedPassword = await hashPassword(password);

    // ✅ Store the new user
    const newUser = { email, password: hashedPassword, createdAt: new Date() };
    await usersCollection.insertOne(newUser);

    return new Response(JSON.stringify({ message: "User registered successfully!" }), { status: 201 });
  } catch (error) {
    console.error("Registration Error:", error);
    return new Response(JSON.stringify({ error: "Failed to register user" }), { status: 500 });
  }
}
