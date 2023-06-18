
const TabNavItem = ({ id, title, activeTab, setActiveTab }) => {
    const handleClick = () => {
        setActiveTab(id);
    };

    return (
        <li onClick={handleClick} className={activeTab === id ? "active-tab" : ""}>
            {title}
        </li>
    );
};

export default TabNavItem;