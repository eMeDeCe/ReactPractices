import React from 'react';
import { PicturesContext } from 'common-app/pictures';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
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
  contentImg: {
    display: 'inline-block',
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
  remove: {
    marginLeft: '1em',
  },
});

export const CheckoutComponent: React.FC = () => {
  const classes = useStyles();
  const {
    totalSelected,
    infoSelectedItems,
    removeSelectedPicture,
  } = React.useContext(PicturesContext);
  console.log({ totalSelected });
  function showCart() {
    return infoSelectedItems.map((e, index) => (
      <div key={index} className={classes.contentImg}>
        <img
          className={classes.img}
          src={`src/assets/${e.url}`}
          alt={e.title}
        />
        <div>
          <IconButton onClick={event => removeSelectedPicture(e.id)}>
            <RemoveShoppingCartIcon className={classes.remove} />
          </IconButton>
        </div>
      </div>
    ));
  }
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
        {showCart()}
      </CardContent>
      <CardActions>
        <Button size="small">Política de compra</Button>
      </CardActions>
    </Card>
  );
};
