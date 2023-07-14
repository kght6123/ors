"use client";

/**
 * Suspenseで遅延読み込みをするグローバル変数版（クライアント）
 */

import { useState, Suspense, lazy } from "react";
import Skeleton from "#/ui/examples/skeleton";

let status = "pending";
let result: any;

function fetchWeatherDisplay({
  stationName = "cnarenal",
  period = "latestdata",
}: {
  stationName?: string;
  period?: string;
}) {
  let fetching = fetch(
    `https://api.oceandrivers.com:443/v1.0/getWeatherDisplay/${stationName}/?period=${period}`
  )
    // Fetch request has gone well
    .then(async (res) => {
      await new Promise((resolve) => setTimeout(resolve, 5 * 1000));
      status = "fulfilled";
      result = await res.json();
    })
    // Fetch request has failed
    .catch((error) => {
      status = "rejected";
      result = error;
    });
  return () => {
    if (status === "pending") {
      throw fetching; // Suspend(A way to tell React data is still fetching)
    } else if (status === "rejected") {
      throw result; // Result is an error
    } else if (status === "fulfilled") {
      return result; // Result is a fulfilled promise
    }
  };
}

export const GetWeatherDisplay = ({
  stationName = "cnarenal",
  period = "latestdata",
}: {
  stationName?: string;
  period?: string;
}) => {
  const data = fetchWeatherDisplay({ stationName, period })();
  return (
    <div className="h-6 w-20 items-center px-2 text-center text-sm leading-6">
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
};

export default GetWeatherDisplay;

const LazyGetWeatherDisplay = lazy(
  () => import("#/ui/examples/get-weather-display")
);

export function WeatherDisplay() {
  const [period, setPeriod] = useState<string>();
  const [stationName, setStationName] = useState<string>();
  return (
    <>
      <select
        title="period"
        className="mt-4"
        onChange={(e) => setPeriod(e.target.value)}
      >
        <option value="latestdata">latestdata</option>
        <option value="latesthour">latesthour</option>
        <option value="latestday">latestday</option>
        <option value="dailylog">dailylog</option>
      </select>
      <select
        title="stationName"
        className="mt-4"
        onChange={(e) => setStationName(e.target.value)}
      >
        <option value="cnarenal">cnarenal</option>
        <option value="campastilla">campastilla</option>
        <option value="cncg">cncg</option>
        <option value="cncoloniasp">cncoloniasp</option>
      </select>
      <Suspense fallback={<Skeleton />}>
        <LazyGetWeatherDisplay stationName={stationName} period={period} />
      </Suspense>
    </>
  );
}
