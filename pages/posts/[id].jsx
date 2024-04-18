import React, {useEffect} from 'react';
import {wrapper} from "../api/store";
import {ApiServices} from "../api/network/ApiServices";
import postReducer, {fetchPostDetail, fetchPosts} from "../api/redux/post";
import {useDispatch, useSelector} from "react-redux";
import {NextSeo} from "next-seo";
import { useRouter } from 'next/router';
const PostDetail = () => {
    const dispatch = useDispatch()
    let detailData = useSelector(state => state.postReducer)
    const router = useRouter();
    const { id } = router.query;

    // api call
    useEffect(() => {
        // if (!props.isServer) {
        let api_services = ApiServices.POSTS
        dispatch(fetchPostDetail([api_services + `/${id}`]))

        // }
    }, [])

    return (
        <> <NextSeo
            title={detailData?.detail?.title}
            description={detailData?.detail?.title}
        />

        <div>
            <h1>{detailData?.detail?.id} <br/>{detailData?.detail?.title}</h1>
            <p>{detailData?.detail?.body}</p>
        </div>
        </>
    );
};

// export const getServerSideProps = wrapper.getServerSideProps(
//     (store) => async ({req, query}) => {
//         let api_services = ApiServices.POSTS
//         await store.dispatch(fetchPostDetail([api_services + `/${query.id}`]))
//     })

export default PostDetail;
