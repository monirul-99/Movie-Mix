import { useState } from 'react';
import './style.scss';

const SwitchTabs = ({data, onTabChange}) => {
    const [selectedTab, setSelectedTab] = useState(0)
    const [left, setLeft] = useState(0)

    const activeTab = (tab, index) => {
        setLeft(index * 100)
        setTimeout(() => {
            setSelectedTab(index)
        }, 300)

        onTabChange(tab, index)
    }
    return (
        <div className='switchingTabs'>
            <div className="tabItems">
                {data?.map((tab, inx) => (
                    <span 
                    key={inx} 
                    className={`tabItem ${selectedTab === inx ? "active" : ""}`}
                    onClick={() => activeTab(tab, inx)}
                    >{tab}</span>
                ))}
            <span className="movieBg" style={{left}}></span>
                </div> 
        </div>
    );
};

export default SwitchTabs;