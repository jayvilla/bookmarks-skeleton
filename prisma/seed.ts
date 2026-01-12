import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  console.log('🌱 Starting seed...')

  // Create tags
  const webDevTag = await prisma.tag.upsert({
    where: { name: 'web-development' },
    update: {},
    create: { name: 'web-development' },
  })

  const reactTag = await prisma.tag.upsert({
    where: { name: 'react' },
    update: {},
    create: { name: 'react' },
  })

  const nextjsTag = await prisma.tag.upsert({
    where: { name: 'nextjs' },
    update: {},
    create: { name: 'nextjs' },
  })

  const typescriptTag = await prisma.tag.upsert({
    where: { name: 'typescript' },
    update: {},
    create: { name: 'typescript' },
  })

  const prismaTag = await prisma.tag.upsert({
    where: { name: 'prisma' },
    update: {},
    create: { name: 'prisma' },
  })

  const tutorialTag = await prisma.tag.upsert({
    where: { name: 'tutorial' },
    update: {},
    create: { name: 'tutorial' },
  })

  const documentationTag = await prisma.tag.upsert({
    where: { name: 'documentation' },
    update: {},
    create: { name: 'documentation' },
  })

  console.log('✅ Tags created')

  // Create bookmarks
  const bookmark1 = await prisma.bookmark.create({
    data: {
      url: 'https://nextjs.org/docs',
      title: 'Next.js Documentation',
      notes: 'Official Next.js documentation with guides and API reference',
      tags: {
        connect: [
          { name: 'nextjs' },
          { name: 'documentation' },
          { name: 'web-development' },
        ],
      },
    },
  })

  const bookmark2 = await prisma.bookmark.create({
    data: {
      url: 'https://www.prisma.io/docs',
      title: 'Prisma Documentation',
      notes: 'Learn how to use Prisma in your application',
      tags: {
        connect: [
          { name: 'prisma' },
          { name: 'documentation' },
        ],
      },
    },
  })

  const bookmark3 = await prisma.bookmark.create({
    data: {
      url: 'https://react.dev',
      title: 'React - The library for web and native user interfaces',
      notes: 'Official React documentation and learning resources',
      tags: {
        connect: [
          { name: 'react' },
          { name: 'web-development' },
          { name: 'documentation' },
        ],
      },
    },
  })

  const bookmark4 = await prisma.bookmark.create({
    data: {
      url: 'https://www.typescriptlang.org/docs/',
      title: 'TypeScript Documentation',
      notes: 'TypeScript handbook and reference documentation',
      tags: {
        connect: [
          { name: 'typescript' },
          { name: 'documentation' },
        ],
      },
    },
  })

  const bookmark5 = await prisma.bookmark.create({
    data: {
      url: 'https://nextjs.org/learn',
      title: 'Next.js Learn',
      notes: 'Interactive course to learn Next.js step by step',
      tags: {
        connect: [
          { name: 'nextjs' },
          { name: 'react' },
          { name: 'tutorial' },
          { name: 'web-development' },
        ],
      },
    },
  })

  console.log('✅ Bookmarks created')
  console.log(`📚 Created ${await prisma.bookmark.count()} bookmarks`)
  console.log(`🏷️  Created ${await prisma.tag.count()} tags`)
  console.log('✨ Seed completed successfully!')
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error('❌ Error during seed:', e)
    await prisma.$disconnect()
    process.exit(1)
  })
