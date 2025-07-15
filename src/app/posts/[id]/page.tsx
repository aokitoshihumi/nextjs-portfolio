import React from "react";
import { client } from "@/libs/client";
import rehypeRaw from "rehype-raw";
import rehypeSanitize from "rehype-sanitize";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";


const BlogDetailsPage = async ({ params }: { params: { id: string } }) => {
  const resolvePrams = params.id;
  
  //外部からの通信の時だけawaitが必要。
  const data = await client.get({
    endpoint: "blogs",
    contentId: resolvePrams,
  });

  return (
    <>
      <main className="p-10">
        <h1 className="text-3xl font-bold mb-4">{data.title}</h1>
        <p className="text-amber-50 mb-4">{data.publishedAt}</p>
        <ReactMarkdown rehypePlugins={[rehypeRaw, remarkGfm, rehypeSanitize]}>
          {data.content}
        </ReactMarkdown>
      </main>
    </>
  );
};

export default BlogDetailsPage;
