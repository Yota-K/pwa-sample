import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "~/components/ui/carousel"
import { Card, CardContent } from "~/components/ui/card"
import { Button } from "~/components/ui/button"
import Autoplay from "embla-carousel-autoplay"
import { Link } from "@tanstack/react-router";

export const Home: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="py-4">
        <Carousel 
          className="w-full"
          opts={{
            loop: true,
          }}
          plugins={[
            Autoplay({
              delay: 2000,
            }),
          ]}
        >
          <CarouselContent>
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div>
                  <Card>
                    <CardContent>
                      <div>
                        <img className="rounded-md" src="https://storage.googleapis.com/studio-cms-assets/projects/EXawvdJVqD/s-1920x1080_v-frms_webp_f0affb04-5b66-45a9-ba8a-79fdf48a689d_small.webp" />
                        <h3 className="text-xl mt-2">OTHERS</h3>
                        <div className="bg-gray-100 rounded-md p-2 mt-2 mb-4">
                          <h4>Contents</h4>
                          <p className="break-words text-gray-800">travel/lock/confuse/contain/stretch/award/guard/trap/plant/organize/invent/wonder/trade/grow/bite/mind/promise</p>
                        </div>
                        <Button>Watch this lesson</Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>

      <div className="py-4">
        <h2 className="text-2xl mb-2">新着動画</h2>
        <Carousel className="w-full">
          <CarouselContent>
            {Array.from({ length: 10 }).map((_, index) => (
              <CarouselItem key={index} className="md:basis-1/4 lg:basis-1/5">
                <div className="p-1">
                  <Link to="/lesson/$id" params={{ id: String(index + 1) }} className="block">
                    <Card className="cursor-pointer hover:shadow-md transition-shadow p-0">
                      <CardContent className="p-0">
                        <img className="rounded-md" src="https://storage.googleapis.com/studio-cms-assets/projects/EXawvdJVqD/s-1920x1080_v-frms_webp_f0affb04-5b66-45a9-ba8a-79fdf48a689d_small.webp" />
                      </CardContent>
                    </Card>
                  </Link>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>

      <div className="py-4">
        <h2 className="text-2xl mb-2">視聴履歴</h2>
        <Carousel className="w-full">
          <CarouselContent>
            {Array.from({ length: 10 }).map((_, index) => (
              <CarouselItem key={index} className="md:basis-1/4 lg:basis-1/5">
                <div className="p-1">
                  <Card className="cursor-pointer hover:shadow-md transition-shadow p-0">
                    <CardContent className="p-0">
                      <img className="rounded-md" src="https://storage.googleapis.com/studio-cms-assets/projects/EXawvdJVqD/s-1920x1080_v-frms_webp_f0affb04-5b66-45a9-ba8a-79fdf48a689d_small.webp" />
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </div>
  )
} 
