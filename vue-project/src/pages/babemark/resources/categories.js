
const categories = [
    {
        name: "Go Fast",
        products: [
            {
                name: "Human Stroller",
                brand: "cybec",
                price: 499,
                id: 0,
                image: "https://enhasa.dev/api/images/humanstroller.png"
            },
            {
                name: "Five Wheeler",
                brand: "cybec",
                price: 1199,
                id: 1,
                image: "https://enhasa.dev/api/images/five.png"
            },
            {
                name: "You Need Help",
                brand: "Bugbo",
                price: 1999,
                id: 2,
                image: "https://enhasa.dev/api/images/help.png"
            },
            {
                name: "This Isn't A Stroller",
                brand: "britac",
                price: 200,
                id: 3,
                image: "https://enhasa.dev/api/images/notastroller.png"
            }
        ]
    },
    {
        name: "Eat",
        products: [
            {
                name: "Tasty Banana",
                brand: "rewe",
                price: 5,
                id: 4,
                image: "https://enhasa.dev/api/images/banana.png"
            }, 
            {
                name: "Apple Slice",
                brand: "lidl",
                price: 2,
                id: 5,
                image: "https://enhasa.dev/api/images/apple.png"
            }
        ]
    },
    {
        name: "Make Baby Quiet",
        products: [
            {
                name: "Silence",
                brand: "PHILIP",
                price: 15,
                id: 6,
                image: "https://enhasa.dev/api/images/pacifier.png"
            },
            {
                name: "Distract",
                brand: "PHILIP",
                price: 35,
                id: 7,
                image: "https://enhasa.dev/api/images/teddy.png"
            },
            {
                name: "Bad Idea",
                brand: "Bach",
                price: 159,
                id: 8,
                image: "https://enhasa.dev/api/images/trumpet.png"
            }
        ]
    }
];

export default function getCategories() {
    /*
    setTimeout(() => {
        return products;
    }, Math.floor(Math.random() * (3000 - 1000) + 1000));
    */

    return categories;
}