"use client";
import { Table, TableTr, } from "@/components/index";
import { headers } from "./tableHeaders";
import { use, useContext, useEffect, useState } from "react";
import { UserInfoContext } from "@/context/UserContext";
import { accountListByUser } from "@/services/accounts";
import { Accounts } from "@/types/accountTypes";
import { useRouter } from "next/navigation";

export function AccountsTable() {
  const { user } = useContext(UserInfoContext);
  const [isLoading, setIsLoading] = useState(false);
  const [accounts, setAccounts] = useState<Accounts[]>([]);
  const router = useRouter();

  const fetchAccountsList = async () => {
    setIsLoading(true);
    try {
      const data = await accountListByUser(user!.id);
      setAccounts(data.accounts);
      setIsLoading(false);
    } catch (error: any) {
      setIsLoading(false);
      throw new Error('Error to get transaction list');
    }
  }

  useEffect(() => {
    fetchAccountsList();
  }, []);
  // const [openDeactivateSKU, setDeactivateSKU] = useState(false);
  return (
    <div className="flex flex-col gap-4 items-start w-full">
      <div className="bg-white w-full py-3 rounded-3xl pr-8">
        <Table headers={headers} isLoading={isLoading}>
          {!isLoading
            ? accounts.map((account: Accounts) => (
              <TableTr key={account.id.toString()}>
                <td className="overflowTdTable">{account.account_type}</td>
                <td className="overflowTdTable">{account.account_number}</td>
                <td className="overflowTdTable">{account.balance}</td>
                <td className="overflowTdTable">{account.status}</td>
                <td className="overflowTdTable">{account.date_opened}</td>
                <td>
                  <div className="flex items-center justify-end gap-1  my-5">
                    <button
                      className="h-[22px] w-[41px] text-[9px] bg-medium-blue text-white hover:bg-blue-700 rounded-[35px]"
                      onClick={() => {
                        router.push('/accounts/detail/' + account.id)
                      }}
                    >
                      ver
                    </button>
                  </div>
                </td>
              </TableTr>
            ))
            : null}
        </Table>
      </div>
      {/* <Popups
        openRemoveSKU={openDeactivateSKU}
        setOpenRemoveSKU={setDeactivateSKU}
      ></Popups> */}
    </div>
  );
}
