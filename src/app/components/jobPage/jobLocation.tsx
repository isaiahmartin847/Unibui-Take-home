"use server";

import MapAndPin from "./map";




const getLocation = async (state: string, city: string) => {
    const res = await fetch(`https://nominatim.openstreetmap.org/search?q=${city},${state}&format=json`, { cache: 'no-store' });

    if (!res.ok) {
        throw new Error("failed to get the location: " + res.status + " " + res.statusText);
    }

    const data: any = await res.json();
    return data[0]; // Returns the first result
}

const JobLocation = async () => {
    try {
        const data = await getLocation("MT", "whitehall");
        console.log([data.lat, data.lon]);

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
}

export default JobLocation;