import { render, screen } from '@testing-library/react'
import App from './App'

test('renders primary color text', () => {
  render(<App />)
  const paraElement = screen.getByText(/primary color/i)
  expect(paraElement).toBeInTheDocument()
})
