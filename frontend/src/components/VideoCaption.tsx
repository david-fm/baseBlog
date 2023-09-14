import Video from "./Video";

interface Props {
    children: any;
    url: string;
}

export default function Caption({ children, url }: Props) {
    return (
    <div className="w-full flex flex-col items-center justify-center">
        
        <Video url={url}></Video>

        <p className="text-xs text-erie-black text-center">{children}</p>
    </div>);
    }