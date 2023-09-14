interface Props {
    children: any;
    url: string;
}

export default function Caption({ children, url }: Props) {
    return (
    <div className="w-full flex flex-col items-center justify-center">
        
        <img src={url} alt="alt de la imagen" class="rounded-lg shadow-xl object-cover object-center m-0">
        </img>

        <p className="text-xs text-erie-black text-center">{children}</p>
    </div>);
    }
