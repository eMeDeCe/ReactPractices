import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { PicturesContext } from 'common-app/pictures';
import IconButton from '@material-ui/core/IconButton';
import RemoveShoppingCartIcon from '@material-ui/icons/RemoveShoppingCart';
import CloseIcon from '@material-ui/icons/Close';
import { ButtonComponent } from 'common/components/button';
import { Link } from 'react-router-dom';

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
  remove: {
    marginLeft: '1em',
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
  close: {
    marginLeft: '90%',
  },
});

export const CartComponent: React.FC = () => {
  const classes = useStyles();
  const [show, setShow] = React.useState(true);
  const {
    totalSelected,
    infoSelectedItems,
    removeSelectedPicture,
    emptyCart,
  } = React.useContext(PicturesContext);
  const classNew = 'myButton';

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
    <>
      <ButtonComponent
        label="mostrar carro"
        style={{ display: !show ? 'block' : 'none' }}
        className="myButton"
        onClick={() => setShow(!show)}
      ></ButtonComponent>
      <Card
        className={classes.root}
        variant="outlined"
        style={{ display: show ? 'block' : 'none' }}
      >
        <CardContent>
          <CloseIcon className={classes.close} onClick={() => setShow(!show)} />
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
          <Button
            style={{ display: totalSelected > 0 ? 'block' : 'none' }}
            onClick={event => emptyCart()}
          >
            Vaciar Carrito
          </Button>
          {showCart()}
        </CardContent>
        <Link to="/checkout">Tramitar pedido</Link>
        <CardActions>
          <Button size="small">Política de compra</Button>
        </CardActions>
      </Card>
    </>
  );
};
