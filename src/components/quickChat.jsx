import { Formik } from "formik"
import { useCallback, useContext } from "react"
import * as yup from "yup"
import Button from "./ui/button"
import FormField from "./ui/FormField"
import AppContext from "./appContext"
const QuickChat = (props) => {
  const { data, message, idClicked } = props
  const initialValues = {
    myMessage: "",
  }

  function random(min, max) {
    return Math.floor(Math.random() * (max - min) + min)
  }

  const botResponse = () => {
    let BOT_MSGS = []
    data.map(({ nom, prenom, id, email, metier }) => {
      idClicked === id
        ? BOT_MSGS.push(
            `Hey , moi c'est ${prenom} ${nom}`,
            "Comment tu vas ?",
            ` Je suis ${metier}`,
            `Vien me contacter à mon adresse mail : ${email}`,
            `T'a bien remarqué qu'on fonctionne pas très bien pas vrai ?`,
            "Je n'ai point envie de te parler"
          )
        : ""
    })
    const r = random(0, BOT_MSGS.length - 1)

    return BOT_MSGS[r]
  }

  const validationSchema = yup.object().shape({
    myMessage: yup.string().label("messageSend"),
  })

  const { addMessage } = useContext(AppContext)
  const handleFormSubmit = useCallback(
    ({ myMessage }) => {
      addMessage({ myMessage })
    },
    [addMessage]
  )

  return (
    <>
      <div className="flex flex-col border-4 w-4/12 bg-slate-200  rounded-md">
        <div className="border-b  text-center w-full bg-slate-300">
          <span className="">Chat avec mon BOT 0.1.2.alpha-1</span>
        </div>
        <div id="chat" className="overflow-auto max-h-72">
          <table className=" w-full h-6/12 text-sm bg-slate-200">
            <thead>
              <tr className="font-bold">
                <th className="p-2 w-3/6 "></th>
                <th className="p-2 w-3/6"></th>
              </tr>
            </thead>
            <tbody>
              {message.map(({ myMessage }, index) => (
                <tr key={index} className="">
                  {!myMessage ? (
                    <>
                      <td className="text-left p-2 ">
                        <span className="font-bold text-red-500">
                          (づ￣ 3￣)づ - {botResponse()}
                        </span>
                      </td>
                    </>
                  ) : (
                    <>
                      <td />
                      <td className="text-right p-2 ">
                        <span className="font-bold text-green-500">
                          {myMessage}
                        </span>
                      </td>
                      <td />
                    </>
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <Formik
          initialValues={initialValues}
          onSubmit={handleFormSubmit}
          validationSchema={validationSchema}
        >
          {({ handleSubmit, isValid }) => (
            <form
              onSubmit={handleSubmit}
              noValidate
              className="bg-slate-300 mt-20"
            >
              <div className="flex flex-row flex-nowrap justify-center max-h-30 p-2 border-t ">
                <FormField
                  name="myMessage"
                  type="text"
                  className="basis-3/4 px-2 mr-5 "
                  placeholder="Hey comment tu vas ..."
                ></FormField>
                <Button
                  size="md"
                  variant="chat"
                  type="submit"
                  disabled={!isValid}
                  className="basis-1/4 px-2 "
                >
                  Envoyer
                </Button>
              </div>
            </form>
          )}
        </Formik>
      </div>
    </>
  )
}

export default QuickChat
