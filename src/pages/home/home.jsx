import HeroBanner from './heroBanner/heroBanner';
import Popular from './popular/Popular';
import './style.scss';
import TopRated from './topRated/TopRated';
import Trending from './trending/trending';

const Home = () => {
    return (
        <div className='homePage'>
        <HeroBanner/>
        <Trending/>
        <Popular/>
        <TopRated/>
        </div>
    );
};

export default Home;