import { number } from "zod";

export interface StrapiMeta {
  meta: {
    pagination: {
      page: number,
      pageSize: number,
      pageCount: number,
      total: number;
    };
  };
}

export interface Article {
  id: number,
  attributes: {
    title: string,
    description: string,
    content: string,
    slug: string,
    createdAt: string,
    updatedAt: string,
    publishedAt: string,
    category?: {
      data: {
        id: number,
        attributes: {
          name: string,
          slug: string,
          createdAt: string,
          updatedAt: string;
        };
      };
    },
    image?: Image,
    author?: Author;
  },
}

export interface Articles {
  data: Article[],
  meta: StrapiMeta;
}

export interface Image {
  data: {
    id: number,
    attributes: {
      name: string,
      alternativeText: string,
      caption: string,
      width: number,
      height: number,
      formats: any,
      hash: string,
      ext: string,
      mime: string,
      size: number,
      url: string,
      provider: string,
      createdAt: string,
      updatedAt: string;
    };
  };
}

export interface Author {
  data: {
    id: number,
    attributes: {
      name: string,
      email: string,
      createdAt: string,
      updatedAt: string;
    };
  };
}

