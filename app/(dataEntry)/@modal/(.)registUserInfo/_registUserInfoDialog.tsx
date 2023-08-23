"use client";
import { useRouter } from "next/navigation";
import React from "react";

export default function RegistUserInfoDialog({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  return (
    <dialog
      onClose={(event) => {
        if (event.currentTarget.returnValue === "complete") {
          alert("completed!!!");
          const reservedDateFormData = new FormData(
            (document.getElementById(
              "reserveDateTimeForm"
            ) as HTMLFormElement) || undefined
          );
          const registUserInfoFormData = new FormData(
            (document.getElementById(
              "registUserInfoForm"
            ) as HTMLFormElement) || undefined
          );
          const unixTime = reservedDateFormData.get("unixTime");
          const realName = registUserInfoFormData.get("realName");
          const tel = registUserInfoFormData.get("tel");
          alert(JSON.stringify({ realName, tel, unixTime }));
          // TODO 登録処理を入れる
          router.push("/reserveDateTimeComplete");
        } else {
          router.back();
        }
      }}
      className="modal modal-bottom sm:modal-middle"
      open
    >
      {children}
    </dialog>
  );
}
