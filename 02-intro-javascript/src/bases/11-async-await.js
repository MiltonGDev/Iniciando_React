const getImagen = async() =>{

    try {
        
        const apiKey = '7hMfWIttV4xiLSa2RN0qL2zx0HjopqNW';

        const resp = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);

        const { data } = await resp.json();

        const { url } = data.images.original;

        const img = document.createElement('img');
        img.src = url;
        
        document.body.append( img );

    } catch (error) {
        console.log(error);
    }
}

getImagen();


// const peticion = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);

// //promesas en cadena
// peticion
//     .then( resp => resp.json() )
//     .then( ({data}) => {
//         const { url } = data.images.original;
    
//         const img = document.createElement('img');
//         img.src = url;

//         document.body.append( img );
    
//     })