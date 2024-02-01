import { AiFillFolder } from "react-icons/ai";
import {
  BsFiletypeDoc,
  BsFileEarmark,
  BsFiletypePdf,
  BsFillFolderFill,
} from "react-icons/bs";

export const getFileIcon = (fileType, className) => {
  switch (fileType) {
    case "pdf":
      return <BsFiletypePdf className={className} />;
    case "document":
      return <BsFiletypeDoc className={className} />;
    case "folder":
      return <BsFillFolderFill className={className} />;
    default:
      return <BsFileEarmark className={className} />;
  }
};
