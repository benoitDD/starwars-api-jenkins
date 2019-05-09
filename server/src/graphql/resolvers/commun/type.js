const Type = {
    SearchResult: {
        __resolveType: (object) => {
            return object._type
        }
    }
}

export default Type