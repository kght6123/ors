'use client';

import { useEffect, useState } from 'react';

export function WeatherDisplay() {
	const [period, setPeriod] = useState<string>();
	const [stationName, setStationName] = useState<string>();
	return (
		<>
		  <select className="mt-4" onChange={(e)=>setPeriod(e.target.value)}>
        <option value="latestdata">latestdata</option>
        <option value="latesthour">latesthour</option>
        <option value="latestday">latestday</option>
        <option value="dailylog">dailylog</option>
      </select>
			<select className="mt-4" onChange={(e)=>setStationName(e.target.value)}>
        <option value="cnarenal">cnarenal</option>
        <option value="campastilla">campastilla</option>
        <option value="cncg">cncg</option>
        <option value="cncoloniasp">cncoloniasp</option>
      </select>
			<GetWeatherDisplay stationName={stationName} period={period} />
			</>
	);
}

export function GetWeatherDisplay({ stationName = "cnarenal", period = "latestdata" }: { stationName?: string, period?: string }) {
  const [data, setData] = useState<any>();

  // update on page change
  useEffect(() => {
    fetch(`https://api.oceandrivers.com:443/v1.0/getWeatherDisplay/${stationName}/?period=${period}`).then(async (res) => {
			const data = await res.json();
			setData(data);
		});
  }, [stationName, period]);

  return (
    <div
      className="h-6 w-20 items-center px-2 text-center text-sm leading-6"
    >
      {data ? (
        <>
          <span
            // https://react.dev/reference/react-dom/hydrate#suppressing-unavoidable-hydration-mismatch-errors
            suppressHydrationWarning={true}
            className="font-semibold tabular-nums text-gray-900 dark:text-gray-100"
          >
            {JSON.stringify(data)}
          </span>
        </>
      ) : null}
    </div>
  );
}