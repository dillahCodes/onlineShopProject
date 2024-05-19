import { DatePicker } from "antd";
import { useState } from "react";
import ButtonComponent from "../ui-components/button-component";
import calculateAge from "../../utils/calculate-age";
import { useAuth } from "../../context/user-auth-context";
import authServices from "../../features/auth/services/auth-services";
import { mutate } from "swr";

const ChangeUserBirthMobilePage = () => {
  const { user } = useAuth();
  const [dateValue, setDateValue] = useState({
    date: null,
    month: null,
    year: null,
  });

  const ageString = `${dateValue?.date}-${dateValue?.month}-${dateValue?.year}`;
  const todayAge = calculateAge(ageString);

  const onChange = (_, dateString) => {
    const [date, month, year] = dateString.split("-");
    setDateValue({
      date,
      month,
      year,
    });
  };

  const handleChangeUserBirth = async () => {
    if (Object.values(dateValue).every((value) => value === null) || !user) return;

    const payload = {
      dateOfBirth: { date: dateValue.date, month: dateValue.month, year: dateValue.year },
    };

    try {
      await authServices.updateUserData(user?.user_id, payload);
      mutate(`/api/user/${user.user_id}`);
    } catch (error) {
      console.error("Error changing user birth:", error);
    }
  };

  console.log(dateValue);
  return (
    <section className="w-full p-3">
      <div className="w-full  flex flex-col gap-y-3">
        <label htmlFor="date" className="flex flex-col">
          <span className="text-sm capitalize font-space-grotesk mb-1">pilih tanggal :</span>
          <DatePicker onChange={onChange} id="date" size="large" format="DD-MM-YYYY" needConfirm />
        </label>
        {Object.values(dateValue).every((value) => value !== null) && (
          <span>
            <p className="capitalize text-sm font-space-grotesk">umur anda saat ini adalah:</p>
            <span className="text-sm font-space-grotesk font-semibold">
              {todayAge.years} Tahun, {todayAge.months} Bulan, {todayAge.days} Hari
            </span>
          </span>
        )}
        <ButtonComponent
          onClick={handleChangeUserBirth}
          type="primary"
          className={"capitalize font-bold py-5 w-full mt-2 flex items-center justify-center"}
        >
          simpan
        </ButtonComponent>
      </div>
    </section>
  );
};

export default ChangeUserBirthMobilePage;
