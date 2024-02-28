import React, { useState } from "react";
import {
  ArrowLeftEndOnRectangleIcon,
  ArrowRightEndOnRectangleIcon,
  Battery50Icon,
  BellIcon,
  CalendarDaysIcon,
  ChevronLeftIcon,
  DevicePhoneMobileIcon,
  LockClosedIcon,
  PhoneIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import { SwiperSlide } from "swiper/react";
import dayjs from "dayjs";
import { AVATAR } from "../../../constant";
import { SharedComp } from "../../../components";
import { DateArray } from "../../../utils/date";

function Home() {
  let [isNotificationModalOpen, setNotificationModalOpen] = useState(false);
  const days = DateArray(3);

  function OpenNotificationModal() {
    setNotificationModalOpen(true);
  }

  function CloseNotificationModal() {
    setNotificationModalOpen(false);
  }

  return (
    <>
      <div className="py-4 mb-7">
        <div className="px-4 flex justify-between place-items-center">
          <div className="flex gap-3 place-items-center">
            <div className="h-10 w-10 rounded-full bg-slate-200">
              <img
                src={AVATAR}
                alt=""
                className="h-full w-full object-cover rounded-full"
              />
            </div>
            <div className="">
              <h1 className="font-semibold leading-tight">Tatang Sutarman</h1>
              <h1 className="font-light text-sm leading-tight">
                Backend Developer
              </h1>
            </div>
          </div>
          <div
            onClick={OpenNotificationModal}
            className="h-10 w-10 flex justify-center place-items-center rounded-full border cursor-pointer"
          >
            <BellIcon className="h-6 w-6 text-slate-600" />
          </div>
        </div>
        {/* Carousel */}
        <SharedComp.Carousel>
          {days.map((day, index) => (
            <SwiperSlide
              key={index}
              className={`rounded-lg p-3 border border-[#ACAFB5]/20 ${
                dayjs().isSame(day, "day")
                  ? "bg-[#3085FE] text-white"
                  : "bg-white"
              } flex flex-col items-center justify-center text-center cursor-pointer`}
            >
              <h1 className="font-semibold text-lg">
                {dayjs(day).format("DD")}
              </h1>
              <p className="font-light text-xs">{dayjs(day).format("ddd")}</p>
            </SwiperSlide>
          ))}
        </SharedComp.Carousel>
        {/* Attendance */}
        <div className="p-4 bg-[#ACAFB5]/15 rounded-t-2xl min-h-1/2">
          {/* Today */}
          <div className="mb-6">
            <div className="mb-3 flex justify-between place-items-center">
              <div className="">
                <h1 className="font-semibold">Today Attendance</h1>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {/* Check in */}
              <div className="bg-white rounded-2xl p-3 shadow-sm">
                <div className="flex gap-1.5 place-items-center">
                  <div className="p-2 bg-[#3085FE]/5 rounded-lg">
                    <ArrowRightEndOnRectangleIcon className="h-3 w-3 text-[#3085FE]" />
                  </div>
                  <p className="text-xs text-slate-600">Check In</p>
                </div>
                <h2 className="font-semibold text-lg text-slate-700 leading-loose">
                  10:20 am
                </h2>
                <p className="text-xs text-slate-600">On Time</p>
              </div>
              {/* Check out */}
              <div className="bg-white rounded-2xl p-3 shadow-sm">
                <div className="flex gap-1.5 place-items-center">
                  <div className="p-2 bg-[#3085FE]/5 rounded-lg">
                    <ArrowLeftEndOnRectangleIcon className="h-3 w-3 text-[#3085FE]" />
                  </div>
                  <p className="text-xs text-slate-600">Check Out</p>
                </div>
                <h2 className="font-semibold text-lg text-slate-700 leading-loose">
                  07:00 pm
                </h2>
                <p className="text-xs text-slate-600">Go Home</p>
              </div>
              {/* Break */}
              <div className="bg-white rounded-2xl p-3 shadow-sm">
                <div className="flex gap-1.5 place-items-center">
                  <div className="p-2 bg-[#3085FE]/5 rounded-lg">
                    <Battery50Icon className="h-3 w-3 text-[#3085FE]" />
                  </div>
                  <p className="text-xs text-slate-600">Break Time</p>
                </div>
                <h2 className="font-semibold text-lg text-slate-700 leading-loose">
                  00:30 min
                </h2>
                <p className="text-xs text-slate-600">Avg Time 30 min</p>
              </div>
              {/* Total days */}
              <div className="bg-white rounded-2xl p-3 shadow-sm">
                <div className="flex gap-1.5 place-items-center">
                  <div className="p-2 bg-[#3085FE]/5 rounded-lg">
                    <CalendarDaysIcon className="h-3 w-3 text-[#3085FE]" />
                  </div>
                  <p className="text-xs text-slate-600">Total Days</p>
                </div>
                <h2 className="font-semibold text-lg text-slate-700 leading-loose">
                  28
                </h2>
                <p className="text-xs text-slate-600">Working Days</p>
              </div>
            </div>
          </div>
          {/* Activity */}
          <div className="mb-6">
            <div className="mb-3 flex justify-between place-items-center">
              <h1 className="font-semibold">Your Activity</h1>
              <h1 className="font-thin text-xs text-[#3085FE]">View All</h1>
            </div>
            <SharedComp.ActivityCard
              icon={
                <ArrowRightEndOnRectangleIcon className="h-6 w-6 text-[#3085FE]" />
              }
              title="Check In"
              date={dayjs()}
              status="On Time"
            />
            <SharedComp.ActivityCard
              icon={<Battery50Icon className="h-6 w-6 text-[#3085FE]" />}
              title="Break In"
              date={dayjs()}
              status="On Time"
            />
            <SharedComp.ActivityCard
              icon={
                <ArrowLeftEndOnRectangleIcon className="h-6 w-6 text-[#3085FE]" />
              }
              title="Check Out"
              date={dayjs()}
              status="On Time"
            />
          </div>
        </div>
      </div>
      {/* Notification Modal */}
      <SharedComp.Modal
        title="Notification"
        isOpen={isNotificationModalOpen}
        onClose={CloseNotificationModal}
      >
        <SharedComp.NotificationItem
          image={
            <div className="bg-[#3085FE]/5 p-2 rounded-full">
              <UserIcon className="w-6 h-6 text-[#3085FE]" />
            </div>
          }
          title="You update our profile picture"
          excerp="You just update our profile picture."
          date="Just Now"
        />
        {/*  */}
        <SharedComp.NotificationItem
          image={
            <div className="bg-[#3085FE]/5 p-2 rounded-full">
              <LockClosedIcon className="w-6 h-6 text-[#3085FE]" />
            </div>
          }
          title="Password Changed"
          excerp="You've completed change the password."
          date="Just Now"
        />
        {/*  */}
        <SharedComp.NotificationItem
          image={
            <div className="h-10 w-10 rounded-full bg-slate-200">
              <img
                src={AVATAR}
                alt=""
                className="h-full w-full object-cover rounded-full"
              />
            </div>
          }
          title="Mark Alen Applied for Leave"
          excerp="Please accempt my leave request."
          date="Just Now"
        />
        {/*  */}
        <SharedComp.NotificationItem
          image={
            <div className="bg-[#3085FE]/5 p-2 rounded-full">
              <DevicePhoneMobileIcon className="w-6 h-6 text-[#3085FE]" />
            </div>
          }
          title="System Update"
          excerp="Please update to newest app, for getting amazing experience."
          date="Just Now"
        />
      </SharedComp.Modal>
    </>
  );
}

export default Home;
