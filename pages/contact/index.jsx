import {NextSeo} from "next-seo";
import InnerBanner from "../../components/InnerBanner";
import Address from "../../components/contact/Address";
import {useEffect, useState} from "react";
import GetInTouch from "../../components/contact/GetInTouch";
import Location from "../../components/contact/Location";



const Contact = ({data}) => {
    const [windowWidth, setWindowWidth] = useState(0);
    const [offset, setOffset] = useState('90');
    const getPost = data && data;

    const innerBanner = getPost?.data;
    const address  = getPost?.data?.sections?.find((f) => f?.section_data?.slug === "address");
    const getIntouch  = getPost?.data?.sections?.find((f) => f?.section_data?.slug === "get-in-touch");
    const location  = getPost?.data?.sections?.find((f) => f?.section_data?.slug === "location");
    const latLong = location?.posts?.list?.[0]?.data


    const desktop = innerBanner?.page_images?.list?.find((f) => f?.Desktop === "on");
    const mobile = innerBanner?.page_images?.list?.find((f) => f?.Mobile === "on");

    const data2 = [
        {
            "product_data": {
                "id": 0,
                "title": location?.section_data?.subtitle,
                "location": location?.section_data?.description,
                "url": latLong?.description,
                "latitude": latLong?.subtitle,
                "longitude": latLong?.short_desc,
            }
        },
    ]

    useEffect(() => {
        const updateOffset = () => {
            if (window.innerWidth > 767) {
                const container = document.querySelector('.container');
                if (container) {
                    setOffset(container.offsetLeft + 15);
                }
            }
        };

        updateOffset();
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
    return (
        <>
            <NextSeo
                title={getPost?.data?.page_data?.meta_title}
                description={getPost?.data?.page_data?.meta_description}
            />
            <InnerBanner srcSm={mobile?.full_path} img={desktop?.full_path} title={innerBanner?.page_data?.title}/>
            <Address data={address} offset={offset}/>
            <GetInTouch data={getIntouch}/>
            <Location windowWidth={windowWidth} slide data={data2}/>
        </>
    );
};


export async function getServerSideProps() {
    // Fetch data from an API or perform any async operations
    const res = await fetch('https://cms.tropicalhomesltd.com/api/get-req-data/sections?type=slug&value=contacts&get_section=yes&image=yes&post=yes');
    const data = await res.json();

    // Pass fetched data as props to the component
    return {
        props: {
            data,
        },
    };
}

export default Contact;
