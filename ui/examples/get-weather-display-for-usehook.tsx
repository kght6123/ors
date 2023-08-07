"use client";

/**
 * Suspenseで遅延読み込みをするReact.useフック版（クライアント）
 */

import { useState, Suspense, lazy, use } from "react";
import Skeleton from "#/ui/examples/skeleton";

async function fetchWeatherDisplay({
  period = "latestdata",
  stationName = "cnarenal",
}: {
  stationName?: string;
  period?: string;
}) {
  const res = await fetch(
    `https://api.oceandrivers.com:443/v1.0/getWeatherDisplay/${stationName}/?period=${period}`
  );
  await new Promise((resolve) => setTimeout(resolve, 5 * 1000));
  const data = await res.json();
  console.log(data);
  return data;
}

export default function GetWeatherDisplay({
  period = "latestdata",
  stationName = "cnarenal",
}: {
  stationName?: string;
  period?: string;
}) {
  const data = use(fetchWeatherDisplay({ period, stationName }));
  return (
    <div className="h-6 w-20 items-center px-2 text-center text-sm leading-6">
      {data ? (
        <>
          <span
            className="font-semibold tabular-nums text-slate-900 dark:text-slate-100"
            // https://react.dev/reference/react-dom/hydrate#suppressing-unavoidable-hydration-mismatch-errors
            suppressHydrationWarning={true}
          >
            {JSON.stringify(data)}
          </span>
        </>
      ) : null}
    </div>
  );
}

const LazyGetWeatherDisplay = lazy(
  () => import("#/ui/examples/get-weather-display-for-usehook")
);

export function WeatherDisplay() {
  const [period, setPeriod] = useState<string>();
  const [stationName, setStationName] = useState<string>();
  return (
    <>
      <select
        onChange={(e) => setPeriod(e.target.value)}
        className="mt-4"
        title="period"
      >
        <option value="latestdata">latestdata</option>
        <option value="latesthour">latesthour</option>
        <option value="latestday">latestday</option>
        <option value="dailylog">dailylog</option>
      </select>
      <select
        onChange={(e) => setStationName(e.target.value)}
        title="stationName"
        className="mt-4"
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
