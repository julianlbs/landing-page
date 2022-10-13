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

export interface FormatProps {
  name: string,
  hash: string;
  ext: string,
  mime: string,
  path?: string | null,
  previewUrl?: string | null;
  width: number,
  height: number,
  size: number,
  url: string;
}

export interface FormatsType {
  thumbnail: FormatProps,
  medium: FormatProps,
  small: FormatProps,
  large: FormatProps,
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
      formats: FormatsType,
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
      picture?: Image;
    };
  };
}

