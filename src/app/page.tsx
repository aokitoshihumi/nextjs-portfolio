import { client } from "@/libs/client";
import Eyecatch from "./features/components/Eyecatch";
import Link from "next/link";
import Profile from "./features/components/Profile";

const Home = async () => {
  const data = await client.get({ endpoint: "blogs" });

  return (
    <>
      <div className="bg-ground">
        {/* Eyecatchにdata.contentsをblogsとして渡す。 */}
      <div className="flex items-center justify-center">
        <Profile />
      </div>
        <Eyecatch blogs={data.contents} />
      </div>
    </>
  );
};

export default Home;
