import Data from "../data/data.json";

export default function Plans() {
  return (
    <>
      <h1 className="text-center mt-6 uppercase text-xl underline ">plans</h1>

      <div className="grid grid-flow-row mt-4 sm:grid-flow-col gap-4 p-6">
        {Data.map((item) => {
          return item.pricing.map((item) => {
            return (
              <>
                <div>
                  <div className="ml-4">{item.plan}</div>
                  <button className="bg-white p-2 rounded-full">
                    {item.price}
                  </button>
                  <h1 className="text-2xl underline underline-offset-1">
                    features
                  </h1>
                  <div className="">{item.features} </div>
                </div>
              </>
            );
          });
        })}
      </div>
    </>
  );
}
