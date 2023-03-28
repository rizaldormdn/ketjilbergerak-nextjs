import { ImageType } from "./ImageType"

export type HomePage = {
     id: number
     attributes: {
          createdAt: Date
          updatedAt: Date
          publishedAt: Date
          banner_title: string
          banner_description: string
          banner_images: ImageType
     }
}
