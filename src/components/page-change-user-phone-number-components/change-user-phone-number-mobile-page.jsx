import { useEffect, useState } from "react";
import ButtonComponent from "../ui-components/button-component";
import ConsequenceInfoMobile from "./consequence-info-mobile";
import ChangeUserPhoneNuberSection from "./change-user-phone-number-section";
import { useNavigate, useSearchParams } from "react-router-dom";

const ChangeUserPhoneNumberMobilePage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [section, setSection] = useState(searchParams.get("st") || "consequence-info");
  const navigate = useNavigate();

  const handleNextSection = () => {
    if (section === "consequence-info") {
      setSearchParams({ st: "vericification-code" });
      setSection("vericification-code");
    } else {
      setSearchParams({ st: "consequence-info" });
      setSection("consequence-info");
    }
  };

  useEffect(() => {
    if (searchParams.get("st") !== section) {
      setSection(searchParams.get("st"));
    }
  }, [searchParams, section]);

  // validation params
  useEffect(() => {
    if (!section || !["consequence-info", "vericification-code"].includes(section)) {
      navigate("/user", { replace: true });
    }
  }, [section, navigate, searchParams]);

  return (
    <section className="w-full ">
      {section === "consequence-info" && <ConsequenceInfoMobile />}
      {section === "vericification-code" && <ChangeUserPhoneNuberSection />}
      {section === "consequence-info" && (
        <ButtonComponent
          onClick={handleNextSection}
          className={
            " mt-auto fixed bottom-3 max-w-[500px] mx-auto capitalize font-bold font-space-grotesk right-3 left-3 "
          }
          type="primary"
        >
          lanjut
        </ButtonComponent>
      )}
    </section>
  );
};

export default ChangeUserPhoneNumberMobilePage;
