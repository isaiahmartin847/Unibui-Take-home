# _Jobs page and Components_

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
