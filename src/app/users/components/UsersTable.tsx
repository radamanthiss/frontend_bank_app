"use client";
"use client"
import { Table, TableTr, } from "@/components/index";
import { headers } from "./tableHeaders";
import { use, useContext, useEffect, useState } from "react";
import { UserInfoContext } from "@/context/UserContext";
import { User } from "@/types/userTypes";
import { UsersList } from "@/services/users";

export function UsersTable() {
  // const { user } = useContext(UserInfoContext);
  const [isLoading, setIsLoading] = useState(false);
  const [usersList, setUsersList] = useState<User[]>([]);

  const fetchUsers = async () => {
    setIsLoading(true);
    try {
      const data = await UsersList();
      console.log(data);
      setUsersList(data.users);
      setIsLoading(false);
    } catch (error: any) {
      setIsLoading(false);
      throw new Error('Error to get users list');
    }
  }
 
  useEffect(() => {
    fetchUsers();
  }, []);
  // const [openDeactivateSKU, setDeactivateSKU] = useState(false);
  return (
    <div className="flex flex-col gap-4 items-start w-full">
      <div className="bg-white w-full py-3 rounded-3xl pr-8">
        <Table headers={headers} isLoading={isLoading}>
          {!isLoading
            ? usersList.map((user: User) => (
              <TableTr key={user.id.toString()}>
                <td className="overflowTdTable">{user.name}</td>
                <td className="overflowTdTable">{user.email}</td>
                <td className="overflowTdTable">{user.mobile_number}</td>
                <td className="overflowTdTable">{user.country}</td>
                <td className="overflowTdTable">{user.created_at}</td>
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
