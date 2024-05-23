import { render } from '@testing-library/react'
import CustomButton from '.'

it('renders CustomButton component', () => {
  const { container } = render(<CustomButton />)
  expect(container).toMatchSnapshot()
})
