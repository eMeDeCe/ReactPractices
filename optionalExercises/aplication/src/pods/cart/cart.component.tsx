import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { PicturesContext } from 'common-app/pictures';

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
});

export const CartComponent: React.FC = () => {
  const classes = useStyles();
  const { idsSelected } = React.useContext(PicturesContext);

  const total = idsSelected.length;

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
          Imágenes añadidas: {total}
        </Typography>

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
