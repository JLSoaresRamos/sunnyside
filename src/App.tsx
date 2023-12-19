import Content from "./components/Content"
import Feedbacks from "./components/Feedbacks"
import Header from "./components/Header"

import { FeedbackInfo } from "./components/Feed";

import emily from '/images/image-emily.jpg';
import jennie from '/images/image-jennie.jpg';
import thomas from '/images/image-thomas.jpg';
import Footer from "./components/Footer";

function App() {

  const feedbacks: FeedbackInfo[] = 
[
    {
        avatarUrl: emily,
        feedback: 
        `We put our trust in Sunnyside and they delivered, making
         sure our needs were met and deadlines were always hit. We're
         very happy with the results.`,
        name: 'Emily R.',
        occupation: 'Marketing Director'
    },
    {
        avatarUrl: thomas,
        feedback: 
        `Sunnyside's enthusiasm coupled with their keen interest in our
         brand's success made it a satisfying and enjoyable experience.
         We highly recommend them!`,
        name: 'Thomas S.',
        occupation: 'Chief Operating Officer'
    },
    {
        avatarUrl: jennie,
        feedback: 
        `Incredible end result! Our sales increased over 400% when
         we worked with Sunnyside. Highly recommended!`,
        name: 'Jennie F.',
        occupation: 'Bussines Owner'
    }
]


  return (
    <main className="w-screen h-screen font-body overflow-x-hidden">
      <Header />
      <Content />
      <Feedbacks clients={feedbacks}/>
      <Footer />
    </main>
  )
}

export default App
