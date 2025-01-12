---
sidebar_position: 2
title: Data Selection
---
# FLYDATA - Domain and data selection

## Group Information
- Group Name: FLYDATA
- Group Members:
  1. Huimin Chen - huimin.chen@studenti.unipd.it  - Computer Engineering
  2. Luca Pellegrini - luca.pellegrini.5@studenti.unipd.it - Computer Engineering
  3. Nele Lauryssen - nele.lauryssen@studenti.unipd.it - Computer Science

## Selected Datasets
   -  **airports**
        - URL: https://raw.githubusercontent.com/jpatokal/openflights/master/data/airports.dat
        - Description: Comprehensive dataset containing detailed information about airports worldwide. The columns are as follows:Airport ID, Name, City, Country, IATA Code, ICAO Code, Latitude, Longitude, Altitude (in feet), Timezone offset from UTC, DST (Daylight Savings Time) rule, Timezone in "tz" (Olson) format, Type (airport, station, etc.), Source of the data.
        - Choice of interest: the airports are important for the project because they are the starting and ending points of the flights. Possibly we could understand the airports' traffic by the number of routes. 
        - Note: An extended version of the dataset with additional information is available at https://github.com/jpatokal/openflights/blob/master/data/airports-extended.dat
   -  **planes**
        - URL: https://github.com/jpatokal/openflights/blob/master/data/planes.dat
        - Description: this dataset contains the list of planes with the in columns: Name, IATA code, ICAO code.
        - Choice of interest: the planes are important for the project because they are the ones that fly the flights. The planes. 
   - **airlines**
        - URL: https://raw.githubusercontent.com/jpatokal/openflights/master/data/airlines.dat
        - Description: this dataset contains the list of airlines, with the following information:AirlineID, Name, Alias, IATA, ICAO, Callsign, Country, Active.
        - Choice of interest: the airlines are important for the project because they are the ones that operate the flights. Possibly we could understand the airlines' performance by the on-time performance of the flights.
   - **routes**
        - URL: https://raw.githubusercontent.com/jpatokal/openflights/master/data/routes.dat
        - Description: this dataset contains the list of routes, with the following information:Airline, Airline ID, Source airport, Source airport ID, Destination airport, Destination airport ID, Codeshare, Stops, Equipment.
        - Choice of interest: the routes are important for the project because they are the ones that connect the airports. Routes contain lots of information about the flight planning, such as the popularity of the route, the stops allocation of the route. 
   - **countries**
        - URL: https://raw.githubusercontent.com/jpatokal/openflights/master/data/countries.dat
        - Description: this dataset contains the list of countries, with the following information:name, iso_code, dafif_code.
        - Choice of interest: the countries are important for the project because they are the ones that contain the airports. The countries could play a role in the flight quantity and route planning. 
   - **cities**
        - URL: https://simplemaps.com/data/world-cities
        - Description: This dataset contains a list of cities with the following information: city, city_ascii, lat, lng, country, iso2, iso3, admin_name, capital, population, id. For this project, we will majorly use the city and country, or the population. 
        - Choice of interest: the cities are important for the project because they are the ones that contain the airports. The route numbers could possibly be influenced by the cities' population. 
   - **Airline Service Quality Performance 234 (On-Time performance data)**
        - URL: https://www.bts.gov/browse-statistical-products-and-data/bts-publications/airline-service-quality-performance-234-time
        - Description: 
        - Choice of interest: the airline service quality performance is important for the project because it contains the on-time performance of the airlines. Possibly we could understand the airlines' performance by the on-time performance of the flights or other factors.
   - **runways**
        - URL: https://ourairports.com/data/
        - Description: this dataset contains the list of length and width of runways with the following information: Airport ID, length, width, surface material, lighted, start and end latitude, start and end longitude, elevation, heading.
        - Choice of interest: the runways are important for the project because they are the ones that the planes land and take off from. Possibly we could understand the airports' traffic by the number of routes.
   - **frequencies**
        - URL: https://ourairports.com/data/
        - Description: this dataset contains a list of frequencies with the following information: Airport ID, frequency type, description, frequency in MHz.
        - Choice of interest: the frequencies are important for the project because they are the ones that the planes fly at. Possibly we could understand the airports' traffic by the number of routes.
   - **delay causes**
        - URL: https://www.kaggle.com/datasets/sriharshaeedala/airline-delay or https://www.transtats.bts.gov/ot_delay/ot_delaycause1.asp
        - Description: this dataset contains a list of delays and causes with the following information: Date, Carrier info, Airport ID, number of minutes delayed for different causes, number of flights cancelled, total delays.
        - Choice of interest: the delay causes are important for the project because they are the ones that cause the delays. The flight delay could be analyzed by the delay causes.
##Model Design
Please refer to the attached image file for the diagram of the model designing. 

## Main Challenges

1. Data Integration: Combining multiple datasets from different sources may lead to inconsistencies in data formats, naming conventions, and structure. This group plans to spend some time to clean the data and to reorder the columns and tables.

2. Data Quality: Ensuring the accuracy, completeness, and up-to-date nature of the data across all datasets. 

3. Data Volume: Managing and processing large amounts of data, especially for frequently updated information like flight delays and on-time performance.

4. Temporal Alignment: Aligning data from different time periods and dealing with time zone differences across global datasets.

5. Relationship Mapping: Establishing and maintaining correct relationships between different entities (e.g., airports, airlines, routes) across multiple datasets.

6. Data Cleaning: Handling missing values, duplicates, and potential errors in the raw datasets.

7. Performance Optimization: Designing efficient queries and data structures to handle complex analyses across multiple large datasets.

## Main Characteristics

1. Global Coverage: The datasets provide comprehensive information about airports, airlines, and routes worldwide. In the later stage, the group will focus on the specific regions for better database performance.

2. Multi-dimensional: The data spans various aspects of air travel, including geographic, operational, and performance-related information.

3. Interconnected: The datasets are inherently related, allowing for complex analyses across different entities in the air travel ecosystem.

4. Wide application: The graph database can be used for various purposes, such as flight planning, route optimization, performance analysis, and customer service. These are highly relavent to the airline industry, but also useful for everyday life.


