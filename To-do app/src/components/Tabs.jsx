export function Tabs(){

    const tabs= ['All','Open','Completed']
    return(
        <nav>
            {tabs.map((tabs,tabIndex)=>{
                return(
                    <button key={tabIndex}>
                        <h4>{tab}</h4>
                    </button>
                )
            })}
        </nav>
    )
}