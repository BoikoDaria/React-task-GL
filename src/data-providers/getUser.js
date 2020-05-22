export default (accountName) => {
    return fetch(`https://api.github.com/users/${accountName}`).then((responce) => {
        return responce.json && responce.json();
    }).catch((error) => {
        console.warn(error);
    });
}