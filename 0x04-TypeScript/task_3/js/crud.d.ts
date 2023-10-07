import { RowID, RowElement } from './interface';

declare module './crud' {
  export function insertRow(row: RowElement): void;
  export function updateRow(id: RowID, updatedRow: RowElement): void;
  export function deleteRow(id: RowID): void;
}
