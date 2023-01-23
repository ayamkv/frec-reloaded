
export const load = async ({ fetch }) => {

    const fetchProfileData = async () => {
        const profileRes = await fetch('https://ee2poimw.directus.app/items/profile')
        const profileData = await profileRes.json()
        return profileData.data
    }
    const fetchLinkData = async () => {
        const linkRes = await fetch('https://ee2poimw.directus.app/items/link')
        const linkData = await linkRes.json()
        return linkData.data
    }

    return {
        links: fetchLinkData(),
        profile: fetchProfileData(),
    }
}


