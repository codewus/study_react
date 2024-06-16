// src/features/grid/components/AdvancedGrid.tsx
import React, { useState, useCallback } from 'react';
import { AgGridReact } from 'ag-grid-react';
import { ColDef, RowSelectedEvent, CellValueChangedEvent } from 'ag-grid-community';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';

interface RowData {
  make: string;
  model: string;
  price: number;
}

const AdvancedGrid: React.FC = () => {
  const [rowData] = useState<RowData[]>([
    { make: 'Toyota', model: 'Celica', price: 35000 },
    { make: 'Ford', model: 'Mondeo', price: 32000 },
    { make: 'Porsche', model: 'Boxster', price: 72000 },
    { make: 'BMW', model: 'M3', price: 60000 },
    { make: 'Audi', model: 'A4', price: 40000 }
  ]);

  const [columnDefs] = useState<ColDef[]>([
    { headerName: 'Make', field: 'make', sortable: true, filter: true },
    { headerName: 'Model', field: 'model', sortable: true, filter: true },
    { headerName: 'Price', field: 'price', sortable: true, filter: true, editable: true }
  ]);

  const defaultColDef = {
    sortable: true,
    filter: true,
    flex: 1
  };

  const onCellValueChanged = useCallback((event: CellValueChangedEvent) => {
    console.log('Data after change is', event.data);
  }, []);

  const onRowSelected = useCallback((event: RowSelectedEvent) => {
    if (event.node.isSelected()) {
      console.log('Selected row data:', event.data);
    }
  }, []);

  return (
    <div className="ag-theme-alpine" style={{ height: 400, width: 600 }}>
      <AgGridReact
        rowData={rowData}
        columnDefs={columnDefs}
        defaultColDef={defaultColDef}
        pagination={true}
        paginationPageSize={20}
        onCellValueChanged={onCellValueChanged}
        rowSelection="single"
        onRowSelected={onRowSelected}
      />
    </div>
  );
};

export default AdvancedGrid;
