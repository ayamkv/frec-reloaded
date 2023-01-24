// import { PUBLIC_DIRECTUS_URL } from '$env/static/public'
let publicUrl = import.meta.env.VITE_DIRECTUS_URL;


export const load = async ({ fetch }) => {
    console.log(publicUrl)
    const fetchProfileData = async () => {
        const profileRes = await fetch(`${publicUrl}/items/profile`)
        const profileData = await profileRes.json()
        return profileData.data
    }
    const fetchLinkData = async () => {
        const linkRes = await fetch(`${publicUrl}/items/link`)
        const linkData = await linkRes.json()
        return linkData.data
    }

    return {
        links: fetchLinkData(),
        profile: fetchProfileData(),
        publicUrl
    }
}

