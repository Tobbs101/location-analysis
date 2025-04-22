/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import PageLayout from "@/components/layout/PageLayout";
import { Upload } from "lucide-react";
import { useRouter } from "next/navigation";
import Loader from "@/components/custom/loader";

const UploadNewDeal = () => {
  const [fileName, setFileName] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const onDrop = useCallback((acceptedFiles: File[]) => {
    const file = acceptedFiles[0];
    if (!file || file.type !== "application/pdf") {
      console.error("Please upload a valid PDF file.");
      return;
    }

    setFileName(file.name);
    simulateUpload();
  }, []);

  const simulateUpload = async () => {
    setIsLoading(true);

    // Simulate a delay for "upload"
    setTimeout(() => {
      setIsLoading(false);
      router.push("/deal-overview");
    }, 1500);
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: { "application/pdf": [] },
    multiple: false,
  });

  return (
    <PageLayout title="Upload New Deal">
      <div className="w-full h-[calc(100vh-400px)] flex items-center justify-center flex-col">
        <div
          {...getRootProps()}
          className={`${
            isDragActive ? "border-2 border-dotted border-gray-100" : ""
          } py-10 px-[100px] cursor-pointer h-[350px] flex items-center justify-center flex-col`}
        >
          <input {...getInputProps()} />
          <Upload strokeWidth={0.5} className="w-[150px] h-[150px]" />
          <p className="text-[#71717A] leading-[30px] font-medium text-center">
            {isDragActive ? (
              "Drop the PDF file here..."
            ) : (
              <>
                Drag & Drop <br /> or
                <span className="font-semibold text-black"> Browse</span>
              </>
            )}
          </p>
          {!isDragActive && fileName && (
            <p className="mt-2 text-sm text-gray-600">
              Selected File: {fileName}
            </p>
          )}
        </div>

        {isLoading && <Loader />}
      </div>
    </PageLayout>
  );
};

export default UploadNewDeal;
