import Layout from "../components/Layout";
import MainSilde from "../components/MainSilde";
import TitleImgeBox from "../components/TitleImgeBox";
import Layout7 from "../components/Layout7";
import { useQuery } from "react-query";
import { apiGetComics } from "../API";

export default function MainPage() {
  const { data, isLoading } = useQuery(["getcomics"], apiGetComics);
  console.log(isLoading, data);

  return (
    <>
      <Layout>
        {/* 메인 슬라이드 컴포넌트 */}
        <MainSilde />
        {/* 코믹스 섹션 */}
        <TitleImgeBox imgUrl="https://cdn.britannica.com/62/182362-050-BD31B42D/Scarlett-Johansson-Black-Widow-Chris-Hemsworth-Thor.jpg" />
        <Layout7>
          <div className="w-full h-60 bg-red-500">
            {data?.data?.results.map((item, index) => {
              <div key={index}>{item.title}</div>;
            })}
          </div>
        </Layout7>
      </Layout>
    </>
  );
}
