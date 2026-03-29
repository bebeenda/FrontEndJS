const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwYTIyY2IzNGViZTNmNDUxNjVjOTczMmVmOTU0NmIyZCIsIm5iZiI6MTc3NDQ1NjY2Ny4wNDQ5OTk4LCJzdWIiOiI2OWM0MGY1Yjg2OGM0Njk3MGNiNjBmNGQiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.8J1DGbDa76qXB-rmtbaFKw-QFBZu3gQgyDLMSmXJTUE'
  }
};

  const getFilmes = async () =>{
    const url= "https://api.themoviedb.org/3/movie/popular?language=pt-BR&page=1";
    //requisição async sempre retorna uma promise

    try{
        const resposta = await fetch(url,options) ;
        const filmes = await resposta.json();
        return filmes;
    }
    catch(error){
        console.log(error.message);
        return [];
    }
   
}
export default getFilmes;


export const getGenero = async () =>{
    const url = "https://api.themoviedb.org/3/genre/movie/list?language=pt-BR";

     try{
        const resposta = await fetch(url,options) ;
        const filmes = await resposta.json();
        return filmes;
    }
    catch(error){
        console.log(error.message);
        return [];
    }

}


