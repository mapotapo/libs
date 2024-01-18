export type BlogPostStatus = 'DRAFT' | 'PUBLISHED' | 'DELETED';

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
    dateCreated?: Date | null;
    dateUpdated?: Date | null;
    status?: BlogPostStatus | null;
};

export type BlogPostListing = Pick<BlogPost, 'id' | 'title' | 'description' | 'content' | 'slug' | 'coverImage' | 'tags' | 'dateCreated'>;