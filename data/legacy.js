import faker from 'faker'

const legacyData = new Array(5).fill('---').map((_, i) => ({
  id: faker.random.uuid(),
  name: `Pokemon #${i + 1}`,
  images: {
    front: faker.image.imageUrl()
  },
  legacyMoveset: new Array(i + 1).fill('---').map((_, j) => ({
    name: `LegacyMoveset #${i + 1}${j + 1}`,
    id: faker.random.uuid(),
    kind: (i + 1 + (j + 1)) % 2 ? 'quick' : 'charge'
  }))
}))

export default legacyData
