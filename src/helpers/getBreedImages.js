export const getBreedsImages = async(categoryImages = '') => {
    const url = `https://dog.ceo/api/breed/${categoryImages}/images`;
    const resp = await fetch(url);
    const {message} = await resp.json();
    const breeds = message.map(breedsName => {
        return {
            name:breedsName
        }
    });
    return breeds;
} 