import { signIn, signOut, useSession } from "next-auth/react";
import type { FC } from "react";
import { Button } from "src/component/Button";

export const Index: FC = () => {
  const { data: session } = useSession();

  return (
    <div>
      <h2>Index</h2>
      {!session ? (
        <Button
          tag="button"
          className="p-2"
          onClick={() => {
            return signIn("google");
          }}
        >
          ログイン
        </Button>
      ) : (
        <Button
          tag="button"
          className="p-2"
          onClick={() => {
            return signOut();
          }}
        >
          ログアウト
        </Button>
      )}
      {session ? <div>{session.user?.name}</div> : null}
    </div>
  );
};
