import TableAnnuaire from "../src/components/tableAnnuaire"
import { useContext } from "react"
import AppContext from "../src/components/appContext"
import Menu from "../src/components/Menu"

const SeeThings = () => {
  const { data, message } = useContext(AppContext)
  

  return (
    <>
      <Menu />
      <h1 className="italic mt-20 font-bold text-center text-2xl underline">
        Annuaire
      </h1>
      <TableAnnuaire data={data} message={message} />
    </>
  )
}

export default SeeThings
