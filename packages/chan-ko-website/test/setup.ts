/**
 * @fileoverview Test setup configuration for the Chan-Ko website project.
 * 
 * This file contains global setup procedures for the test environment, including:
 * - Importing and configuring testing libraries
 * - Mocking global objects that are not available in the JSDOM environment
 * 
 * Specifically, this file:
 * 1. Imports jest-dom for additional DOM testing assertions
 * 2. Provides a mock implementation for the IntersectionObserver API
 *    which is not available in the JSDOM environment used for testing
 * 
 * @see {@link https://testing-library.com/docs/ecosystem-jest-dom/}
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserver}
 */
import '@testing-library/jest-dom'

// Mock IntersectionObserver
class MockIntersectionObserver implements IntersectionObserver {
  readonly root: Element | null = null;
  readonly rootMargin: string = '';
  readonly thresholds: ReadonlyArray<number> = [];

  constructor(
    private callback: IntersectionObserverCallback,
    private options?: IntersectionObserverInit
  ) {}

  observe(): void {}
  unobserve(): void {}
  disconnect(): void {}
  takeRecords(): IntersectionObserverEntry[] {
    return [];
  }
}

window.IntersectionObserver = MockIntersectionObserver;