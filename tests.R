#tests

#1. EXPORT SF DATA AS GEOJSON FOR TEST LOADING INTO LEAFLET
#SF objects need to have been already created and loaded in 1 and 2
sample_sf <- mapdataList[[1]]

sample_sf <- sample_sf %>% st_transform("EPSG:4326")

#save as geojson in the place we want for leaflet testing
st_write(sample_sf,'docs/leaflet_testing/test_sf.geojson')
