import Avatar from "./Avatar";

export type FeedbackInfo = {
    avatarUrl: string;
    feedback: string;
    name: string;
    occupation: string;
}

export function Feed({avatarUrl, feedback, name, occupation} : FeedbackInfo) {
    return(
        <div className="flex items-center gap-4 flex-col text-center">
            <Avatar url={avatarUrl}/>
            <p className="text-balance my-11 font-bold text-neutral-veryDarkGrayishBlue">
                {feedback}
            </p>
            <div className="mt-auto">
                <p className="font-black font-heading text-neutral-veryDarkDesaturatedBlue">{name}</p>
                <p className="text-xs mt-2">{occupation}</p>
            </div>
        </div>
    )
}