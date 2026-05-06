import Modal from "..//components/modal";
import Cards from "../components/cards";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getColorsByCode } from "../api/colors";

function Color() {
  const { code } = useParams();

  const { data } = useQuery({
    queryKey: ["colorCode", code],
    queryFn: () => getColorsByCode(Number(code)),
  });

  if (!data) {
    return null;
  }
  return (
    <>
      <h1>작업중</h1>
      <Cards colors={data} />
      <Modal />
    </>
  );
}

export default Color;
