// import { PUBLIC_DIRECTUS_URL } from '$env/static/public'

let publicUrl = import.meta.env.VITE_POCKETBASE_URL;


export const load = async ({ fetch }) => {
    const fetchProfileData = async () => {
        const profileRes = await fetch(`${publicUrl}/api/collections/profile/records`)
        const profileData = await profileRes.json()
        return profileData
    }
    const fetchLinkData = async () => {
        const linkRes = await fetch(`${publicUrl}/api/collections/link/records`)
        const linkData = await linkRes.json()
        return linkData
    }
    return {
        profile: fetchProfileData(),
        links: fetchLinkData(),
        publicUrl
    }
}

