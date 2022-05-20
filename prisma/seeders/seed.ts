import { prisma } from '../../src/prisma';

const taskData = [
  {
    task: 'Task 1',
    status: 0,
  },
  {
    task: 'Task seed 2',
    status: 1,
  },
  {
    task: 'Todo list',
    status: 2,
  },
  {
    task: 'Task 332432',
    status: 0,
  },
];

const userData = [
  { username: 'userTest 1', name: 'Teste', job: 'Secretary' },
  { username: 'userTest 2', name: 'Teste', job: null },
  { username: 'userTest 3', name: 'Teste', job: null },
];

async function main() {
  console.log('Start seeding ...');
  for (const t of taskData) {
    const task = await prisma.task.create({
      data: t,
    });
    console.log(`Created task with id: ${task.id}`);
  }
  for (const u of userData) {
    const user = await prisma.user.create({
      data: u,
    });
    console.log(`Created user with id: ${user.id}`);
  }
  console.log('Seeding finished.');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
