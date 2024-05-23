import { useState } from "react";
import { formatDate } from "../../../utils/functions";
import { NavLink } from "react-router-dom";
import PhoneIcon from "../../../shared/icons/phone-icon";
import { useAppointmentListQuery } from "../../../entities/appointment";

export default function useAppointmentList() {
  const [page, setPage] = useState<number>(1);

  const { data, isFetching } = useAppointmentListQuery(page);

  const appointments = data?.data
    ? data.data.map((appointment) => ({
        createdAt: formatDate(appointment.createdAt),
        name: appointment.user.name,
        phone: (
          <NavLink
            to={`tel:${appointment.user.phone}`}
            className="text-blue-600 hover:text-blue-800 transition-all underline flex items-center gap-1 font-bold"
          >
            <PhoneIcon />
            <span>{appointment.user.phone}</span>
          </NavLink>
        ),
        email: appointment.user.email,
        issue: appointment.issue,
      }))
    : [];

  return {
    appointments,
    total: data?.total || 0,
    limit: data?.limit || 1,
    page: data?.page || 1,
    isLoading: isFetching,
    setPage,
  };
}
