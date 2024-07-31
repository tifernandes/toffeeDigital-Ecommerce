import React from 'react';
// import Carousel from 'react-material-ui-carousel';
import { Paper } from '@mui/material';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import styles from '../styles/produto.module.css';

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

interface SlideCarouselProps {
  produto: {
    Id: string;
    imgs?: string[];
  };
}

interface ItemProps {
  item: string;
  prdId: string;
}

const SlideCarousel: React.FC<SlideCarouselProps> = (props) => {
  return (
    <Carousel className="w-full">
      <CarouselContent>
        {props.produto.imgs?.map((item, i) => (
          <CarouselItem key={i}>
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <LazyLoadImage
                    wrapperClassName={styles.centerImg}
                    className={styles.logoImg}
                    // effect="blur"
                    src={`/produtos/${props.produto.Id}/${item}`}
                    width={'100%'}
                    height={'100%'}
                  />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
          ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default SlideCarousel;
