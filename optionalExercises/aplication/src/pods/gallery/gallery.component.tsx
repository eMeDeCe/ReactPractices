import React from 'react';
import { PictureInfo } from './gallery.vm';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';

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
    },
    gridList: {
      width: 500,
      height: 850,
    },
    icon: {
      color: 'rgba(255, 255, 255, 0.54)',
    },
  })
);

export const GalleryComponent: React.FC<Props> = ({ pictures }) => {
  const classes = useStyles();

  return (
    <>
      <div className={classes.root}>
        <GridList cellHeight={180} className={classes.gridList}>
          <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
            <ListSubheader component="div">Azulejos en Andalucía</ListSubheader>
          </GridListTile>
          {pictures.map(e => (
            <GridListTile key={e.id}>
              <img src={`src/assets/${e.picUrl}`} alt={e.title} />
              <GridListTileBar
                title={e.title}
                actionIcon={
                  <IconButton
                    aria-label={`info about ${e.title}`}
                    className={classes.icon}
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
