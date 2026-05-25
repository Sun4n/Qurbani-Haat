import React from 'react';

const QurbaniTips = () => {
    return (
        <div className="grid grid-cols-3 gap-4 my-10 ">

            <div className="card bg-base-100 w-fit shadow-xl ">
                <div className="card-body">
                    <h2 className="text-lg font-bold text-center">Choose a healthy animal</h2>
                    <p>The animal must be free from obvious defects — no blindness, lameness, extreme thinness, or missing ears. A healthy, well-fed animal is a sign of a proper Qurbani.</p>
                </div>
            </div>

            <div className="card bg-base-100 w-full shadow-xl">
                <div className="card-body">
                    <h2 className="text-lg font-bold text-center">Check the minimum age</h2>
                    <p>Goat/sheep: at least 1 year old. Cow/buffalo: at least 2 years old. Camel: at least 5 years old. Younger animals are not valid for Qurbani.</p>
                </div>
            </div>

            <div className="card bg-base-100 w-full  shadow-xl">
                <div className="card-body">
                    <h2 className="text-lg font-bold text-center">Make your intention (niyyah)</h2>
                    <p>Before slaughtering, make a clear intention in your heart that this Qurbani is solely for the sake of Allah. Recite Bismillah and Allahu Akbar before the slaughter.</p>
                </div>
            </div>



        </div>
    );
};

export default QurbaniTips;