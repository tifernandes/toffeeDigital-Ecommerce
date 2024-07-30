import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { Paper } from '@mui/material';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import styles from '../styles/produto.module.css';

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
    <Carousel>
      {props.produto.imgs?.map((item, i) => (
        <Item key={i} item={item} prdId={props.produto.Id} />
      ))}
    </Carousel>
  );
};

const Item: React.FC<ItemProps> = (props) => {
  return (
    <Paper>
      <LazyLoadImage
        wrapperClassName={styles.centerImg}
        className={styles.logoImg}
        effect="blur"
        src={`/produtos/${props.prdId}/${props.item}`}
        width={'100%'}
        height={'100%'}
      />
    </Paper>
  );
};

export default SlideCarousel;
