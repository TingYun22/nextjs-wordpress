import PostPreview from './PostPreview'

export default function PostList({ posts }) {

    const morePosts = posts?.slice(0) || []
  return (
    <section>
      <h2 className="">
        More Stories
      </h2>
      <div className="">
        {morePosts.map((post) => (
          <PostPreview
            key={post?.id}
            title={post?.title}
            featuredImage={post?.featuredImage}
            date={post?.date}
            uri={post?.uri}
            excerpt={post?.excerpt}
          />
        ))}
      </div>
    </section>
  )
}