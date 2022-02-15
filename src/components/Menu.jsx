import Link from "next/link"

const Menu = () => {
  return (
    <div className=" flex flex-row mx-auto mt-5 w-8/12  ">
      <div className="flex justify-center italic hover:not-italic p-2  w-2/12  hover:bg-slate-500   border-4 border-black-500 bg-slate-300 rounded-lg  mx-auto text-black-500 text-2xl font-bold">
        <Link href="./seeThings">
          <a href=""> ➡ 📚 ⬅ </a>
        </Link>
      </div>
      <div className="flex justify-center italic hover:not-italic p-2 w-2/12 hover:bg-slate-500   border-4 border-black-500 bg-slate-300 rounded-lg  mx-auto text-black-500 text-2xl font-bold">
        <Link href="./addThings">
          <a href=""> ➡ 🎫 ⬅ </a>
        </Link>
      </div>
      <div className="flex justify-center italic hover:not-italic p-2 w-2/12 hover:bg-slate-500   border-4 border-black-500 bg-slate-300 rounded-lg  mx-auto text-black-500 text-2xl font-bold">
        <Link href="./">
          <a href=""> ➡ 🏠 ⬅ </a>
        </Link>
      </div>
    </div>
  )
}
export default Menu
