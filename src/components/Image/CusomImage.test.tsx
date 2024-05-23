import { render } from '@testing-library/react'
import CustomImage from '.'

it('renders CustomImage component', () => {
  const { container } = render(
    <CustomImage src="/apple-touch-icon.png" width={50} height={50} />
  )
  expect(container).toMatchSnapshot()
})
