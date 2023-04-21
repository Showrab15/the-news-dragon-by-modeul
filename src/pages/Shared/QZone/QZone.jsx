import React from 'react';
import quiz1 from '../../../assets/qZone1.png'
import quiz2 from '../../../assets/qZone2.png'
import quiz3 from '../../../assets/qZone3.png'

const QZone = () => {
    return (
        <div className="bg-light py-4 text-center my-4">
            <h4>QZone</h4>
            <div >
                <img src={quiz1} alt="" />
                <img src={quiz2} alt="" />
                <img src={quiz3} alt="" />
            </div>
        </div>
    );
};

export default QZone;