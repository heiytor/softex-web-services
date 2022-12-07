import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function main() {
    for (let i = 0; i <= 10; i++) {
      const email = `test${i}@email.com`;
      const username = `username_${i}`;
      const password_hash = `admin`;

      await prisma.user.create({
        data: {
          email,
          username,
          password_hash
        }
      })
    }
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })