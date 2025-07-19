// app/posts/Photos/page.tsx
import { client } from "@/libs/client";
import Photos from "@/app/features/components/Photos";

export default async function PhotoPage() {
  // microCMS から画像一覧を取得
  const data = await client.get({ endpoint: "images" });

  return (
    <div className="p-5 md:p-20 lg:p-20">
      {/* ここから下はクライアントマウント後にだけ描画 */}
        <Photos images={data.contents} />
    </div>
  );
}
