import { PrismaClient } from '@prisma/client';
import * as bcrypt from 'bcrypt';

const prisma = new PrismaClient();

async function main() {
  // Create a sample user first
  const hashedPassword = await bcrypt.hash('password123', 10);
  
  const user = await prisma.user.upsert({
    where: { email: 'john@example.com' },
    update: {},
    create: {
      name: 'John Doe',
      email: 'john@example.com',
      password: hashedPassword,
    },
  });

  console.log('User created:', user.email);

  // Create articles linked to the user
  const articles = [
    {
      title: 'Getting started with Median',
      description: 'Intro article for the Median app',
      body: 'This is the first article body.',
      published: true,
      authorId: user.id,
    },
    {
      title: 'Second thoughts',
      description: null,
      body: 'Another example article body.',
      published: false,
      authorId: user.id,
    },
  ];

  for (const a of articles) {
    // upsert in case seed is run multiple times
    await prisma.article.upsert({
      where: { title: a.title },
      update: a,
      create: a,
    });
  }

  console.log('Seeding finished. Articles created.');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
