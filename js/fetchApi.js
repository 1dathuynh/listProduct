export const fetchApi = async (url) => {
    const reponse = await fetch(url);
    const result = await reponse.json();
    return result;
}