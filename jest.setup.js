const React = require('react');
require('@testing-library/jest-dom');

jest.mock('next/link', () => {
  const Link = React.forwardRef(function LinkComponent({ children, ...props }, ref) {
    return React.createElement('a', { ...props, ref }, children);
  });

  return {
    __esModule: true,
    default: Link
  };
});

if (typeof window !== 'undefined' && !window.matchMedia) {
  Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: (query) => ({
      matches: false,
      media: query,
      onchange: null,
      addListener: () => {},
      removeListener: () => {},
      addEventListener: () => {},
      removeEventListener: () => {},
      dispatchEvent: () => false
    })
  });
}
