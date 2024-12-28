export interface IPageProps<T> {
  params: T
}

export type TPageSlugProp = IPageProps<Promise<{ slug: string }>>
export type TPageIdProp = IPageProps<Promise<{ id: string }>>
export type TPagePublicIdProp = IPageProps<Promise<{ publicId: string }>>
