import { useQuery } from '@apollo/client'
import Link from 'next/link'
import { useMemo } from 'react'
import { allPagesQueryVars, ALL_PAGES_QUERY, transformAllPagesData } from '../graphql/allPagesQuery'
import { addApolloState, initializeApollo } from '../lib/apolloClient'

import styles from '../styles/components/menu.module.scss'
export default function Menu(){

    const { data } = useQuery(ALL_PAGES_QUERY, {
        variables: allPagesQueryVars,
      })
      const allPages = useMemo(() => transformAllPagesData(data), [data]) || []

    return(
        <>
            <div className={styles.menu}>
                {allPages.map((page)=>(
                    <h2 key={page.id}>
                        <Link href={page.uri} >
                            <a>
                                {page.title}
                            </a>
                        </Link>
                    </h2>
                    
                ))}
            </div>
           
        </>
    )
}

export async function getStaticProps() {
    const apolloClient = initializeApollo()
  
    await apolloClient.query({
      query: ALL_PAGES_QUERY,
      variables: allPagesQueryVars,
    })
  
    return addApolloState(apolloClient, {
      props: {},
      revalidate: 1,
    })
  }