import clsx from "clsx";
import ArrowIcon from "../icons/arrow-icon";
import UiSpinner from "./ui-spinner";

interface UiTableProps {
  heads: string[];
  data: any[];
  page: number;
  setPage: (page: number) => void;
  limit: number;
  total: number;
  isLoading: boolean;
}

const UiTable = ({
  heads,
  data,
  page,
  setPage,
  limit,
  total,
  isLoading,
}: UiTableProps) => {
  const isLastPage =
    data.length < limit || (page - 1) * limit + data.length >= total;

  const handlePrevPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  const handleNextPage = () => {
    if (!isLastPage) {
      setPage(page + 1);
    }
  };

  const firstIndex = (page - 1) * limit + 1;
  const lastIndex = Math.min(page * limit, total);

  return (
    <div>
      <div className="bg-white rounded-md p-6">
        {isLoading ? (
          <div className="flex items-center justify-center py-10 text-lightGray text-[40px]">
            <UiSpinner />
          </div>
        ) : (
          <table className="w-full table-fixed">
            <thead className="border-b border-gray">
              <tr>
                {heads.map((head) => (
                  <th className="text-left uppercase pb-6 pt-4" key={head}>
                    {head}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {data.map((obj, index) => (
                <tr
                  className={clsx(
                    index + 1 !== data.length && "border-b border-gray"
                  )}
                >
                  {Object.values(obj).map((row: any) => (
                    <td className="py-5" key={row}>
                      {row}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
      <div className="flex items-center justify-between mt-4">
        <div className="font-semibold opacity-80">
          Показано {firstIndex}-{lastIndex} з {total}
        </div>
        <div>
          <button
            disabled={page === 1}
            onClick={handlePrevPage}
            className="border border-[#a5a5a580] px-4 bg-white rounded-l-lg disabled:text-[#aaa]"
          >
            <span className="rotate-90 block text-3xl">
              <ArrowIcon />
            </span>
          </button>
          <button
            disabled={isLastPage}
            onClick={handleNextPage}
            className="border border-[#a5a5a580] px-4 bg-white rounded-r-lg disabled:text-[#aaa]"
          >
            <span className="-rotate-90 block text-3xl">
              <ArrowIcon />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default UiTable;
