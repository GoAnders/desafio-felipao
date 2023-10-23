//variáveis
let heroi = "Rimuru Tempest"
let XP = 9628;

//estrutura de decisão
let NivelDoHeroi;

if (XP < 1000) {
	NivelDoHeroi = "Ferro";
    
} else if (XP >= 1001 && XP <= 2000) {
	NivelDoHeroi = "Bronze";
    
} else if (XP >= 2001 && XP <= 5000) { 
	NivelDoHeroi = "Prata";
    
} else if (XP >= 5001 && XP <= 7000) {
	NivelDeHeroi = "Ouro";
    
} else if (XP >= 7001 && XP <= 8000) {
	NivelDeHeroi = "Platina";
    
} else if (XP >= 8001 && XP <= 9000) {
	NivelDeHeroi = "Ascendente";
    
} else if (XP >= 9001 && XP <= 10000) {
	NivelDeHeroi = "Imortal";
    
} else if (XP >= 10001) {
	NivelDeHeroi = "Radiante";
}


//Saída
console.log(`O Herói de nome ${heroi} está no nível de ${NivelDeHeroi}!`);
