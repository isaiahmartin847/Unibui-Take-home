# Navbar

`Navbar` This component is used for all the navigation between the application.

**Note: This is a client-side rendered component.**

### Props

| Prop Name  | Type      | Required | Default Value | Description                                                                                               |
| ---------- | --------- | -------- | ------------- | --------------------------------------------------------------------------------------------------------- |
| `title`    | `string`  | Yes      | -             | This prop tells the user what page they are on.                                                           |
| `url`      | `string`  | Yes      | -             | The url is passed into the Next.js Link component for the navigation button.                              |
| `linkName` | `string`  | Yes      | -             | This prop is the text inside the Link component to tell the user what page the nav link will take you to. |
| `filter`   | `boolean` | Yes      | -             | Toggles the filter component to allow the user to filter jobs.                                            |

## State

The component uses the `useState` hook to manage the visibility of the filter form:

```jsx
const [filterToggle, setFilterToggle] = useState < boolean > false;
```

## Example

```jsx
function App() {
  return (
    <Navbar
      title="home"
      url="/saved-jobs"
      linkName="Saved jobs"
      filter={true}
    />
  );
}
```
