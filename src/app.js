import { LightningElement } from "lwc";

export default class App extends LightningElement {
 	 	
      cod = "C1L5627D";
      name = "Desk Corp";
      phone = " 21 36589-6544 ";
      email = "desk@corp.com";
      rating = "Warm ";

      primeira = "https://img.playbuzz.com/image/upload/ar_1.5,c_pad,f_jpg,b_auto/q_auto:good,f_auto,fl_lossy,w_640,c_limit,dpr_1/cdn/5dd1da62-7fad-4065-ac16-928d743a2176/7af3b478-4cfa-4fce-8c24-af07c24c38c5.jpg";
      segunda = "https://img.playbuzz.com/image/upload/ar_1.5,c_pad,f_jpg,b_auto/q_auto:good,f_auto,fl_lossy,w_640,c_limit,dpr_1/cdn/5dd1da62-7fad-4065-ac16-928d743a2176/98a48255-bedb-46d7-8f6e-a54229d3c75d.jpg";
      img = this.primeira;

      musicas=[
        {cod: "M001",
        nome: "Anjos Pra Quem Tem Fé",
        artista: "O Rappa",
        album: "Nunca tem Fim",
        },
        {cod: "M002",
        nome: "Quase Sem Querer",
        artista: "Legião Urbana",
        album: "Dois",
        },
        {cod: "M003",
        nome: "Passe em Casa",
        artista: "Os Tribalistas",
        album: "Tribalistas",
        },
        {cod: "M004",
        nome: "Não é Sério",
        artista: "Charlie Brown Jr",
        album: "Acústico MTV",
        },
        {cod: "M005",
        nome: "Gorilla",
        artista: "Bruno Mars",
        album: "Greatest Songsc",
        },
      ] 

    oportunidades=[
         { 
          id: 1,
          name: "Venda x",
          conta: "Gifara Corp",
          amount: 5000,
          date: "20-2-2022",
          },
          { 
          id: 2, 
          name: "Venda xyz",
          conta: "Gifara Corp",
          amount: 3000,
          date: "01-3-2022",
          },
          { 
          id: 3,
          name: "Venda Show",
          conta: "Mamaco Corp",
          amount: 100000,
          date: "23-3-2022",
          },
      
    ]  
   
   alterar(){
    if( this.name == "Desk Corp") {
          console.log("passou1?")
           this.name = "Estudy Company";
           this.cod = "C1L899D";           
           this.phone = "11 63259-654";
           this.email = "estudy@company.com";
           this.rating = "Hot";
        } else if ( this.name == "Estudy Company") { 
         console.log("passou2?")
         this.name = "Desk Corp"
          this.cod = "C1L5627D";       
          this.phone = "21 36589-6544";
          this.email = "desk@corp.com";
          this.rating = "Warm";
        } 
}
    

    handleClick(){
        if(this.img == this.primeira ){
          this.img = this.segunda;
        }else{          
          this.img = this.primeira;
        }
      }
        

}