import P1 from "../img/icecream.png"
import P2 from "../img/curry.png"
import P4 from "../img/pizza.png"
import P5 from "../img/sandwich.png"
import pc from "../img/pizzaC.png"
import cc from "../img/curryC.png"
import dc from "../img/desertsC.png"
import fc from "../img/fastfoodC.png"
import drc from "../img/drinkC.png"

export const containerData = [
    {
        id: 1,
        name: "Ice cream",
        decp: "Straberry,vainilla & chocolate",
        price: "6",
        src: P1
    },
    {
        id: 2,
        name: "Curry",
        decp: "Spicy Thai curry with coconut milk",
        price: "8",
        src: P2
    },
    {
        id: 3,
        name: "Pizza",
        decp: "Basil,muzzarela & tomatoe",
        price: "6",
        src: P4
    },
    {
        id: 4,
        name: "Sandwich",
        decp: "Bacon & chedar",
        price: "6",
        src: P5
    }
]

export const categories = [
    {
        id: 1,
        name: "Currys",
        urlParamName: "curry",
        url:cc
    },
    {
        id: 2,
        name: "Drinks",
        urlParamName: "drink",
        url:drc
    },
    {
        id: 3,
        name: "Pizzas",
        urlParamName: "pizza",
        url:pc
    },
    {
        id: 4,
        name: "Sandwiches",
        urlParamName: "sandwich",
        url:fc

    },
    {
        id:5,
        name:"Deserts",
        urlParamName:"desert",
        url:dc
    }
]

