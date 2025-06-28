export interface ProjectDataTypes {
  projects: [{
    description: string
    projectImage: {
      url: string
    }
    title: string
    date: string
    demoLink: string
    sourceCode: string
    tags: string
  }]
}

export interface BlogDataTypes {
  blogs: [{
    id: string
    image: {
      url: string
    }
    miniDescription: string
    title: string
    blogUrl: string
    body: {
      html: string
    }
  }]
}

export interface BlogPageDataTypes {
  blogs: [{
    image: {
      url: string;
    };
    title: string;
    body: {
      html: string;
    };
    blogUrl: string;
  }]
}

export interface ProductsTypes {
  products: [{
    createdAt: string
    miniDescription: {
      text: string
    }
    downloadUrl: string
    id: string
    price: number
    image: {
      url: string
    }
    title: string
    slug: string
  }]
}

export interface SingleProductsTypes {
  product: {
    createdAt: string
    miniDescription: {
      text: string
    }
    downloadUrl: string
    id: string
    price: number
    image: {
      url: string
    }
    title: string
    slug: string
    isFree: boolean,
    features: string[]
    highlights: string[]
    overview: string
    pagesIncluded: string[]
  }
}