import bcrypt from 'bcrypt';

const SALT_ROUNDS = 10;

// ✅ Hash password before storing it
// @ts-ignore
async function hashPassword(password) {
  return await bcrypt.hash(password, SALT_ROUNDS);
}

// ✅ Verify user password against the stored hash

// @ts-ignore
async function verifyPassword(password, hash) {
  return await bcrypt.compare(password, hash);
}

export { hashPassword, verifyPassword };
