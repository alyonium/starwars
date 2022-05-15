type TableHeader = {
    field: string;
    headerName: string;
    width: string;
}

export const columns: TableHeader[] = [
  { field: 'name', headerName: 'Name', width: '50%' },
  { field: 'sex', headerName: 'Sex', width: '10%' },
  { field: 'weight', headerName: 'Weight', width: '10%' },
  { field: 'height', headerName: 'Height', width: '10%' },
  { field: 'eyesColor', headerName: 'Eyes color', width: '20%' },
];
