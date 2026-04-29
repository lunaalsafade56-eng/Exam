

function Content() {
  return (
    <div className="bg-linear-to-r from-(--bg-color2) via-(--bg-color3) to-(--bg-color2) p-10  h-screen ">
    <div className=" space-y-4 max-w-md mx-auto  my-[10%] border-4 border-gray-400 p-4 rounded-2xl" >
      <h1 className="text-3xl font-bold text-center m-auto text-(--main-color)">Contact Us</h1>
      
      <form className="space-y-3 border-none">
        <input
          className="w-full border-4 border-b-gray-400 rounded-xl p-2 focus:outline-none focus:ring-0"
          placeholder="Name"
        />

        <input
          className="w-full border-4 border-b-gray-400 rounded-xl p-2 focus:outline-none focus:ring-0"
          placeholder="Email"
          type="email"
        />

        <button
          className="bg-(--main-color) text-white px-4 py-2 rounded-xl"
        >
          Send
        </button>
      </form>
    </div>
    </div>
  )
}

export default Content