# GitHub user lookup on a map

A React app I wrote in August 2020 for a hiring test at GreenMile. You type a
GitHub username; it shows the profile, puts the location from the profile on
a Google Map, and lists the repositories that person starred, with a star you
can toggle locally.

The dev log I kept while building it is in [History.md](History.md), in
Portuguese, as it was submitted.

## Running it

Two API keys are needed and are read from the environment:

```bash
cp .env.example .env
# REACT_APP_GOOGLE_MAPS_KEY: a Google Maps JavaScript API key
# REACT_APP_GEOCODE_KEY:     a geocodeapi.io key, used to turn the profile
#                            location text into coordinates
```

Then, with Node 20:

```bash
yarn
NODE_OPTIONS=--openssl-legacy-provider yarn start
```

The OpenSSL flag is a Create React App 3 quirk on modern Node. Without a Maps
key the page still loads; the map tile just stays grey.

```bash
yarn test
```

Four tests with React Testing Library cover the search form and the profile
page: header, map marker and the starred list.

## What's in it

- Create React App 3, React 16, react-router 5, react-bootstrap.
- The GitHub API for the user and their starred repositories, a geocoding API
  for the coordinates, `google-maps-react` for the map.
- A private route that only opens once a user has been looked up.

## What's missing

- The keys used to be hardcoded. They were moved to the environment and have
  to be rotated on the Google and geocodeapi consoles, since they are still in
  this repository's history.
- No pagination on starred repositories; the first page is what you get.
