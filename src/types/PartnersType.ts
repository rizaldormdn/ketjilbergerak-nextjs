import { ImageType } from "./ImageType";

export type PartnersType = {
     attributes: {
          title: string
          createdAt: Date;
          publishedAt: Date;
          updatedAt: Date;
          image: ImageType
     }
}