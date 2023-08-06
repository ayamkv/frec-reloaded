// import { Directus } from '@directus/sdk';

// const publicUrl = import.meta.env.VITE_DIRECTUS_URL;
// const directusToken = import.meta.env.VITE_DIRECTUS_API_TOKEN;

// if (!directusToken) {
//     throw Error("Make sure to add the Directus API Token in your environment variables.")
// }

// if (!publicUrl) {
//     throw Error("Make sure to add the Directus URL in your environment variables.")
// }

// export const directus = new Directus(publicUrl, {
//     auth: {
//         staticToken: directusToken
//     }
// });

// export async function updateClick(id) {

// 	const data = await directus.items('link').readOne(id)
// 	// alert(id)
// 	const dataRes = data[0]

//     await directus.items('link').updateOne(id, {
//         clicks: data.clicks + 1
		
//     })

//   }

