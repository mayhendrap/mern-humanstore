import React from 'react';
import useStyles from './styles';
import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import convertToRupiah from '../../utils/convertToRupiah';

const HomeProductCard = ({ data }) => {
    const classes = useStyles();

    return (
        <Link to={`/detail/${data._id}`} className={classes.link}>
            <Card elevation={0} className={classes.card} variant="outlined">
                <CardActionArea>
                    <CardMedia
                        image={data.image}
                        title={data.title}
                        className={classes.cardMedia}
                    />
                    <CardContent>
                        <Typography variant="caption" className={classes.category}>
                            {data.category}
                        </Typography>
                        <Typography gutterBottom variant="subtitle2" className={classes.title}>
                            {data.title}
                        </Typography>
                        <Typography gutterBottom variant="body2">
                            {convertToRupiah(data.price)}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </Link>
    )
};

export default HomeProductCard;
