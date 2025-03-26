"use client";

import { useEffect, useState } from "react";
import { useLang } from "@/lib/lang";
import { useConfig } from "@/lib/config";
import { useData } from "@/Theme/Midone/Utils/Data";
import { ProfileBox } from "../ProfileBox";

export default function Page({ params }) {
  const { Lang } = useLang();
  const { mediaPath, assetsPath } = useConfig();
  let { getNeedles } = useData();
  const [items, setItems] = useState();
  const [imagePreview, setImagePreview] = useState(mediaPath+"/users/profile4.jpg");
  const [imageFile, setImageFile] = useState(null);

  const local = params?.lang ? params?.lang : "en";
  const laravelUrl = "/blog";
  const user = {firstname : "الهام" ,lastname:"پارسا" , email : "Parsa@gmail.com"}

  useEffect(() => {
    // Example: Fetching data (currently commented)
    // getNeedles(local + laravelUrl, setItems);
  }, []);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImageFile(file);
      setImagePreview(URL.createObjectURL(file));
    }
  };

  return (
    <>
      <ProfileBox>
        <div className="profile-edit">
          <div className="avatar-upload d-flex align-items-center">
            <div className="position-relative">
              <div className="avatar-preview thumb">
                <div
                  id="imagePreview"
                  style={{
                    backgroundImage: `url(${imagePreview})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                ></div>
              </div>
              <div className="change-btn thumb-edit d-flex align-items-center flex-wrap">
                <input
                  type="file"
                  className="form-control d-none"
                  id="imageUpload"
                  accept=".png, .jpg, .jpeg"
                  onChange={handleImageChange}
                />
                <label htmlFor="imageUpload" className="btn btn-light ms-0">
                  <i className="fa-solid fa-camera"></i>
                </label>
              </div>
            </div>
          </div>
          <div className="clearfix">
            <h2 className="title mb-0">{user.firstname} {user.lastname}</h2>
            <span className="text text-primary">{user.email}</span>
          </div>
        </div>
        <form className="row">
          <div className="col-lg-6">
            <div className="form-group m-b25">
              <label className="label-title">{Lang("public.firstname")}</label>
              <input name="firstName" required className="form-control" />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="form-group m-b25">
              <label className="label-title">{Lang("public.lastname")}</label>
              <input name="lastName" required className="form-control" />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="form-group m-b25">
              <label className="label-title">{Lang("public.email")}</label>
              <input
                type="email"
                name="email"
                required
                className="form-control"
              />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="form-group m-b25">
              <label className="label-title">{Lang("public.phone")}</label>
              <input
                type="text"
                name="phone"
                required
                className="form-control"
              />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="form-group m-b25">
              <label className="label-title">
                {Lang("public.newpassword")}
              </label>
              <input
                type="password"
                name="newPassword"
                className="form-control"
              />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="form-group m-b25">
              <label className="label-title">
                {Lang("public.confirmpassword")}
              </label>
              <input
                type="password"
                name="confirmPassword"
                className="form-control"
              />
            </div>
          </div>
        </form>
        <div className="d-flex flex-wrap justify-content-between align-items-center">
          <div className="form-group">
            <div className="custom-control custom-checkbox text-black">
              <input
                type="checkbox"
                className="form-check-input"
                id="newsletterCheckbox"
              />
              <label
                className="form-check-label"
                htmlFor="newsletterCheckbox"
              >
                {Lang("public.newsletter")}
              </label>
            </div>
          </div>
          <button className="btn btn-primary mt-3 mt-sm-0" type="button">
            {Lang("public.updateprofile")}
          </button>
        </div>
      </ProfileBox>
    </>
  );
}
