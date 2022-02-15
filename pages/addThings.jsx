import AppContext from "../src/components/appContext"
import { useContext, useCallback } from "react"
import { Formik } from "formik"
import * as yup from "yup"
import FormField from "../src/components/ui/FormField"
import Button from "../src/components/ui/button"
import Menu from "../src/components/Menu"

const initialValues = {
  id: 1,
  nom: "",
  prenom: "",
  age: 0,
  image: "",
  langue: "",
  talent: "",
  metier: "",
  adresse: "",
  telephone: 0,
  email: "",
}
const validationSchema = yup.object().shape({
  nom: yup
    .string()
    .matches(/^[aA-zZ\s]+$/, " pas le bon format")
    .required("Le champ nom est requis")
    .label("name"),
  prenom: yup
    .string()
    .matches(/^[aA-zZ\s]+$/, " pas le bon format")
    .required("Le champ prenom est requis")
    .label("prenom"),
  age: yup
    .string()
    .matches(
      /[^0]+/,
      "Je ne pense pas que vous aillez l'age de remplir ce formulaire"
    )
    .required("Le champ age est requis")

    .label("age"),
  image: yup.mixed().required("Le champ image est requis").label("image"),
  langue: yup
    .string()
    .matches(
      /^[aA-zZ\s]+$/,
      " pas le bon format , attention la 'ç' ou autre caractères me joue des tours"
    )
    .required("Le champ langue est requis")
    .label("langue"),
  talent: yup
    .string()
    .matches(/^[aA-zZ\s]+$/, " pas le bon format")
    .required("Le champ talent est requis")
    .label("talent"),
  metier: yup
    .string()
    .required("Le champ metier est requis")
    .matches(/^[aA-zZ\s]+$/, " pas le bon format")
    .label("metier"),
  adresse: yup
    .string()
    .required("Le champ adresse est requis")
    .label("adresse"),
  telephone: yup
    .string("")
    .matches(
      /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
      "format : 0620......"
    )

    .required("champs phone requis")
    .label("phone"),
  email: yup
    .string()
    .email("Doit etre un email valable")
    .required("le champ email est requis")
    .label("email"),
})

const AddThings = () => {
  const { addThings } = useContext(AppContext)
  let me = 0
  const clickMe = () => {
    me += 1
  }
  const handleFormSubmit = useCallback(
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
      addThings({
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
      })
    },
    [addThings]
  )

  return (
    <>
      <Menu />
      <h1 className="italic mt-20 font-bold text-center text-2xl underline">
        Ajouter une personne dans l'annuaire{" "}
      </h1>
      <div className="text-md text-red-500 text-center mt-5 italic ">
        Pour plus de confort , ajoutez l'image dans le dossier 'public' au
        préalable *format .jpg*
      </div>
      <Formik
        initialValues={initialValues}
        onSubmit={handleFormSubmit}
        validationSchema={validationSchema}
      >
        {({ handleSubmit, isValid, setFieldValue }) => (
          <form
            onSubmit={handleSubmit}
            noValidate
            className="flex flex-col gap-4 p-4 w-6/12 mx-auto"
          >
            <div className="flex flex-col gap-4 p-4 border-4 border-slate-500 w-fit mx-auto mt-10 mb-10 rounded-lg shadow-2xl  shadow-slate-500">
              <div className="flex mx-auto">
                <div className="pr-5">
                  <FormField
                    name="nom"
                    type="text"
                    placeholder="Saisissez le nom"
                  >
                    <span className="underline font-bold text-slate-300 italic">
                      Nom
                    </span>
                  </FormField>
                </div>
                <div className="">
                  <FormField
                    name="prenom"
                    type="text"
                    placeholder="Saisissez le prenom"
                  >
                    <span className="underline font-bold text-slate-300 italic">
                      Prenom
                    </span>
                  </FormField>
                </div>
                <div className="pl-5">
                  <FormField
                    name="email"
                    type="email"
                    placeholder="Saisissez l'email"
                  >
                    <span className="underline font-bold text-slate-300 italic">
                      Email
                    </span>
                  </FormField>
                </div>
              </div>
              <div className="flex flex-row justify-center basis-1/4 p-4">
                <div className="pr-5">
                  <FormField
                    name="age"
                    type="number"
                    placeholder="Saisissez l'age"
                  >
                    <span className="underline font-bold text-slate-300 italic">
                      Âge
                    </span>
                  </FormField>
                </div>

                <div className="pl-5">
                  <FormField
                    name="langue"
                    type="text"
                    placeholder="Saisissez la langue"
                  >
                    <span className="underline font-bold text-slate-300 italic">
                      Langue
                    </span>
                  </FormField>
                </div>
                <div className="pl-5">
                  <FormField
                    name="adresse"
                    type="text"
                    placeholder="Saisissez la adresse"
                  >
                    <span className="underline font-bold text-slate-300 italic">
                      Adresse
                    </span>
                  </FormField>
                </div>
              </div>
              <div className="flex mx-auto">
                <div className="pr-5">
                  <FormField
                    name="talent"
                    type="text"
                    placeholder="Saisissez le talent"
                  >
                    <span className="underline font-bold text-slate-300 italic">
                      Talent
                    </span>
                  </FormField>
                </div>
                <div className="">
                  <FormField
                    name="metier"
                    type="text"
                    placeholder="Saisissez le metier"
                  >
                    <span className="underline font-bold text-slate-300 italic">
                      Métier
                    </span>
                  </FormField>
                </div>
                <div className="ml-5">
                  <FormField
                    name="telephone"
                    type="tel"
                    placeholder="Saisissez le numéro "
                  >
                    <span className="underline font-bold text-slate-300 italic">
                      Téléphone
                    </span>
                  </FormField>
                </div>
              </div>
              <FormField
                id="image"
                name="image"
                type="file"
                value={addThings.image}
                placeholder="IMAGE"
                onChange={(event) => {
                  setFieldValue("image", event.currentTarget.files[0].name)
                }}
              >
                <span className="underline font-bold text-slate-300 italic">
                  Image
                </span>
              </FormField>

              <Button type="submit" disabled={!isValid} onClick={clickMe}>
                Validate
              </Button>

              <span className="text-center">
                {" "}
                {me > 0 && isValid ? "C'est envoyé" : ""}
              </span>
            </div>
          </form>
        )}
      </Formik>
    </>
  )
}

export default AddThings
