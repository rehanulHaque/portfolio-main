"use server"

import { BlogDataTypes, BlogPageDataTypes, ProductsTypes, ProjectDataTypes, SingleProductsTypes } from "@/types/dataTypes";
import { GraphQLClient } from "graphql-request"

const client = new GraphQLClient(process.env.NEXT_API_KEY!)

export const getProjectsData = async () => {
  const data = await client.request(
    `
    query Assets {
      projects {
        description
        projectImage {
          url
        }
        title
        date
        demoLink
        sourceCode
        tags
      }
    }
    `
  ) as ProjectDataTypes;
  return data.projects;
};

export const getBlogsData = async () => {
  const data = await client.request(
      `
    query Assets {
      blogs {
        id
        image {
          url
        }
        miniDescription
        title
        blogUrl
        body {
          html
        }
      }
    }
    `
  ) as BlogDataTypes;
  return data.blogs;
};




export const getBlog = async (id: string) => {
  const data = await client.request(
      `
      query Asset {
          blogs(where: {blogUrl: "${id}"}) {
              image {
                url
              }
              title
              body {
                html
              }
              blogUrl
            }
        }
        
      `
  ) as BlogPageDataTypes
  return data.blogs[0]
}


export const getProductsData = async () => {
  const data = await client.request(
    `
    query MyQuery {
  products {
    createdAt
    miniDescription {
      text
    }
    downloadUrl
    id
    isFree
    price
    image {
      url
    }
    title
    slug
  }
}
    `
  ) as ProductsTypes
  return data.products;
};


export const getSingleProduct = async (slug: string) => {
  const data = await client.request(
    `
   query MyQuery {
  product(where: {slug: "${slug}"}) {
    downloadUrl
    miniDescription {
      text
    }
    id
    isFree
    price
    image {
      url
    }
    title
    slug
    features
    highlights
    overview
    pagesIncluded
  }
}
    `
  ) as SingleProductsTypes;
  return data.product;
}