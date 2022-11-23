import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const randomISBN = (): string => {
  // Example -> 978-3-16-148410-0
  const n1 = Math.floor(Math.random() * (999 - 100) + 100);
  const n2 = Math.floor(Math.random() * (9 - 1) + 1);
  const n3 = Math.floor(Math.random() * (99 - 10) + 10);
  const n4 = Math.floor(Math.random() * (999999 - 100000) + 100000);
  const n5 = Math.floor(Math.random() * (9 - 0.1) + 0.1);
  
  return `${n1}-${n2}-${n3}-${n4}-${n5}`;
}
// The data will be seeded
const books = 30

async function main() {
  console.log(`Starting seed.`)

  for (let b = 1; b <= books; b++) {
    const name = `Book Name ${b}`;
    const author = `Author Name ${b}`;
    const ISBN = randomISBN();
    const inventory = Math.floor(Math.random() * (999 - 99) + 99);

    await prisma.book.create({
      data: {
        name,
        author,
        ISBN,
        inventory,
      }
    });

    console.log(
      `Create book ${b} with ${name} name, ${author} author, ${ISBN} ISBN and ${inventory} stock.`
    )
  }

  console.log(`Finishing seed`)
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