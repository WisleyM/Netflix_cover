const body = document.querySelector('body');

const avancarScroll= (elemento,direcao) => {
const carrocelContent = document.querySelector(elemento);


    if(direcao == 'left'){
      carrocelContent.scrollLeft -= 100;
      // carrocelContent.scrollLeft = carrocelContent.scrollLeft - 100; //
    }else if (direcao == 'right'){
      carrocelContent.scrollLeft += 100;
       // carrocelContent.scrollLeft = carrocelContent.scrollLeft - 100; //
    }
}

const pageFilm = (titulo, codeVideo) => {
  body.innerHTML = `
  <header>
  <img class="logo" src="assets/images/netflix-logo.png">
</header>

 <main>
 <div id="container-voltar" onClick="backHome()">
 <span> < Voltar </span> 
 </div>

   <div class="container">
  <span id="title">${titulo}</span>

     <iframe width="900" height="400" src="https://www.youtube.com/embed/${codeVideo}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
     
   </div>
  </main>
  `;
}

  const createCarrocel = () => {
     const listSuspense = [
     {
        title:"Tempo",
        capa:"assets/images/capas/capa-filme-tempo.jpg",
        code:"zxnVGnQKM4E"
    },
    {
        title:"Gaiola mental",
        capa:"assets/images/capas/capa-filme-gaiola_mental.jpg",
        code:"7d8XdU8cb18"
    },
    {
        title:"Missão do mar vermelho",
        capa:"assets/images/capas/capa-filme-missao_no_mar_vermelho.jpg",
        code:"YzFV-thA0wE"
    },
    {
        title:"Missão resgate",
        capa:"assets/images/capas/capa-filme-missao_resgate.jpg",
        code:"1zA5NvlkTGg"
    },
    {
         title:"O culpado",
         capa:"assets/images/capas/capa-filme-o_culpado.jpg",
         code:"Ot-mN7qgYDI"
     },
     {
         title:"O limite da traição",
         capa:"assets/images/capas/capa-filme-o_limite_da_traiçao.jpg",
         code:"Rhv2kFF6yTA"
     },
     {
         title:"Obcessão secreta",
         capa:"assets/images/capas/capa-filme-obsessao_secreta.jpg",
         code:"ssLZhYCr_9E"
      },
    ];
    
    listSuspense.forEach((e) =>createCarrocelItem(".suspense", e.capa, e.title, e.code));
  
  
    const listTerror = [
      {
        title:"Corra",
        capa:"assets/images/capas2/Corra.jpg",
        code:"mDGV5UucTu8"
      },
      {
        title:"Caso 39",
        capa:"assets/images/capas2/Caso_39.jpg",
        code:"RG4MPjhDLF8"
      },
    {
        title:"Jogos mortais 2",
        capa:"assets/images/capas2/Jogos_mortais_2.jpg",
        code:"wwnO9M0zzJo"
    },
     {
        title:"O grito",
        capa:"assets/images/capas2/O_Grito.jpg",
        code:"EnAJ99Q77DY"
     },
     {
        title:"O homem nas trevas",
        capa:"assets/images/capas2/O_homem_nas_trevas.jpg",
        code:"uKY0dYfOibI"
     },
     {
        title:"O nevoeiro",
        capa:"assets/images/capas2/O_Nevoeiro.jpg",
        code:"ho9fmduWcaU"
     },
     {
        title:"Pânico",
        capa:"assets/images/capas2/Panico.jpg",
        code:"swzTZ2mQypM"
     },
      ];
    
       listTerror.forEach((e) => createCarrocelItem(".terror", e.capa, e.title, e.code));

     const listAcao = [
    {
        title:"John Wick: Chapter 3 - Parabellum",
        capa:"assets/images/capas3/John_wick_3.jpg",
        code:"tc_RApTFIg8"
     },
     {
        title:"Kung-Fusão",
        capa:"assets/images/capas3/Kung-fusão.jpg",
        code:"FtE9-o6dBEI"
     },
     {
        title:"Motoqueiro fantasma",
        capa:"assets/images/capas3/Motoqueiro_fantasma.jpg",
        code:"nu6R7ypaz5g"
     },
     {
        title:"O preço do amanhã",
        capa:"assets/images/capas3/O_preco_do_amanha.jpg",
        code:"yIiXRp_vTek"
     },
     {
       title:"Resgate",
       capa:"assets/images/capas3/Resgate.jpg",
       code:"GMKKq_bYd0E"
     },
     {
       title:"Tropa de Elite",
       capa:"assets/images/capas3/Tropa_de_elite.jpg",
       code:"uZBiNJQxtGw"
     },
     {
       title:"Veloses e Furiosos",
       capa:"assets/images/capas3/Veloses_e_Furiosos.jpg",
       code:"2TAOizOnNPo"
     },
       ];
    
       listAcao.forEach((e) =>createCarrocelItem(".acao", e.capa, e.title, e.code));
  };

  
  


const createCarrocelItem = (generoClass, capa,titulo, codeVideo) =>{
  const carrocel = document.querySelector(" .carrocel-content" + generoClass);
  const newDiv = document.createElement('div');
  newDiv.classList.add("carrocel-item");
  newDiv.onclick  = () => pageFilm(titulo, codeVideo);

  //adiciona o conteudo ao elemento div//
  newDiv.innerHTML = `
     <img class="carrocel-capa" src="${capa}" alt="capa filme ${titulo}">
     <span class="carrocel-title">${titulo}</span>
  `
  carrocel.appendChild(newDiv);
}

const backHome = () => {
body.innerHTML = `<header>
  <img class="logo" src="assets/images/netflix-logo.png">
</header>

 <main id="main-home">
    <div class="carrocel suspense">
      <div class="category-carrocel">
         <span>Filmes de suspense</span>
      </div>
     
     <div class="carrocel-container">
        <img onclick="avancarScroll('.carrocel-content.suspense', 'left')" class="carrocel-seta" 
         src="assets/images/arrow-left.png">
     
     <div class="carrocel-content suspense"></div>
      
       <img onclick="avancarScroll('.carrocel-content.suspense', 'right')" class="carrocel-seta" src="assets/images/arrow-right.png">
  </div>
  
     
       </div>


    <div class="carrocel terror">
   <div class="category-carrocel">
      <span>Filmes de terror</span>
   </div>

   <div class="carrocel-container">
     <img onclick="avancarScroll('.carrocel-content.terror', 'left')" class="carrocel-seta" 
      src="assets/images/arrow-left.png">

   <div class="carrocel-content terror"></div>

    <img onclick="avancarScroll('.carrocel-content.terror', 'right')" class="carrocel-seta" src="assets/images/arrow-right.png">
   </div>


    </div>

   <div class="carrocel acao">
     <div class="category-carrocel">
         <span>Filmes de Ação</span>
      </div>
     
      <div class="carrocel-container">
   <img onclick="avancarScroll('.carrocel-content.acao', 'left')" class="carrocel-seta" src="assets/images/arrow-left.png">
   <div class="carrocel-content acao"></div>

     <img onclick="avancarScroll('.carrocel-content.acao', 'right')" class="carrocel-seta" src="assets/images/arrow-right.png">
         </div>
        
     </div>
   
  </main>
       `;
 createCarrocel()
}

createCarrocel()
