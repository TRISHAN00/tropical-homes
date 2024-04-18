import {NextSeo} from "next-seo";
import Banner from "../components/home/Banner";
import GoProject from "../components/home/GoProject";
import About from "../components/home/About";
import BigBanner from "../components/home/BigBanner";
import FeatureSlider from "../components/home/FeatureSlider";
import WhyTropical from "../components/home/WhyTropical";
import Partners from "../components/home/Partners";
import GoogleMapsMarkers from "../components/home/GoogleMapsMarkers";
import BlogSlider from "../components/home/BlogSlider";
import {useState, useEffect} from "react";

const Home = ({data}) => {
    const [offset, setOffset] = useState('90');
    const [windowWidth, setWindowWidth] = useState(0);
    const getPost = data && data;

    const bannerData = getPost?.data?.sections?.find(f => f?.section_data?.slug === "banner")?.posts?.list;
    const exploreProjects = getPost?.data?.sections?.find(f => f?.section_data?.slug === "explore-project");
    const about = getPost?.data?.sections?.find(f => f?.section_data?.slug === "home-about");
    const commercialLandmark = getPost?.data?.sections?.find(f => f?.section_data?.slug === "commercial-landmarks");
    const projectsTitle = getPost?.data?.sections?.find(f => f?.section_data?.slug === "feature-projects");
    const featureProject = getPost?.projects;
    const findAProjects = getPost?.data?.sections?.find(f => f?.section_data?.slug === "find-projects");
    const quotes = getPost?.data?.sections?.find(f => f?.section_data?.slug === "quote");
    const bestHome = getPost?.data?.sections?.find(f => f?.section_data?.slug === "why-tropical-homes-are-best");
    const partners = getPost?.data?.sections?.find(f => f?.section_data?.slug === "partner-with-developers");
    const map = getPost?.data?.sections?.find(f => f?.section_data?.slug === "map");
    const testimonials = getPost?.data?.sections?.find(f => f?.section_data?.slug === "testimonials");
    const strategicPartners = getPost?.data?.sections?.find(f => f?.section_data?.slug === "strategic-partners");
    const featureNews = getPost?.newsEvents;

    useEffect(() => {
        const updateOffset = () => {
            if (window.innerWidth > 767) {
                const container = document.querySelector('.container');
                if (container) {
                    setOffset(container.offsetLeft + 15);
                }
            }
        };

        // Add an event listener for the DOMContentLoaded event
        document.addEventListener('DOMContentLoaded', updateOffset);

        // Add event listener to update offset on window resize
        window.addEventListener('resize', updateOffset);
        window.addEventListener('load', updateOffset);

        return () => {
            document.removeEventListener('DOMContentLoaded', updateOffset);
            window.removeEventListener('resize', updateOffset);
            window.removeEventListener('load', updateOffset);
        };
    }, []);

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

    const data2 = featureProject?.list?.map((item) => ({
        product_data: {
            id: item?.product_data?.id,
            title: item?.product_data?.title,
            slug: item?.product_data?.slug,
            type: item?.product_data?.type,
            location: item?.product_data?.location,
            latitude: item?.product_data?.latitude?.toString(),
            longitude: item?.product_data?.longitude?.toString(),
            image: item?.images?.list,
        },
    }));

    return (
        <>
            <NextSeo
                title={getPost?.data?.page_data?.meta_title}
                description={getPost?.data?.page_data?.meta_description}
            />
            <Banner data={bannerData}/>
            <GoProject data={exploreProjects}/>
            <About data={about}/>
            <BigBanner data={commercialLandmark}/>
            <div className="bgc-wrap">
                <FeatureSlider
                    Location={getPost?.location}
                    data={featureProject}
                    findData={findAProjects}
                    title={projectsTitle}
                />
                <WhyTropical data={bestHome}/>
                <Partners data={partners} />
                <GoogleMapsMarkers data={data2} dataMap={map} offset={offset} windowWidth={windowWidth} />
                <BlogSlider data={featureNews} />
            </div>
        </>
    );
};

export async function getServerSideProps() {
    // Fetch data from an API or perform any async operations
    const res = await fetch('https://cms.tropicalhomesltd.com/api/get-req-data/sections?type=slug&value=home&get_section=yes&image=yes&post=yes');
    const data = await res.json();

    // Pass fetched data as props to the component
    return {
        props: {
            data,
        },
    };
}

export default Home;
