import {
  positionDescriptions,
  positionDescription,
  createPositionDescription,
  updatePositionDescription,
  deletePositionDescription,
} from './positionDescriptions'

describe('positionDescriptions', () => {
  scenario('returns all positionDescriptions', async (scenario) => {
    const result = await positionDescriptions()

    expect(result.length).toEqual(
      Object.keys(scenario.positionDescription).length
    )
  })

  scenario('returns a single positionDescription', async (scenario) => {
    const result = await positionDescription({
      id: scenario.positionDescription.one.id,
    })

    expect(result).toEqual(scenario.positionDescription.one)
  })

  scenario('creates a positionDescription', async (scenario) => {
    const result = await createPositionDescription({
      input: {
        name: 'String',
        body: 'String',
        postId: scenario.positionDescription.one.post.id,
      },
    })

    expect(result.name).toEqual('String')
    expect(result.body).toEqual('String')
  })

  scenario('updates a positionDescription', async (scenario) => {
    const original = await positionDescription({
      id: scenario.positionDescription.one.id,
    })

    const result = await updatePositionDescription({
      id: original.id,
      input: { name: 'String1520999' },
    })

    expect(result.name).toEqual('String1520999')
  })

  scenario('deletes a positionDescription', async (scenario) => {
    const original = await deletePositionDescription({
      id: scenario.positionDescription.one.id,
    })

    const result = await positionDescription({ id: original.id })

    expect(result).toEqual(null)
  })
})
