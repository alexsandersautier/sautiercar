import Car from '../../public/icons/carro.png';
import Motocycle from '../../public/icons/moto.png';
import Van from '../../public/icons/van.png';
import Track from '../../public/icons/track.png';
import Motorhome from '../../public/icons/motorhome.png';

export const categories = [
    {
        id: 1,
        name: "Carros",
        icon: Car
    },{
        id: 2,
        name: "Motos",
        icon: Motocycle
    },{
        id: 3,
        name: "Vans",
        icon: Van
    },{
        id: 4,
        name: "Caminhões",
        icon: Track
    },{
        id: 5,
        name: "Motorhomes",
        icon: Motorhome
    }
];

import GolG3 from "../../public/images/golg3.png";
import Uno from "../../public/images/uno.jpeg";
import Start from "../../public/images/start.webp";
import Sprinter from "../../public/images/sprinter.png";
import Santo from "../../public/images/motorhome.webp";

export const vehicles = [
    {
        id: 1,
        model: "Gol G3",
        brand: "Volkswagem",
        value: 15999,
        picture: GolG3,
        category: "carros"
    },{
        id: 2,
        model: "Uno",
        brand: "Fiat",
        value: 14000,
        picture: Uno,
        category: "carros"
    },{
        id: 3,
        model: "Start",
        brand: "Honda",
        value: 14720,
        picture: Start,
        category: "motos"
    },{
        id: 4,
        model: "Sprinter",
        brand: "Mercedes-benz",
        value: 199900,
        picture: Sprinter,
        category: "vans"
    },{
        id: 5,
        model: "Santo Inácio 7.5 SI",
        brand: "Mercedes-benz",
        value: 670000,
        picture: Santo,
        category: "motorhomes"
    }

]