import { ChangeEvent, useEffect, useState } from "react";
import apiService from "../../api/axios";

interface UploadFileProps {
  onUploadSuccess: (responseMessage: string) => void;
}

const UploadFile: React.FC<UploadFileProps> = ({onUploadSuccess}) => {
  const [file, setFile] = useState<File>();
  const handleFileUpload = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };

  useEffect(() => {
    if(!file){
      return
    }
    apiService.uploadFile(file).then((res) => {
      onUploadSuccess(res.message)
    })
  })

  return (
    <>
      <input type="file" onChange={handleFileUpload} />
    </>
  );
};

export default UploadFile;
