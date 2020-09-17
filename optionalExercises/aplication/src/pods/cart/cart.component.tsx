import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { PicturesContext } from 'common-app/pictures';

import RemoveShoppingCartIcon from '@material-ui/icons/RemoveShoppingCart';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  img: {
    height: '8em',
    marginLeft: '1em',
  },
});

export const CartComponent: React.FC = () => {
  const classes = useStyles();
  const { totalSelected, infoSelectedItems } = React.useContext(
    PicturesContext
  );

  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          Carrito de la compra
        </Typography>
        <Typography variant="h5" component="h2">
          Imágenes añadidas: {totalSelected}
        </Typography>
        {infoSelectedItems.map(e => (
          <img
            className={classes.img}
            key={e.id}
            src={`src/assets/${e.url}`}
            alt={e.title}
          />
        ))}
        <Typography variant="body2" component="p">
          Tramitar pedido
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Política de compra</Button>
      </CardActions>
    </Card>
  );
};
// <RemoveShoppingCartIcon />
