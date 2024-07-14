import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import ContactForm from '../../../src/components/ContactForm';

describe('ContactForm', () => {
  it('renders contact form', () => {
    render(<ContactForm />);

    expect(screen.getByText('Contact Us')).toBeInTheDocument();
    expect(screen.getByLabelText('First Name')).toBeInTheDocument();
    expect(screen.getByLabelText('Last Name')).toBeInTheDocument();
    expect(screen.getByLabelText('Company')).toBeInTheDocument();
    expect(screen.getByLabelText('Work Email')).toBeInTheDocument();
    expect(screen.getByLabelText('Job Title')).toBeInTheDocument();
    expect(screen.getByLabelText('Country')).toBeInTheDocument();
    expect(screen.getByLabelText('Reason For Contacting')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Submit' })).toBeInTheDocument();
  });
});
