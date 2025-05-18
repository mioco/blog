import Link from 'next/link';

const Tag = ({ tag, selected, href }: { href?: string; tag: string; selected: boolean }) => (
    <Link
        key={tag}
        href={href || `/posts/${tag}`}
        className={`block px-3 py-2 rounded shrink-0 ${
            selected
            ? 'bg-blue-100 text-blue-700'
            : 'hover:bg-gray-100 dark:hover:bg-gray-800'
        }`}
        >
        {tag}
    </Link>
)

export const TagsAside = ({ selectedTag, allTags }: {
    selectedTag?: string;
    allTags: string[];
}) => {
    return (
        <aside className="lg:w-32 lg:block flex items-center">
          <h3 className="text-lg font-semibold mr-4 lg:mb-4">Tags</h3>
          <div className="lg:space-y-2 flex lg:block overflow-auto">
            <Tag href="/posts" tag={'All Posts'} selected={!selectedTag} />
            {allTags.map((tag) => (
              <Tag key={tag} tag={tag} selected={selectedTag === tag} />
            ))}
          </div>
        </aside>
    )
}
