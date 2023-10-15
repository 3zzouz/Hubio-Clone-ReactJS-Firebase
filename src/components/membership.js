import React, { useState } from "react";
import { auth, db, storage } from "../config/firebase";
import {
  collection,
  doc,
  getDocs,
  query,
  updateDoc,
  where,
} from "firebase/firestore";
import { updatePassword, updateProfile } from "firebase/auth";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
console.log(auth.currentUser)
function Membership({ changeImg }) {
  const [inputValues, setInputValues] = useState({
    cin: "",
    newPassword: "",
    confirmNewPassword: "",
    file: null,
  });
  function hasSixDigits(str) {
    return /^\d{6}$/.test(str);
  }
  const updateCin = async (cin) => {
    if(!hasSixDigits(cin))
    {
      alert('Your CIN should have exactly 6 digits')
      return
    }
    try {
      const q = query(
        collection(db, "users"),
        where("user_id", "==", auth.currentUser.uid.toString())
      );
      const querySnapshot = await getDocs(q);
      let id = "";
      querySnapshot.forEach((doc) => {
        id = doc.id;
      });
      await updateDoc(doc(db, "users", id), { cin: cin });
      alert(
        `${auth.currentUser.displayName}! Your CIN is updated successfully to ${cin}`
      );
    } catch (error) {
      alert("Error in updating the user details :" + error.message);
    }
  };
  const updatePass = async (pass, confirm) => {
    if (pass != confirm) {
      alert("Please enter a matching password and confirm password");
      return;
    }
    if (pass.length < 6) {
      alert("Please enter a valid password");
      return;
    }
    try {
      await updatePassword(auth.currentUser, pass);
      alert(
        auth.currentUser.displayName + "Your Password is Updated Successfully"
      );
    } catch (error) {
      alert("Error updating Password : " + error.message);
    }
  };
  
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedFileName, setSelectedFileName] = useState("");
  const handleImageInputChange = (event) => {
    const file = event.target.files[0];
    if (file && file.type.includes("image")) {
      const imageUrl = URL.createObjectURL(file);
      setSelectedImage(imageUrl);
      setSelectedFileName(file.name);
      setInputValues((prev) => ({ ...prev, file: file }));
    } else {
      alert("Please select a valid image file.");
      setSelectedImage(null);
      setSelectedFileName("");
    }
  };
  const updateImage = async () => {
    if (!inputValues.file) return;

    const date = new Date();
    const filesFolderRef = ref(
      storage,
      `projectFiles/${auth.currentUser.uid}/${selectedFileName}${date}`
    );

    try {
      await uploadBytes(filesFolderRef, inputValues.file);

      const url = await getDownloadURL(filesFolderRef);

      await updateProfile(auth.currentUser, {
        displayName: auth.currentUser.displayName,
        photoURL: url,
      });
      alert(
        `Success! ${auth.currentUser.displayName} Your Profile Image has been updated successfully.`
      );
      setSelectedImage(auth.currentUser.photoURL);
      changeImg();
    } catch (error) {
      alert("Error updating Profile picture : "+error.message);
    }
  };
  return (
    <div className="flex flex-col space-y-7">
      <div className="flex w-full justify-between border-b-[1px] border-black border-opacity-50 py-2 pr-3">
        <div className="flex items-center space-x-2">
          <h1 className="text-[2vw] font-bold">Are You a Member ?</h1>
          <p className="w-[16.7vw] text-xs text-gray-500">
            in the case you are, enter your CIN and we will enhance your study
            experience
          </p>
          <input
            placeholder="CIN"
            type="text"
            minLength={6}
            className="h-9 w-[30vw] rounded-lg border pl-1 pr-3 text-sm outline-none hover:bg-[rgba(213,83,124,0.01)] sm:w-[25vw] sm:text-sm lg:w-[18vw]"
            onChange={(e) =>
              setInputValues((prev) => ({ ...prev, cin: e.target.value }))
            }
          />
        </div>
        <button
          onClick={() => updateCin(inputValues.cin)}
          className="mb-5 mt-5 rounded-2xl bg-[#ff254c] px-6 py-2 text-white drop-shadow-2xl hover:bg-[rgba(237,20,90,.8)] xl:mt-0"
        >
          Confirm
        </button>
      </div>
      <div className="flex w-full items-center justify-between border-b-[1px] border-black border-opacity-50 pb-5 pr-3">
        <div className="flex w-[75%] items-center space-x-20">
          <h1 className="w-1/5 text-[1.8vw] font-bold">Your Photo</h1>
          <div className="mx-auto flex min-w-[20%] max-w-[25%] border items-center overflow-hidden rounded-full">
            <img
              src={
                selectedImage
                  ? selectedImage
                  : !auth || !(auth.currentUser) || !(auth.currentUser.photoURL)
                  ? "https://hubio-dev.web.app/member.02d8a8ef.png"
                  : auth.currentUser.photoURL
              }
              alt="member"
              className="mt-0 w-full aspect-square h-full"
            />
          </div>
          <button
            className="max-w-[13%]"
            onClick={() => document.getElementById("imageInput").click()}
          >
            Choose Image
          </button>
          {selectedFileName && (
            <div className="flex w-[25%] flex-col">
              <p>Selected File:</p>
              <p className="block max-w-[90%] overflow-scroll">
                {selectedFileName}
              </p>
            </div>
          )}
          <input
            type="file"
            id="imageInput"
            accept="image/*"
            onChange={(e) => handleImageInputChange(e)}
            style={{ display: "none" }}
            className="max-w-[20%]"
          />
        </div>
        <button
          onClick={updateImage}
          className="my-5 w-[18%] text-sm rounded-2xl bg-[#ff254c] py-2 text-white drop-shadow-2xl hover:bg-[rgba(237,20,90,.8)] xl:mt-0"
        >
          Change your Photo
        </button>
      </div>
      <div className="flex w-full items-center justify-between border-b-[1px] border-black border-opacity-50 py-2 pr-3">
        <h1 className="text-[2vw] font-bold">update Password</h1>
        <div className="flex w-[60%] items-center justify-between">
          <input
            placeholder="New Password"
            type="password"
            onChange={(e) =>
              setInputValues((prev) => ({
                ...prev,
                newPassword: e.target.value,
              }))
            }
            className="h-9 w-[15vw] rounded-lg border pl-1 pr-3 text-sm outline-none hover:bg-[rgba(213,83,124,0.01)] sm:text-sm"
          />
          <input
            placeholder="Confirm Password"
            type="password"
            onChange={(e) =>
              setInputValues((prev) => ({
                ...prev,
                confirmNewPassword: e.target.value,
              }))
            }
            className="h-9 w-[15vw] rounded-lg border pl-1 pr-3 text-sm outline-none hover:bg-[rgba(213,83,124,0.01)] sm:text-sm"
          />
          <button
            onClick={(e) =>
              updatePass(
                inputValues.newPassword,
                inputValues.confirmNewPassword
              )
            }
            className="mb-5 mt-5 rounded-2xl bg-[#ff254c] px-6 py-2 text-white drop-shadow-2xl hover:bg-[rgba(237,20,90,.8)] xl:mt-0"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
}

export default Membership;
