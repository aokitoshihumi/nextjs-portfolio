import { client } from "@/libs/client";
import Eyecatch from "./features/components/Eyecatch";

export default async function Home() {
  const data = await client.get({ endpoint: "blogs"});

  return (
    <>
      <div className="bg-ground">
        <Eyecatch blogs={data.contents} />
      </div>
    </>
  );
}


