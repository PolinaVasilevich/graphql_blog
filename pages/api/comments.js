import { GraphQLClient, gql } from "graphql-request";

const graphQLAPI = process.env.NEXT_PUBLIC_GRAPHQLCMS_ENDPOINT || "";
const graphCMSToken = process.env.GRAPHCMS_TOKEN || "";

export default async function comments(req, res) {
  const grapQLClient = new GraphQLClient(graphQLAPI, {
    headers: {
      authorization: `Bearer ${graphCMSToken}`,
    },
  });

  const query = gql`
    mutation CreateComment(
      $name: String!
      $email: String!
      $comment: String!
      $slug: String!
    ) {
      createComment(
        data: {
          name: $name
          email: $email
          comment: $comment
          post: { connect: { slug: $slug } }
        }
      ) {
        id
      }
    }
  `;

  try {
    const result = await grapQLClient.request(query, req.body);
    return res.status(200).send(result);
  } catch (error) {
    return res.status(500).send(error);
  }
}
