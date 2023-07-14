"use client";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

export default function Portal() {
  const [headerEl, setHeaderEl] = useState<HTMLElement | null>(null);
  useEffect(() => {
    setHeaderEl(document.getElementById("header"));
  }, []);
  return (
    headerEl && (
      <div>
        <p>Portalでヘッダーにコンポーネントを描画してみる</p>
        {createPortal(
          <p className="font-bold text-red-500">ポータル！ポータル！</p>,
          headerEl
        )}
      </div>
    )
  );
}
