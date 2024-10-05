# _Jobs page and Components_

## Home page

**Note: This is a server-side rendered component.**

## Overview

This is a server-side React component that renders a list of job postings. It fetches job data based on optional search parameters, and displays the job listings or appropriate messages if no jobs are found or an error occurs.

## Component Configuration

```javascript
export const revalidate = 0;
export const dynamic = "force-dynamic";
```

These configurations ensure that the page is dynamically rendered on each request and not cached.

## Props

The component accepts the following props:

| Prop         | Type   | Description                                     |
| ------------ | ------ | ----------------------------------------------- |
| searchParams | object | An object containing optional search parameters |

The `searchParams` object can have the following properties:

```typescript
{
  state?: string;
  title?: string;
  city?: string;
}
```

## Functionality

1. **Data Fetching**: The component uses a server-side function `fetchJobs` to retrieve job listings from an API based on the provided search parameters.
2. **Rendering**:
   - Displays a `Navbar` component at the top.
   - If jobs are found, it renders a list of `JobItem` components.
   - If no jobs are found, it displays a "No Jobs Found." message.
   - If there's an error, it displays an error message.

## API Integration

The component integrates with a local API endpoint:

```javascript
`http://localhost:3000/api/job?${queryParams.toString()}`;
```

This API is expected to return job data in the format defined by the `Job` type.

## Error Handling

- If the API request fails, an error object is returned with status and message.
- The error message is displayed to the user if the fetch operation fails.

## Caching

The component uses several techniques to prevent caching:

1. Sets `revalidate` to 0.
2. Uses `dynamic = "force-dynamic"`.
3. Includes cache-busting headers in the fetch request.
4. Uses `cache: "no-store"` in the fetch options.

This ensures that the component always fetches fresh data on each request.

## Search Functionality

The component supports filtering jobs based on:

- State
- Job title
- City

These parameters are passed via the URL search params and used to fetch filtered job listings.

## Rendering Logic

1. If jobs are found, each job is rendered as a `JobItem` component.
2. If no jobs are found, a "No Jobs Found." message is displayed.
3. If there's an error, an error message is displayed along with the Navbar.

## JobItem Component

`JobItem` this is a reusable component to show a job listing for the main job board and saved jobs page.

**Note: This is a server-side rendered component.**

### Props

| Prop Name | Type      | Required | Description                                                                   |
| --------- | --------- | -------- | ----------------------------------------------------------------------------- |
| `title`   | `string`  | Yes      | This is the job title prop to display in the component.                       |
| `company` | `string`  | Yes      | This is the company prop to display the company name.                         |
| `city`    | `string`  | Yes      | displays the city in the job component                                        |
| `state`   | `boolean` | Yes      | displays the state in the job component                                       |
| `id`      | `boolean` | Yes      | id is to pass to the save component and to be a key for rendering preference. |

## Example

```jsx
function App() {
  return (
    <JobItem
      title="Software Engineer Intern"
      company="Unibui"
      city="San Francisco"
      state="CA"
      id={1}
    />
  );
}
```
