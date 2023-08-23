import RegistUserInfoDialog from "$/(dataEntry)/@modal/(.)registUserInfo/_registUserInfoDialog";
import { UserPlusIcon } from "@heroicons/react/20/solid";
import { Button } from "$/_ui/atoms/button";
import { Circle } from "$/_ui/atoms/circle";
import { Input } from "$/_ui/atoms/input";
import React from "react";

export default function RegistUserInfo() {
  return (
    <RegistUserInfoDialog>
      <form
        className="modal-box flex flex-col content-center items-center justify-center gap-4"
        id="registUserInfoForm"
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
            <Input.Basic
              placeholder="名前を入力して下さい"
              color="secondary"
              name="realName"
            />
          </div>
          <div className="space-y-2">
            <label className="text-xs font-bold">電話番号</label>
            <Input.Basic
              placeholder="090-xxxx-xxxx"
              color="secondary"
              name="tel"
            />
          </div>
        </div>
        <div className="modal-action w-full">
          <Button.Basic value="complete" color="primary" type="submit">
            予約する
          </Button.Basic>
        </div>
      </form>
      <form className="modal-backdrop bg-secondary-950/90" method="dialog">
        <button value="close">&nbsp;</button>
      </form>
    </RegistUserInfoDialog>
  );
}
