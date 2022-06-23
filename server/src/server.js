const { ApolloServer } = require('apollo-server');

// Schema
const typeDefs = `
  type Query {
    info: String!
    feed: [City!]!
  }

  type Mutation {
    post(city: String!, country: String!): City!
    deleteCity(id: ID!): Boolean
  }

  type City {
    id: ID!
    city: String!
    country: String!
  }
`
// Mock DB
let cities = [{
    id: 'city-0',
    city: 'Rotterdam',
    country: 'NL'
  },
  {
    id: 'city-1',
    city: 'Frankfurt',
    country: 'DE'
  }
]
// Resolvers  
const resolvers = {
  Query: {
    info: () => `This is a GraphQL API`,
    feed: () => cities,
  },
  Mutation: {
    // Create
    post: (parent, args) => {
  
      let idCount = cities.length

      const city = {
        id: `city-${idCount++}`,
        country: args.country,
        city: args.city,
      }
      cities.push(city)
      console.log('cities', cities)
      return city
    },
    deleteCity: (parent, args) => {
      const filteredCities = cities.filter(city => city.id!=args.id)
      cities = [...filteredCities]
      console.log('citiess', cities);
    }
  },
}

// Middleware
const server = new ApolloServer({
  typeDefs,
  resolvers,
})

// Starting server
server
  .listen()
  .then(({ url }) => console.log(`GraphQL Server is running on ${url}`)
  );
