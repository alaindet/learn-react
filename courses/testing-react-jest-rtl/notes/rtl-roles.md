# React Testing Library - Roles

- `logRoles()` from `@testing-library/react` allows to debug A11Y roles
- Example
  ```tsx
  // my-component.test.tsx
  test('some test...', () => {
    const { container } = render(<MyComponent />);
    logRoles(container);
  });
  ```
