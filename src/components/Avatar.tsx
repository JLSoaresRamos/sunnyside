export default function Avatar({ url }: {url: string}) {
    return(
        <img src={url} className="rounded-full h-20 w-20" />
    )
}