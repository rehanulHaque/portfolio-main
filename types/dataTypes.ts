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
