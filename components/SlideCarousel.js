import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { Paper } from '@mui/material'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import styles from '../styles/produto.module.css';

function SlideCarousel(props)
{
    console.log('props')
    console.log(props)
    return (
        <Carousel>
            {
                props.produto.imgs.map( (item, i) => <Item key={i} item={item} prdId={props.produto.Id} /> )
            }
        </Carousel>
    )
}

function Item(props)
{
    return (
        <Paper>
          <LazyLoadImage
          wrapperClassName={styles.centerImg}
          className={styles.logoImg} 
          effect="blur"
          src={'/produtos/' + props.prdId + '/' + props.item} 
          width={'100%'}
          height={'100%'}/>
        </Paper>
    )
}

export default SlideCarousel;