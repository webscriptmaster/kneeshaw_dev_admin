/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/no-array-index-key */

"use client";

import { forwardRef, useCallback, useEffect, useState } from "react";

import { useDropzone } from "react-dropzone";
import { LuUploadCloud } from "react-icons/lu";

import { MAX_FILES, MAX_SIZE } from "@/utils/constants";

interface Props {
  name?: string;
  value?: File[];
  onChange?: Function;
  maxFiles?: number;
  maxSize?: number;
}

function FileDnD(
  { name, value, onChange, maxFiles = MAX_FILES, maxSize = MAX_SIZE }: Props,
  ref: any
) {
  const [files, setFiles] = useState<File[]>(value ?? []);

  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      if (typeof onChange === "function") {
        onChange([...files, ...acceptedFiles].slice(-maxFiles));
      }

      setFiles((prev: File[]) => [...prev, ...acceptedFiles].slice(-maxFiles));
    },
    [files, onChange]
  );

  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      "image/*": []
    },
    maxSize,
    maxFiles,
    onDrop
  });

  useEffect(() => {
    setFiles(value ?? []);
  }, [value]);

  return (
    <div
      className="flex w-full flex-col items-center gap-[12px] rounded-[4px] border-2 border-dashed border-[#DDDDDD] p-[24px]"
      {...getRootProps()}
    >
      <input {...getInputProps()} />

      {!files.length && <LuUploadCloud className="h-10 w-10" />}

      {!!files.length && (
        <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
          {files.map((file, index) => (
            <img
              className="h-[80px] w-full rounded-md object-cover"
              key={index}
              src={
                typeof file === "object"
                  ? URL.createObjectURL(file)
                  : `${process.env.NEXT_PUBLIC_API_SERVER}/${file}`
              }
              alt="PlaceHolder"
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default forwardRef(FileDnD);
