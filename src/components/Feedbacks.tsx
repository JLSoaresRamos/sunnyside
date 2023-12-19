

import { Feed, FeedbackInfo } from './Feed';

type FeedbackProps = {
    clients: FeedbackInfo[]
}


export default function Feedbacks({ clients } : FeedbackProps) {
    return(
        <section className="w-full h-[37.5rem] flex flex-col items-center justify-center
                            max-md:h-auto max-md:py-10">
            <h2 className="font-heading text-center uppercase text-neutral-grayishBlue tracking-[0.3em] text-xl mb-8
                            max-md:text-lg">
                                Client Testimonials
            </h2>
            <section className="grid grid-cols-3 text-neutral-darkGrayishBlue p-7
                                max-md:grid-cols-1 max-md:grid-rows-3 max-md:gap-12">
                {
                    clients.map((client, index) => (
                        <Feed 
                            key={index.toString()+client}
                            avatarUrl={client.avatarUrl}
                            feedback={client.feedback}
                            name={client.name}
                            occupation={client.occupation}
                        />
                    ))
                }
            </section>
        </section>
    )
}