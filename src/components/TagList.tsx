import { Tag } from './Tag';

interface TagListProps {
  tags: string[];
  className?: string;
}

export const TagList = ({ tags, className = '' }: TagListProps) => {
  return (
    <div className={`flex flex-wrap gap-2 ${className}`}>
      {tags.map((tag) => (
        <Tag key={tag} tag={tag} />
      ))}
    </div>
  );
}; 