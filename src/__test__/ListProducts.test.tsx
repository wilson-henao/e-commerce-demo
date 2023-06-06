import { MockedProvider } from '@apollo/client/testing'
import { render, screen } from '@testing-library/react'
import { ProductsMock } from '../__mocks__/ListProducts.mock'
import ListProducts from '../components/List/ListProducts'

describe('ListProducts', () => {
  test('load products correctly', () => {
    render(
      <MockedProvider mocks={ProductsMock}>
        <ListProducts products={[]} />
      </MockedProvider>
    )
    expect(screen.queryByText('An error has occurred')).toBeNull()
  })
})
