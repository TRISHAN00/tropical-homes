import {NextSeo} from "next-seo";
import InnerBanner from "../../components/InnerBanner";
import NewsDetail from "../../components/NewsDetail";
import BlogNewsDetail from "../../components/BlogNewsDetail";
import {redirect} from "next/dist/server/api-utils";

const Blog = ({data}) => {
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
            <BlogNewsDetail data={news}/>
        </>
    );
};

export async function getServerSideProps(context) {
    // Redirect to Facebook
    context.res.setHeader('Location', 'https://blog.tropicalhomesltd.com/');
    context.res.statusCode = 302;
    context.res.end();

    // Fetch data from an API or perform any async operations
    const res = await fetch('https://cms.tropicalhomesltd.com/api/get-req-data/child-pages?page_id=45&type=&value=&limit=&image=yes');
    const data = await res.json();

    // Pass fetched data as props to the component
    return {
        props: {
            data,
        },
    };
}

export default Blog;
