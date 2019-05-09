import {gql} from 'apollo-server'

const VARIABLES_PAGINATION = `
    totalCount
    pageInfo {
        startCursor
        endCursor
    }
`

function createQuery_get_all_object(nameQuery, nameObject, fragmentObject, nameFragmentObject){
    const GET_ALL_OBJECT = gql`
        query ${nameQuery}($after:String, $first:Int, $before: String, $last:Int){
            ${nameQuery}(after:$after, first:$first, before: $before, last:$last){
                ${VARIABLES_PAGINATION}
                ${nameObject} {
                    ...${nameFragmentObject}
                }
            }
        }
        ${fragmentObject}
    `
    return GET_ALL_OBJECT
}

function createQuery_get_object(nameQuery, fragmentObject, nameFragmentObject){
    const GET_OBJECT = gql`
        query ${nameQuery}($id:ID!){
            ${nameQuery}(id:$id){
                ...${nameFragmentObject}
            }
        }
        ${fragmentObject}
        `
    return GET_OBJECT
}

function createQuery_get_child_in(nameChild, nameParent, fragmentChild, nameFragmentChild){
    const GET_CHILD_IN = gql`
        query ${nameParent}($id:ID!){
            ${nameParent}(id:$id){
                ${nameChild}{
                    ...${nameFragmentChild}
                }
            }
        }
        ${fragmentChild}
        `
    return GET_CHILD_IN
}

function createQuery_get_childAll_in(nameChildAll, nameParent, nameConnection, fragmentChild, nameFragmentChild){
    const GET_CHILDALL_IN = gql`
        query ${nameParent}($id:ID!, $after:String, $first:Int, $before: String, $last:Int){
            ${nameParent}(id:$id){
                ${nameConnection}(after:$after, first:$first, before: $before, last:$last){
                    ${VARIABLES_PAGINATION}
                    ${nameChildAll} {
                        ...${nameFragmentChild}
                    }
            }
            }
        }
        ${fragmentChild}
        `
    return GET_CHILDALL_IN
}

export {createQuery_get_all_object, createQuery_get_object, createQuery_get_child_in,
    createQuery_get_childAll_in}