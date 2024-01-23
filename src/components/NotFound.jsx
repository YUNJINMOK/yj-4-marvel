import React from "react";

export default function NotFound() {
  return (
    <>
      <Layout>
        <div className="w-full flex justify-center">
          <div className="max-w-7xl w-full flex  h-[calc(100vh-324px)]">
            {/* 왼쪾 */}
            <div className="w-1/2 h-full flex flex-col justify-center space-y-8">
              <h1 className=" text-3xl">404 PAGE NOT FOUND</h1>
              <h2 className=" font-semibold">
                Not even the Eye of Uate sees your request ....
              </h2>
              <p>
                Check that you typed the address correctly, go back to your
                previous page or try using our site search to find something
                specific.
              </p>
            </div>
            {/* 오른쪽 */}
            <div className="w-1/2 h-full flex justify-center">
              <div></div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
