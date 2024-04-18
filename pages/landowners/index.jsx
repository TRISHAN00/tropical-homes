import {NextSeo} from "next-seo";
import InnerBanner from "../../components/InnerBanner";
import Overview from "../../components/Overview";
import Testimonial from "../../components/Testimonial";
import LandownerForm from "../../components/LandownersForm";

const Landowners = ({data}) => {
    const getPost = data && data;

    const innerBanner = getPost?.data;
    const overview = getPost?.data?.sections?.find((f) => f?.section_data?.slug === "landowners-overview");
    const testimonial = getPost?.data?.sections?.find((f) => f?.section_data?.slug === "landowner-testimonial");

    const desktop = innerBanner?.page_images?.list?.find(
        (f) => f?.Desktop === "on"
    );
    const mobile = innerBanner?.page_images?.list?.find(
        (f) => f?.Mobile === "on"
    );

    return (
        <>
            <NextSeo
                title={getPost?.data?.page_data?.meta_title}
                description={getPost?.data?.page_data?.meta_description}
            />
            <InnerBanner
                srcSm={mobile?.full_path}
                img={desktop?.full_path}
                title={innerBanner?.page_data?.title}
            />
            <Overview
                bg={"#F9F9F9"}
                descriptionLeft={overview?.section_data?.short_desc}
                title={overview?.section_data?.subtitle}
                descriptionRight={overview?.section_data?.description}
            />
            <Testimonial data={testimonial} />
            <LandownerForm />
        </>
    );
};


Landowners.getInitialProps = async (ctx) => {
    try {
        const res = await fetch('https://cms.tropicalhomesltd.com/api/get-req-data/sections?type=slug&value=landowners&get_section=yes&image=yes&post=yes');
        const data = await res.json();
        return {data};
    } catch (error) {
        console.error("Error fetching data:", error);
        return {data: null}; // or handle the error in a way appropriate for your application
    }
}

export default Landowners;
