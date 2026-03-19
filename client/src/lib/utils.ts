export const dataGridClassNames =
  "border border-gray-200 bg-white shadow dark:border-stroke-dark dark:bg-dark-secondary dark:text-gray-200";

export const dataGridSxStyles = (isDarkMode: boolean) => {
  return {
    "&": {
      backgroundColor: `${isDarkMode ? "#101214" : "white"}`,
      border: "none",
    },
    "& .MuiDataGrid-columnHeaders": {
      color: `${isDarkMode ? "#e5e7eb" : ""}`,
      '& [role="row"] > *': {
        backgroundColor: `${isDarkMode ? "#1d1f21" : "white"}`,
        borderColor: `${isDarkMode ? "#2d3135" : ""}`,
      },
    },
    "& .MuiIconButton-root": {
      color: `${isDarkMode ? "#a3a3a3" : ""}`,
    },
    "& .MuiTablePagination-root": {
      color: `${isDarkMode ? "#a3a3a3" : ""}`,
    },
    "& .MuiTablePagination-selectIcon": {
      color: `${isDarkMode ? "#a3a3a3" : ""}`,
    },
    "& .MuiDataGrid-cell": {
      border: "none",
      backgroundColor: `${isDarkMode ? "#101214" : "white"}`, 
      color: `${isDarkMode ? "#ffffff" : ""}`,
    },
    "& .MuiDataGrid-row": {
      borderBottom: `1px solid ${isDarkMode ? "#2d3135" : "#e5e7eb"}`, 
      backgroundColor: `${isDarkMode ? "#101214" : "white"}`,
    },
    "& .MuiDataGrid-withBorderColor": {
      borderColor: `${isDarkMode ? "#2d3135" : "#e5e7eb"}`,
    },
    "& .MuiDataGrid-footerContainer": {
      backgroundColor: `${isDarkMode ? "#101214" : "white"}`,
      color: `${isDarkMode ? "#e5e7eb" : ""}`,
      borderTop: `1px solid ${isDarkMode ? "#2d3135" : "#e5e7eb"}`,
    },
  };
};