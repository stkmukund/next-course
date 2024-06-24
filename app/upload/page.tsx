"use client"
import React, { useState } from 'react'
import { CldUploadWidget, CldImage } from 'next-cloudinary';


interface UploadWidget {
  public_id: String;
}

function UploadPage() {
  const [result, setResult] = useState("")

  return (
    <>{ result &&
      <CldImage
        width="270"
        height="200"
        src={result}
        alt="Uploaded image"
      />}
      <CldUploadWidget uploadPreset="vvsylyle" onUpload={(result, options) => {
        if (result.event !== "success") return;
        const resultImage = result.info as UploadWidget
        setResult(resultImage.public_id);
      }} >
        {({ open }) => {
          return (
            <button className="button" onClick={() => open()}>
              Upload Image
            </button>
          );
        }}
      </CldUploadWidget></>
  )
}

export default UploadPage