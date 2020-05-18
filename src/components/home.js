import React from "react";

class Home extends React.Component {

    state = {
        datas: {
            dataValueOne: [1, 2, 3, 4, 5],
            dataValueTwo: [200, 500, 300, 400, 900],
            dataValueThree: [1500, 2000, 2500, 1000, 3000]
        },
        selectedValue: 1
    }

    renderDatas

    render() {
        return (
            <div className="container-fluid" style={{ backgroundColor: "yellow" }}>
                Home
            </div>
        )
    }
}


export default Home;