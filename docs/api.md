# Job API

## Endpoint: Get job by ID

**file** `@/app/api/job/[id]/route.ts`

### URL

`GET /api/job/[id]`

### Description

This endpoint will get a job by the id of a job and return all the data related to that job in a Json type response.

### Parameters

- **id** (path parameter)  
  **Type:** `string`  
  **Description:** The unique identifier of the job to retrieve.

### Example Request

```http
GET http://localhost:3000/api/job/7
```

## Endpoint: Get jobs and filter jobs

**File:** `@/app/api/job/route.ts`

### URL

`GET /api/job`

### Description

Fetches all the jobs. With optional to filter jobs by state, job title, or city. The job data is extracted from a CSV file on the server.

### Query Parameters

- **ids** (optional)  
  **Type:** `string` (comma-separated list of IDs)  
  **Description:** A comma-separated list of job IDs to filter the results. If provided, only jobs matching these IDs will be returned.

- **state** (optional)  
  **Type:** `string`  
  **Description:** Filters jobs by state. If provided, only jobs in the specified state will be returned.

- **title** (optional)  
  **Type:** `string`  
  **Description:** Filters jobs by title. Returns jobs where the title includes the provided string (case-insensitive).

- **city** (optional)  
  **Type:** `string`  
  **Description:** Filters jobs by city. Returns jobs where the city matches the provided string (case-insensitive).

### Example Request

```http
GET /api/job?state=OR&city=portland&title=engineer
```
