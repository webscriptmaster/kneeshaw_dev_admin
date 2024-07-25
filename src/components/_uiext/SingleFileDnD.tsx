/* eslint-disable @typescript-eslint/no-unused-vars */

"use client";

import { forwardRef, useCallback, useEffect, useState } from "react";

import { useDropzone } from "react-dropzone";
import { LuUploadCloud } from "react-icons/lu";

interface Props {
  name?: string;
  value?: File | string | null;
  onChange?: Function;
}

function SingleFileDnD({ name, value, onChange }: Props, ref: any) {
  const [file, setFile] = useState<File | string | null>(value ?? null);

  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      if (typeof onChange === "function") {
        onChange(acceptedFiles[0]);
      }

      setFile(acceptedFiles[0]);
    },
    [file, onChange]
  );

  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      "image/*": []
    },
    maxSize: 5 * 1024 * 1024,
    maxFiles: 1,
    onDrop
  });

  useEffect(() => {
    setFile(value ?? null);
  }, [value]);

  return (
    <div
      className="flex w-full flex-col items-center gap-[12px] rounded-[4px] border-2 border-dashed border-[#DDDDDD] p-[24px]"
      {...getRootProps()}
    >
      <input {...getInputProps()} />

      {!file && <LuUploadCloud className="h-10 w-10" />}

      {!!file && (
        <div className="flex w-full justify-center">
          <img
            className="h-[80px] object-cover"
            src={
              typeof file === "object"
                ? URL.createObjectURL(file)
                : `${process.env.NEXT_PUBLIC_API_SERVER}/${file}`
            }
            alt="PlaceHolder"
          />
        </div>
      )}
    </div>
  );
}

export default forwardRef(SingleFileDnD);
