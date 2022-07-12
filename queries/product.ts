import {gql} from "@apollo/client";

const productByIdQuery = gql`
  query {
    productById(productId: 53) {
      id
      name
      data
      variantRewards
    }
  }
`;

export default productByIdQuery;