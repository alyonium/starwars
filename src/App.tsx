import React, { useEffect, useState } from 'react';
import { Table } from './components/Table/Table';
import { Pagination } from './components/Pagination/Pagination';
import { service, TableRowFrontend } from './services';
import styles from './App.module.css';

export const App = () => {
  const [isLoading, setIsLoading] = useState(false);

  const [tableData, setTableData] = useState<TableRowFrontend[]>([]);

  const [pagination, setPagination] = useState({
    currentPage: 1,
    count: 0,
    pagesCount: 0,
  });

  const [name, setName] = useState('');

  const fetchTable = async (searchPage = 1) => {
    setIsLoading(true);

    const fetchedTableData = await service.getTable(
      {
        search: name,
        page: `${searchPage}`,
      },
    );

    setTableData(fetchedTableData.tableData);

    setPagination({
      currentPage: searchPage,
      count: fetchedTableData.count,
      pagesCount: Math.ceil(fetchedTableData.count / 10),
    });

    setIsLoading(false);
  };

  useEffect(() => {
    fetchTable();
  }, []);

  const updatePagination = (newPage: string) => {
    setPagination({
      ...pagination,
      currentPage: +newPage,
    });
    fetchTable(+newPage);
  };

  const updateName = (e: any) => {
    setName(e.target.value);
  };

  const filter = () => {
    fetchTable();
  };
  return (
    <div className="App">
      <div className="logo" />
      <div className="main">
        {
          isLoading
            ? (
              <span>Loading</span>
            )
            : (
              <div>
                <div className={styles.filter}>
                  <label htmlFor="nameInput">Name filter: </label>
                  <input id="nameInput" type="text" value={name} onChange={updateName} />
                  <button type="button" onClick={filter}>search</button>
                </div>
                {
                  tableData.length ? (
                    <>
                      <Table tableData={tableData} />
                      <Pagination
                        count={pagination.count}
                        currentPage={pagination.currentPage}
                        pagesCount={pagination.pagesCount}
                        setPagination={updatePagination}
                      />
                    </>
                  ) : (<span>No data</span>)
                }
              </div>
            )
        }
      </div>
    </div>
  );
};
