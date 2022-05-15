import styles from './Table.module.css';
import { columns } from './columns';
import { TableRowFrontend } from '../../services';

type TableProps = {
  tableData: TableRowFrontend[];
}

export const Table = ({ tableData }: TableProps) => {
  return (
    <div className={styles.container}>
      <table className={styles.table}>
        <thead>
          <tr>
            {columns.map((column) => {
              return (
                <th
                  key={column.field}
                  style={{ width: column.width }}
                >
                  {column.headerName}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {tableData.map((row: TableRowFrontend) => {
            return (
              <tr key={row.name}>
                <td>{row.name}</td>
                <td>{row.sex}</td>
                <td>{row.weight}</td>
                <td>{row.height}</td>
                <td>{row.eyeColor}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
