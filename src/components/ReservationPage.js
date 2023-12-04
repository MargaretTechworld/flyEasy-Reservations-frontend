import React from 'react';
import meal1 from '../img/meals/meal1.jpg';
import logo from '../img/logo1.png';
import tw from '../img/tw.svg';
import fb from '../img/fb.svg';
import pint from '../img/pint.svg';
import gp from '../img/gp.svg';
import vi from '../img/vi.svg';

const ReservationPage = () => {
  const reservations = [
    {
      id: 1,
      title: 'Meal 1',
      image: meal1,
    },
  ];

  return (
    <div className="h-screen flex justify-between">
      <div className="flex flex-col justify-between border-r-4 border-gray-100 p-0 w-1/3 ml-2 mb-2">
        <div className="">
          <img src={logo} alt="logoImg" className="w-36 mb-3" />
          <ul className="flex flex-col gap-0 ">
            <li className="w-full bg-green hover:bg-green active:bg-green focus:ring hover:text-white p-2"><a href="#new" className="">Meal</a></li>
            <li className="w-full hover:bg-green active:bg-green hover:text-white p-2"><a href="#new" className="">Reserve</a></li>
            <li className="w-full hover:bg-green active:bg-green hover:text-white p-2"><a href="#new" className="">My Reservation</a></li>
            <li className="w-full hover:bg-green active:bg-green hover:text-white p-2"><a href="#new" className="">Add meal</a></li>
            <li className="w-full hover:bg-green active:bg-green hover:text-white p-2"><a href="#new" className="">Delete meal</a></li>
          </ul>
        </div>
        <div>
          <ul className="flex gap-3 p-2">
            <li><a href="#new"><img src={tw} alt="tw" className="w-4" /></a></li>
            <li><a href="#new"><img src={fb} alt="fb" className="w-4" /></a></li>
            <li><a href="#new"><img src={gp} alt="gp" className="w-4" /></a></li>
            <li><a href="#new"><img src={vi} alt="vi" className="w-4" /></a></li>
            <li><a href="#new"><img src={pint} alt="pint" className="w-4" /></a></li>
          </ul>
          <div className="p-2">
            <p className="text-xs">&copy; 2023 connect-meal </p>
          </div>
        </div>
      </div>
      <div className="container mx-auto mt-8 ml-10 p-10">
        <h1 className="text-2xl font-bold mb-10">My Reservation(s):</h1>
        <div className="flex flex-col">
          {reservations.map((reservation) => (
            <div key={reservation.id} className="bg-white rounded-lg shadow-md border-gray-300 border p-7 mr-32 mb-4 flex items-center justify-between">
              <img src={reservation.image} alt={reservation.title} className="w-16 h-16 object-cover rounded mr-4" />
              <h2 className="text-lg font-semibold flex-grow text-center">{reservation.title}</h2>
              <button type="button" className="bg-red-500 text-white py-2 px-4 rounded">Delete</button>
            </div>
          ))}
        </div>
      </div>
      <button type="button" className="bg-green text-white py-2 px-4 rounded self-end mr-64 mb-10">Reserve</button>
    </div>
  );
};

export default ReservationPage;
