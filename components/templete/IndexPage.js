import { useQuery } from '@apollo/client'
import { useMemo } from 'react'

import { allPostsQueryVars, ALL_POSTS_QUERY, transformAllPostsData } from '../../graphql/allPostsQuery'
import { addApolloState, initializeApollo } from '../../lib/apolloClient'

import PostList from '../PostList'
import Menu from '../Menu'
import styles from '../../styles/components/indexPage.module.scss'



export default function IndexPage() {
  const { data } = useQuery(ALL_POSTS_QUERY, {
    variables: allPostsQueryVars,
  })
  const allPosts = useMemo(() => transformAllPostsData(data), [data]) || []

  return (
    <>
      <headers>
        <div className={styles.main}>
          <h1 className={styles.title}>
            T<span>ing</span> Y<span>un</span>
          </h1>
        </div>
        <Menu />
      </headers>
      <PostList posts={allPosts} />
    </>
  )
}

export async function getStaticProps() {
  const apolloClient = initializeApollo()

  await apolloClient.query({
    query: ALL_POSTS_QUERY,
    variables: allPostsQueryVars,
  })

  return addApolloState(apolloClient, {
    props: {},
    revalidate: 1,
  })
}