import Generate from "./components/Generate";
import History from "./components/History";

function App() {
  return (
    <div className="h-screen w-full pb-10 px-20">
      <h1 className="text-center font-extrabold text-5xl my-10 font-heading">
        Url Shortner
      </h1>
      <div className="flex flex-col gap-6 w-full h-fit items-center">
        <Generate />
        <History />
      </div>
    </div>
  );
}

export default App;
