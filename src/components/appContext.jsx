import { createContext, useCallback, useState } from "react"

const initialState = {
  data: [
    {
      id: 1,
      nom: "Oui",
      prenom: "Oui",
      age: 37,
      image: "ouioui.jpg",
      langue: "International",
      talent: "Meilleur conducteur qui soit",
      metier: "pas plombier",
      adresse: " Adresse oui oui",
      telephone: 0,
      email: "oui.oui@supdevinci-edu.fr",
    },

    {
      id: 2,
      nom: "Pig",
      prenom: "Peppa",
      age: 6,
      image: "peppa.jpg",
      langue: "cochon",
      talent: " Se rouler dans la boue",
      metier: " Encore à l'école",
      adresse: " 9 Maison du cochon rue de la colline",
      telephone: "trop jeune",
      email: "peppa.pig@supdevinci-edu.fr",
    },
    {
      id: 3,
      nom: "Pain",
      prenom: "Baguette",
      age: 0.002,
      image: "baguette.jpg",
      langue: "Croissante",
      talent: "Croustillante",
      metier: "Boulangère",
      adresse: " 1 Rue du Préfet Chaleil",
      telephone: "0" + 148667058,
      email: "okok@gmail.com",
    },
    {
      id: 4,
      nom: "Kwayse",
      prenom: "Sarah",
      age: "MINEUR",
      image: "kwayse.jpg",
      langue: "arabe",
      talent: " Magnifique rôôôôt ",
      metier: " Emmerdeuse professionnel",
      adresse: " Maghreb",
      email: "Kwayse.Sarah@supdevinci-edu.fr",
      telephone: " 0" + 782626898,
    },
    {
      id: 5,
      nom: "Teletoobies",
      prenom: "Tinkiwinki",
      age: 25,
      image: "tinkiwinki.jpg",
      langue: "Teletoobies",
      talent: "Sait tout faire",
      metier: "Esclave-Acteur",
      adresse: "ZONE-51",
      email: "Teletoobies.Tinky@supdevinci-edu.fr",
      telephone: null,
    },
    {
      id: 6,
      nom: "Manchot",
      prenom: "Tchoupi",
      age: 30,
      image: "tchoupi.jpg",
      langue: "Antarticien",
      talent: "Joue avec ses doudous",
      metier: "glandeur",
      adresse: "Maison de ses parents",
      telephone: 0,
      email: "Manchot.Tchoupi@supdevinci-edu.fr",
    },
    {
      id: 7,
      nom: "RATS",
      prenom: "Jack & Gus",
      age: 72,
      image: "jack-gus.jpg",
      langue: "Les rats ne parlent pas le japonais",
      talent: "Magicien",
      metier: "Mécanicien",
      adresse: "Maison de Cendrillon",
      telephone: "boomer , c'est des rats",
      email: "jack.gus@supdevinci-edu.fr",
    },
    {
      id: 8,
      nom: "Faon",
      prenom: "Bambi",
      age: 0.5,
      image: "bambi.jpg",
      langue: "Canadien",
      talent: "Galipette",
      metier: "Explorateur",
      adresse: "La Forêt",
      telephone: "Sifflement",
      email: "bambi.faon@supdevinci-edu.fr",
    },
  ],

  message: [
    {
      myMessage: "🤖 Hey!, Moi c'est Ro-Bi",
    },
    {
      myMessage: "🤖 Je vais te montrer un truc",
    },
    {
      myMessage: "🤖 Essayes donc de le faire parler",
    },
    {
      myMessage: "🤖 Pour ça , il faut que tu n'envoie rien !",
    },
    {
      myMessage: "🤖 ... Quoi ? Ce n'est que l'alpha , sois sympa ..",
    },
  ],
}

const AppContext = createContext({})

export const AppContextProvider = (props) => {
  const [state, setState] = useState(initialState)
  const addThings = useCallback(
    ({
      id,
      nom,
      prenom,
      age,
      image,
      langue,
      talent,
      metier,
      adresse,
      email,
      telephone,
    }) => {
      setState((currentState) => ({
        ...currentState,
        data: [
          ...currentState.data,
          {
            id: currentState.data.length + id,
            nom,
            prenom,
            age,
            image,
            langue,
            talent,
            metier,
            adresse,
            email,
            telephone,
          },
        ],
      }))
    },
    []
  )
  const addMessage = useCallback(({ myMessage }) => {
    setState((currentState) => ({
      ...currentState,
      message: [
        ...currentState.message,
        {
          myMessage,
        },
      ],
    }))
  }, [])

  return (
    <AppContext.Provider
      {...props}
      value={{
        data: state.data,
        message: state.message,
        addThings,
        addMessage,
      }}
    />
  )
}

export default AppContext
