"use server";

import MapAndPin from "./map";

// Documentation for this component can be found at:
// /docs/components_&_pages/job_page.md

interface Props {
  state: string;
  city: string;
}

interface LocationResponse {
  place_id: number;
  licence: string;
  osm_type: string;
  osm_id: number;
  lat: string;
  lon: string;
  class: string;
  type: string;
  place_rank: number;
  importance: number;
  addresstype: string;
  name: string;
  display_name: string;
  boundingbox: string[];
}

const getLocation = async (state: string, city: string) => {
  const res = await fetch(
    `https://nominatim.openstreetmap.org/search?q=${city},${state}&format=json`,
    { cache: "no-store" }
  );

  if (!res.ok) {
    throw new Error(
      "failed to get the location: " + res.status + " " + res.statusText
    );
  }

  const data: LocationResponse[] = await res.json();
  return data[0];
};

const JobLocation = async ({ city, state }: Props) => {
  try {
    const data = await getLocation(state, city);

    return (
      <div>
        {data ? (
          <MapAndPin
            lat={data.lat}
            lon={data.lon}
          />
        ) : (
          <div>Loading...</div>
        )}
      </div>
    );
  } catch (error) {
    console.error(error);
    return <div>Error loading location data.</div>;
  }
};

export default JobLocation;
