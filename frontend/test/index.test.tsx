import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Home from '../src/pages'

describe('Home', () => {
  it('renders a heading', () => {
    render(<Home />)
    const heading = screen.getByRole('heading', {
      name: /Nextwind Typedoc on Docker/i,
    })
    expect(heading).toBeInTheDocument()
  })
})
