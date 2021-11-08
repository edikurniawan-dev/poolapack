import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import '../assets/css/react-datepicker.css';
import List from './List';

import Coint from '../assets/framecoin.svg';
import Calendar from '../assets/calendar.svg';
import Downward from '../assets/downward.svg';
import Refferal from '../assets/refferal.svg';
import Cashback from '../assets/cashback.png';

const Main = () => {
    const [dateRange, setDateRange] = useState([null, null]);
    const [startDate, endDate] = dateRange;

    return (
        <div className="container mx-auto px-2 md:px-16 flex flex-col py-5">
            <h2 className="text-larger font-bold mb-3">poolpoint</h2>
            <div className="flex justify-between flex-col lg:flex-row space-x-0 lg:space-x-5">
                <div className="flex justify-between h-36 sm:h-40 w-full lg:w-96 bg-white rounded-xl py-5 px-5 lg:px-7 mb-5 lg:mb-0">
                    <div className="flex flex-wrap content-between w-44 ">
                        <p className="font-body text-subtle-text">
                            Total Point Aktif
                        </p>
                        <h3 className="font-bold text-large">Rp. 100.000</h3>
                    </div>
                    <img src={Coint} alt="" className="h-16 w-16 self-end" />
                </div>
                <div className="bg-white w-full rounded-lg px-5 lg:px-10 py-8">
                    <p className="font-bold text-body mb-5">
                        Riwayat Transaksi
                    </p>
                    <div className="flex justify-between flex-col sm:flex-row lg:flex-col xl:flex-row mb-10 space-x-0 sm:space-x-2 lg:space-x-0 xl:space-x-2">
                        <div className="flex space-x-2 xl:space-x-6 justify-between">
                            <button
                                className="font-bold text-body px-3 sm:px-2 lg:px-7 py-2 lg:py-3 border-2 border-subtle-text rounded-lg text-subtle-text tracking-wide
                            hover:bg-primary-lightest hover:text-primary hover:border-primary-lightest focus:bg-primary-lightest focus:text-primary focus:border-primary-lightest">
                                Semua
                            </button>
                            <button
                                className="font-bold text-body px-3 sm:px-2 lg:px-7 py-2 lg:py-3 border-2 border-subtle-text rounded-lg text-subtle-text tracking-wide leading-none
                            hover:bg-primary-lightest hover:text-primary hover:border-primary-lightest focus:bg-primary-lightest focus:text-primary focus:border-primary-lightest">
                                Point Masuk
                            </button>
                            <button
                                className="font-bold text-body px-3 sm:px-2 lg:px-7 py-2 lg:py-3 border-2 border-subtle-text rounded-lg text-subtle-text tracking-wide leading-none
                            hover:bg-primary-lightest hover:text-primary hover:border-primary-lightest focus:bg-primary-lightest focus:text-primary focus:border-primary-lightest">
                                Point Keluar
                            </button>
                        </div>
                        <button className="flex justify-between items-center space-x-2 border border-primary px-2 sm:px-1 lg:px-3 py-3 text-primary-dark rounded-lg mt-4 sm:mt-0 lg:mt-4 xl:mt-0">
                            <img src={Calendar} alt="" />
                            <DatePicker
                                className="outline-none text-center text-primary"
                                dateFormat="d/MM/yyyy"
                                selectsRange={true}
                                startDate={startDate}
                                endDate={endDate}
                                placeholderText="Start Date - End Date"
                                onChange={(update) => {
                                    setDateRange(update);
                                }}
                            />
                            <img src={Downward} alt="" />
                        </button>
                    </div>
                    <List
                        date="Jumat, 29 Oktober 2021"
                        time="12:38 wib"
                        icon={Refferal}
                        description="Refferal"
                        point="100.000"
                    />
                    <List
                        date="Jumat, 29 Oktober 2021"
                        time="12:38 wib"
                        icon={Cashback}
                        description="Cashback"
                        point="100.000"
                    />
                    <List
                        date="Jumat, 29 Oktober 2021"
                        time="12:38 wib"
                        icon={Refferal}
                        description="Refferal"
                        point="100.000"
                    />
                    <List
                        date="Jumat, 29 Oktober 2021"
                        time="12:38 wib"
                        icon={Cashback}
                        description="Cashback"
                        point="100.000"
                    />
                    <List
                        date="Jumat, 29 Oktober 2021"
                        time="12:38 wib"
                        icon={Cashback}
                        description="Cashback"
                        point="100.000"
                    />
                </div>
            </div>
        </div>
    );
};

export default Main;
