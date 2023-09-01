"use client";
import { Button } from "$/_ui/atoms/button";
import clsx from "clsx";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect, useId, useState } from "react";

export default function RegistUserInfoDialog({
  children,
}: {
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(true);
  const id = useId();
  useEffect(() => {
    // FIXME おそらく、このIssueの不具合で、useEffectが2回目は呼ばれない https://github.com/vercel/next.js/issues/49662
    console.log("+ useEffect");
    setOpen(true);
    return () => {
      console.log("- useEffect");
      setOpen(false);
    };
  }, []);
  const router = useRouter();
  const pathName = usePathname();
  return (
    <div
      className={clsx(
        "modal modal-bottom sm:modal-middle",
        open && "modal-open"
      )}
      key={pathName}
    >
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const reservedDateFormData = new FormData(
            (document.getElementById(
              "reservedDateTimeSelectorForm"
            ) as HTMLFormElement) || undefined
          );
          const registUserInfoFormData = new FormData(
            (e.target as HTMLFormElement) || undefined
          );
          const unixTime = reservedDateFormData.get("unixTime");
          const realName = registUserInfoFormData.get("realName");
          const tel = registUserInfoFormData.get("tel");
          setOpen(false);
          // TODO 登録処理を入れる
          // MEMO Intercepting Routesによるmodal、別フォームの予約情報とユーザ情報を一度に登録が必要を考慮すると、Server Actionではなくapiでの登録処理を入れる必要がある。（ https://nextjs.org/docs/app/building-your-application/data-fetching/forms-and-mutations ）
          router.push("/reserve/completed");
        }}
        className="modal-box"
        id={id}
      >
        {children}
        <div className="modal-action w-full">
          <Button.Basic
            color="primary"
            form={id}
            type="submit"
            value="complete"
          >
            予約する
          </Button.Basic>
        </div>
      </form>
      <div className="modal-backdrop bg-black/80">
        <button onClick={() => router.back()}>&nbsp;</button>
      </div>
    </div>
  );
}
