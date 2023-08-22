"use client";
import { UserPlusIcon } from "@heroicons/react/20/solid";
import { useRouter } from "next/navigation";
import { Button } from "$/_ui/atoms/button";
import { Circle } from "$/_ui/atoms/circle";
import { Input } from "$/_ui/atoms/input";
import Link from "next/link";
import React from "react";

export default async function RegistUserInfo() {
  const router = useRouter();
  return (
    <dialog
      onClose={(event) => {
        if (event.currentTarget.returnValue === "complete") {
          alert("completed!!!");
          router.back();
        } else {
          router.back();
        }
      }}
      className="modal modal-bottom sm:modal-middle"
      id="my_modal_5"
      open
    >
      <form
        className="modal-box flex flex-col content-center items-center justify-center gap-4"
        method="dialog"
      >
        <Circle.Basic className="relative h-28 w-28" color="secondary">
          <UserPlusIcon className="absolute right-3 top-4 h-20 w-20 fill-none stroke-secondary-900 stroke-[.5]" />
        </Circle.Basic>
        <div className="flex flex-col items-center gap-4">
          <h1 className="text-2xl font-black">予約情報登録</h1>
          <p className="text-xs">
            氏名、電話番号を入力して、予約情報を登録します。
          </p>
        </div>
        <div className="space-y-1 pb-4">
          <div className="space-y-2">
            <label className="text-xs font-bold">氏名</label>
            <Input.Basic placeholder="名前を入力して下さい" color="secondary" />
          </div>
          <div className="space-y-2">
            <label className="text-xs font-bold">電話番号</label>
            <Input.Basic placeholder="090-xxxx-xxxx" color="secondary" />
          </div>
        </div>
        <Button.Basic value="complete" color="primary">
          <Link href="/reserveDateTimeComplete">予約する</Link>
        </Button.Basic>
      </form>
      <form className="modal-backdrop" method="dialog">
        <button value="close">&nbsp;</button>
      </form>
    </dialog>
  );
}
