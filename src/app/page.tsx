import { client } from "@/libs/client";
import Eyecatch from "./features/components/Eyecatch";
import { Blog } from "./features/types";

export default async function Home() {
  //エンドポイントblogsを指定して非同期でデータをgetする。
  const data = await client.get({ endpoint: "blogs"});

  return (
    <>
      <div className="bg-ground">
        {/* Eyecatchにdata.contentsをblogsとして渡す。 */}
        <Eyecatch blogs={data.contents} />
      </div>
    </>
  );
}


