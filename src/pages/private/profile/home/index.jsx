import React, { useEffect } from "react";
import { AVATAR } from "../../../../constant";
import {
  ArrowLeftStartOnRectangleIcon,
  CameraIcon,
  Cog6ToothIcon,
  DocumentIcon,
  ShieldCheckIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import { SharedComp } from "../../../../components";
import { useDispatch } from "react-redux";
import { setShowBottomNav } from "../../../../redux/features/common/common.slice";
import { Link } from "react-router-dom";

function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setShowBottomNav({ show: true }));
  }, []);

  return (
    <div className="p-4 bg-white/50 h-screen">
      <div className="flex p-4 mb-3 flex-col justify-center place-items-center">
        <div className="relative h-32 w-32 mb-4 rounded-full bg-slate-200">
          <img
            src={AVATAR}
            alt=""
            className="h-full w-full object-cover rounded-full ring-4 ring-white"
          />
          <div className="absolute right-0 -bottom-5 -translate-y-1/2 p-1.5 rounded-lg bg-[#3085FE] ring-2 ring-white">
            <CameraIcon className="h-6 w-6 text-white" />
          </div>
        </div>
        <h1 className="font-semibold leading-relaxed">Tatang Sutarman</h1>
        <h1 className="font-light text-sm leading-relaxed">
          Backend Developer
        </h1>
      </div>
      <SharedComp.Button
        background="bg-[#3085FE]"
        color="text-white"
        label="Edit Profile"
      />
      <div className="mt-10">
        <SharedComp.ProfileMenuItem
          path="mine"
          icon={<UserIcon className="h-6 w-6 text-slate-700" />}
          title="My Profile"
        />
        <SharedComp.ProfileMenuItem
          path="setting"
          icon={<Cog6ToothIcon className="h-6 w-6 text-slate-700" />}
          title="Setting"
        />
        <SharedComp.ProfileMenuItem
          path="term-and-condition"
          icon={<DocumentIcon className="h-6 w-6 text-slate-700" />}
          title="Term & Conditions"
        />
        <SharedComp.ProfileMenuItem
          path="privacy-policy"
          icon={<ShieldCheckIcon className="h-6 w-6 text-slate-700" />}
          title="Privacy Policy"
        />
        <Link to="/" className="my-2 flex gap-3 justify-between place-items-center">
          <div className="flex gap-4 place-items-center">
            <div className="h-10 w-10 rounded-full flex justify-center place-items-center bg-[#FF7F74]/5">
              <ArrowLeftStartOnRectangleIcon className="h-6 w-6 text-[#FF7F74]" />
            </div>
            <div className="grow">
              <h1 className="font-semibold leading-tight text-[#FF7F74]">
                Logout
              </h1>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Home;
