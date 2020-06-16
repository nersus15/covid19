class Sources {
   
    static getAffectedCountry(){
        const options = {
            "headers": {
                "x-rapidapi-host": "coronavirus-monitor.p.rapidapi.com",
                "x-rapidapi-key": "beefe7b6eamsh027aa7179884c8ap135e99jsnfc04f913872c"
            }  
        }      
        const url = `https://coronavirus-monitor.p.rapidapi.com/coronavirus/affected.php`;   
        return fetch(`${url}`, options).then(res => res.json()).then(data =>{
                if(!data.affected_countries)
                    return Promise.reject("No Item");
                else
                   return Promise.resolve(data.affected_countries);
            })
            .catch(err => Promise.reject(err));
    }

    static getDataByCountry(keyword){
        const options = {
            "headers": {
                "x-rapidapi-host": "coronavirus-monitor.p.rapidapi.com",
                "x-rapidapi-key": "beefe7b6eamsh027aa7179884c8ap135e99jsnfc04f913872c"
            }  
        }
        const url = `https://coronavirus-monitor.p.rapidapi.com/coronavirus/latest_stat_by_country.php?country=${keyword}`;
        return fetch(url, options).then(res => res.json()).then(data => Promise.resolve(data)).catch(err => Promise.reject(err));
    }
}

export default Sources;