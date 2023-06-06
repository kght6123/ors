import React from "react";
import GetWeatherDisplay from '#/ui/examples/get-weather-display';

// http://localhost:3000/examples/all/option/ →　パラメーターなしもこのルートになる
// http://localhost:3000/examples/all/option/cncg/cnarenal

export default async function Home({ params }: { params: { stationNames: string[] } }) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {params?.stationNames === undefined ? <div className="dark:text-gray-100">No Params</div> : params?.stationNames?.map((stationName) => (<div key={stationName}>
        <GetWeatherDisplay stationName={stationName} period="latestdata" />
      </div>))}
    </main>
  )
}
