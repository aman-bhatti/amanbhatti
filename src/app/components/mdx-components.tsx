import Image from "next/image";
import * as runtime from "react/jsx-runtime";
import { Callout } from "./callout";
import StarIcon from "@mui/icons-material/Star";
import StarHalf from "@mui/icons-material/StarHalf";

const useMDXComponent = (code: string) => {
  const fn = new Function(code);
  return fn({ ...runtime }).default;
};

const components = {
  Image,
  Callout,
  StarIcon,
  StarHalf,
};

interface MdxProps {
  code: string;
}

export function MDXContent({ code }: MdxProps) {
  const Component = useMDXComponent(code);
  return <Component components={components} />;
}
