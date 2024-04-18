import {NextSeo} from "next-seo";
import Details from "../../components/news/Details";

const News = ({data}) => {
    const getPost = data && data;

    return (
        <>
            <NextSeo
                title={getPost?.data?.page_data?.title}
                description={getPost?.data?.page_data?.description}
            />
            <Details data={getPost?.data} />
        </>
    );
};

export async function getServerSideProps(context) {
    const { query } = context;
    const { slug } = query;

    // Fetch data from an API or perform any async operations based on the slug
    const res = await fetch(`https://cms.tropicalhomesltd.com/api/get-req-data/sections?type=slug&value=${slug}&get_section=yes&image=yes`);
    const data = await res.json();

    // Pass fetched data as props to the component
    return {
        props: {
            data,
        },
    };
}

export default News;
