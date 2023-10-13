export type BlogPost = {
    id: string;
    title: string;
    description?: string;
    slug: string;
    content?: string;
    coverImage?: string;
    tags: string[];
    metaTitle?: string;
    metaDescription?: string;
    metaKeywords?: string;
    dateCreated: Date;
    dateUpdated: Date;
};

export type BlogPostListing = Pick<BlogPost, 'id' | 'title' | 'description' | 'slug' | 'coverImage' | 'tags' | 'dateCreated'>;