interface Props{
    url: string
}

export default function Video({url}:Props){
    return(
        <iframe class="w-full m-auto aspect-video rounded-sm shadow-xl"  src={url} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
    )
}