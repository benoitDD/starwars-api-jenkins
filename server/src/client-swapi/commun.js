import {GraphQLDataSource} from 'apollo-datasource-graphql'

function handleError(error){
    throw error
}

function getData(response){
    return response.data
}

function buildVariablesForPagination(pageSize, after, before){
    var variables = {}
    if(after){
        variables.after = after
        variables.first = pageSize
    }else if(before){
        variables.before = before
        variables.last = pageSize
    }else{
        variables.first = pageSize
    }
    return variables
}

class Commun extends GraphQLDataSource {

    constructor(props){
        super(props)
        this.baseURL = 'http://localhost:8080'
    }
   
    getAllObject(pageSize = 10, after, before, query) {
        var variables = buildVariablesForPagination(pageSize, after, before)
        return this.query(query, {
            variables
        })
        .then(getData)
        .catch(handleError)
    }

    getAllObjectOf(id, pageSize = 10, after, before, query) {
        var variables = buildVariablesForPagination(pageSize, after, before)
        variables.id = id
        return this.query(query, {
            variables
        })
        .then(getData)
        .catch(handleError)
    }

    getObject(id, query) {
        return this.query(query, {
          variables: {
              id
            }
        })
        .then(getData)
        .catch(handleError)
      }
  }
  
  export {Commun}