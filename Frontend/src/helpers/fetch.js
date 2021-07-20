const urlBase = 'http://localhost:3001/api/'

export const fetchSinToken = (endpoint,data,method = 'GET')=>{

    const url = `${urlBase}/${endpoint}`;
    
    if(method === 'GET'){
        return fetch(url)
    }
    else{
        return fetch(url,{
            method,
            headers:{
                'Content-type':'application/json'
            },
            body:JSON.stringify(data)
        })
    }
    
}


export const fetchConToken = (endpoint,data,method = 'GET')=>{

    const url = `${urlBase}${endpoint}`;
   
    return fetch(url+'?project=60ea1805d479c55a9d7933f9',
        {method,
            headers:{
                'Content-type':'application/json',
                'Authorization':'Bearer '+localStorage.getItem('token')
            }})
    // if(method === 'GET'){
    //     return fetch(url,
    //         {method,
    //             headers:{
    //                 'Content-type':'application/json',
    //                 'Authorization':'Bearer '+localStorage.getItem('token')
    //             }})
    // }
    // else{
    //     return fetch(url,{
    //         method,
    //         headers:{
    //             'Content-type':'application/json',
    //             'Authorization':'Bearer '+localStorage.getItem('token')
    //         },
    //         body:JSON.stringify(data)
    //     })
    // }
    
}

 