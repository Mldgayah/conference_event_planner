//avSlice.js
import { createSlice } from "@reduxjs/toolkit";

export const avSlice = createSlice({
  name: "av",
  initialState: [
        {
        img: "https://as2.ftcdn.net/v2/jpg/00/20/84/05/1000_F_20840576_Fb3Nsd8qMHgz8UU9zRJIYbf8kq3SrEBw.jpg",
        name: "Projectors",
        cost: 200,
        quantity: 0,
    },
    {
        img: "https://img.freepik.com/vecteurs-libre/haut-parleur-design-plat-pour-musique_23-2148167850.jpg?t=st=1730009638~exp=1730013238~hmac=1d58b7c8d7ece77dd33856296993e2cf95a54b4a5c2ef1e5fec61e6a0b079e1e&w=740",
        name: "Speaker",
        cost: 35,
        quantity: 0,
    },
    {
        img: "https://img.freepik.com/psd-premium/maquette-microphone-isolee-fond-transparent_883101-30382.jpg?w=740",
        name: "Microphones",
        cost: 45,
        quantity: 0,
    },
    {
        img: "https://img.freepik.com/vecteurs-libre/tableau-blanc-vierge-marqueurs-colores-panneau-affichage-affaires-education-espace-vide_1284-42145.jpg?t=st=1730009182~exp=1730012782~hmac=ae3201c756b58e390dc37add6069141c5dd31169691340970b23f53c90dd5b7b&w=740",
        name: "Whiteboards",
        cost: 80,
        quantity: 0,
    },

    {
        img: "https://img.freepik.com/photos-premium/signe-fleche-bois-fabrique-main-isole-fond-blanc-direction-droite-pointeur-bois_117466-30407.jpg?w=1380",
        name: "Signage",
        cost: 80,
        quantity: 0,
    },

  ],


  reducers: {
    incrementAvQuantity: (state, action) => {
        const item = state[action.payload];
        if (item) {
            item.quantity++;
        }
    },

    decrementAvQuantity: (state, action) => {
    const item = state[action.payload];
    if (item && item.quantity > 0) {
        item.quantity--;
    }
    },
  },
});

export const { incrementAvQuantity, decrementAvQuantity } = avSlice.actions;

export default avSlice.reducer;
