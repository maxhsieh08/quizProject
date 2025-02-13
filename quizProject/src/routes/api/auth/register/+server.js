import { connectDB } from '../../../../lib/server/db';
import { hashPassword } from '../../../../lib/server/auth';

export async function POST({ request }) {
  try {
    const client = await connectDB();
 
    const db = client.db("users");
    const usersCollection = db.collection("userInfo");

    const { email, password } = await request.json();

    // ✅ Check if email is already registered
    const existingUser = await usersCollection.findOne({ email });
    if (existingUser) {
      return new Response(JSON.stringify({ error: "Email already registered" }), { status: 400 });
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
