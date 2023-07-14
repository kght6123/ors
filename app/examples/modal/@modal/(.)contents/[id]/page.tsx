"use client";
import { useRouter } from "next/navigation";
import React from "react";

// export default function PhotoModal({ params: { id } }: { params: { id: string } }) {
//   return (
//     <Modal>
//       {id}
//     </Modal>
//   );
// }

export default function ContentsModal({
  params: { id },
}: {
  params: { id: string };
}) {
  const router = useRouter();
  return (
    <dialog
      id="my_modal_5"
      className="modal modal-bottom sm:modal-middle"
      open
      onClose={(event) => {
        if (event.currentTarget.returnValue === "login") {
          alert("You are logged in!");
          router.back();
        } else {
          router.back();
        }
      }}
    >
      <form method="dialog" className="modal-box">
        <h3 className="text-lg font-bold">Login</h3>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">login ID</span>
          </label>
          <input
            type="text"
            placeholder="XXXXX"
            className="input-bordered input w-full max-w-xs"
            value={id}
          />
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input
            type="password"
            placeholder="*****"
            className="input-bordered input w-full max-w-xs"
          />
        </div>
        <div className="modal-action">
          {/* if there is a button in form, it will close the modal */}
          <button className="btn" value="login">
            Login
          </button>
        </div>
      </form>
      <form method="dialog" className="modal-backdrop">
        <button value="close">close</button>
      </form>
    </dialog>
  );
  // 	return (<div className="container mx-auto my-10">
  // 	<div className="w-1/2 mx-auto border border-red-700 text-9xl aspect-square flex place-content-center place-items-center">
  // 		{id}
  // 	</div>
  // </div>)
}
