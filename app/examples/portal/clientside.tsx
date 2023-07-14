"use client";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

export default function Portal() {
  const [headerEl, setHeaderEl] = useState<HTMLElement | null>(null);
  const [footerEl, setFooterEl] = useState<HTMLElement | null>(null);
  useEffect(() => {
    setHeaderEl(document.getElementById("header"));
    setFooterEl(document.getElementById("footer"));
  }, []);
  return (
    <div>
      <p>Portalでヘッダーにコンポーネントを描画してみる</p>
      {headerEl &&
        createPortal(
          <p className="font-bold text-red-500">ポータル！ポータル！</p>,
          headerEl
        )}
      {footerEl &&
        createPortal(
          <p className="font-bold text-blue-500">ポータル！ポータル！</p>,
          footerEl
        )}
    </div>
  );
}
