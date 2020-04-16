import React from 'react';

export default function MaterialListGroup(props){
  const columnHeaders = [
    {
      field: 'icon',
      label: 'Icon',
    },
    {
      field: 'material',
      label: 'City',
    },
    {
      field: 'address.state',
      label: 'State',
    },
  ];

  const columnContents =
    [
      {
        field: 'icon',
        label: 'Gloves Image'
      },
      {
        field: 'material',
        label: 'Baseball Gloves'
      },
      {
        field: 'cuck',
        label: 'cuck'
      }
    ]
  return(
    <table className="table table-striped table-hover">
      <thead>
        <tr>
          {columnHeaders.map(({ field, label }) => (
            <th key={field}>{label}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        <tr>
          {columnContents.map(({ field, label }) => (
            <th onClick={()=>props.selectMaterial(label)} key={field}>{label}</th>
          ))}
        </tr>
      </tbody>
    </table>
  );
}
