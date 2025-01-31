## makeFile borders and frontiers + lsoa base

##  This script takes the model object created in the nordF project and clean it
##  Source = (measureFrontiers 04 UK script)

# Input/output ------------------------------------------------------------


##  Raw files come from the UK frontiers estimation
##  model has the data; has ttwa data
## Drop the data here from the nordF project

sfModels_path <- 
#  'temp data/uk frontier model list.rds'
  'temp data/selected sf models.rds'
  

## Output 
shefBase_Here <- 
  'cleaned data/makeFile01 sheffield ttwa lsoa.rds'

shefBorders_Here <-
  'cleaned data/makeFile01 sheffield borders+frontiers.rds'
  


## Additional library call from the socialFrontier package
library(socialFrontiers)

# 1. The areal data is in sfModels ----------------------------------------

##  Extract areal data from sheffield
sfModels <-
  sfModels_path %>% readRDS

names(sfModels)

shef_sf <-
  sfModels$Sheffield$data


##  save this to cleaned data
shef_sf %>% saveRDS(
  shefBase_Here
  )

# 2. Extract borders incld. frontiers -------------------------------------

## extracting all borders may take a while
sfBorders <-
  frontier_as_sf(
    sfModels$Sheffield,
    non_frontiers = T,
    method = 'forLoop',
    silent = T
  )

## adhoc (can remove without effect); save LSOA11cd
sfBorders <-
  sfBorders %>%
  mutate(
    lsoacd_1 = shef_sf$lsoa11cd[id],
    lsoacd_2 = shef_sf$lsoa11cd[id.1],
    diff_phi = abs(phi - phi.1),
    std_diff_phi = diff_phi / sd( (phi - phi.1) )
  )



# 3. Save the data --------------------------------------------------------

sfBorders %>% saveRDS(
  shefBorders_Here
)
