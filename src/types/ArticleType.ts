import { ImageType } from "./ImageType";

export type ArticleType = {
     id: number;
     attributes: {
          title: string;
          content: string;
          slug: string;
          excerpt: string
          createdAt: Date;
          publishedAt: Date;
          updatedAt: Date;
          featured: boolean;
          images: ImageType;
     };
};
