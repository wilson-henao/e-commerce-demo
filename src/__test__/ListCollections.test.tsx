import { cleanup, render } from '@testing-library/react'
import ListCollections from '../components/List/ListCollections'
import { CollectionsMock } from '../__mocks__/ListCollections.mock'

describe('ListCollections', () => {
  let component
  afterEach(cleanup)
  afterEach(jest.clearAllMocks)

  beforeAll(() => {
    component = render(<ListCollections collections={CollectionsMock} />)
  })

  it('display two collections on screen', () => {
    const collectionCount = component.getAllByRole('listitem').length
    expect(collectionCount).toBe(2)
  })
})
