import { posts } from "#site/content"
import { sortPosts } from "@/lib/utils"
import Link from "next/link"
import { imageOptimizer } from "next/dist/server/image-optimizer"

export default async function Page() {
  const sortedPosts = sortPosts(posts.filter((post) => post.published))

  return (
    <div className="">
      {sortedPosts?.length > 0 ? (
        <ul className="flex flex-col gap-2">
          {sortedPosts.map((post) => {
            const { title, slug } = post
            return (
              <Link href={slug}>
                {title}
              </Link>
            )
          })}
        </ul>
      ) : (
        <p>Nothing to see here yet</p>
      )}
    </div>
  )
}
