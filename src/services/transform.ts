import {
  TableBackend, TableFrontend, TableRowBackend, TableRowFrontend,
} from './params';

export const transformTableFromBackend = (tableData: TableBackend): TableFrontend => {
  const formattedTableData: TableRowFrontend[] = tableData.results.map((row: TableRowBackend) => {
    return {
      name: row.name,
      weight: row.mass,
      height: row.height,
      sex: row.gender,
      eyeColor: row.eye_color,
    };
  });

  return {
    count: tableData.count,
    tableData: formattedTableData,
  };
};
