import sanityClient from '@sanity/client';

export const client = sanityClient({
  projectId: '724qx1v2',
  dataset: 'production',
  apiVersion: '2022-08-10',
  useCdn: false,
  token: process.env.SANITY_TOKEN,
});
