import React from 'react';
import { APIProvider, Map } from '@vis.gl/react-google-maps';
import classes from './map-component.module.css';
import { defaultCenter, defaultZoom, disableDefaultUI, gestureHandling } from './map-component.consts.ts';

const API_KEY = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;

const MapComponent: React.FC = () => {
  return (
    <div className={classes.mapComponent}>
      <APIProvider apiKey={API_KEY}>
        <Map
          defaultCenter={defaultCenter}
          defaultZoom={defaultZoom}
          gestureHandling={gestureHandling}
          disableDefaultUI={disableDefaultUI}
        />
      </APIProvider>
    </div>
  );
};

export default MapComponent;
