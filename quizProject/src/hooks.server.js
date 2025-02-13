import { connectDB, closeDB } from '../src/lib/server/db.js';

export async function handle({ event, resolve }) {
  await connectDB(); // Ensures MongoDB is connected before handling any request
  return await resolve(event); // Passes the request to the next step (API route or frontend)
}

// Gracefully close the database when stopping the server
process.on('SIGINT', async () => {
  console.log("Shutting down server...");
  await closeDB();
  process.exit(0);
});

process.on('SIGTERM', async () => {
  console.log("Server is stopping...");
  await closeDB();
  process.exit(0);
});
