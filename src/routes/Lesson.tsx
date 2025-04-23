import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "~/components/ui/carousel"
import { Card, CardContent } from "~/components/ui/card"
import { useParams } from '@tanstack/react-router'

export const Lesson: React.FC = () => {
  const params = useParams({ from: '/lesson/$id' })

  const words = [
    {
      "word": "travel",
      "pronunciation": "/ ˈtrævəl /",
      "partOfSpeech": "verb",
      "translation": "旅行する",
      "example": "I love to travel when I have time."
    },
    {
      "word": "lock",
      "pronunciation": "/ lɑk /",
      "partOfSpeech": "verb",
      "translation": "に鍵をかける",
      "example": "Always lock your car doors so people won't steal your things."
    },
    {
      "word": "confuse",
      "pronunciation": "/ kənˈfjuːz /",
      "partOfSpeech": "verb",
      "translation": "を混同する",
      "example": "I had too many names and faces to remember so I got confused."
    },
    {
      "word": "travel",
      "pronunciation": "/ ˈtrævəl /",
      "partOfSpeech": "verb",
      "translation": "旅行する",
      "example": "I love to travel when I have time."
    },
    {
      "word": "lock",
      "pronunciation": "/ lɑk /",
      "partOfSpeech": "verb",
      "translation": "に鍵をかける",
      "example": "Always lock your car doors so people won't steal your things."
    },
  ]
  
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">STEP {params.id}</h1>
      <div className="flex items-center justify-end gap-4">
        <button className="flex gap-2 items-center rounded-3xl border-[#307199] border p-2 cursor-pointer text-[#307199]">
          <svg width="25" height="18" viewBox="0 0 25 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.22677 14.1667L2.66677 8.60673L0.773438 10.4867L8.22677 17.9401L24.2268 1.94006L22.3468 0.0600586L8.22677 14.1667Z" fill="#307199"/>
          </svg>
          <p>視聴完了する</p>
        </button>
        <div className="flex items-center">
          <svg width="28" height="26" viewBox="0 0 28 26" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.2871 9.36853L17.4043 9.64587L17.7051 9.67126L26.1104 10.3842L19.7266 15.9154L19.498 16.1127L19.5664 16.4066L21.4834 24.6254L14.2588 20.265L14 20.1097L13.7422 20.265L6.51562 24.6263L8.43359 16.4066L8.50293 16.1127L8.27441 15.9154L1.88965 10.3842L10.2959 9.67126L10.5967 9.64587L10.7139 9.36853L14 1.61462L17.2871 9.36853Z" fill="white" stroke="#FFBA18"/>
          </svg>
          <p className="text-[#307199]">お気に入り登録</p>
        </div>
      </div>
      <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center">
        <iframe
          src="https://utage-system.com/video/DFMZyaUnAsNp"
          width="100%"
          height="600"
          allow="autoplay; fullscreen"
          allowFullScreen
          frameBorder="0"
          className="h-full"
        />
      </div>

      <Carousel className="w-full mt-6">
        <CarouselContent>
          {words.map(({ partOfSpeech, word, translation, pronunciation, example }, index) => (
            <CarouselItem key={index} className="md:basis-1/4 lg:basis-1/5">
              <Card className="cursor-pointer hover:shadow-md transition-shadow h-full">
                <CardContent>
                  <p className="text-[#18384D]">No.00{index + 1}</p>
                  <span className="leading-4 inline-block bg-red-500 p-1 rounded-md text-white">{partOfSpeech}</span>
                  <div className="text-[#18384D]">
                    <p className="text-3xl">{word}</p>
                    <p className="my-4">{translation}</p>
                    <p className="text-3xl">{pronunciation}</p>
                    <p className="mt-4">{example}</p>
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  )
} 
