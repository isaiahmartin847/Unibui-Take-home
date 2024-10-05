# FilterForm Component

**Note: This is a client-side rendered component.**

## Overview

The `FilterForm` is a client-side React component that provides a user interface for filtering job listings. It allows users to input search criteria for job title, city, and state, and updates the URL with these parameters.

## Dependencies

- Next.js (for routing and search params)
- react-icons (for the close icon)

## Functionality

1. **State Management**:

   - Uses React's `useState` hook to manage form inputs (title, city, state) and filtered status.
   - Uses `useEffect` to synchronize component state with URL search parameters.

2. **Routing**:

   - Uses Next.js `useRouter` for programmatic navigation.
   - Uses `useSearchParams` to read current URL search parameters.

3. **Form Submission**:

   - Handles form submission by updating the URL with new search parameters.

4. **Filter Clearing**:

   - Provides a "Clear filter" button that removes all search parameters.

5. **Responsive Design**:
   - Uses CSS classes to create a responsive layout that adapts to different screen sizes.

## Props

This component doesn't accept any props.

## Usage

```jsx
function Page() {
  return (
    <div>
      <FilterForm />
    </div>
  );
}
```

## Event Handlers

1. `handleSubmit`: Triggered on form submission. Updates the URL with new search parameters.
2. `clearFilter`: Triggered when the "Clear filter" button is clicked. Removes all search parameters from the URL.

## State Updates

The component updates its state in response to user input:

- `setTitle`, `setCity`, `setState`: Update respective form field values.
- `setFiltered`: Sets whether any filters are currently active.

## useEffect Hook

The `useEffect` hook is used to:

1. Initialize form fields with current URL search parameters.
2. Update the `filtered` state based on the presence of search parameters.
