import Image from "next/image"
import { useState } from "react"
import { render } from "react-dom"
import QuickChat from "./quickChat"

const TableAnnuaire = (props) => {
  const { data, message, ...otherProps } = props
  let [chiffre, setChiffre] = useState(0)
  let [stateId, setStateId] = useState(0)

  const ShowImage = (idImage, idClicked) => {
    const element = data.map(({ id, image, nom }, index) =>
      idImage === id ? (
        <Image
          key={index}
          alt={nom}
          src={`/${image}`}
          width={300}
          height={370}
          quality={100}
        />
      ) : (
        ""
      )
    )
    setChiffre(chiffre + 1)
    setStateId(idClicked)

    if (idImage) {
      render(element, document.getElementById("image"))
    } else {
      render("Selectionnez une personne", document.getElmeentById("image"))
    }
  }

  return (
    <>
      <div className="flex flex-row justify-center mt-20 mx-auto ">
        <div
          id="image"
          className="text-center font-bold text-pink-400 w-3/12 italic mr-20"
        >
          Selectionnez une personne de l'annuaire
        </div>
        {chiffre > 0 ? (
          <QuickChat message={message} data={data} idClicked={stateId} />
        ) : (
          <span className="text-center font-bold text-pink-400 w-3/12 italic mr-20">
            Afin de vérifier son contenu
          </span>
        )}
      </div>
      <table {...otherProps} className="mx-auto mt-20 w-12  text-center ">
        <thead>
          <tr className="border-b-2 font-bold italic">
            <th className="p-5 w-1/12 ">Nom</th>
            <th className="p-2 w-1/12">Prenom</th>
            <th className="p-2 w-1/12 ">Âge</th>
            <th className="p-2 w-1/12">Langue</th>
            <th className="p-2 w-1/12">Talent</th>
            <th className="p-2 w-1/12">Métier</th>
            <th className="p-2 w-1/12">Adresse</th>
            <th className="p-2 w-1/12">Téléphone</th>
            <th className="p-2 w-1/12">Email</th>
          </tr>
        </thead>
        <tbody className="color-step-col-1 color-step-col-2">
          {data.map(
            (
              {
                id,
                nom,
                prenom,
                age,
                langue,
                talent,
                metier,
                telephone,
                adresse,
                email,
              },
              index
            ) => (
              <tr
                id="clickMe"
                key={index}
                className="text-sm"
                onClick={() => ShowImage(index + 1, id)}
              >
                <>
                  <td className=" p-5  truncate  max-w-little  truncate-none">
                    <span className="font-bold ">{nom}</span>
                  </td>
                  <td className=" p-5  truncate max-w-little truncate-none">
                    <span className="font-bold ">{prenom}</span>
                  </td>
                  <td className="p-5  truncate max-w-little truncate-none">
                    <span className="font-bold ">{age}</span>
                  </td>
                  <td className=" p-5  truncate max-w-medium truncate-none">
                    <span className="font-bold ">{langue}</span>
                  </td>
                  <td className="  p-5  truncate max-w-medium truncate-none">
                    <span className="font-bold">{talent}</span>
                  </td>
                  <td className="p-5  truncate max-w-medium truncate-none">
                    <span className="font-bold ">{metier}</span>
                  </td>
                  <td className=" p-5  truncate max-w-large truncate-none">
                    <span className="font-bold ">{adresse}</span>
                  </td>
                  <td className="p-5  truncate max-w-medium truncate-none">
                    <span className="font-bold ">{telephone}</span>
                  </td>
                  <td className="p-5  truncate max-w-large truncate-none">
                    <span className="font-bold ">{email}</span>
                  </td>
                </>
              </tr>
            )
          )}
        </tbody>
        <tfoot className="border-t-2">
          <tr>
            <th className="">
              <div className="flex justify-between"></div>
            </th>
          </tr>
        </tfoot>
      </table>
    </>
  )
}

export default TableAnnuaire
