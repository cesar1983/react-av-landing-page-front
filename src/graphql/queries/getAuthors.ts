const GET_AUTHORS = /* GraphQL */ `
  query GET_AUTHORS {
    authors {
      id
      name
      role
      description
    }
  }
`

export default GET_AUTHORS
