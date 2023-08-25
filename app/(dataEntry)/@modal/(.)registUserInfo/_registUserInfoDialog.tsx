"use client";
import React, { useEffect, useState, useId } from "react";
import { Button } from "$/_ui/atoms/button";
import { useRouter } from "next/navigation";
import clsx from "clsx";

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
  return (
    <div
      className={clsx(
        "modal modal-bottom sm:modal-middle",
        open && "modal-open"
      )}
    >
      <form
        onSubmit={(e) => {
          e.preventDefault();
          // alert("completed!!!");
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
          alert(JSON.stringify({ realName, tel, unixTime }));
          setOpen(false);
          // TODO 登録処理を入れる
          router.push("/reserveDateTimeComplete");
        }}
        className="modal-box"
        id={id}
      >
        {children}
        <div className="modal-action w-full">
          <Button.Basic
            value="complete"
            color="primary"
            type="submit"
            form={id}
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
