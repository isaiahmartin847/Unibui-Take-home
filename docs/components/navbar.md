# Navbar

`Navbar` is a reusable React component that [describe its primary purpose or functionality].

### Props

| Prop Name  | Type      | Required | Default Value | Description                                                                                               |
| ---------- | --------- | -------- | ------------- | --------------------------------------------------------------------------------------------------------- |
| `title`    | `string`  | Yes      | -             | This prop tells the user what page they are on.                                                           |
| `url`      | `string`  | Yes      | -             | The url is passed into the Next.js Link component for the navigation button.                              |
| `linkName` | `string`  | Yes      | -             | This prop is the text inside the Link component to tell the user what page the nav link will take you to. |
| `filter`   | `boolean` | Yes      | -             | Toggles the filter component to allow the user to filter jobs.                                            |

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
