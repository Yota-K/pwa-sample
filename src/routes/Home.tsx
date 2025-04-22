import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "~/components/ui/carousel"
import { Card, CardContent } from "~/components/ui/card"
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
                <div className="p-1">
                  <Card>
                    <CardContent className="flex aspect-square items-center justify-center p-6">
                      <span className="text-4xl font-semibold">{index + 1}</span>
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
                    <Card className="cursor-pointer hover:shadow-md transition-shadow">
                      <CardContent className="flex aspect-square items-center justify-center p-4">
                        <span className="text-3xl font-semibold">{index + 1}</span>
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
                  <Card>
                    <CardContent className="flex aspect-square items-center justify-center p-4">
                      <span className="text-3xl font-semibold">{index + 1}</span>
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
