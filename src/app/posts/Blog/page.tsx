import Eyecatch from "@/app/features/components/Eyecatch";
import { client } from "@/libs/client";

export default async function Blogpage() {
  const data = await client.get({ endpoint: "blogs" });

  return (
    <>
      <div className="p-30">
          <Eyecatch blogs={data.contents} />
      </div>
    </>
  );
}
