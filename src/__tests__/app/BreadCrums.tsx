import { render, screen } from '@testing-library/react'
import { BreadcrumbWithCustomSeparator } from '@/app/components/BreadCrums'


it('renders, Button ', () => {
    render(<BreadcrumbWithCustomSeparator />)

    expect(screen.getByText('Home')).toBeInTheDocument()
});