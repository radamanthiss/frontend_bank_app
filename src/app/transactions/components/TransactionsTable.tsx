"use client";
"use client"
import { Table, TableTr, } from "@/components/index";
import { headers } from "./tableHeaders";
import { use, useContext, useEffect, useState } from "react";
import { UserInfoContext } from "@/context/UserContext";
import { Transactions } from "@/types/transactionTypes";
import { transactionListByUser } from "@/services/transactions";

export function TransactionsTable() {
  const { user } = useContext(UserInfoContext);
  const [isLoading, setIsLoading] = useState(false);
  const [transactions, setTransactions] = useState<Transactions[]>([]);

  const fetchTransactions = async () => {
    setIsLoading(true);
    try {
      const data = await transactionListByUser(user!.id);
      setTransactions(data.transactions);
      setIsLoading(false);
    } catch (error: any) {
      setIsLoading(false);
      throw new Error('Error to get transaction list');
    }
  }
 
  useEffect(() => {
    fetchTransactions();
  }, []);
  // const [openDeactivateSKU, setDeactivateSKU] = useState(false);
  return (
    <div className="flex flex-col gap-4 items-start w-full">
      <div className="bg-white w-full py-3 rounded-3xl pr-8">
        <Table headers={headers} isLoading={isLoading}>
          {!isLoading
            ? transactions.map((transaction: Transactions) => (
              <TableTr key={transaction.id.toString()}>
                <td className="overflowTdTable">{transaction.transaction_type}</td>
                <td className="overflowTdTable">{transaction.amount}</td>
                <td className="overflowTdTable">{transaction.account_id}</td>
                <td className="overflowTdTable">{transaction.user_id}</td>

                <td className="overflowTdTable">{transaction.created_at}</td>
                {/* <td>
                    {hasPermission(
                      session!.user.scopes,
                      Permission.VER_CONTRATO
                    ) ? (
                      <div className="flex items-center justify-end gap-1  my-5">
                        <Button
                          size="xs"
                          variant="blue"
                          href={{
                            pathname: `${Routes.inventoryRoutes.inventory}/detail/${product.id}`,
                            query: { edit: false },
                          }}
                        >
                          {t("see")}
                        </Button>
                      </div>
                    ) : (
                      <div className="h-12"></div>
                    )}
                  </td> */}
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
