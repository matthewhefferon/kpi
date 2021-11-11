import "./App.css";

function App() {
  return (
    <div className="container mx-auto flex justify-evenly pt-10">
      <div className="shadow-md rounded-md bg-white">
        <div className="p-5">
          <h5 className="text-xl font-semibold mb-2">
            Daily Active Users (DAU)
          </h5>
          <h1 className="text-5xl font-semibold mb-2 flex justify-center p-5">
            200K
          </h1>
        </div>
      </div>
      <div className="shadow-md rounded-md bg-white">
        <div className="p-5">
          <h5 className="text-xl font-semibold mb-2">
            Monthly Active Users (MAU)
          </h5>
          <h1 className="text-5xl font-semibold mb-2 flex flex-center justify-center p-5">
            600K
          </h1>
        </div>
      </div>
      <div className="shadow-md rounded-md bg-white">
        <div className="p-5">
          <h5 className="text-xl font-semibold mb-2">
            Customer Acquisition Cost (CAC)
          </h5>
          <h1 className="text-5xl font-semibold mb-2 flex flex-center justify-center p-5">
            $28
          </h1>
        </div>
      </div>
    </div>
  );
}

export default App;
