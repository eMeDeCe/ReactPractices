import React from 'react';
import { PictureInfo } from './gallery.vm';
import { PicturesContext } from 'common-app/pictures';

import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import Button from '@material-ui/core/Button';
import { LocationContext } from 'common-app/location';

interface Props {
  pictures: PictureInfo[];
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      overflow: 'hidden',
      backgroundColor: theme.palette.background.paper,
      '& > *': {
        margin: theme.spacing(2),
        border: 0,
      },
    },
    gridList: {
      width: 500,
      height: 850,
    },
    icon: {
      color: 'rgba(255, 255, 255, 0.54)',
    },
    myButton: {
      border: '0',
      marginRight: '3px',
    },
  })
);

export const GalleryComponent: React.FC<Props> = ({ pictures }) => {
  const classes = useStyles();
  const { addSelectedPicture } = React.useContext(PicturesContext);

  const handleAdd = (element, isSelected, url, title) => {
    addSelectedPicture(element, url, title);
    isSelected = true;
  };

  const { location, updatingLocation } = React.useContext(LocationContext);

  return (
    <>
      <div className={classes.root}>
        <GridList cellHeight={180} className={classes.gridList}>
          <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
            <Button
              className={classes.myButton}
              variant="outlined"
              onClick={event => {
                updatingLocation('and');
              }}
            >
              Andalucia
            </Button>
            <Button
              className={classes.myButton}
              variant="outlined"
              onClick={event => updatingLocation('port')}
            >
              Portugal
            </Button>
          </GridListTile>
          {pictures.map((e, index) => (
            <GridListTile key={index}>
              <img src={`src/assets/${e.picUrl}`} alt={e.title} />
              <GridListTileBar
                title={e.title}
                actionIcon={
                  <IconButton
                    aria-label={`info about ${e.title}`}
                    className={classes.icon}
                    onClick={event =>
                      handleAdd(e.id, e.isSelected, e.picUrl, e.title)
                    }
                  >
                    <AddShoppingCartIcon />
                  </IconButton>
                }
              />
            </GridListTile>
          ))}
        </GridList>
      </div>
    </>
  );
};
