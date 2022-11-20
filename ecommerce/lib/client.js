import sanityClient from '@sanity/client';
import imageURLBuilder from '@sanity/image-url';

export const client = sanityClient({
    projectId: 'pc5hzl9e',
    dataset: 'production',
    apiVersion: '2022-11-18',
    useCdn: true,
    token: process.env.NEXT_PUBLIC_SANITY_TOKEN
});

const builder = imageURLBuilder(client);

export const urlFor = (source) => builder.image(source);
