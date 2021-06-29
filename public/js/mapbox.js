/* eslint-disable */

export const displayMap = (locations) => {
  mapboxgl.accessToken =
    'pk.eyJ1IjoidmxhZGFtaXRpYyIsImEiOiJja3A3YmQyZGYwNXZiMm5vMGVuemoyZzhlIn0.oyT5lsHwrZSgE9y7L_7MYQ';
  var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/vladamitic/ckp7cak1c14q018o6vw542jks',
    scrollZoom: false,
  });

  const bounds = new mapboxgl.LngLatBounds();

  locations.forEach((loc) => {
    const el = document.createElement('div');
    el.className = 'marker';

    new mapboxgl.Marker({
      element: el,
      anchor: 'bottom',
    })
      .setLngLat(loc.coordinates)
      .addTo(map);

    new mapboxgl.Popup({
      offset: 30,
    })
      .setLngLat(loc.coordinates)
      .setHTML(`<P>Day ${loc.day}: ${loc.description}</P>`)
      .addTo(map);

    bounds.extend(loc.coordinates);
  });

  map.fitBounds(bounds, {
    padding: {
      top: 200,
      bottom: 150,
      left: 100,
      right: 100,
    },
  });
};
