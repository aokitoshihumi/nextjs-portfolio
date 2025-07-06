import Photos from "@/app/features/components/Photos"
import { client } from "@/libs/client"

export default async function Photo() {
const image = await client.get({endpoint: "images"})

    return (
        <>
        <Photos images={image.contents}/>
        </>
    )
}