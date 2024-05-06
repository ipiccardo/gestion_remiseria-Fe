import { render, screen } from '@testing-library/react'
import { DialogDemo } from '@/app/components/Dialog'


it('renders, DialogDemo ', () => {
    render(<DialogDemo />)

    expect(screen.getByText('Continuar')).toBeInTheDocument()
});