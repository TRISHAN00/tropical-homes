import {NextSeo} from "next-seo";
import InnerBanner from "../../components/InnerBanner";
import {useEffect, useState} from "react";
import Overview from "../../components/Overview";
import CustomersForm from "../../components/CustomersForm";

const Customers = ({data}) => {
    const [windowWidth, setWindowWidth] = useState(0);
    const getPost = data && data;

    const innerBanner = getPost?.data;
    const overview = getPost?.data?.sections?.find((f) => f?.section_data?.slug === "customer-overview");

    const desktop = innerBanner?.page_images?.list?.find((f) => f?.Desktop === "on");
    const mobile = innerBanner?.page_images?.list?.find((f) => f?.Mobile === "on");

    useEffect(() => {
        // Function to handle window resize
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        // Initial window width
        setWindowWidth(window.innerWidth);

        // Add event listener for window resize
        window.addEventListener('resize', handleResize);

        // Cleanup the event listener on component unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    return (
        <>
            <NextSeo
                title={getPost?.data?.page_data?.meta_title}
                description={getPost?.data?.page_data?.meta_description}
            />
            <InnerBanner srcSm={mobile?.full_path} img={desktop?.full_path} title={innerBanner?.page_data?.title}/>
            <Overview
                bg={'#F9F9F9'}
                descriptionLeft={overview?.section_data?.short_desc}
                title={overview?.section_data?.subtitle}
                descriptionRight={overview?.section_data?.description}/>
            <CustomersForm windowWidth={windowWidth} />
        </>
    );
};

export async function getServerSideProps() {
    // Fetch data from an API or perform any async operations
    const res = await fetch('https://bestinbd.com/projects/web/2310THL/cms/api/get-req-data/sections?type=slug&value=customer&get_section=yes&image=yes&post=yes&file=no&gallery=no');
    const data = await res.json();

    // Pass fetched data as props to the component
    return {
        props: {
            data,
        },
    };
}

export default Customers;
