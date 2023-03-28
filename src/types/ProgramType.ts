import { ImageType } from "./ImageType"

export type ProgramType = {
     id: number
     attributes: {
          title: string
          slug: string
          excerpt: string
          content: string
          featured: boolean
          createdAt: Date
          updatedAt: Date
          publishedAt: Date
          images: ImageType

     }
}
