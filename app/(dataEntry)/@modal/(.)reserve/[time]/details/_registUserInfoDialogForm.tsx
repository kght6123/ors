"use client";
import {
  ErrorResponse,
  ReserveDataResponse,
  ReserveDetail,
} from "$/(dataEntry)/reserve/_schema";
import { Button } from "$/_ui/atoms/button";
import clsx from "clsx";
import { useParams, usePathname, useRouter } from "next/navigation";
import React, { useEffect, useId, useState } from "react";

export default function RegistUserInfoDialogForm({
  action,
  children,
}: {
  action?: ((formData: FormData) => void) | string;
  children: React.ReactNode;
}) {
  const { time } = useParams();
  const [open, setOpen] = useState(true);
  const id = useId();
  useEffect(() => {
    // FIXME おそらく、このIssueの不具合で、useEffectが2回目は呼ばれない https://github.com/vercel/next.js/issues/49662 -> 一旦、[time]をパスパラメータに追加することで回避
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
        onSubmit={async (e) => {
          e.preventDefault();
          // 準備
          const formData = new FormData(
            (e.target as HTMLFormElement) || undefined
          );
          // バリデーション
          const result = ReserveDetail.safeParse(formData);
          if (result.success === false) {
            console.error("validation error", result.error);
            const pathName = result.error.errors
              .map((e) =>
                e.path.map((p) =>
                  p === "tel"
                    ? "電話番号"
                    : p === "realName"
                    ? "氏名"
                    : p === "time"
                    ? "予約時間"
                    : p
                )
              )
              .join("、");
            alert(`${pathName}の入力に誤りがあります。`);
            return;
          }
          // 登録
          const { realName, tel, time } = result.data;
          console.log("registData", realName, tel, time);
          const res = await fetch(`/reserve/${time}/details/register`, {
            body: formData,
            method: "POST",
          });
          const data = await res.json();
          console.log("responseData", data);
          // 判定
          const respDataReturn = ReserveDataResponse.safeParse(data);
          if (respDataReturn.success === true) {
            // 成功の場合
            setOpen(false);
            const { time } = respDataReturn.data;
            const date = new Date(time);
            alert(
              `予約が完了しました。\n（${date.getMonth()}月${
                date.getDate() - 1
              }日 ${date.getHours()}時）`
            );
            // 画面移動
            router.push("/reserve/completed");
          } else {
            // エラーの場合
            const errorDataReturn = ErrorResponse.safeParse(data);
            if (errorDataReturn.success === true) {
              const { message } = errorDataReturn.data;
              alert(message);
            }
          }
        }}
        // FIXME: https://github.com/vercel/next.js/issues/54676 の不具合でServer Actionでredirectが使えないので、onSubmitでAPIを叩くようにする
        // action={action}
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
        <input name="time" type="hidden" value={time} />
      </form>
      <div className="modal-backdrop bg-black/80">
        <button onClick={() => router.back()}>&nbsp;</button>
      </div>
    </div>
  );
}
