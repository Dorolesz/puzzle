import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  await prisma.puzzle.createMany({
    data: [
      { id: 1, pictureUrl: 'https://picsum.photos/id/17/2500/1667', pieces: 2000, beforeChristmas: true },
      { id: 2, pictureUrl: 'https://picsum.photos/id/28/4928/3264', pieces: 1200, beforeChristmas: false },
      { id: 3, pictureUrl: 'https://picsum.photos/id/74/4288/2848', pieces: 30, beforeChristmas: false },
      { id: 4, pictureUrl: 'https://picsum.photos/id/75/1999/2998', pieces: 800, beforeChristmas: true },
      { id: 5, pictureUrl: 'https://picsum.photos/id/106/2592/1728', pieces: 1000, beforeChristmas: true },
      { id: 6, pictureUrl: 'https://picsum.photos/id/237/3500/2095', pieces: 2000, beforeChristmas: true },
    ],
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });