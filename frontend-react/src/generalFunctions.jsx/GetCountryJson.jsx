export default function getCountryJson(name,listCountries){
    for(let i=0;i<listCountries.length;i++){
        if(listCountries[i].name==name) return listCountries[i]
    }
}