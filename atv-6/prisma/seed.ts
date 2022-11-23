import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

// How many students will be seeded
const students = 45

async function main() {
  console.log(`Start seeding ...`);

  for (let s = 1; s <= students; s++) {
    const first_name = `Seed`;
    const last_name = `Data`;
    const age = Number(Math.floor(Math.random() * (19 -  14) + 14));
    const classroom = Number(Math.floor(Math.random() * (14 -  2) + 2));
    let matriculation = String(Math.floor(Math.random() * (999999 -  111111) + 111111));
    
    //////////////////////////////////////////////////////////////
    // This is for the StudentRepository unit tests. DO NOT CHANGE
    if (s === 1) matriculation = '188245';
    if (s === 2) matriculation = '648500';
    // This is for the CreateService unit tests. DO NOT CHANGE
    if (s === 3) matriculation = '949811';
    // This is for the ShowService unit tests. DO NOT CHANGE
    if (s === 4) matriculation = '243248';
    // This is for the UpdateService unit tests. DO NOT CHANGE
    if (s === 5) matriculation = '578465';
    // This is for the DeleteService unit tests. DO NOT CHANGE
    if (s === 6) matriculation = '139504';
    //////////////////////////////////////////////////////////////

    await prisma.student.create({
      data: {
        first_name,
        last_name,
        age,
        classroom,
        matriculation,
      }
    });

    console.log(`
      Created student with name ${first_name + ' ' + last_name}, age ${age},
      ${classroom} classroom and ${matriculation} matriculation.`);
  }

  console.log(`Seeding finished.`);
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })