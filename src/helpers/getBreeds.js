export const getBreeds = async() => {
    const url = `https://dog.ceo/api/breeds/list/`;
    const resp = await fetch(url);
    const {message} = await resp.json();

    const breeds = message.map(breedsName => {
        return {
            name:breedsName
        }
    });
    return breeds;
} 