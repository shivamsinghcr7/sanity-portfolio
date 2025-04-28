//import sanityClient from "@sanity/client";
import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = createClient({
  projectId: "hw4h8a63",
  dataset: "production",
  apiVersion: "2022-02-01",
  useCdn: true,
  token: process.env.SANITY_TOKEN_ID,
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
