class FeatureService{
    constructor(){
        this.URI = "http://127.0.0.1:3000/api/features";
    }

    async getFeature(page, perPage, filter){
        const respuesta= await fetch(`${this.URI}?page=${page}&per_page=${perPage}&filter${filter}`);
        const recargas =respuesta.json();
        return recargas;
    }

    async getFeatureTask(){
        const respuesta= await fetch(this.URI);
        const recargas =respuesta.json();
        return recargas;
    }

    async putFeature(id, datos){
        const dele = await fetch(this.URI+'/'+id,{
            method:'PUT',
            body:datos,
            headers:{
                'content-type': 'application/json'
            }            
        })
        const data = await dele.json();
        return data;
    }
}

export default FeatureService
