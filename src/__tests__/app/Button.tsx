import { render, screen } from '@testing-library/react'
import Button from '@/app/components/Button'


it('renders, Button ', () => {
    render(<Button>Driver</Button>)

    expect(screen.getByText('Driver')).toBeInTheDocument()
});