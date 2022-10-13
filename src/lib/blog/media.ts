import { getStrapiURL } from "./api";

export function getBlogMedia(media: any) {
  const { url } = media.data.attributes;
  const imageUrl: string = url.startsWith("/") ? getStrapiURL(url) : url;
  return imageUrl;
}