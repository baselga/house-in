import { useCallback, useEffect, useState } from "react";

import { Edible } from "@/domain/models/Edible";
import { edibleService } from "@/domain/services/Edible.service";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/infrastructure/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/infrastructure/components/ui/table";

const EdibleList: React.FC = () => {
  const [edibles, setEdibles] = useState<Edible[]>([]);

  const getEdibles = useCallback(() => {
    edibleService
      .getEdibles()
      .then(setEdibles)
      .catch((e) => {
        console.warn(e?.message);
      });
  }, []);

  useEffect(() => {
    getEdibles();
  }, [getEdibles]);

  return (
    <div className="mx-auto pb-4">
      <Card>
        <CardHeader>
          <CardTitle>Despensa</CardTitle>
          <CardDescription>Que me quedo sin comer!!!</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Nombre</TableHead>
                <TableHead>Stock</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {edibles.map((edible) => (
                <TableRow key={edible.id}>
                  <TableCell>{edible.name}</TableCell>
                  <TableCell>{edible.stock}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default EdibleList;
