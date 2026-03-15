

export default async function procesarService(formData: FormData){
    try{
        const response = await fetch("http://localhost:8000/procesar/", {
                method: "POST",
                body: formData,
        })
        if (!response.ok) {
            const errorBody = await response.text()
            throw new Error(`Error en la carga (${response.status}): ${errorBody || response.statusText}`);
        }

            const data = await response.json()

        return data;
    }catch(error){
        throw error;
    }
    
}