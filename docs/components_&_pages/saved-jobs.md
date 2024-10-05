# _Saved jobs page and Components_

<br><br><br>

# Saved Jobs Page

The `SavedJobs` component is responsible for managing and displaying a user's saved job listings. It retrieves saved job IDs from the browser's local storage, fetches the job details from an API, and presents them to the user. This component also allows users to remove jobs from their saved list.

## **State Management**

The component uses the `useState` and `useEffect` hooks from React to manage its internal state.

### **State Variables:**

- **`savedJobs`** (`number[]`): An array that holds all the saved jobs to have quick UI updates and to keep track of what jobs that are save.
- **`loading`** (`boolean`): A boolean flag that indicates whether the job data is currently being fetched from the API. It starts as `true` and is set to `false` once the data is successfully fetched or if an error occurs.
- **`data`** (`Job[]`): This state hold the data from the API response to handle errors.
- **`error`** (`string | null`): A string that stores any error messages encountered during the API call. Initially set to `null`, it will update if an error occurs during data fetching.

---

## **Core Functionality**

### **Data Fetching**

Upon mounting the component, the following steps are executed:

1. **Retrieve Saved Jobs**: The component retrieves saved job IDs from local storage and updates the `savedJobs` state:
   ```javascript
   const savedJobsFromStorage = JSON.parse(
     localStorage.getItem("savedJobs") || "[]"
   );
   setSavedJobs(savedJobsFromStorage);
   ```
2. **Get the job details**: then it takes those job ID's and passes it into an api endpoint to get the job details to show the user all their saved jobs:

   ```javascript
    const fetchJobs = async () => {
      if (savedJobsFromStorage.length === 0) {
        setLoading(false);
        return;
      }

      try {
        const response = await fetch(
          `http://localhost:3000/api/job?ids=${savedJobsFromStorage.join(",")}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch jobs.");
        }
        const result = await response.json();
        setData(result.jobs);
      } catch (err) {
        setError((err as Error).message || "An unknown error occurred");
      } finally {
        setLoading(false);
      }
    };
   ```

   3. **Displays the results on the page**: This step either will show an error or map all over all the jobs and show them to the user:

   ```javascript
   <div>
     {data.map((job: Job) => (
       <div
         key={job.id}
         className="flex justify-evenly">
         <SavedJobItem
           id={job.id}
           title={job.jobTitle}
           company={job.companyName}
           city={job.city}
           state={job.state}
           handleClick={handleClick}
         />
       </div>
     ))}
   </div>
   ```

<br><br><br>

# SavedJobItem Component

`SavedJobItem` Is a reusable component to hold one jobs information.

**Note: This is a client-side rendered component.**

### Props

| Prop Name     | Type       | Required | Description                                                                                                 |
| ------------- | ---------- | -------- | ----------------------------------------------------------------------------------------------------------- |
| `title`       | `string`   | Yes      | This is the job title prop to display in the component.                                                     |
| `company`     | `string`   | Yes      | This is the company prop to display the company name.                                                       |
| `city`        | `string`   | Yes      | displays the city in the job component                                                                      |
| `state`       | `boolean`  | Yes      | displays the state in the job component                                                                     |
| `id`          | `boolean`  | Yes      | id is to pass to the save component and to be a key for rendering preference.                               |
| `handleClick` | `Function` | Yes      | This functions takes in the job ID as a arguments then removes it from local storage and the parents state. |

## Example

```jsx
function App() {
  return (
    <SavedJobItem
      title="Software Engineer Intern"
      company="Unibui"
      city="San Francisco"
      state="CA"
      id={1}
      handleClick={(id: number) => void}
    />
  );
}
```

<br><br><br>

# SaveBtn Component

`SaveBtn` Is a reusable component for saving jobs to local storage.

**Note: This is a client-side rendered component.**

### Props

| Prop Name | Type     | Required | Description                               |
| --------- | -------- | -------- | ----------------------------------------- |
| `id`      | `number` | Yes      | Jobs ID used for saving to local storage. |

## hooks

This component uses `useState` to toggle an animation it also uses the `useEffect` to delay the toggle of the state.

## handleClick Function

### Purpose

The `handleClick` function is responsible for saving the job ID into the browser's `localStorage`.

### Process Overview

1. **Update Local State**:
   The function updates a local state variable (`isSaved`) to `true`, indicating that the job has been successfully saved and will start the animation.

2. **Retrieve Existing Saved Jobs**:
   It fetches the current list of saved job IDs from `localStorage` under the key `"savedJobs"`. If no jobs are saved, it initializes the list as an empty array. This allows the function to keep track of all previously saved jobs.

3. **Add Current Job to the List**:
   The current job's `id` is prepended to the list of saved jobs. This ensures the most recently saved job appears first in the list.

4. **Store Updated List in localStorage**:
   Sets the `localStorage` to updated list.

## Example

```jsx
function App() {
  return <SaveBtn id={1} />;
}
```
