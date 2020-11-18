import gql from '../graphql';
const demo = {
  PingMessage: function (query) {
    return gql.query({
      query: `
        query PingMessage($message: String!) {
                ping(message: $message)
        }    
    `,
      variables: {
        message: query,
      },
    });
  },
  tags: function () {
    return gql.query({
      query: `
        query {
            tags {
                id
                label
                message {
                    id
                    name
                    children
                }
            }
            hello
        }  
    `,
    });
  },
  addTag: function (params) {
    return gql.mutate({
      mutation: `
        mutation addTag($label: String!) {
            addTag(label: $label) {
                id
                label
            }
        }
    `,
      variables: { label: params },
    });
  },
};
export default demo;
