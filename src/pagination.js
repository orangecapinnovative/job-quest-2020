const Pagination = (sourceArray, page = 1, perPage = 25) => {
    let jokes = sourceArray.slice((page - 1) * perPage, page * perPage)
    console.log('Method Pagination page : ', page)
    return {
        jokes,
        meta: {
            page: +page,
            perPage: +perPage,
            totalPages: Math.ceil(sourceArray.length / perPage)
        }
    }
}

export default Pagination