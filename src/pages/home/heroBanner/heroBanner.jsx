import { useEffect, useState } from 'react';
import'./style.scss';
import { useNavigate } from 'react-router-dom';
import useFetch from '../../../hooks/useFetch';
import { useSelector } from 'react-redux';
import Img from '../../../components/lazyLoadImage/lazyLoadImage';
import ContentWrapper from '../../../components/contentWrapper/contentWrapper';

const HeroBanner = () => {
    const navigate = useNavigate()
    const {url} = useSelector((state) => state.home)
    const [background, setBackground] = useState("")
    const [query, setQuery] = useState("")
    const {data, loading} = useFetch("/movie/upcoming")

    useEffect(() => {
        const bg = url.backdrop + data?.results?.[Math.floor(Math.random() * 20)]?.backdrop_path;
        setBackground(bg)
    }, [data, url])

    const searchQueryHandle = (e) => {
        if(e.key === "Enter" && query.length > 0){
            navigate(`/search/${query}`)
        }
    }
    return (
        <div className='heroBanner'>
            {!loading && <div className="backdrop-img">
            <Img src={background}/>
            </div>}

            <div className="opacity-layer"></div>

            <ContentWrapper>
                <div className="heroBannerContent">
                    <span className="title">welcome.</span>
                    <span className="subTitle">Millions of movies, Tv shows and people to discover. Explore now.</span>
                    <div className="searchInput">
                        <input
                        onChange={(e) => setQuery(e.target.value)}
                        onKeyUp={searchQueryHandle}
                        type="text"
                        placeholder='Search for a movie or tv show.....'/>
                        <button className=''>Search</button>
                    </div>
                </div>
            </ContentWrapper>
        </div>
    );
};

export default HeroBanner;