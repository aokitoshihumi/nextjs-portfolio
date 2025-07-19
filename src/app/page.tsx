import { client } from "@/libs/client";
import Eyecatch from "./features/components/Eyecatch";
import Profile from "./features/components/Profile";
import Appear from "./features/components/Appear";
import CoverFlow from "./features/components/CoverFlow";

const Home = async () => {
  const data = await client.get({ endpoint: "blogs" });
  const image = await client.get({ endpoint: "images" });

  return (
    <>
      {/* Eyecatchにdata.contentsをblogsとして渡す。 */}
      <Profile />
      <Appear title={"ブログ"} />
      <Eyecatch blogs={data.contents.slice(0, 3)} />
      <Appear title={"写真"} />
      <CoverFlow images={image.contents}/>
      <Appear title={"実績"} />
      <h1 className="flex justify-center text-xl font-bold mb-30">
        7月18日現在準備中
      </h1>
    </>
  );
};

export default Home;
