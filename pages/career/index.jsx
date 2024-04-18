import {NextSeo} from "next-seo";
import InnerBanner from "../../components/InnerBanner";
import Overview from "../../components/Overview";
import ApplyForm from "../../components/career/ApplyForm";

const Career = ({data}) => {
    const getPost = data && data;

    const innerBanner = getPost?.data;
    const overview  = getPost?.data?.sections?.find((f) => f?.section_data?.slug === "overview");
    const applyForm   = getPost?.data?.sections?.find((f) => f?.section_data?.slug === "apply-form");

    const desktop = innerBanner?.page_images?.list?.find((f) => f?.Desktop === "on");
    const mobile = innerBanner?.page_images?.list?.find((f) => f?.Mobile === "on");

    return (
        <>
            <NextSeo
                title={getPost?.data?.page_data?.meta_title}
                description={getPost?.data?.page_data?.meta_description}
            />
            <InnerBanner srcSm={mobile?.full_path} img={desktop?.full_path} title={innerBanner?.page_data?.title}/>
            <Overview title={overview?.section_data?.subtitle} descriptionLeft={overview?.section_data?.description}
                      descriptionRight={overview?.section_data?.short_desc}/>
            <ApplyForm data={applyForm}/>
        </>
    );
};

export async function getServerSideProps() {
    // Fetch data from an API or perform any async operations
    const res = await fetch('https://cms.tropicalhomesltd.com/api/get-req-data/sections?type=slug&value=career&get_section=yes&image=yes&post=yes');
    const data = await res.json();

    // Pass fetched data as props to the component
    return {
        props: {
            data,
        },
    };
}

export default Career;
