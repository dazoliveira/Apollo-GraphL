const { gql } = require('apollo-server')

const typeDefs = gql`
"Get tracks array for home page"
    type Query{
        tracksForHome:[Track!]!
    }

"A track is specific module that teachs about a specific topic" 
    type Track{
        id: ID!
        title: String!
        author: Author!
        "a url to the image for the tcrack s card"
        thumbnail: String
        length: Int
        modulesCount: Int
    }

"Author of coplete Track"    
    type Author{
        id: ID!
        name: String!
        photo: String
    }
`;

module.exports = typeDefs