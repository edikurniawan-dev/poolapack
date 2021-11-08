import React from 'react';
import Coin from '../assets/framecoin.svg';

const List = (props) => {
    return (
        <div className="flex flex-col space-y-5 mt-4">
            <div className="flex justify-start space-x-5">
                <p className="text-body font-semibold text-text">
                    {props.date}
                </p>
                <p className="text-body text-text font-light">{props.time}</p>
            </div>
            <div className="space-y-7">
                <div className="flex justify-between">
                    <div className="flex items-start space-x-3">
                        <img src={props.icon} alt="" />
                        <h3 className="text-large font-bold">
                            {props.description}
                        </h3>
                    </div>
                    <div className="flex flex-col">
                        <h3 className="text-large font-bold text-primary">
                            {props.point}
                        </h3>
                        <div className="flex  items-center justify-end space-x-2">
                            <img src={Coin} alt="4" className="h-4 w-" />
                            <p className="text-sm text-subtle-text font-light">
                                PoolPoint
                            </p>
                        </div>
                    </div>
                </div>
                <hr />
            </div>
        </div>
    );
};

export default List;
