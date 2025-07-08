import React from 'react'
import { client } from '@/libs/client';

type Props = {
    params: Promise<{id: string}>;
}

export default async function BlogDetailsPage({params}: Props) {
    const {id} = await params;

    const data = await client.get({
      endpoint: "blogs",
      contentId: id,
    });

    return(
     <>
      <main className="p-10">
        <h1 className="text-3xl font-bold mb-4">{data.title}</h1>
        <p className="text-amber-50 mb-4">{data.publishedAt}</p>
        <article
          className="prose font-bold"
          dangerouslySetInnerHTML={{ __html: data.content ?? "<p>本文がありません</p>" }}
        />
      </main>
     </>
    )
}
