/**
 * @fileoverview Test suite for the ContactForm component.
 *
 * This file contains unit tests for the ContactForm component, which is responsible
 * for rendering and handling user input in a contact form. The tests cover various
 * scenarios including:
 *
 * - Logging behavior in different environments (development, production, undefined)
 * - Rendering of form elements
 *
 * The test suite uses Vitest for test running and assertion, and React Testing Library
 * for rendering and querying the component. It also employs mocking techniques to
 * isolate the component from its dependencies and control the testing environment.
 */

import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import ContactForm from '../../../src/components/ContactForm';

// Utility to mock import.meta.env
const setMockEnv = (env: Record<string, unknown>) => {
  const originalEnv = {...import.meta.env};
  Object.assign(import.meta.env, env);

  return () => {
    Object.assign(import.meta.env, originalEnv);
  };
};

// Mocking console.log
vi.spyOn(console, 'log').mockImplementation(() => {});

describe('ContactForm', () => {
  let resetEnv: () => void;

  beforeEach(() => {
    vi.clearAllMocks();
  });

  afterEach(() => {
    if (resetEnv) resetEnv();
  });

  it('logs Current API Endpoint when ENV is not prod', () => {
    resetEnv = setMockEnv({
      VITE_ENVIRONMENT: 'dev',
      VITE_CHANKO_WEBSITE_CONTACT_FORM_ENDPOINT: 'http://localhost:3000',
    });

    render(<ContactForm />);

    expect(console.log).toHaveBeenCalledWith('Current API Endpoint:', 'http://localhost:3000');
  });

  it('logs Current API Endpoint when values are undefined', () => {
    resetEnv = setMockEnv({
      VITE_ENVIRONMENT: undefined,
      VITE_CHANKO_WEBSITE_CONTACT_FORM_ENDPOINT: undefined,
    });

    render(<ContactForm />);

    expect(console.log).toHaveBeenCalledWith('Current API Endpoint:', 'undefined');
  });

  it('does not log Base URL and Environment when ENV is prod', () => {
    resetEnv = setMockEnv({
      VITE_ENVIRONMENT: 'prod',
      VITE_CHANKO_WEBSITE_CONTACT_FORM_ENDPOINT: 'http://localhost:3000',
    });

    render(<ContactForm />);

    expect(console.log).not.toHaveBeenCalled();
  });

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
