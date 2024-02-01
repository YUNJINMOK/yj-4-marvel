import Button from "./Button";

export default function Insider() {
  return (
    <section className="w-full h-80 flex justify-center bg-black ">
        <div className="max-w-7xl w-full h-full grid grid-cols-[4fr_6fr]">
          {/* 1.왼쪽 */}
          <div className="w-full h-full">
            <div className="relative w-full h-full">
              <img
                className="w-full h-full object-cover"
                src="https://assets.vogue.in/photos/5ce412599cc0c0b8f5f9b4bf/master/pass/Everything-you-need-to-know-before-watching-Marvel-movies-this-year.jpg"
                alt="marvel_insider"
              />
              <div className="absolute flex justify-center items-center top-0 left-0 w-full h-full bg-black/70">
                <img
                  className="w-1/2 h-1/2 object-contain"
                  src="https://cdn.marvel.com/content/u/open-html-assets/insider-sellpage/insider-logo.87df956b.png"
                  alt="marvel_insider"
                />
              </div>
            </div>
          </div>
          {/* 2.오른쪽 */}
          <div className="w-full h-full flex flex-col text-white items-center justify-center space-y-2">
            <h3 className="text-red-600 uppercase">Marvel insider</h3>
            <h4 className="text-2xl font-semibold">Watch, Earn, Redeem!</h4>
            <p className="">
              Lorem ipsum, dolor sit amet consectetur adipisicing.
            </p>
            <div className="py-4">
              <Button text="join now" />
            </div>
          </div>
        </div>
      </section>
  )
}