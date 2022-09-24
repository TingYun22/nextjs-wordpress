import { gql } from '@apollo/client'

// import discardPTag from '../utils/discardPTag'

export const ALL_PAGES_QUERY = gql`
  query allPages {
    pages(where: {orderby: {field: NAME_IN, order: ASC}}) {
      edges {
        node {
          uri
          title
          pageId
        }
      }
    }
  }
`

export const allPagesQueryVars = {
  first: 10,
}

export const transformAllPagesData = (data) => {
  return (
    data?.pages?.edges
      ?.map((edge) => edge?.node)
      ?.map((page) => ({
        id: page?.pageId || '',
        title: page?.title || '',
        uri: page?.uri || '',
        
      })) || []
  )
}