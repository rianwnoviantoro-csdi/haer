import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setShowBottomNav } from "../../../../redux/features/common/common.slice";
import { ChevronLeftIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import dayjs from "dayjs";

function PrivacyPolicy() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setShowBottomNav({ show: false }));
  }, []);

  return (
    <div className="bg-white min-h-screen h-full">
      <div className="max-w-xl w-full mx-auto p-4 flex gap-3 justify-center place-items-center fixed top-0 bg-white z-50 shadow-sm">
        <Link to="/dashboard/profile" className="flex-none w-12 cursor-pointer">
          <ChevronLeftIcon className="h-6 w-6 " />
        </Link>
        <div className="grow text-center">
          <h1 className="font-semibold ">Privacy Policy</h1>
        </div>
        <div className="flex-none w-12"></div>
      </div>
      <div className="px-4 pb-4 pt-14">
        <div className="mt-2 mb-6">
          <p className="mb-2 text-xs text-[#ACAFB5]">
            Last update: {dayjs().format("DD/MM/YYYY")}
          </p>
          <p className="mb-6 text-sm  leading-tight  text-justify">
            Please read these privacy policy, carefully before using our app
            operated by us.
          </p>
          <p className="mb-2 font-semibold text-[#3085FE] leading-none">
            Privacy Policy
          </p>
          <div className="">
            <p className="indent-6 text-sm  leading-tight text-justify">
              Welcome! Our Privacy Policy is designed to inform you about how we
              collect, use, and safeguard your personal information when you
              engage with our website/application. By utilizing our services,
              you are consenting to the practices outlined in this policy.
            </p>
            <p className="indent-6 text-sm  leading-tight text-justify">
              In the course of your interaction with our platform, we may gather
              personal details such as your name, email address, and other
              relevant information. This data is utilized to enhance and
              personalize your experience, facilitate communication, and improve
              our services. Additionally, it may be employed for analytics and
              research purposes.
            </p>
            <p className="indent-6 text-sm  leading-tight text-justify">
              Rest assured, we do not sell, trade, or transfer your personal
              information to third parties. Trusted service providers assisting
              in the operation of our website/application may, however, have
              access to this information. We implement security measures to
              protect your data, but it's important to note that no method of
              transmission over the internet is entirely secure.
            </p>
            <p className="indent-6 text-sm  leading-tight text-justify">
              Our website/application may incorporate links to third-party
              websites; please review the privacy policies of these sites as we
              are not responsible for their practices or content. Our services
              are not intended for individuals under the age of 13, and we do
              not knowingly collect personal information from children.
            </p>
            <p className="indent-6 text-sm  leading-tight text-justify">
              To enhance your browsing experience, we utilize cookies. You have
              the option to set your browser to reject cookies, though this may
              impact certain functionalities. We may update our Privacy Policy
              periodically, and any changes will be posted on this page.
            </p>
            <p className="indent-6 text-sm  leading-tight text-justify">
              If you have any questions or concerns regarding this Privacy
              Policy, we encourage you to reach out to us at
              contact@email.com. Thank you for choosing our company. We are
              committed to safeguarding your privacy and ensuring a secure and
              transparent user experience.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PrivacyPolicy;
