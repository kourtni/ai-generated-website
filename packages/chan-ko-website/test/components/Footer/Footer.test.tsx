import React from 'react';
import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import Footer from '../../../src/components/Footer/Footer';

// Utility to mock import.meta.env
const setMockEnv = (env: Record<string, unknown>) => {
  const originalEnv = {...import.meta.env};
  Object.assign(import.meta.env, env);

  return () => {
    Object.assign(import.meta.env, originalEnv);
  };
};

// Mock the lucide-react icons
vi.mock('lucide-react', () => ({
  Facebook: () => <div data-testid="facebook-icon" />,
  Twitter: () => <div data-testid="twitter-icon" />,
  Linkedin: () => <div data-testid="linkedin-icon" />,
  Instagram: () => <div data-testid="instagram-icon" />,
}));


describe('Footer', () => {
  let resetEnv: () => void;

  beforeEach(() => {
    vi.clearAllMocks();
  });

  afterEach(() => {
    if (resetEnv) resetEnv();
  });

  it('renders social media icons', () => {
    render(<Footer />);
    expect(screen.getByTestId('facebook-icon')).toBeDefined();
    expect(screen.getByTestId('twitter-icon')).toBeDefined();
    expect(screen.getByTestId('linkedin-icon')).toBeDefined();
    expect(screen.getByTestId('instagram-icon')).toBeDefined();
  });

  it('renders social media links with correct attributes', () => {
    render(<Footer />);
    const socialLinks = screen.getAllByRole('link');
    expect(socialLinks.length).toBe(4);

    const expectedLinks = [
      'https://facebook.com',
      'https://twitter.com',
      'https://linkedin.com',
      'https://instagram.com',
    ];

    socialLinks.forEach((link, index) => {
      expect(link.getAttribute('href')).toBe(expectedLinks[index]);
      expect(link.getAttribute('target')).toBe('_blank');
      expect(link.getAttribute('rel')).toBe('noopener noreferrer');
    });
  });

  it('renders the correct version in non-production environment', () => {
    resetEnv = setMockEnv({
      VITE_ENVIRONMENT: 'test',
      VITE_VERSION: '1.0.0',
    });

    render(<Footer />);
    const versionText = screen.getByText(/Build:/);
    expect(versionText.textContent).toContain('Build: 1.0.0-test');
  });

  it('renders the correct version in production environment', () => {
    resetEnv = setMockEnv({
      VITE_ENVIRONMENT: 'prod',
      VITE_VERSION: '1.0.0',
    });
    render(<Footer />);
    const versionText = screen.getByText(/Build:/);
    expect(versionText.textContent).toContain('Build: 1.0.0');
  });

  it('renders the current year in the copyright notice', () => {
    const currentYear = new Date().getFullYear();
    render(<Footer />);
    const copyrightText = screen.getByText(/Chan-Ko LLC/);
    expect(copyrightText.textContent).toContain(`© ${currentYear} Chan-Ko LLC. All rights reserved.`);
  });
});
