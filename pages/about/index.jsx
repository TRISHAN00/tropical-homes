import {NextSeo} from "next-seo";
import InnerBanner from "../../components/InnerBanner";
import Counter from "../../components/about/Counter";
import MissionVission from "../../components/about/MissionVission";
import Team from "../../components/about/Team";
import Director from "../../components/about/Director";
import SisterConcern from "../../components/SisterConcern";

const About = ({data}) => {
    const getPost = data && data;

    const innerBanner = getPost?.data;
    const ourStory = getPost?.data?.sections?.find((f) => f?.section_data?.slug === "our-story");
    const missionVision = getPost?.data?.sections?.find((f) => f?.section_data?.slug === "mission-vision-value");
    const managementMessages = getPost?.data?.sections?.find((f) => f?.section_data?.slug === "management-messages");
    const boardOfDirectors = getPost?.data?.sections?.find((f) => f?.section_data?.slug === "board-of-director");
    const sisterConcern = getPost?.data?.sections?.find((f) => f?.section_data?.slug === "sister-concern");

    const desktop = innerBanner?.page_images?.list?.find((f) => f?.Desktop === "on");
    const mobile = innerBanner?.page_images?.list?.find((f) => f?.Mobile === "on");

    return (
        <>
            <NextSeo
                title={getPost?.data?.page_data?.meta_title}
                description={getPost?.data?.page_data?.meta_description}
            />
            <InnerBanner srcSm={mobile?.full_path} img={desktop?.full_path} title={innerBanner?.page_data?.title}/>
            <Counter id={'our-story'} data={ourStory}/>
            <MissionVission id1={'vision'} id2={'mission'} id3={'values'} data={missionVision}/>
            <Team id={'message-from-chairman'} id2={'message-from-MD'} data={managementMessages}/>
            <Director id={'board-of-directors'} data={boardOfDirectors}/>
            <SisterConcern data={sisterConcern} bg={'#F9F9F9'}/>
        </>
    );
};

export async function getServerSideProps() {
    // Fetch data from an API or perform any async operations
    const res = await fetch('https://cms.tropicalhomesltd.com/api/get-req-data/sections?type=slug&value=about&get_section=yes&image=yes&post=yes');
    const data = await res.json();

    // Pass fetched data as props to the component
    return {
        props: {
            data,
        },
    };
}

export default About;
