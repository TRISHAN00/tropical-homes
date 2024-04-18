import {NextSeo} from "next-seo";
import InnerBanner from "../../components/InnerBanner";
import NewsDetail from "../../components/NewsDetail";

const News = ({data}) => {
    const getPost = data && data;

    const innerBanner = getPost?.page_data;
    const news = getPost?.data?.list

    const desktop = innerBanner?.images?.list?.find((f) => f?.Desktop === "on");
    const mobile = innerBanner?.images?.list?.find((f) => f?.Mobile === "on");

    return (
        <>
            <NextSeo
                title={getPost?.page_data?.page_data?.meta_title}
                description={getPost?.page_data?.page_data?.meta_description}
            />
            <InnerBanner srcSm={mobile?.full_path} img={desktop?.full_path} title={innerBanner?.page_data?.title}/>
            <NewsDetail data={news}/>
        </>
    );
};

export async function getServerSideProps() {
    // Fetch data from an API or perform any async operations
    const res = await fetch('https://cms.tropicalhomesltd.com/api/get-req-data/child-pages?page_id=44&type=&value=&limit=&image=yes');
    const data = await res.json();

    // Pass fetched data as props to the component
    return {
        props: {
            data,
        },
    };
}

export default News;
