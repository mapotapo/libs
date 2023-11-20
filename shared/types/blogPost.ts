export type BlogPost = {
    id: string;
    title: string;
    slug: string;
    description?: string | null;
    content?: string | null;
    coverImage?: string | null;
    tags?: string[] | null;
    metaTitle?: string | null;
    metaDescription?: string | null;
    metaKeywords?: string | null;
    dateCreated: Date;
    dateUpdated: Date;
};

export type BlogPostListing = Pick<BlogPost, 'id' | 'title' | 'description' | 'slug' | 'coverImage' | 'tags' | 'dateCreated'>;