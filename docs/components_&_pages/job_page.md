# _Single job page and Components_

## Page Component

**Note: This is a server-side rendered component.**

## Overview

This page is a dynamic page that takes in a param that is the ID then fetches the data about the job then renders the `JobPageItem` and the `JobLocation` components.

## Props

| Prop   | Type   | Description                              |
| ------ | ------ | ---------------------------------------- |
| params | object | An object containing the `id` of the job |

The `params` object should have the following structure:

## Functionality

1. **Data Fetching**: The component uses a server-side function `getJob` to fetch job details from an API based on the provided job ID.
2. **Rendering**: If the job data is successfully fetched, it renders:
   - A `Navbar` component
   - A `JobPageItem` component with the job details
   - A `JobLocation` component to display the job's location on a map
3. **Error Handling**: If there's an error in fetching or rendering the job data, it displays an error message.

## API Integration

The component integrates with a local API endpoint:

```javascript
`http://localhost:3000/api/job/${id}`;
```

This API is expected to return job data in the format defined by the `Job` type.

## JobPageItem Component

`JobPageItem` this component holds all the data which relates the to the single job.

**Note: This is a server-side rendered component.**

### Props

| Prop Name        | Type      | Required | Description                                                                   |
| ---------------- | --------- | -------- | ----------------------------------------------------------------------------- |
| `jobTitle`       | `string`  | Yes      | This is the job title prop to display in the component.                       |
| `companyName`    | `string`  | Yes      | This is the company prop to display the company name.                         |
| `jobDescription` | `string`  | Yes      | Displays the jobs description.                                                |
| `requirements`   | `string`  | Yes      | Shows the users what requirements the job has                                 |
| `city`           | `string`  | Yes      | displays the city in the job component                                        |
| `state`          | `boolean` | Yes      | displays the state in the job component                                       |
| `id`             | `boolean` | Yes      | id is to pass to the save component and to be a key for rendering preference. |

## Example

```jsx
function App() {
  return (
    <JobPageItem
      jobTitle="Software Engineer Intern"
      companyName="Unibui"
      jobDescription="Super cool job"
      requirements="next.js, react, UI/UX"
      city="San Francisco"
      state="CA"
      id={1}
      handleClick={(id: number) => void}
    />
  );
}
```

<br><br><br>

## JobLocation Component

**Note: This is a server-side rendered component.**

## Overview

The `JobLocation` component is a server-side React component that displays a map with a pin for a given city and state. It fetches location data from the OpenStreetMap API and renders a map using the `MapAndPin` component.

## Props

The component accepts the following props:

| Prop  | Type   | Description                   |
| ----- | ------ | ----------------------------- |
| state | string | The state of the job location |
| city  | string | The city of the job location  |

## Usage

```jsx
<JobLocation
  state="CA"
  city="San Francisco"
/>
```

## Functionality

1. The component uses a server-side function `getLocation` to fetch geographical coordinates for the given city and state.
2. It then renders a `MapAndPin` component with the fetched latitude and longitude.

## API Integration

The component integrates with the OpenStreetMap API:

```javascript
`https://nominatim.openstreetmap.org/search?q=${city},${state}&format=json`;
```

This API returns location data including latitude and longitude for the specified city and state.
<br><br><br>

## MapAndPin Component

**Note: This is a client-side rendered component.**

## Overview

The `MapAndPin` component is a client-side React component that renders an interactive map using React Leaflet. It displays a custom pin at a specified location defined by latitude and longitude coordinates.

## Props

| Prop | Type   | Description               |
| ---- | ------ | ------------------------- |
| lon  | string | Longitude of the location |
| lat  | string | Latitude of the location  |

## Usage

```jsx
<MapAndPin
  lon="-122.4194"
  lat="37.7749"
/>
```

## Dependencies

- react-leaflet
- leaflet

## Functionality

1. The component creates a map centered on the provided coordinates.
2. It renders a custom marker (pin) at the specified location.
3. The map is interactive, allowing users to zoom and pan.
