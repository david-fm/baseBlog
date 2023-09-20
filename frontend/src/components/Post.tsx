
import type { CollectionEntry } from "astro:content";
import { useState } from "preact/hooks";
import { Signal } from "@preact/signals";

interface Props{
    children: any,
    post: CollectionEntry<'blog'>,
    search?: Signal<string>,
    tagFilter?: Signal<string>
}


export default function Post({ children, post, search, tagFilter }: Props) {
    const [showPost, setShowContent] = useState(false);

    /* showPost == true if post contain search */
    if (search?.value) {
        if (post.data.title.toLowerCase().includes(search.value.toLowerCase()) || post.data.category.toLowerCase().includes(search.value.toLowerCase()) || post.data.author.toLowerCase().includes(search.value.toLowerCase())) {
            setShowContent(true);
        } else {
            setShowContent(false);
        }
    } else {
        setShowContent(true);
    }
    
    if (tagFilter?.value) {
        if (post.data.category === tagFilter.value) {
            setShowContent(true);
        } else {
            setShowContent(false);
        }
    }

    return showPost &&(
        <a href={`/posts/${post.slug}`} class=" cursor-pointer ">
        <section class="grid gap-5 md:gap-10 md:grid-cols-2">
            {children}
            <div class=" flex flex-col justify-center">
                <p class=" text-ucla-blue font-bold">{post.data.category.toUpperCase()}</p>
                <h2 class=" text-3xl lg:text-4xl text-erie-black font-bold">{post.data.title}</h2>
                <div class="flex gap-2 mt-3">
                    <span class="text-gray-400">
                    {post.data.author}
                    </span>
                    <span class="text-gray-400">• </span>
                    <time
                    class="text-gray-400"
                    dateTime={post.data.publishDate.toISOString()}>
                    {post.data.publishDate.toDateString()}
                    </time>
                </div>
            </div>
        </section>
        </a>
    )
}
