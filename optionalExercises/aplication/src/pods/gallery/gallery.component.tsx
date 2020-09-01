import React from 'react';
import { PictureInfo } from './gallery.vm';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';

interface Props {
  pictures: PictureInfo[];
}

export const GalleryComponent: React.FC<Props> = ({ pictures }) => {
  return (
    <>
    <div className={classes.root}>
      {pictures.map(e => (
        <li key={e.id}>
          {e.title}
            <img
              src={`src/assets/${e.picUrl}`}
              style={{ width: '10rem' }}
            ></img>
        </li>
      ))}
      </div>
    </>
  );
};
