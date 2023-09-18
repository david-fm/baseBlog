import { Signal } from "@preact/signals"
interface Props {
    tags: string[];
    selected: Signal<string>;
}

export default function TagFilter({ tags, selected }: Props) {
    
    const handleClick = (tag: string) => {
        if (selected.value === tag) {
            selected.value = "";
            return;
        }
        selected.value = tag;
    }
    
    return (
        <ul className="w-full flex flex-wrap p-6 gap-1 pl-0">
            {tags.map((tag) => (

            <li 
              key={tag} 
              onClick={() => handleClick(tag)} 
              className={` text-xs p-2 cursor-pointer ${
                selected.value === tag ? "bg-gray-400 text-erie-black" : "bg-gray-200 text-gray-400"
              }`}>
                {tag.toUpperCase()}
            </li>
            ))}
        </ul>
    );
    }
