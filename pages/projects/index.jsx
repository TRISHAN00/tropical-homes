import {NextSeo} from "next-seo";
import InnerBanner from "../../components/InnerBanner";
import ProjectList from "../../components/project/ProjectList";
import {useEffect, useState} from "react";
import {motion} from "framer-motion";
import {useRouter} from "next/router";
import {Loading} from "../../components/Loading";
import {PageAnimation} from "../../components/animations/PageAnimation";

const Projects = ({data}) => {
    const [selectedStatus, setSelectedStatus] = useState('');
    const [selectedType, setSelectedType] = useState('');
    const [selectedLocation, setSelectedLocation] = useState('');
    const [projects, setProjects] = useState('')
    const innerBanner = projects?.section_data;
    const router = useRouter();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true); // Set loading state to true when fetching data
            try {
                // Fetch data from API with selected parameters from the URL query
                const {status, type, location} = router.query;
                let apiUrl = 'https://cms.tropicalhomesltd.com/api/get-req-data/product-by-cats?image=yes';

                if (status) {
                    apiUrl += `&category=${status}`;
                }
                if (type) {
                    apiUrl += `&type=${type}`;
                }
                if (location) {
                    apiUrl += `&location=${location}`;
                }

                const res = await fetch(apiUrl);
                const data = await res.json();
                setProjects(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            } finally {
                setLoading(false); // Set loading state to false after fetching data
            }
        };

        fetchData();
    }, [router.query]);


    // Function to push URL changes
    const pushUrl = () => {
        if (selectedStatus !== '' || selectedType !== '' || selectedLocation !== '') {
            const query = new URLSearchParams({
                status: selectedStatus,
                type: selectedType,
                location: selectedLocation
            }).toString();

            // Use router.replace instead of router.push to prevent adding a new history entry
            router.replace(`/projects?${query}`);
        }
    };


// Call pushUrl function whenever user selections change
    useEffect(() => {
        pushUrl();
    }, [selectedStatus, selectedType, selectedLocation]);

// Remove the dependency on setSelectedStatus, selectedType, and selectedLocation
// from the third useEffect hook since it is already dependent on router.query.
    useEffect(() => {
        const {status, type, location} = router.query;
        setSelectedStatus(status || '');
        setSelectedType(type || '');
        setSelectedLocation(location || '');
    }, [router.query]);

    // Banner image according to the status change
    const upcoming = innerBanner?.images?.list?.find((f) => f?.upcoming === "on");
    const desktop = innerBanner?.images?.list?.find((f) => f?.Desktop === "on");
    const ongoing = innerBanner?.images?.list?.find((f) => f?.ongoing === "on");
    const ready = innerBanner?.images?.list?.find((f) => f?.ready === "on");
    const completed = innerBanner?.images?.list?.find((f) => f?.completed === "on");

    let image = desktop;

    switch (selectedStatus) {
        case 'ongoing':
            image = ongoing;
            break;
        case 'upcoming':
            image = upcoming;
            break;
        case 'ready':
            image = ready;
            break;
        case 'completed':
            image = completed;
            break;
        default:
            break;
    }

    const locationOptions = projects?.filter?.location_list?.map(item => {
        return {
            value: item?.location,
            label: item?.location
        };
    });

    return (
        <>
            <NextSeo
                title={`Projects | Tropical Homes`}
                description={'Find your dream home, office, or condo anywhere in Dhaka with Tropical Homes. Offering a selection of residential, commercial, and condo properties throughout the city.\n'}
            />
            <motion.div key={`1mm83`} className="page-loader" exit="exit" animate="anim"
                        variants={PageAnimation}
                        initial="init">
            </motion.div>

            {/* Pass data and state setters as props to ProjectList */}
            {loading ? (
                <Loading/> // Display a loading component while data is being fetched
            ) : (
                <>
                    <InnerBanner title={image?.short_title ? image?.short_title : innerBanner?.page_data?.subtitle}
                                 img={image?.full_path ? image?.full_path : desktop?.full_path}
                                 srcSm={image?.full_path}/>
                    <ProjectList
                        data={projects?.data}
                        location={locationOptions}
                        selectedStatus={selectedStatus}
                        setSelectedStatus={setSelectedStatus}
                        selectedType={selectedType}
                        setSelectedType={setSelectedType}
                        selectedLocation={selectedLocation}
                        setSelectedLocation={setSelectedLocation}/>
                </>

            )}

        </>
    );
};

export default Projects;
