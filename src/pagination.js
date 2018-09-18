const Pagination = {
    //conditions is model jokes ค้นหาเฉพาะสิ่งที่เราต้องการค้นหา
    // Jokes.where({ categoriesId: explicit})
    paginate(conditions, page = 1, perPage = 5) {
        const queryResults = this.where(conditions)
        return {
            //key is categoriesId value [explicit or neredy]
            [this.key]: queryResults.slice((page - 1) * perPage, page * perPage),
            meta: {
                page: +page,
                perPage: +perPage,
                totalPages: Math.ceil(queryResults.length / perPage)
            }
        }
    }
}

export default Pagination