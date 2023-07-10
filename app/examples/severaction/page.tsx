import { getServerSession } from "next-auth/next";
import { authOptions } from "$/api/auth/[...nextauth]/route";

// http://localhost:3000/examples/severaction

/**
 * 従来のSSRの様な形で、サーバーサイドでActionを実行できる
 *
 * @returns
 */
export default function ActionForm() {
  // Sever Actionを実行する関数
  async function onSubmit(formData: FormData) {
    "use server"; // Server Actionの場合は必ず記述する
    const session = await getServerSession(authOptions);
    const user = session?.user;
    // ログイン情報とフォームのデータが取得できる
    console.log("user, formData", user, formData);
  }

  return (
    <form action={onSubmit}>
      <input
        type="text"
        name="hogehoge"
        value="fooooo"
        className="input input-primary"
        placeholder="hoge"
      />
      <button className="btn btn-primary" type="submit">
        Sever Actionを実行する
      </button>
    </form>
  );
}
