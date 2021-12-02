import axios from 'axios';


export const getPlacesData = async (type, sw, ne) => {
    try {
        const {data: {data}} = await axios.get(`https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`, {
            params: {
              bl_latitude: sw.lat,
              bl_longitude: sw.lng,
              tr_longitude: ne.lng,
              tr_latitude: ne.lat,
            },
            headers: {
              'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
              'x-rapidapi-key': '561dcb7589mshb8971db7d2c68c6p1e0834jsn7381ed795a23'
            }
          });
        return data;
    } catch(error) {
        console.log(error)
    }
}