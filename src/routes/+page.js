// import { PUBLIC_DIRECTUS_URL } from '$env/static/public'
let publicUrl = import.meta.env.VITE_DIRECTUS_URL;


// import { Directus } from '@directus/sdk';

// const directus = new Directus(publicUrl);



export const load = async ({ fetch }) => {
    console.log(publicUrl)
    // const publicData = async () => {
    //     // GET DATA
    
    //     // We don't need to authenticate if the public role has access to some_public_collection.
    //     const publicData = await directus.items('link').readByQuery({ sort: ['sort'] });
    //     return publicData.data
    
    // }
    // console.log('FROM DIRECTUS')
    // console.log(publicData());
    const fetchProfileData = async () => {
        const profileRes = await fetch(`${publicUrl}/items/profile`)
        const profileData = await profileRes.json()
        
        return profileData.data
    }
    const fetchLinkData = async () => {
        const linkRes = await fetch(`${publicUrl}/items/link?sort=sort`)
        const linkData = await linkRes.json()
        return linkData.data
    }
    

    return {
        links: fetchLinkData(),
        profile: fetchProfileData(),
        publicUrl,
        
    }
}

