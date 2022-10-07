export interface StrapiResponse {
  data: {
    id: number, attributes: {
      Name?: string,
      Description?: string,
      createdAt: string,
      updatedAt: string,
      publishedAt: string;
    };
  }[],
  meta: {
    pagination: {
      page: number,
      pageSize: number,
      pageCount: number,
      total: number;
    };
  };
}