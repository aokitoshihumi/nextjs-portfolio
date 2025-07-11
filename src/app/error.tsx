"use client";
import { useEffect } from "react";

export default function Error({
  //数値変数または引数がその有効範囲外である場合に発生するエラーをあらわすインスタンス
  error,
  //API接続をリセットしたりAPI設定を初期状態に戻したりするインスタンス
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div>
      <h2>Something went wrong!</h2>
      <p>{error.message}</p>
      <button onClick={() => reset()}>Try again</button>
    </div>
  );
}
