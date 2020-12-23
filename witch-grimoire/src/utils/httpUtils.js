const GET = async url => {
    return await fetch(url, {
        method: "GET",
    });
};

export {
    GET
};