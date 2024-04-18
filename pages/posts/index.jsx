import Post from "../../components/post/Post";
import {useDispatch, useSelector} from "react-redux";
import {ApiServices} from "../api/network/ApiServices";
import {fetchPosts} from "../api/redux/post";
import {useEffect} from "react";
import {wrapper} from "../api/store";
import {NextSeo} from "next-seo";
import {useRouter} from "next/router";

const Home = (props) => {

    const dispatch = useDispatch()
    const getPost = useSelector(state => state.postReducer)

    const router = useRouter();

    // api call
    useEffect(() => {
        // if (!props.isServer) {
            let api_services = ApiServices.POSTS
            dispatch(fetchPosts([api_services]))
        // }
    }, [])


    return (
        <>
            <NextSeo
                title={getPost?.posts?.[1]?.title}
                description={getPost?.posts?.[1]?.title}
            />
            <Post getPost={getPost}/>
        </>
    )


}


export const getServerSideProps = wrapper.getServerSideProps(
    (store) =>
        async ({req}) => {
            const isServer = !req.url.startsWith("/_next");

            if (isServer) {
                let api_services = ApiServices.POSTS
                await store.dispatch(fetchPosts([api_services]))
            }
            return {
                props: {
                    isServer,
                    title: "post",
                },
            };
        }
);


export default Home;



