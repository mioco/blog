import Link from 'next/link';

export const TagsAside = ({ selectedTag, allTags }: {
    selectedTag?: string;
    allTags: string[];
}) => {
    return (
        <aside className="w-32">
          <h3 className="text-lg font-semibold mb-4">Tags</h3>
          <div className="space-y-2">
            <Link
              href="/posts"
              className={`block px-3 py-2 rounded ${
                !selectedTag
                  ? 'bg-blue-100 text-blue-700'
                  : 'hover:bg-gray-100'
              }`}
            >
              All Posts
            </Link>
            {allTags.map((tag) => (
              <Link
                key={tag}
                href={`/posts/${tag}`}
                className={`block px-3 py-2 rounded ${
                  selectedTag === tag
                    ? 'bg-blue-100 text-blue-700'
                    : 'hover:bg-gray-100'
                }`}
              >
                {tag}
              </Link>
            ))}
          </div>
        </aside>
    )
}
