import { client } from "@/libs/client";
import Eyecatch from "./features/components/Eyecatch";
import Link from "next/link";

const Home = async () => {
  const data = await client.get({ endpoint: "blogs" });

  return (
    <>
      <div className="bg-ground">
        {/* Eyecatchにdata.contentsをblogsとして渡す。 */}
        <Eyecatch blogs={data.contents} />
      </div>
    </>
  );
};

export default Home;
