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


export const fetchConToken = (endpoint,data,method)=>{
    const url = `${urlBase}${endpoint}`;
   
    let project = localStorage.getItem("currentProject");
    if(method === 'GET' || method === 'DELETE'){
        return fetch(url+"?project="+project,
            {method,
                headers:{
                    'Content-type':'application/json',
                    'Authorization':'Bearer '+localStorage.getItem('token')
                }})
    }
    else{
        return fetch(url+"?project="+project,{
            method,
            headers:{
                'Content-type':'application/json',
                'Authorization':'Bearer '+localStorage.getItem('token')
            },
            body:JSON.stringify(data)
        })
    }
    
}

 