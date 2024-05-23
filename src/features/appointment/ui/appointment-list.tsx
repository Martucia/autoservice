import UiTable from "../../../shared/ui/ui-table";
import useAppointmentList from "../model/use-appointment-list.tsx";

const AppointmentList = () => {
  const { appointments, total, limit, page, isLoading, setPage } =
    useAppointmentList();

  return (
    <div>
      <UiTable
        heads={["Дата", "Клієнт", "Номер телефону", "Пошта", "Проблема"]}
        data={appointments}
        page={page}
        setPage={setPage}
        limit={limit}
        total={total}
        isLoading={isLoading}
      />
    </div>
  );
};

export default AppointmentList;
